import type { ProjectConfig } from "@bikinproject/types";

import { resolvePackagePath } from "../core/path-resolver";
import type { VirtualFileSystem } from "../core/virtual-fs";
import { addPackageDependency, type AvailableDependencies } from "../utils/add-deps";

export function processBackendDeps(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const { backend, runtime, api, auth } = config;

  if (backend === "convex") {
    const convexPath = resolvePackagePath(config, "packages/backend/package.json");
    if (vfs.exists(convexPath)) {
      addPackageDependency({ vfs, packagePath: convexPath, dependencies: ["convex"] });
    }
    return;
  }

  const serverPath = resolvePackagePath(config, "apps/server/package.json");
  if (!vfs.exists(serverPath) || backend === "self" || backend === "none") return;

  const deps: AvailableDependencies[] = [];
  const devDeps: AvailableDependencies[] = [];

  if (backend === "hono") {
    deps.push("hono");
    if (runtime === "node") deps.push("@hono/node-server");
  } else if (backend === "express") {
    deps.push("express", "cors");
    devDeps.push("@types/express", "@types/cors");
  } else if (backend === "fastify") {
    deps.push("fastify", "@fastify/cors");
  }

  if (api === "trpc") {
    deps.push("@trpc/server");
    if (backend === "hono") deps.push("@hono/trpc-server");
  } else if (api === "orpc") {
    deps.push("@orpc/server", "@orpc/openapi", "@orpc/zod");
  }

  if (auth === "better-auth") deps.push("better-auth");

  if (runtime === "node") devDeps.push("tsx", "@types/node");
  else if (runtime === "bun") devDeps.push("@types/bun");

  if (deps.length > 0 || devDeps.length > 0) {
    addPackageDependency({
      vfs,
      packagePath: serverPath,
      dependencies: deps,
      devDependencies: devDeps,
    });
  }
}
