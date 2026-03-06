import path from "node:path";

import type { BikinProjectConfig } from "@bikinproject/types";
import fs from "fs-extra";
import { applyEdits, modify, parse } from "jsonc-parser";

const BPA_CONFIG_FILE = "bpa.jsonc";

/**
 * Reads the BPA configuration file from the project directory.
 */
export async function readBpaConfig(projectDir: string): Promise<BikinProjectConfig | null> {
  try {
    const configPath = path.join(projectDir, BPA_CONFIG_FILE);

    if (!(await fs.pathExists(configPath))) {
      return null;
    }

    const configContent = await fs.readFile(configPath, "utf-8");
    const config = parse(configContent) as BikinProjectConfig;
    return config;
  } catch {
    return null;
  }
}

/**
 * Updates specific fields in the BPA configuration file.
 */
export async function updateBpaConfig(
  projectDir: string,
  updates: Partial<Pick<BikinProjectConfig, "addons" | "webDeploy" | "serverDeploy">>,
): Promise<void> {
  try {
    const configPath = path.join(projectDir, BPA_CONFIG_FILE);

    if (!(await fs.pathExists(configPath))) {
      return;
    }

    let content = await fs.readFile(configPath, "utf-8");

    // Apply each update using jsonc-parser's modify (preserves comments)
    for (const [key, value] of Object.entries(updates)) {
      const edits = modify(content, [key], value, { formattingOptions: { tabSize: 2 } });
      content = applyEdits(content, edits);
    }

    await fs.writeFile(configPath, content, "utf-8");
  } catch {
    // Silent failure
  }
}
