import type { ProjectConfig } from "@bikinproject/types";

import { resolvePackagePath } from "../core/path-resolver";
import type { VirtualFileSystem } from "../core/virtual-fs";
import { addPackageDependency, type AvailableDependencies } from "../utils/add-deps";

export function processEnvDeps(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const envPath = resolvePackagePath(config, "packages/env/package.json");
  if (!vfs.exists(envPath)) return;

  const deps: AvailableDependencies[] = ["zod"];

  addPackageDependency({ vfs, packagePath: envPath, dependencies: deps });
}
