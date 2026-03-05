import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts", "src/cli.ts", "src/virtual.ts"],
  format: ["esm"],
  clean: true,
  shims: true,
  outDir: "dist",
  dts: true,
  outputOptions: {
    banner: "#!/usr/bin/env node",
  },
  env: {
    BPA_TELEMETRY: process.env.BPA_TELEMETRY || "0",
    CONVEX_INGEST_URL: process.env.CONVEX_INGEST_URL || "",
  },
});
