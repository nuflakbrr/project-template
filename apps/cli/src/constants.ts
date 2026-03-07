import path from "node:path";
import { fileURLToPath } from "node:url";

import type { ProjectType } from "./types";
import { getUserPkgManager } from "./utils/get-package-manager";

// Re-export from template-generator (single source of truth)
export { dependencyVersionMap, type AvailableDependencies } from "@bikinproject/template-generator";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

export const DEFAULT_CONFIG_BASE = {
  projectName: "my-bikinproject-app",
  relativePath: "my-bikinproject-app",
  frontend: ["tanstack-router"],
  database: "sqlite",
  orm: "drizzle",
  auth: "better-auth",
  payments: "none",
  addons: [],
  git: true,
  install: true,
  dbSetup: "none",
  backend: "hono",
  runtime: "bun",
  api: "trpc",
  webDeploy: "none",
  serverDeploy: "none",
  projectType: "frontend",
} as const;

export function getDefaultConfig() {
  return {
    ...DEFAULT_CONFIG_BASE,
    projectDir: path.resolve(process.cwd(), DEFAULT_CONFIG_BASE.projectName),
    packageManager: getUserPkgManager(),
    frontend: [...DEFAULT_CONFIG_BASE.frontend],
    addons: [...DEFAULT_CONFIG_BASE.addons],
    projectType: DEFAULT_CONFIG_BASE.projectType as ProjectType,
  };
}

export const DEFAULT_CONFIG = getDefaultConfig();

export const ADDON_COMPATIBILITY = {
  pwa: ["tanstack-router", "solid", "next"],
  biome: [],
  husky: [],
  lefthook: [],
  starlight: [],
  ultracite: [],
  ruler: [],
  mcp: [],
  oxlint: [],
  fumadocs: [],
  opentui: [],
  wxt: [],
  skills: [],
  none: [],
} as const;
