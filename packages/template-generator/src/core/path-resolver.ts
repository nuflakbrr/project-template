import type { ProjectConfig } from "@bikinproject/types";

export function resolvePackagePath(config: ProjectConfig, logicalPath: string): string {
  // Always flatten everything into a single package structure.
  // We'll map standard monorepo paths to root.

  if (logicalPath.startsWith("apps/web")) {
    const relative = logicalPath.slice("apps/web".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("apps/server")) {
    const relative = logicalPath.slice("apps/server".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("packages/backend")) {
    const relative = logicalPath.slice("packages/backend".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("packages/db")) {
    const relative = logicalPath.slice("packages/db".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("packages/api")) {
    const relative = logicalPath.slice("packages/api".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("packages/auth")) {
    const relative = logicalPath.slice("packages/auth".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("packages/env")) {
    const relative = logicalPath.slice("packages/env".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("packages/config")) {
    const relative = logicalPath.slice("packages/config".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  if (logicalPath.startsWith("packages/infra")) {
    const relative = logicalPath.slice("packages/infra".length);
    return relative.startsWith("/") ? relative.slice(1) : relative;
  }

  return logicalPath;
}
