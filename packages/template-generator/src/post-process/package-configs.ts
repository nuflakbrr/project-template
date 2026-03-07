/**
 * Package.json configuration post-processor
 * Updates package names, scripts, and exports after template generation
 * Optimized for single-package structures.
 */

import type { ProjectConfig } from "@bikinproject/types";

import type { VirtualFileSystem } from "../core/virtual-fs";
import { getDbScriptSupport } from "../utils/db-scripts";

type PackageJson = {
  name?: string;
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  exports?: Record<string, string | Record<string, string>>;
  packageManager?: string;
  [key: string]: unknown;
};

type PackageManagerConfig = {
  dev: string;
  build: string;
  checkTypes: string;
  filter: (workspace: string, script: string) => string;
};

/**
 * Update the root package.json file with proper names, scripts, and exports
 */
export function processPackageConfigs(vfs: VirtualFileSystem, config: ProjectConfig): void {
  updateRootPackageJson(vfs, config);
  renameDevScriptsForAlchemy(vfs, config);
}

function updateRootPackageJson(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const pkgJson = vfs.readJson<PackageJson>("package.json");
  if (!pkgJson) return;

  pkgJson.name = config.projectName;
  pkgJson.scripts = pkgJson.scripts || {};

  // Remove workspaces as we are now a single package
  delete pkgJson.workspaces;

  const scripts = pkgJson.scripts;
  const { packageManager, backend, database, orm, dbSetup, frontend } = config;

  const dbSupport = getDbScriptSupport(config);
  const needsDbScripts = dbSupport.hasDbScripts;
  const isD1Alchemy = dbSupport.isD1Alchemy;

  const pmConfig = getPackageManagerConfig(packageManager);

  // If next.js frontend is selected, we want specialized scripts
  const isNext = frontend.includes("next");
  const isTanstackStart = frontend.includes("tanstack-start");
  const isTanstackRouter = frontend.includes("tanstack-router");
  const isAstro = frontend.includes("astro");

  if (isNext) {
    scripts.dev = "next dev --turbopack";
    scripts.build = "next build --turbopack";
    scripts.start = "next start --turbopack";
    scripts.lint = "eslint .";
    scripts["lint:fix"] = "eslint . --fix";
  } else if (isTanstackStart || isTanstackRouter) {
    scripts.dev = `${pmConfig.filter("", "generate:seo")} && vite dev`;
    scripts.build = `${pmConfig.filter("", "generate:seo")} && tsc && vite build`;
    scripts["generate:seo"] = "tsx scripts/generate-seo.ts";
    scripts.lint = "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0";
    scripts.preview = "vite preview";
    delete scripts.serve;
  } else if (isAstro) {
    scripts.dev = `${pmConfig.filter("", "generate:seo")} ${pmConfig.filter("", "format")} && astro dev`;
    scripts.build = `${pmConfig.filter("", "generate:seo")} ${pmConfig.filter("", "format")} && astro build`;
    scripts.preview = `${pmConfig.filter("", "generate:seo")} ${pmConfig.filter("", "format")} && astro preview`;
    scripts.astro = `${pmConfig.filter("", "generate:seo")} ${pmConfig.filter("", "format")} && astro`;
    scripts.format = "prettier --write .";
    scripts["format:check"] = "prettier --check .";
    scripts["generate:seo"] = "tsx scripts/generate-seo.ts";
  } else {
    scripts.dev = pmConfig.dev;
    scripts.build = pmConfig.build;
  }

  if (!isTanstackStart && !isTanstackRouter && !isAstro) {
    scripts["check-types"] = pmConfig.checkTypes;
  }

  // Add author if it's a standalone project
  pkgJson.author = {
    email: "naufalakbar378@gmail.com",
    name: "Naufal Akbar Nugroho",
  };
  pkgJson.private = true;

  if (needsDbScripts) {
    scripts["db:push"] = pmConfig.filter("db", "db:push");

    if (!isD1Alchemy) {
      scripts["db:studio"] = pmConfig.filter("db", "db:studio");
    }

    if (orm === "prisma") {
      scripts["db:generate"] = pmConfig.filter("db", "db:generate");
      scripts["db:migrate"] = pmConfig.filter("db", "db:migrate");
    } else if (orm === "drizzle") {
      scripts["db:generate"] = pmConfig.filter("db", "db:generate");
      if (!isD1Alchemy) {
        scripts["db:migrate"] = pmConfig.filter("db", "db:migrate");
      }
    }
  }

  if (database === "sqlite" && dbSetup !== "d1") {
    scripts["db:local"] = pmConfig.filter("db", "db:local");
  }

  if (dbSetup === "docker") {
    scripts["db:start"] = pmConfig.filter("db", "db:start");
    scripts["db:watch"] = pmConfig.filter("db", "db:watch");
    scripts["db:stop"] = pmConfig.filter("db", "db:stop");
    scripts["db:down"] = pmConfig.filter("db", "db:down");
  }

  // Add deploy/destroy scripts when using alchemy (cloudflare deployment)
  const canDeployWeb = config.webDeploy === "cloudflare" && config.projectType !== "backend";
  const canDeployServer = config.serverDeploy === "cloudflare" && config.projectType !== "frontend";

  if (canDeployWeb || canDeployServer) {
    scripts.deploy = pmConfig.filter("infra", "deploy");
    scripts.destroy = pmConfig.filter("infra", "destroy");
  }

  // Update exports if env package exists (now flattened)
  const hasWebFrontend = frontend.some((f: string) =>
    ["tanstack-router", "tanstack-start", "next", "nuxt", "svelte", "solid"].includes(f),
  );
  const needsServerEnv = backend !== "none" && backend !== "convex";

  // Standalone projects don't need these exports
  if (
    (config.projectType as string) === "fullstack" &&
    (needsServerEnv || hasWebFrontend) &&
    !isNext &&
    !isTanstackStart &&
    !isTanstackRouter &&
    isAstro
  ) {
    const exports: Record<string, string> = {};
    if (needsServerEnv) exports["./server"] = "./src/server.ts";
    if (hasWebFrontend) exports["./web"] = "./src/web.ts";
    pkgJson.exports = exports;
  } else {
    // Ensure exports are removed if they were somehow added by templates or previous logic
    delete pkgJson.exports;
  }

  // Note: packageManager version is set by CLI at runtime since it requires running the actual CLI
  pkgJson.packageManager = `${packageManager}@latest`;

  vfs.writeJson("package.json", pkgJson);
}

