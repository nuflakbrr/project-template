import { consola } from "consola";
import pc from "picocolors";

import type {
  Backend,
  Database,
  DatabaseSetup,
  Frontend,
  ORM,
  ProjectConfig,
  Runtime,
  ServerDeploy,
  WebDeploy,
} from "../../types";
import { getDockerStatus } from "../../utils/docker-utils";
import {
  fetchSponsorsQuietly,
  formatPostInstallSpecialSponsorsSection,
} from "../../utils/sponsors";
export async function displayPostInstallInstructions(
  config: ProjectConfig & { depsInstalled: boolean },
) {
  const {
    api,
    database,
    relativePath,
    packageManager,
    depsInstalled,
    orm,
    addons,
    runtime,
    frontend,
    backend,
    dbSetup,
    webDeploy,
    serverDeploy,
  } = config;

  const isConvex = backend === "convex";
  const isBackendSelf = backend === "self";
  const runCmd =
    packageManager === "npm" ? "npm run" : packageManager === "pnpm" ? "pnpm run" : "bun run";
  const cdCmd = `cd ${relativePath}`;
  const hasHusky = addons?.includes("husky");
  const hasLefthook = addons?.includes("lefthook");
  const hasGitHooksOrLinting =
    addons?.includes("husky") ||
    addons?.includes("biome") ||
    addons?.includes("lefthook") ||
    addons?.includes("oxlint");

  const databaseInstructions =
    !isConvex && database !== "none"
      ? await getDatabaseInstructions(
          database,
          orm,
          runCmd,
          runtime,
          dbSetup,
          serverDeploy,
          backend,
        )
      : "";

  const huskyInstructions = hasHusky ? getHuskyInstructions(runCmd) : "";
  const lefthookInstructions = hasLefthook ? getLefthookInstructions(packageManager) : "";
  const lintingInstructions = hasGitHooksOrLinting ? getLintingInstructions(runCmd) : "";
  const pwaInstructions =
    addons?.includes("pwa") && frontend?.includes("tanstack-router") ? getPwaInstructions() : "";
  const starlightInstructions = addons?.includes("starlight")
    ? getStarlightInstructions(runCmd)
    : "";
  const clerkInstructions = isConvex && config.auth === "clerk" ? getClerkInstructions() : "";
  const alchemyDeployInstructions = getAlchemyDeployInstructions(
    runCmd,
    webDeploy,
    serverDeploy,
    backend,
  );

  const hasWeb = frontend?.some((f) =>
    ["tanstack-router", "next", "tanstack-start", "nuxt", "svelte", "solid"].includes(f),
  );

  const hasSvelte = frontend?.includes("svelte");
  const webPort = hasSvelte ? "5173" : "3000";

  const betterAuthConvexInstructions =
    isConvex && config.auth === "better-auth"
      ? getBetterAuthConvexInstructions(hasWeb ?? false, webPort, packageManager)
      : "";

  const noOrmWarning = !isConvex && database !== "none" && orm === "none" ? getNoOrmWarning() : "";

  let output = `${pc.bold("Next steps")}\n${pc.cyan("1.")} ${cdCmd}\n`;
  let stepCounter = 2;

  if (!depsInstalled) {
    output += `${pc.cyan(`${stepCounter++}.`)} ${packageManager} install\n`;
  }

  if (database === "sqlite" && dbSetup !== "d1") {
    output += `${pc.cyan(`${stepCounter++}.`)} ${runCmd} db:local\n${pc.dim(
      "   (optional - starts local SQLite database)",
    )}\n`;
  }

  if (isConvex) {
    output += `${pc.cyan(`${stepCounter++}.`)} ${runCmd} dev:setup\n${pc.dim(
      "   (this will guide you through Convex project setup)",
    )}\n`;

    output += `${pc.cyan(`${stepCounter++}.`)} Copy environment variables from\n${pc.white(
      "   packages/backend/.env.local",
    )} to ${pc.white("apps/*/.env")}\n`;
    output += `${pc.cyan(`${stepCounter++}.`)} ${runCmd} dev\n\n`;
  } else if (isBackendSelf) {
    output += `${pc.cyan(`${stepCounter++}.`)} ${runCmd} dev\n`;
  } else {
    if (runtime !== "workers") {
      output += `${pc.cyan(`${stepCounter++}.`)} ${runCmd} dev\n`;
    }

    if (runtime === "workers") {
      if (dbSetup === "d1") {
        output += `${pc.yellow(
          "IMPORTANT:",
        )} Complete D1 database setup first\n   (see Database commands below)\n`;
      }
      output += `${pc.cyan(`${stepCounter++}.`)} ${runCmd} dev\n`;
    }
  }

  const hasStandaloneBackend = backend !== "none";
  const hasAnyService =
    hasWeb || hasStandaloneBackend || addons?.includes("starlight") || addons?.includes("fumadocs");

  if (hasAnyService) {
    output += `${pc.bold("Your project will be available at:")}\n`;

    if (hasWeb) {
      output += `${pc.cyan("•")} Frontend: http://localhost:${webPort}\n`;
    } else if (!addons?.includes("starlight")) {
      output += `${pc.yellow(
        "NOTE:",
      )} You are creating a backend-only app\n   (no frontend selected)\n`;
    }

    if (!isConvex && !isBackendSelf && hasStandaloneBackend) {
      output += `${pc.cyan("•")} Backend API: http://localhost:3000\n`;

      if (api === "orpc") {
        output += `${pc.cyan("•")} OpenAPI (Scalar UI): http://localhost:3000/api-reference\n`;
      }
    }

    if (isBackendSelf && api === "orpc") {
      output += `${pc.cyan("•")} OpenAPI (Scalar UI): http://localhost:${webPort}/api/rpc/api-reference\n`;
    }

    if (addons?.includes("starlight")) {
      output += `${pc.cyan("•")} Docs: http://localhost:4321\n`;
    }

    if (addons?.includes("fumadocs")) {
      output += `${pc.cyan("•")} Fumadocs: http://localhost:4000\n`;
    }
  }

  if (databaseInstructions) output += `\n${databaseInstructions.trim()}\n`;
  if (huskyInstructions) output += `\n${huskyInstructions.trim()}\n`;
  if (lefthookInstructions) output += `\n${lefthookInstructions.trim()}\n`;
  if (lintingInstructions) output += `\n${lintingInstructions.trim()}\n`;
  if (pwaInstructions) output += `\n${pwaInstructions.trim()}\n`;
  if (alchemyDeployInstructions) output += `\n${alchemyDeployInstructions.trim()}\n`;
  if (starlightInstructions) output += `\n${starlightInstructions.trim()}\n`;
  if (clerkInstructions) output += `\n${clerkInstructions.trim()}\n`;
  if (betterAuthConvexInstructions) output += `\n${betterAuthConvexInstructions.trim()}\n`;

  if (noOrmWarning) output += `\n${noOrmWarning.trim()}\n`;

  const sponsorsResult = await fetchSponsorsQuietly();
  const specialSponsorsSection = sponsorsResult.isOk()
    ? formatPostInstallSpecialSponsorsSection(sponsorsResult.value)
    : "";

  if (specialSponsorsSection) {
    output += `\n${specialSponsorsSection.trim()}\n`;
  }

  output += `\n${pc.bold("Like BikinProject?")} Please consider giving us a star\n   on GitHub:\n`;
  output += pc.cyan("https://github.com/nuflakbrr/bikinproject");

  consola.box(output);
}

