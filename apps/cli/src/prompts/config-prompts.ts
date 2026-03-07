import { DEFAULT_CONFIG } from "../constants";
import type {
  Addons,
  API,
  Auth,
  Backend,
  Database,
  DatabaseSetup,
  Frontend,
  ORM,
  PackageManager,
  Payments,
  ProjectConfig,
  Runtime,
  ServerDeploy,
  WebDeploy,
} from "../types";
import { isSilent } from "../utils/context";
import { UserCancelledError } from "../utils/errors";
import { getAddonsChoice } from "./addons";
import { getApiChoice } from "./api";
import { getAuthChoice } from "./auth";
import { getBackendFrameworkChoice } from "./backend";
import { getDatabaseChoice } from "./database";
import { getDBSetupChoice } from "./database-setup";
import { getFrontendChoice } from "./frontend";
import { getGitChoice } from "./git";
import { getinstallChoice } from "./install";
import { navigableGroup } from "./navigable-group";
import { getORMChoice } from "./orm";
import { getPackageManagerChoice } from "./package-manager";
import { getPaymentsChoice } from "./payments";
import { getProjectTypeChoice, type ProjectType } from "./project-type";
import { getRuntimeChoice } from "./runtime";
import { getServerDeploymentChoice } from "./server-deploy";
import { getDeploymentChoice } from "./web-deploy";

type PromptGroupResults = {
  projectType: ProjectType;
  frontend: Frontend[];
  backend: Backend;
  runtime: Runtime;
  database: Database;
  orm: ORM;
  api: API;
  auth: Auth;
  payments: Payments;
  addons: Addons[];
  dbSetup: DatabaseSetup;
  git: boolean;
  packageManager: PackageManager;
  install: boolean;
  webDeploy: WebDeploy;
  serverDeploy: ServerDeploy;
};

export async function gatherConfig(
  flags: Partial<ProjectConfig>,
  projectName: string,
  projectDir: string,
  relativePath: string,
) {
  if (isSilent()) {
    return {
      projectName,
      projectDir,
      relativePath,
      frontend: flags.frontend ?? [...DEFAULT_CONFIG.frontend],
      backend: flags.backend ?? DEFAULT_CONFIG.backend,
      runtime: flags.runtime ?? DEFAULT_CONFIG.runtime,
      database: flags.database ?? DEFAULT_CONFIG.database,
      orm: flags.orm ?? DEFAULT_CONFIG.orm,
      auth: flags.auth ?? DEFAULT_CONFIG.auth,
      payments: flags.payments ?? DEFAULT_CONFIG.payments,
      addons: flags.addons ?? [...DEFAULT_CONFIG.addons],
      git: flags.git ?? DEFAULT_CONFIG.git,
      packageManager: flags.packageManager ?? DEFAULT_CONFIG.packageManager,
      install: flags.install ?? DEFAULT_CONFIG.install,
      dbSetup: flags.dbSetup ?? DEFAULT_CONFIG.dbSetup,
      api: flags.api ?? DEFAULT_CONFIG.api,
      webDeploy: flags.webDeploy ?? DEFAULT_CONFIG.webDeploy,
      serverDeploy: flags.serverDeploy ?? DEFAULT_CONFIG.serverDeploy,
    };
  }

  const result = await navigableGroup<PromptGroupResults>(
    {
      projectType: () => {
        if (flags.projectType) return Promise.resolve(flags.projectType as ProjectType);
        if (flags.frontend && flags.frontend.length > 0 && !flags.frontend.includes("none")) {
          return Promise.resolve("frontend" as ProjectType);
        }
        if (flags.backend && flags.backend !== "none") {
          return Promise.resolve("backend" as ProjectType);
        }
        return getProjectTypeChoice();
      },
      frontend: ({ results }) => {
        if (results.projectType === "backend") return Promise.resolve(["none" as Frontend]);
        return getFrontendChoice(flags.frontend, flags.backend, flags.auth);
      },
      backend: ({ results }) => {
        if (results.projectType === "frontend") return Promise.resolve("none" as Backend);
        return getBackendFrameworkChoice(flags.backend, results.frontend);
      },
      runtime: ({ results }) => {
        if (results.projectType === "frontend") return Promise.resolve("none" as Runtime);
        return getRuntimeChoice(flags.runtime, results.backend);
      },
      database: ({ results }) => {
        if (results.projectType === "frontend") return Promise.resolve("none" as Database);
        return getDatabaseChoice(flags.database, results.backend, results.runtime);
      },
      orm: ({ results }) => {
        if (results.projectType === "frontend") return Promise.resolve("none" as ORM);
        return getORMChoice(
          flags.orm,
          results.database !== "none",
          results.database,
          results.backend,
          results.runtime,
        );
      },
      api: ({ results }) => {
        if (results.projectType === "frontend") return Promise.resolve("none" as API);
        return getApiChoice(flags.api, results.frontend, results.backend) as Promise<API>;
      },
      auth: ({ results }) => {
        if (results.projectType === "backend") return Promise.resolve("none" as Auth);
        return getAuthChoice(flags.auth, results.backend, results.frontend);
      },
      payments: ({ results }) => {
        if (results.projectType === "backend") return Promise.resolve("none" as Payments);
        return getPaymentsChoice(flags.payments, results.auth, results.backend, results.frontend);
      },
      addons: ({ results }) => {
        return getAddonsChoice(flags.addons, results.frontend, results.auth);
      },
      dbSetup: ({ results }) => {
        if (results.projectType === "frontend") return Promise.resolve("none" as DatabaseSetup);
        return getDBSetupChoice(
          results.database ?? "none",
          flags.dbSetup,
          results.orm,
          results.backend,
          results.runtime,
        );
      },
      webDeploy: ({ results }) => {
        if (results.projectType === "backend") return Promise.resolve("none" as WebDeploy);
        return getDeploymentChoice(
          flags.webDeploy,
          results.runtime,
          results.backend,
          results.frontend,
        );
      },
      serverDeploy: ({ results }) => {
        if (results.projectType === "frontend") return Promise.resolve("none" as ServerDeploy);
        return getServerDeploymentChoice(
          flags.serverDeploy,
          results.runtime,
          results.backend,
          results.webDeploy,
        );
      },
      git: () => getGitChoice(flags.git),
      packageManager: () => getPackageManagerChoice(flags.packageManager),
      install: () => getinstallChoice(flags.install),
    },
    {
      onCancel: () => {
        throw new UserCancelledError({ message: "Operation cancelled" });
      },
    },
  );

  return {
    projectName: projectName,
    projectDir: projectDir,
    relativePath: relativePath,
    frontend: result.frontend,
    backend: result.backend,
    runtime: result.runtime,
    database: result.database,
    orm: result.orm,
    auth: result.auth,
    payments: result.payments,
    addons: result.addons,
    git: result.git,
    packageManager: result.packageManager,
    install: result.install,
    dbSetup: result.dbSetup,
    api: result.api,
    webDeploy: result.webDeploy,
    serverDeploy: result.serverDeploy,
    projectType: result.projectType,
  };
}