function getPackageManagerConfig(
  packageManager: ProjectConfig["packageManager"],
): PackageManagerConfig {
  switch (packageManager) {
    case "pnpm":
      return {
        dev: "pnpm dev",
        build: "pnpm build",
        checkTypes: "pnpm check-types",
        filter: (_workspace, script) => `pnpm ${script}`,
      };
    case "npm":
      return {
        dev: "npm run dev",
        build: "npm run build",
        checkTypes: "npm run check-types",
        filter: (_workspace, script) => `npm run ${script}`,
      };
    case "bun":
    default:
      return {
        dev: "bun run dev",
        build: "bun run build",
        checkTypes: "bun run check-types",
        filter: (_workspace, script) => `bun run ${script}`,
      };
  }
}

function renameDevScriptsForAlchemy(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const { serverDeploy, webDeploy } = config;
  const pkgJson = vfs.readJson<PackageJson>("package.json");
  if (!pkgJson || !pkgJson.scripts) return;

  // In a single package, we might want to rename the root dev script if using cloudflare for everything?
  // Or maybe it's not needed anymore since they are merged.
  // For now, let's keep it similar but targeting root.

  if (serverDeploy === "cloudflare" || webDeploy === "cloudflare") {
    // If we have a dev script that conflict with alchemy dev
    if (pkgJson.scripts.dev && pkgJson.scripts.dev !== "turbo dev") {
      // Maybe we don't need this anymore in single package because alchemy might handle the dev flow.
    }
  }
}
