import type { ProjectConfig } from "@bikinproject/types";

import { resolvePackagePath } from "../core/path-resolver";
import type { VirtualFileSystem } from "../core/virtual-fs";
import { addPackageDependency } from "../utils/add-deps";

export function processInfraDeps(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const infraPath = resolvePackagePath(config, "packages/infra/package.json");
  if (!vfs.exists(infraPath)) return;

  const { serverDeploy, webDeploy } = config;
  if (serverDeploy === "cloudflare" || webDeploy === "cloudflare") {
    addPackageDependency({ vfs, packagePath: infraPath, devDependencies: ["alchemy"] });
  }
}