function getHuskyInstructions(runCmd: string) {
  return `${pc.bold("Git hooks with Husky:")}\n${pc.cyan(
    "•",
  )} Initialize hooks: ${`${runCmd} prepare`}\n`;
}

function getLintingInstructions(runCmd: string) {
  return `${pc.bold("Linting and formatting:")}\n${pc.cyan(
    "•",
  )} Format and lint fix: ${`${runCmd} check`}\n`;
}

function getLefthookInstructions(packageManager: string) {
  const cmd = packageManager === "npm" ? "npx" : packageManager;
  return `${pc.bold("Git hooks with Lefthook:")}\n${pc.cyan(
    "•",
  )} Install hooks: ${cmd} lefthook install\n`;
}

async function getDatabaseInstructions(
  database: Database,
  orm: ORM,
  runCmd: string,
  _runtime: Runtime,
  dbSetup: DatabaseSetup,
  serverDeploy: ServerDeploy,
  _backend: Backend,
) {
  const instructions: string[] = [];

  if (dbSetup === "docker") {
    const dockerStatus = await getDockerStatus(database);

    if (dockerStatus.message) {
      instructions.push(dockerStatus.message);
      instructions.push("");
    }
  }

  if (dbSetup === "d1" && serverDeploy === "cloudflare") {
    if (orm === "drizzle") {
      instructions.push(`${pc.cyan("•")} Generate migrations: ${`${runCmd} db:generate`}`);
    } else if (orm === "prisma") {
      instructions.push(`${pc.cyan("•")} Generate Prisma client: ${`${runCmd} db:generate`}`);
      instructions.push(`${pc.cyan("•")} Apply migrations: ${`${runCmd} db:migrate`}`);
    }
  }

  if (dbSetup === "planetscale") {
    if (database === "mysql" && orm === "drizzle") {
      instructions.push(
        `${pc.yellow("NOTE:")} Enable foreign key constraints in PlanetScale database settings`,
      );
    }
    if (database === "mysql" && orm === "prisma") {
      instructions.push(
        `${pc.yellow(
          "NOTE:",
        )} How to handle Prisma migrations with PlanetScale:\n   https://github.com/prisma/prisma/issues/7292`,
      );
    }
  }

  if (dbSetup === "turso" && orm === "prisma") {
    instructions.push(
      `${pc.yellow(
        "NOTE:",
      )} Follow Turso's Prisma guide for migrations via the Turso CLI:\n   https://docs.turso.tech/sdk/ts/orm/prisma`,
    );
  }

  if (orm === "prisma") {
    if (database === "mongodb" && dbSetup === "docker") {
      instructions.push(
        `${pc.yellow("WARNING:")} Prisma + MongoDB + Docker combination\n   may not work.`,
      );
    }
    if (dbSetup === "docker") {
      instructions.push(`${pc.cyan("•")} Start docker container: ${`${runCmd} db:start`}`);
    }
    if (!(dbSetup === "d1" && serverDeploy === "cloudflare")) {
      instructions.push(`${pc.cyan("•")} Generate Prisma Client: ${`${runCmd} db:generate`}`);
      instructions.push(`${pc.cyan("•")} Apply schema: ${`${runCmd} db:push`}`);
    }
    if (!(dbSetup === "d1" && serverDeploy === "cloudflare")) {
      instructions.push(`${pc.cyan("•")} Database UI: ${`${runCmd} db:studio`}`);
    }
  } else if (orm === "drizzle") {
    if (dbSetup === "docker") {
      instructions.push(`${pc.cyan("•")} Start docker container: ${`${runCmd} db:start`}`);
    }
    if (dbSetup !== "d1") {
      instructions.push(`${pc.cyan("•")} Apply schema: ${`${runCmd} db:push`}`);
    }
    if (!(dbSetup === "d1" && serverDeploy === "cloudflare")) {
      instructions.push(`${pc.cyan("•")} Database UI: ${`${runCmd} db:studio`}`);
    }
  } else if (orm === "mongoose") {
    if (dbSetup === "docker") {
      instructions.push(`${pc.cyan("•")} Start docker container: ${`${runCmd} db:start`}`);
    }
  } else if (orm === "none") {
    instructions.push(`${pc.yellow("NOTE:")} Manual database schema setup\n   required.`);
  }

  return instructions.length ? `${pc.bold("Database commands:")}\n${instructions.join("\n")}` : "";
}

