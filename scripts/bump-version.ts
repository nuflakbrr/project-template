import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { confirm, select, text } from "@clack/prompts";
import { $ } from "bun";

const CLI_PACKAGE_JSON_PATH = join(process.cwd(), "apps/cli/package.json");
const ALIAS_PACKAGE_JSON_PATH = join(process.cwd(), "packages/create-bpa/package.json");
const TYPES_PACKAGE_JSON_PATH = join(process.cwd(), "packages/types/package.json");
const TEMPLATE_GENERATOR_PACKAGE_JSON_PATH = join(
  process.cwd(),
  "packages/template-generator/package.json",
);

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const isDryRun = args.includes("--dry-run");
  let versionInput = args.find((arg) => !arg.startsWith("--"));

  // Read current CLI version (starts at 2.x.x)
  const packageJson = JSON.parse(await readFile(CLI_PACKAGE_JSON_PATH, "utf-8"));
  const currentCliVersion = packageJson.version;

  // Read current sub-packages version (starts at 1.x.x)
  const typesPackageJson = JSON.parse(await readFile(TYPES_PACKAGE_JSON_PATH, "utf-8"));
  const currentSubVersion = typesPackageJson.version;

  console.log(`Current versions:`);
  console.log(`  create-bikinproject-app (CLI): ${currentCliVersion}`);
  console.log(`  @bikinproject/types, template-generator, create-bpa: ${currentSubVersion}`);

  if (!versionInput) {
    const bumpType = await select({
      message: "What type of release do you want to create?",
      options: [
        {
          value: "patch",
          label: `Patch (bug fixes) - CLI: ${currentCliVersion} → patch | Others: ${currentSubVersion} → patch`,
        },
        {
          value: "minor",
          label: `Minor (new features) - CLI: ${currentCliVersion} → minor | Others: ${currentSubVersion} → minor`,
        },
        {
          value: "major",
          label: `Major (breaking changes) - CLI: ${currentCliVersion} → major | Others: ${currentSubVersion} → major`,
        },
        { value: "custom", label: "Custom version" },
      ],
    });

    if (bumpType === "custom") {
      const customVersion = await text({
        message: "Enter the version for all packages (e.g., 2.1.0 for CLI, 1.1.0 for others):",
        placeholder: "Enter a bump type or custom version...",
      });
      versionInput = typeof customVersion === "string" ? customVersion : undefined;
    } else if (typeof bumpType === "string") {
      versionInput = bumpType;
    }

    if (!versionInput) {
      console.log("❌ No version selected");
      process.exit(1);
    }
  }

  let newCliVersion = "";
  let newSubVersion = "";

  if (["major", "minor", "patch"].includes(versionInput)) {
    const bumpVersion = (current: string, type: string): string => {
      const [major = 0, minor = 0, patch = 0] = current.split(".").map(Number);
      switch (type) {
        case "major":
          return `${major + 1}.0.0`;
        case "minor":
          return `${major}.${minor + 1}.0`;
        case "patch":
          return `${major}.${minor}.${patch + 1}`;
        default:
          return current;
      }
    };

    newCliVersion = bumpVersion(currentCliVersion, versionInput);
    newSubVersion = bumpVersion(currentSubVersion, versionInput);

    console.log(`\nBumping ${versionInput}:`);
    console.log(`  create-bikinproject-app: ${currentCliVersion} → ${newCliVersion}`);
    console.log(`  Others: ${currentSubVersion} → ${newSubVersion}`);
  } else {
    if (!/^\d+\.\d+\.\d+$/.test(versionInput)) {
      console.error("Version must be x.y.z format");
      process.exit(1);
    }
    // For custom: CLI gets the specified version, sub-packages bump the same increment
    newCliVersion = versionInput;
    newSubVersion = versionInput;
    console.log(`\nUsing custom version: CLI → ${newCliVersion} | Others → ${newSubVersion}`);
  }

  if (isDryRun) {
    console.log(
      `\n✅ Would release CLI v${newCliVersion} and sub-packages v${newSubVersion} (dry run)`,
    );
    return;
  }

  // Check for uncommitted changes
  const statusResult = await $`git status --porcelain`.text();
  if (statusResult.trim()) {
    console.error("❌ You have uncommitted changes. Please commit or stash them first.");
    process.exit(1);
  }

  // Get current branch to use as base
  const currentBranch = (await $`git branch --show-current`.text()).trim();
  console.log(`\n📦 Current branch: ${currentBranch}`);

  // Create release branch
  const branchName = `release/v${newCliVersion}`;
  console.log(`📦 Creating release branch: ${branchName}`);

  // Make sure we're up to date on current branch
  await $`git pull origin ${currentBranch}`;

  // Create and checkout the release branch
  await $`git checkout -b ${branchName}`;

  // Update CLI package version
  packageJson.version = newCliVersion;
  await writeFile(CLI_PACKAGE_JSON_PATH, `${JSON.stringify(packageJson, null, 2)}\n`);

  // Update alias (create-bpa) package version
  const aliasPackageJson = JSON.parse(await readFile(ALIAS_PACKAGE_JSON_PATH, "utf-8"));
  aliasPackageJson.version = newSubVersion;
  aliasPackageJson.dependencies["create-bikinproject-app"] = `^${newCliVersion}`;
  await writeFile(ALIAS_PACKAGE_JSON_PATH, `${JSON.stringify(aliasPackageJson, null, 2)}\n`);

  // Update types package version
  typesPackageJson.version = newSubVersion;
  await writeFile(TYPES_PACKAGE_JSON_PATH, `${JSON.stringify(typesPackageJson, null, 2)}\n`);

  // Update template-generator package version and types dependency
  const templateGeneratorPackageJson = JSON.parse(
    await readFile(TEMPLATE_GENERATOR_PACKAGE_JSON_PATH, "utf-8"),
  );
  templateGeneratorPackageJson.version = newSubVersion;
  templateGeneratorPackageJson.dependencies["@bikinproject/types"] = `^${newSubVersion}`;
  await writeFile(
    TEMPLATE_GENERATOR_PACKAGE_JSON_PATH,
    `${JSON.stringify(templateGeneratorPackageJson, null, 2)}\n`,
  );

  await $`bun install`;
  await $`bun run build:cli`;
  await $`git add apps/cli/package.json packages/create-bpa/package.json packages/types/package.json packages/template-generator/package.json`;
  await $`git commit -m "chore(release): v${newCliVersion}"`;

  // Push the release branch
  console.log(`\n🚀 Pushing release branch...`);
  await $`git push -u origin ${branchName}`;

  // Create PR using GitHub CLI if available
  const hasGh = (await $`which gh`.nothrow()).exitCode === 0;

  if (hasGh) {
    console.log(`\n📝 Creating pull request...`);
    const prTitle = `chore(release): v${newCliVersion}`;
    const prBody = `## Release v${newCliVersion}

This PR bumps the package versions.

### Changes
- Updated \`create-bikinproject-app\` to v${newCliVersion}
- Updated \`create-bpa\` to v${newSubVersion}
- Updated \`@bikinproject/types\` to v${newSubVersion}
- Updated \`@bikinproject/template-generator\` to v${newSubVersion}

---
*This PR was automatically created by \`bun run bump\`*`;

    await $`gh pr create --title ${prTitle} --body ${prBody} --base ${currentBranch} --head ${branchName}`;

    // Ask if user wants to enable auto-merge
    const shouldAutoMerge = await confirm({
      message: "Enable auto-merge? (PR will merge automatically when tests pass)",
      initialValue: true,
    });

    if (shouldAutoMerge) {
      console.log(`\n🔄 Enabling auto-merge...`);
      await $`gh pr merge ${branchName} --auto --squash --delete-branch`;
      console.log(`✅ Auto-merge enabled. PR will merge automatically when tests pass.`);
    }

    console.log(`\n✅ Release PR created for v${newCliVersion}`);
  } else {
    console.log(`\n⚠️  GitHub CLI (gh) not found. Please create the pull request manually.`);
    const repoUrl = (await $`git config --get remote.origin.url`.text())
      .trim()
      .replace(/\.git$/, "");
    console.log(`🔗 Create PR: ${repoUrl}/pull/new/${branchName}`);
  }

  console.log(`\n📋 Next steps:`);
  console.log(`   1. Wait for the "Test Suite" check to pass`);
  console.log(`   2. Merge the PR`);
  console.log(`   3. The release workflow will automatically publish to NPM`);

  // Switch back to original branch
  await $`git checkout ${currentBranch}`;
}

main().catch(console.error);
