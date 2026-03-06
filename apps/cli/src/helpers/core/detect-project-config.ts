import path from "node:path";

import { Result } from "better-result";
import fs from "fs-extra";

import { readBpaConfig } from "../../utils/bpa-config";

export async function detectProjectConfig(projectDir: string) {
  const result = await Result.tryPromise({
    try: async () => {
      const bpaConfig = await readBpaConfig(projectDir);
      if (bpaConfig) {
        return {
          projectDir,
          projectName: path.basename(projectDir),
          database: bpaConfig.database,
          orm: bpaConfig.orm,
          backend: bpaConfig.backend,
          runtime: bpaConfig.runtime,
          frontend: bpaConfig.frontend,
          addons: bpaConfig.addons,
          examples: bpaConfig.examples,
          auth: bpaConfig.auth,
          payments: bpaConfig.payments,
          packageManager: bpaConfig.packageManager,
          dbSetup: bpaConfig.dbSetup,
          api: bpaConfig.api,
          webDeploy: bpaConfig.webDeploy,
          serverDeploy: bpaConfig.serverDeploy,
        };
      }

      return null;
    },
    catch: () => null,
  });

  return result.isOk() ? result.value : null;
}

export async function isBetterTStackProject(projectDir: string): Promise<boolean> {
  const result = await Result.tryPromise({
    try: () => fs.pathExists(path.join(projectDir, "bpa.jsonc")),
    catch: () => false,
  });

  return result.isOk() ? result.value : false;
}