function getPwaInstructions() {
  return `\n${pc.bold("PWA with React Router v7:")}\n${pc.yellow(
    "NOTE:",
  )} There is a known compatibility issue between VitePWA\n   and React Router v7. See:\n   https://github.com/vite-pwa/vite-plugin-pwa/issues/809`;
}

function getStarlightInstructions(runCmd: string) {
  return `\n${pc.bold("Documentation with Starlight:")}\n${pc.cyan(
    "•",
  )} Start docs site: ${`cd apps/docs && ${runCmd} dev`}\n${pc.cyan(
    "•",
  )} Build docs site: ${`cd apps/docs && ${runCmd} build`}`;
}

function getNoOrmWarning() {
  return `\n${pc.yellow(
    "WARNING:",
  )} Database selected without an ORM. Features requiring\n   database access (e.g., examples, auth) need manual setup.`;
}

function getClerkInstructions() {
  return `${pc.bold("Clerk Authentication Setup:")}\n${pc.cyan("•")} Follow the guide: ${pc.underline("https://docs.convex.dev/auth/clerk")}\n${pc.cyan("•")} Set CLERK_JWT_ISSUER_DOMAIN in Convex Dashboard\n${pc.cyan("•")} Set CLERK_PUBLISHABLE_KEY in apps/*/.env`;
}

