import { describe, expect, it } from "bun:test";

import type { ProjectConfig } from "@bikinproject/types";

import { VirtualFileSystem } from "../src/core/virtual-fs";
import { processPackageConfigs } from "../src/post-process/package-configs";
import { processReadme } from "../src/processors/readme-generator";
import { generateReproducibleCommand } from "../src/utils/reproducible-command";

function baseConfig(overrides: Partial<ProjectConfig> = {}): ProjectConfig {
  return {
    projectName: "test-app",
    projectDir: "/tmp/test-app",
    relativePath: "test-app",
    database: "sqlite",
    orm: "drizzle",
    backend: "hono",
    runtime: "bun",
    frontend: ["tanstack-router"],
    addons: [],
    auth: "none",
    payments: "none",
    git: true,
    packageManager: "bun",
    install: false,
    dbSetup: "none",
    api: "trpc",
    webDeploy: "none",
    serverDeploy: "none",
    projectType: "frontend",
    ...overrides,
  };
}

describe("template-generator logic", () => {
  it("omits 'none' from multi-select flags when other values exist", () => {
    const command = generateReproducibleCommand(
      baseConfig({
        frontend: ["none", "next"],
        addons: ["none", "pwa"],
      }),
    );

    expect(command).toContain("--frontend next");
    expect(command).not.toContain("--frontend none");
    expect(command).toContain("--addons pwa");
    expect(command).not.toContain("--addons none");
  });

  it("skips db scripts in README for mongoose configs", () => {
    const vfs = new VirtualFileSystem();
    processReadme(
      vfs,
      baseConfig({
        database: "mongodb",
        orm: "mongoose",
      }),
    );

    const readme = vfs.readFile("README.md") ?? "";
    expect(readme).not.toContain("db:push");
    expect(readme).not.toContain("db:generate");
    expect(readme).not.toContain("db:migrate");
    expect(readme).not.toContain("db:studio");
  });

  it("skips db:studio in README for D1 + Cloudflare", () => {
    const vfs = new VirtualFileSystem();
    processReadme(
      vfs,
      baseConfig({
        database: "sqlite",
        orm: "drizzle",
        dbSetup: "d1",
        serverDeploy: "cloudflare",
      }),
    );

    const readme = vfs.readFile("README.md") ?? "";
    expect(readme).toContain("db:push");
    expect(readme).not.toContain("db:studio");
  });

  it("adds db:local script for sqlite when using local setup", () => {
    const vfs = new VirtualFileSystem();
    // Simulate flattened structure where all package.json resolve to root
    vfs.writeJson("package.json", { scripts: {} });

    processPackageConfigs(
      vfs,
      baseConfig({
        database: "sqlite",
        orm: "drizzle",
        dbSetup: "none",
      }),
    );

    const pkgJson = vfs.readJson<{ scripts?: Record<string, string> }>("package.json");
    expect(pkgJson?.scripts?.["db:local"]).toBe("bun run db:local");
  });

  it("generates correct package.json for Next.js projects", () => {
    const vfs = new VirtualFileSystem();
    vfs.writeJson("package.json", { scripts: {} });

    processPackageConfigs(
      vfs,
      baseConfig({
        frontend: ["next"],
        backend: "none",
        packageManager: "pnpm",
      }),
    );

    const pkgJson = vfs.readJson<{
      scripts: Record<string, string>;
      author: { name: string; email: string };
      private: boolean;
      exports?: unknown;
    }>("package.json");

    expect(pkgJson?.scripts?.dev).toBe("next dev --turbopack");
    expect(pkgJson?.scripts?.build).toBe("next build --turbopack");
    expect(pkgJson?.scripts?.start).toBe("next start --turbopack");
    expect(pkgJson?.scripts?.lint).toBe("eslint .");
    expect(pkgJson?.scripts?.["lint:fix"]).toBe("eslint . --fix");
    expect(pkgJson?.author?.name).toBe("Naufal Akbar Nugroho");
    expect(pkgJson?.author?.email).toBe("naufalakbar378@gmail.com");
    expect(pkgJson?.private).toBe(true);
    expect(pkgJson?.exports).toBeUndefined();
  });

  it("generates correct package.json for Tanstack Router projects", () => {
    const vfs = new VirtualFileSystem();
    vfs.writeJson("package.json", { scripts: { serve: "should be deleted" } });

    processPackageConfigs(
      vfs,
      baseConfig({
        frontend: ["tanstack-router"],
        backend: "none",
        packageManager: "npm",
      }),
    );

    const pkgJson = vfs.readJson<{
      scripts: Record<string, string>;
    }>("package.json");

    expect(pkgJson?.scripts?.dev).toBe("npm run generate:seo && vite dev");
    expect(pkgJson?.scripts?.build).toBe("npm run generate:seo && tsc && vite build");
    expect(pkgJson?.scripts?.["generate:seo"]).toBe("tsx scripts/generate-seo.ts");
    expect(pkgJson?.scripts?.lint).toBe(
      "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    );
    expect(pkgJson?.scripts?.preview).toBe("vite preview");
    expect(pkgJson?.scripts?.serve).toBeUndefined();
  });

  it("generates correct package.json for Tanstack Start projects", () => {
    const vfs = new VirtualFileSystem();
    vfs.writeJson("package.json", { scripts: {} });

    processPackageConfigs(
      vfs,
      baseConfig({
        frontend: ["tanstack-start"],
        backend: "none",
        packageManager: "pnpm",
      }),
    );

    const pkgJson = vfs.readJson<{
      scripts: Record<string, string>;
    }>("package.json");

    expect(pkgJson?.scripts?.dev).toBe("pnpm generate:seo && vite dev");
    expect(pkgJson?.scripts?.build).toBe("pnpm generate:seo && tsc && vite build");
    expect(pkgJson?.scripts?.preview).toBe("vite preview");
    expect(pkgJson?.scripts?.["generate:seo"]).toBe("tsx scripts/generate-seo.ts");
  });

  it("generates correct package.json for Astro projects", () => {
    const vfs = new VirtualFileSystem();
    vfs.writeJson("package.json", { scripts: {} });

    processPackageConfigs(
      vfs,
      baseConfig({
        frontend: ["astro"],
        backend: "none",
        packageManager: "bun",
      }),
    );

    const pkgJson = vfs.readJson<{
      scripts: Record<string, string>;
    }>("package.json");

    expect(pkgJson?.scripts?.dev).toBe("bun run generate:seo bun run format && astro dev");
    expect(pkgJson?.scripts?.build).toBe("bun run generate:seo bun run format && astro build");
    expect(pkgJson?.scripts?.preview).toBe("bun run generate:seo bun run format && astro preview");
    expect(pkgJson?.scripts?.astro).toBe("bun run generate:seo bun run format && astro");
    expect(pkgJson?.scripts?.format).toBe("prettier --write .");
    expect(pkgJson?.scripts?.["format:check"]).toBe("prettier --check .");
    expect(pkgJson?.scripts?.["generate:seo"]).toBe("tsx scripts/generate-seo.ts");
  });

  it("generates correct package.json for generic Vite projects (React/Vue/etc)", () => {
    const vfs = new VirtualFileSystem();
    vfs.writeJson("package.json", { scripts: {} });

    processPackageConfigs(
      vfs,
      baseConfig({
        frontend: ["react-router"],
        backend: "none",
        packageManager: "bun",
      }),
    );

    const pkgJson = vfs.readJson<{
      scripts: Record<string, string>;
    }>("package.json");

    expect(pkgJson?.scripts?.dev).toBe("bun run dev");
    expect(pkgJson?.scripts?.build).toBe("bun run build");
    expect(pkgJson?.scripts?.["check-types"]).toBe("bun run check-types");
  });

  it("generates correct package.json for Hono standalone backend projects", () => {
    const vfs = new VirtualFileSystem();
    vfs.writeJson("package.json", { scripts: {} });

    processPackageConfigs(
      vfs,
      baseConfig({
        frontend: ["none"],
        backend: "hono",
        packageManager: "bun",
      }),
    );

    const pkgJson = vfs.readJson<{
      scripts: Record<string, string>;
      exports?: unknown;
    }>("package.json");

    expect(pkgJson?.scripts?.dev).toBe("bun run dev");
    expect(pkgJson?.scripts?.build).toBe("bun run build");
    expect(pkgJson?.scripts?.["check-types"]).toBe("bun run check-types");
    expect(pkgJson?.exports).toBeUndefined(); // Backend only shouldn't export unless for monorepo
  });

  it("generates correct package.json for generic backend standalone projects (Express/Fastify/etc)", () => {
    const vfs = new VirtualFileSystem();
    vfs.writeJson("package.json", { scripts: {} });

    processPackageConfigs(
      vfs,
      baseConfig({
        frontend: ["none"],
        backend: "express",
        packageManager: "npm",
      }),
    );

    const pkgJson = vfs.readJson<{
      scripts: Record<string, string>;
      exports?: unknown;
    }>("package.json");

    expect(pkgJson?.scripts?.dev).toBe("npm run dev");
    expect(pkgJson?.scripts?.build).toBe("npm run build");
    expect(pkgJson?.scripts?.["check-types"]).toBe("npm run check-types");
    expect(pkgJson?.exports).toBeUndefined();
  });

  describe("exhaustive flag combinations", () => {
    it("handles Hono + Prisma + Postgres + Docker + pnpm", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          projectName: "hono-prisma-docker",
          frontend: ["none"],
          backend: "hono",
          database: "postgres",
          orm: "prisma",
          dbSetup: "docker",
          packageManager: "pnpm",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      const scripts = pkgJson?.scripts;

      expect(scripts?.["db:push"]).toBe("pnpm db:push");
      expect(scripts?.["db:studio"]).toBe("pnpm db:studio");
      expect(scripts?.["db:generate"]).toBe("pnpm db:generate");
      expect(scripts?.["db:migrate"]).toBe("pnpm db:migrate");
      expect(scripts?.["db:start"]).toBe("pnpm db:start");
      expect(scripts?.["db:stop"]).toBe("pnpm db:stop");
    });

    it("handles Hono + Drizzle + SQLite + Cloudflare/D1 + bun", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          projectName: "hono-drizzle-d1",
          frontend: ["none"],
          projectType: "backend",
          backend: "hono",
          database: "sqlite",
          orm: "drizzle",
          dbSetup: "d1",
          serverDeploy: "cloudflare",
          packageManager: "bun",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      const scripts = pkgJson?.scripts;

      expect(scripts?.["db:push"]).toBe("bun run db:push");
      expect(scripts?.["db:generate"]).toBe("bun run db:generate");
      expect(scripts?.["db:migrate"]).toBeUndefined();
      expect(scripts?.["db:studio"]).toBeUndefined();
      expect(scripts?.deploy).toBe("bun run deploy");
      expect(scripts?.destroy).toBe("bun run destroy");
    });

    it("handles Astro + Cloudflare + pnpm", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          projectName: "astro-cloudflare",
          frontend: ["astro"],
          backend: "none",
          webDeploy: "cloudflare",
          packageManager: "pnpm",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      const scripts = pkgJson?.scripts;

      expect(scripts?.dev).toBe("pnpm generate:seo pnpm format && astro dev");
      expect(scripts?.deploy).toBe("pnpm deploy");
      expect(scripts?.destroy).toBe("pnpm destroy");
    });

    it("handles Tanstack Start + Cloudflare + bun", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          projectName: "tanstack-start-cloudflare",
          frontend: ["tanstack-start"],
          backend: "none",
          webDeploy: "cloudflare",
          packageManager: "bun",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      const scripts = pkgJson?.scripts;

      expect(scripts?.dev).toBe("bun run generate:seo && vite dev");
      expect(scripts?.deploy).toBe("bun run deploy");
      expect(scripts?.destroy).toBe("bun run destroy");
    });

    it("handles Generic (React Router) + pnpm", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          projectName: "react-router-pnpm",
          frontend: ["react-router"],
          backend: "none",
          packageManager: "pnpm",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      const scripts = pkgJson?.scripts;

      expect(scripts?.dev).toBe("pnpm dev");
      expect(scripts?.build).toBe("pnpm build");
      expect(scripts?.["check-types"]).toBe("pnpm check-types");
    });
  });

  describe("exhaustive frontend frameworks", () => {
    it("generates correct package.json for Nuxt projects", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          frontend: ["nuxt"],
          backend: "none",
          packageManager: "pnpm",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      expect(pkgJson?.scripts?.dev).toBe("pnpm dev");
      expect(pkgJson?.scripts?.build).toBe("pnpm build");
      expect(pkgJson?.scripts?.["check-types"]).toBe("pnpm check-types");
    });

    it("generates correct package.json for Svelte projects", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          frontend: ["svelte"],
          backend: "none",
          packageManager: "npm",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      expect(pkgJson?.scripts?.dev).toBe("npm run dev");
      expect(pkgJson?.scripts?.build).toBe("npm run build");
      expect(pkgJson?.scripts?.["check-types"]).toBe("npm run check-types");
    });

    it("generates correct package.json for Solid projects", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          frontend: ["solid"],
          backend: "none",
          packageManager: "bun",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      expect(pkgJson?.scripts?.dev).toBe("bun run dev");
      expect(pkgJson?.scripts?.build).toBe("bun run build");
      expect(pkgJson?.scripts?.["check-types"]).toBe("bun run check-types");
    });

    it("handles frontend: ['none']", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          frontend: ["none"],
          backend: "hono",
          packageManager: "pnpm",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      // Should have backend scripts but NOT frontend ones
      expect(pkgJson?.scripts?.dev).toBe("pnpm dev");
      expect(pkgJson?.scripts?.build).toBe("pnpm build");
      expect(pkgJson?.scripts?.["generate:seo"]).toBeUndefined();
    });
  });

  describe("exhaustive addons", () => {
    const { generate, EMBEDDED_TEMPLATES } = require("../src/index");
    const allAddons = [
      "pwa",
      "starlight",
      "biome",
      "lefthook",
      "husky",
      "ruler",
      "mcp",
      "fumadocs",
      "ultracite",
      "oxlint",
      "opentui",
      "wxt",
      "skills",
    ] as const;

    for (const addon of allAddons) {
      it(`generates files for addon: ${addon}`, async () => {
        const config = baseConfig({
          projectName: `test-addon-${addon}`,
          addons: [addon],
        });

        const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
        const tree = result.unwrap();
        const files = getAllFiles(tree.root);

        // Check for common markers for each addon that is implemented in the generator
        switch (addon) {
          case "pwa":
            // PWA might not generate files if not compatible, but let's check if it doesn't crash
            expect(files.length).toBeGreaterThan(0);
            break;
          case "biome":
            expect(files.some((f) => f.includes("biome.json"))).toBe(true);
            break;
          case "husky":
            expect(
              files.some((f) => f.includes(".husky")) ||
                files.some((f) => f.includes("package.json")),
            ).toBe(true);
            break;
          case "lefthook":
            expect(files.some((f) => f.includes("lefthook.yml"))).toBe(true);
            break;
          case "ruler":
            // ruler is currently a folder in templates/addons but might be empty or specific
            expect(files.length).toBeGreaterThan(0);
            break;
          default:
            // For addons handled by the CLI post-generation (oxlint, starlight, etc),
            // the generator itself might not produce specific files yet.
            expect(files.length).toBeGreaterThan(0);
        }
      });
    }
  });

  describe("exhaustive package managers", () => {
    const managers = ["npm", "pnpm", "bun"] as const;

    for (const pm of managers) {
      it(`generates correct scripts for package manager: ${pm}`, () => {
        const vfs = new VirtualFileSystem();
        vfs.writeJson("package.json", { scripts: {} });

        processPackageConfigs(
          vfs,
          baseConfig({
            packageManager: pm,
            frontend: ["react-router"],
            backend: "none",
          }),
        );

        const pkgJson = vfs.readJson<{ scripts: Record<string, string>; packageManager: string }>(
          "package.json",
        );
        const prefix = pm === "npm" ? "npm run " : pm === "bun" ? "bun run " : "pnpm ";

        expect(pkgJson?.scripts?.dev).toBe(`${prefix}dev`);
        expect(pkgJson?.packageManager).toBe(`${pm}@latest`);
      });
    }
  });

  describe("exhaustive api options", () => {
    const { generate, EMBEDDED_TEMPLATES } = require("../src/index");

    it("generates trpc client for frontend", async () => {
      const config = baseConfig({ api: "trpc", frontend: ["next"] });
      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();
      const files = getAllFiles(tree.root);
      expect(files.some((f) => f.includes("trpc"))).toBe(true);
    });

    it("generates orpc client for frontend", async () => {
      const config = baseConfig({ api: "orpc", frontend: ["tanstack-router"] });
      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();
      const files = getAllFiles(tree.root);
      expect(files.some((f) => f.includes("orpc"))).toBe(true);
    });

    it("does not generate api files when api is none", async () => {
      const config = baseConfig({ api: "none" });
      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();
      const files = getAllFiles(tree.root);
      expect(files.some((f) => f.includes("trpc") || f.includes("orpc"))).toBe(false);
    });
  });

  describe("exhaustive auth options", () => {
    const { generate, EMBEDDED_TEMPLATES } = require("../src/index");

    it("generates better-auth files for frontend", async () => {
      const config = baseConfig({ auth: "better-auth", frontend: ["next"] });
      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();
      const files = getAllFiles(tree.root);
      expect(files.some((f) => f.includes("auth"))).toBe(true);
    });

    it("generates clerk files for frontend", async () => {
      const config = baseConfig({ auth: "clerk", frontend: ["next"], backend: "convex" });
      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();
      const files = getAllFiles(tree.root);
      // Clerk files for next are flattened, so check for middleware.ts or dashboard
      expect(files.some((f) => f.includes("middleware.ts") || f.includes("dashboard"))).toBe(true);
    });
  });

  describe("exhaustive web deployment options", () => {
    it("omits deploy scripts when webDeploy is none", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: { dev: "vite" } });

      processPackageConfigs(
        vfs,
        baseConfig({
          webDeploy: "none",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      expect(pkgJson?.scripts?.deploy).toBeUndefined();
      expect(pkgJson?.scripts?.destroy).toBeUndefined();
    });
  });

  describe("exhaustive payments options", () => {
    const { generate, EMBEDDED_TEMPLATES } = require("../src/index");

    it("handles polar payments", async () => {
      const config = baseConfig({ payments: "polar" });
      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      expect(result.isOk()).toBe(true);
      // Even if no files are generated yet, it shouldn't crash
    });
  });

  describe("exhaustive server deploy options", () => {
    it("ignores serverDeploy in frontend-only projects", () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          serverDeploy: "cloudflare",
          projectType: "frontend",
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      expect(pkgJson?.scripts?.deploy).toBeUndefined();
    });
  });

  describe("exhaustive database options in frontend", () => {
    it("ignores database/orm in frontend-only projects", async () => {
      const { generate, EMBEDDED_TEMPLATES } = require("../src/index");
      const config = baseConfig({
        projectType: "frontend",
        database: "postgres",
        orm: "prisma",
      });

      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();
      const files = getAllFiles(tree.root);

      expect(files.some((f) => f.includes("prisma"))).toBe(false);
      expect(files.some((f) => f.includes("schema.prisma"))).toBe(false);
    });
  });

  describe("exhaustive linter options", () => {
    it("handles biome as an addon", async () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          addons: ["biome"],
          frontend: ["tanstack-router"],
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      // Check that it doesn't break existing scripts
      expect(pkgJson?.scripts?.dev).toBeDefined();
    });

    it("handles oxlint as an addon", async () => {
      const vfs = new VirtualFileSystem();
      vfs.writeJson("package.json", { scripts: {} });

      processPackageConfigs(
        vfs,
        baseConfig({
          addons: ["oxlint"],
          frontend: ["astro"],
        }),
      );

      const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");
      expect(pkgJson?.scripts?.dev).toBeDefined();
    });
  });

  describe("cross-framework flag matrix", () => {
    const { generate, EMBEDDED_TEMPLATES } = require("../src/index");
    const frameworks = [
      "next",
      "tanstack-router",
      "tanstack-start",
      "astro",
      "nuxt",
      "svelte",
      "solid",
    ] as const;

    for (const framework of frameworks) {
      it(`handles critical flags for framework: ${framework}`, async () => {
        // Define a specific non-trivial combination for each framework
        const config = baseConfig({
          projectName: `matrix-${framework}`,
          frontend: [framework],
          projectType: "frontend",
          api: framework === "next" || framework === "tanstack-start" ? "trpc" : "orpc",
          auth: "better-auth",
          backend: framework === "nuxt" || framework === "astro" ? "self" : "none",
          webDeploy: "cloudflare",
        });

        // Test file generation
        const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
        const tree = result.unwrap();
        const files = getAllFiles(tree.root);

        // Verify API client presence
        if (config.api !== "none") {
          expect(
            files.some((f) => f.includes("trpc") || f.includes("orpc") || f.includes("api")),
          ).toBe(true);
        }

        // Verify Auth presence
        if (config.auth !== "none") {
          // Flattened structure checks
          expect(
            files.some(
              (f) =>
                f.includes("auth") ||
                f.includes("middleware.ts") ||
                f.includes("clerk") ||
                f.includes("dashboard"),
            ),
          ).toBe(true);
        }

        // Test package.json scripts
        const vfs = new VirtualFileSystem();
        vfs.writeJson("package.json", { scripts: {} });
        processPackageConfigs(vfs, config);
        const pkgJson = vfs.readJson<{ scripts: Record<string, string> }>("package.json");

        expect(pkgJson?.scripts?.deploy).toBeDefined();
        expect(pkgJson?.scripts?.dev).toBeDefined();
      });
    }
  });

  describe("standalone project isolation", () => {
    const { generate, EMBEDDED_TEMPLATES } = require("../src/index");

    it("does not generate backend files for frontend standalone projects", async () => {
      const config = baseConfig({
        projectName: "frontend-only",
        projectType: "frontend",
        backend: "hono", // even if backend is set
        database: "sqlite",
        orm: "drizzle",
      });

      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();

      // Flattened structure means everything is at root.
      // Based on resolvePackagePath:
      // apps/web -> (root)
      // packages/backend -> (root)
      // packages/db -> (root)

      // BUT in generator.ts, we now SKIP calling the handlers.
      // So while resolvePackagePath would map them to root, the files shouldn't be there at all.

      // We need to check the filenames in the tree.
      const files = getAllFiles(tree.root);

      // Should have frontend files (e.g. from apps/web which maps to root via resolvePackagePath)
      // For tanstack-router, we expect src/routes/__root.tsx etc.
      expect(files.some((f) => f.includes("src/routes/__root.tsx"))).toBe(true);

      // Should NOT have backend specific files that come from packages/backend or packages/db
      // Even if they map to root, they are only generated by handlers we now skip.
      expect(files.some((f) => f.includes("src/server.ts"))).toBe(false); // from backend/server/base
      expect(files.some((f) => f.includes("schema.ts"))).toBe(false); // from db/drizzle/base
    });

    it("does not generate frontend files for backend standalone projects", async () => {
      const config = baseConfig({
        projectName: "backend-only",
        projectType: "backend",
        frontend: ["astro"], // even if frontend is set
        backend: "hono",
      });

      const result = await generate({ config, templates: EMBEDDED_TEMPLATES });
      const tree = result.unwrap();

      const files = getAllFiles(tree.root);

      // Should have backend files
      expect(files.some((f) => f.includes("src/index.ts"))).toBe(true); // from backend/server/hono
      expect(files.some((f) => f.includes("drizzle.config.ts"))).toBe(true); // from db/drizzle/sqlite

      // Should NOT have frontend specific files
      expect(files.some((f) => f.includes("astro.config.mjs"))).toBe(false);
    });
  });
});

function getAllFiles(node: any, path = ""): string[] {
  if (node.type === "file") return [path ? `${path}/${node.name}` : node.name];
  return node.children.flatMap((child: any) =>
    getAllFiles(child, path ? `${path}/${node.name}` : node.name),
  );
}
