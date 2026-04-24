import type { BikinProjectConfig, ProjectConfig } from "@bikinproject/types";

import type { VirtualFileSystem } from "./core/virtual-fs";

const BPA_CONFIG_FILE = "bpa.jsonc";

/**
 * Writes the BPA configuration file to the VFS (for new project creation).
 * This is browser-safe as it only writes to VFS, not the real filesystem.
 */
export function writeBpaConfigToVfs(
  vfs: VirtualFileSystem,
  projectConfig: ProjectConfig,
  version: string,
  reproducibleCommand?: string,
): void {
  const bpaConfig: BikinProjectConfig = {
    version,
    createdAt: new Date().toISOString(),
    reproducibleCommand,
    database: projectConfig.database,
    orm: projectConfig.orm,
    backend: projectConfig.backend,
    runtime: projectConfig.runtime,
    frontend: projectConfig.frontend,
    addons: projectConfig.addons,
    auth: projectConfig.auth,
    packageManager: projectConfig.packageManager,
    dbSetup: projectConfig.dbSetup,
    api: projectConfig.api,
    webDeploy: projectConfig.webDeploy,
    serverDeploy: projectConfig.serverDeploy,
  };

  const baseContent = {
    $schema: "https://nuflakbrr.github.io/bikinproject/schema.json",
    ...bpaConfig,
  };

  const jsonContent = JSON.stringify(baseContent, null, 2);

  const addCommand =
    projectConfig.packageManager === "npm"
      ? "npx create-bikinproject-app add"
      : projectConfig.packageManager === "pnpm"
        ? "pnpm dlx create-bikinproject-app add"
        : "bun create-bikinproject-app add";

  const finalContent = `// BikinProject
//
// Website: https://nuflakbrr.github.io/bikinproject/
// Stack Builder: https://nuflakbrr.github.io/bikinproject/new
// Analytics: https://nuflakbrr.github.io/bikinproject/analytics
// Showcase: https://nuflakbrr.github.io/bikinproject/showcase
// Sponsor: https://github.com/sponsors/nuflakbrr
//
// Add new addons with: ${addCommand}
// This file is safe to delete

${jsonContent}`;

  vfs.writeFile(BPA_CONFIG_FILE, finalContent);
}