function getBetterAuthConvexInstructions(hasWeb: boolean, webPort: string, packageManager: string) {
  const cmd = packageManager === "npm" ? "npx" : packageManager;
  return (
    `${pc.bold("Better Auth + Convex Setup:")}\n` +
    `${pc.cyan("•")} Set environment variables from ${pc.white("packages/backend")}:\n` +
    `${pc.white("   cd packages/backend")}\n` +
    `${pc.white(`   ${cmd} convex env set BETTER_AUTH_SECRET=$(openssl rand -base64 32)`)}\n` +
    (hasWeb ? `${pc.white(`   ${cmd} convex env set SITE_URL http://localhost:${webPort}`)}\n` : "")
  );
}

function getAlchemyDeployInstructions(
  runCmd: string,
  webDeploy: WebDeploy,
  serverDeploy: ServerDeploy,
  backend: Backend,
) {
  const instructions: string[] = [];
  const isBackendSelf = backend === "self";

  if (webDeploy === "cloudflare" && serverDeploy !== "cloudflare") {
    instructions.push(
      `${pc.bold("Deploy web with Cloudflare (Alchemy):")}\n${pc.cyan("•")} Dev: ${`cd apps/web && ${runCmd} alchemy dev`}\n${pc.cyan("•")} Deploy: ${`cd apps/web && ${runCmd} deploy`}\n${pc.cyan("•")} Destroy: ${`cd apps/web && ${runCmd} destroy`}`,
    );
  } else if (serverDeploy === "cloudflare" && webDeploy !== "cloudflare" && !isBackendSelf) {
    instructions.push(
      `${pc.bold("Deploy server with Cloudflare (Alchemy):")}\n${pc.cyan("•")} Dev: ${`cd apps/server && ${runCmd} dev`}\n${pc.cyan("•")} Deploy: ${`cd apps/server && ${runCmd} deploy`}\n${pc.cyan("•")} Destroy: ${`cd apps/server && ${runCmd} destroy`}`,
    );
  } else if (webDeploy === "cloudflare" && (serverDeploy === "cloudflare" || isBackendSelf)) {
    instructions.push(
      `${pc.bold("Deploy with Cloudflare (Alchemy):")}\n${pc.cyan("•")} Dev: ${`${runCmd} dev`}\n${pc.cyan("•")} Deploy: ${`${runCmd} deploy`}\n${pc.cyan("•")} Destroy: ${`${runCmd} destroy`}`,
    );
  }

  return instructions.length ? `\n${instructions.join("\n")}` : "";
}
