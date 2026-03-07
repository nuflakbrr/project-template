import type { ProjectConfig } from "@bikinproject/types";

import { resolvePackagePath } from "../core/path-resolver";
import type { VirtualFileSystem } from "../core/virtual-fs";
import { addPackageDependency, type AvailableDependencies } from "../utils/add-deps";

export function processWorkspaceDeps(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const { runtime, backend } = config;

  const runtimeDevDeps = getRuntimeDevDeps(runtime, backend);
  const commonDeps: AvailableDependencies[] = ["dotenv", "zod"];
  const commonDevDeps: AvailableDependencies[] = ["typescript", ...runtimeDevDeps];

  addPackageDependency({
    vfs,
    packagePath: resolvePackagePath(config, "package.json"),
    dependencies: commonDeps,
    devDependencies: commonDevDeps,
  });
}

function getRuntimeDevDeps(
  runtime: ProjectConfig["runtime"],
  backend: ProjectConfig["backend"],
): AvailableDependencies[] {
  if (runtime === "none" && backend === "self") return ["@types/node"];
  if (runtime === "node" || runtime === "workers") return ["@types/node"];
  if (runtime === "bun") return ["@types/bun"];
  return [];
}
