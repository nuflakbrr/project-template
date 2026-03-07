import type { ProjectConfig } from "@bikinproject/types";

import { resolvePackagePath } from "../core/path-resolver";
import type { VirtualFileSystem } from "../core/virtual-fs";
import { addPackageDependency } from "../utils/add-deps";

export function processAuthDeps(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const { auth, backend } = config;
  if (!auth || auth === "none") return;

  if (backend === "convex") {
    processConvexAuthDeps(vfs, config);
  } else {
    processStandardAuthDeps(vfs, config);
  }
}

function processConvexAuthDeps(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const { auth, frontend } = config;
  const webPath = resolvePackagePath(config, "apps/web/package.json");
  const backendPath = resolvePackagePath(config, "packages/backend/package.json");

  const webExists = vfs.exists(webPath);
  const backendExists = vfs.exists(backendPath);

  const hasNextJs = frontend.includes("next");
  const hasTanStackStart = frontend.includes("tanstack-start");
  const hasViteReact = frontend.some((f) => ["tanstack-router"].includes(f));
  const hasSolid = frontend.includes("solid");
  const hasSvelte = frontend.includes("svelte");
  const hasReactWebAuthForms = hasNextJs || hasTanStackStart || hasViteReact;

  if (auth === "clerk") {
    if (webExists) {
      if (hasNextJs) {
        addPackageDependency({ vfs, packagePath: webPath, dependencies: ["@clerk/nextjs"] });
      } else if (hasTanStackStart) {
        addPackageDependency({
          vfs,
          packagePath: webPath,
          dependencies: ["@clerk/tanstack-react-start"],
        });
      } else if (hasViteReact) {
        addPackageDependency({ vfs, packagePath: webPath, dependencies: ["@clerk/clerk-react"] });
      }
    }
  } else if (auth === "better-auth") {
    if (backendExists) {
      addPackageDependency({
        vfs,
        packagePath: backendPath,
        dependencies: ["better-auth", "@convex-dev/better-auth"],
        customDependencies: {
          "better-auth": "1.4.9",
        },
      });
    }

    if (webExists) {
      addPackageDependency({
        vfs,
        packagePath: webPath,
        dependencies: ["better-auth", "@convex-dev/better-auth"],
        customDependencies: {
          "better-auth": "1.4.9",
        },
      });

      if (hasReactWebAuthForms) {
        addPackageDependency({ vfs, packagePath: webPath, dependencies: ["@tanstack/react-form"] });
      }
      if (hasSolid) {
        addPackageDependency({ vfs, packagePath: webPath, dependencies: ["@tanstack/solid-form"] });
      }
      if (hasSvelte) {
        addPackageDependency({
          vfs,
          packagePath: webPath,
          dependencies: ["@tanstack/svelte-form"],
        });
      }
    }
  }
}

function processStandardAuthDeps(vfs: VirtualFileSystem, config: ProjectConfig): void {
  const { auth, frontend } = config;
  const authPath = resolvePackagePath(config, "packages/auth/package.json");
  const webPath = resolvePackagePath(config, "apps/web/package.json");

  const authExists = vfs.exists(authPath);
  const webExists = vfs.exists(webPath);

  const hasWebFrontend = frontend.some((f) =>
    ["tanstack-router", "tanstack-start", "next", "nuxt", "svelte", "solid", "astro"].includes(f),
  );
  const hasReactWebAuthForms = frontend.some((f) =>
    ["tanstack-router", "tanstack-start", "next"].includes(f),
  );
  const hasSolid = frontend.includes("solid");
  const hasSvelte = frontend.includes("svelte");

  if (auth === "better-auth") {
    if (authExists) {
      addPackageDependency({ vfs, packagePath: authPath, dependencies: ["better-auth"] });
    }

    if (hasWebFrontend && webExists) {
      addPackageDependency({ vfs, packagePath: webPath, dependencies: ["better-auth"] });

      if (hasReactWebAuthForms) {
        addPackageDependency({ vfs, packagePath: webPath, dependencies: ["@tanstack/react-form"] });
      }
      if (hasSolid) {
        addPackageDependency({ vfs, packagePath: webPath, dependencies: ["@tanstack/solid-form"] });
      }
      if (hasSvelte) {
        addPackageDependency({
          vfs,
          packagePath: webPath,
          dependencies: ["@tanstack/svelte-form"],
        });
      }
    }
  }
}
