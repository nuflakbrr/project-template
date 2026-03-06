import type { ProjectConfig } from "@bikinproject/types";

import type { VirtualFileSystem } from "../core/virtual-fs";
import { type TemplateData, processTemplatesFromPrefix, processSingleTemplate } from "./utils";

export async function processConfigPackage(
  vfs: VirtualFileSystem,
  templates: TemplateData,
  config: ProjectConfig,
): Promise<void> {
  processTemplatesFromPrefix(vfs, templates, "packages/config", "packages/config", config);
}

export async function processEnvPackage(
  vfs: VirtualFileSystem,
  templates: TemplateData,
  config: ProjectConfig,
): Promise<void> {
  const hasWebFrontend = config.frontend.some((f) =>
    [
      "tanstack-router",
      "react-router",
      "tanstack-start",
      "next",
      "nuxt",
      "svelte",
      "solid",
      "astro",
    ].includes(f),
  );

  if (!hasWebFrontend && config.backend === "none") return;

  // Process base env package files (package.json, tsconfig.json)
  processSingleTemplate(
    vfs,
    templates,
    "packages/env/package.json",
    "packages/env/package.json",
    config,
  );
  processSingleTemplate(
    vfs,
    templates,
    "packages/env/tsconfig.json",
    "packages/env/tsconfig.json",
    config,
  );

  // Conditionally include web.ts
  if (hasWebFrontend) {
    processSingleTemplate(
      vfs,
      templates,
      "packages/env/src/web.ts",
      "packages/env/src/web.ts",
      config,
    );
  }

  // Conditionally include server.ts when backend is NOT none and NOT convex
  if (config.backend !== "none" && config.backend !== "convex") {
    processSingleTemplate(
      vfs,
      templates,
      "packages/env/src/server.ts",
      "packages/env/src/server.ts",
      config,
    );
  }
}
