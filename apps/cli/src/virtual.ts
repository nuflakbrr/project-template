/**
 * Virtual filesystem export for web preview
 * Re-exports from @bikinproject/template-generator for browser-compatible usage
 */

// Re-export everything from template-generator for web/programmatic usage
export {
  // Generator functions
  generate,
  // Virtual file system types
  VirtualFileSystem,
  type VirtualFileTree,
  type VirtualFile,
  type VirtualDirectory,
  type VirtualNode,
  // Generator types
  type GeneratorOptions,
  // Error types
  GeneratorError,
  // Result type for consumers
  Result,
  // Embedded templates for browser usage
  EMBEDDED_TEMPLATES,
  TEMPLATE_COUNT,
} from "@bikinproject/template-generator";

// Re-export types needed for configuration options
export type {
  Database,
  ORM,
  Backend,
  Runtime,
  Frontend,
  Addons,
  PackageManager,
  DatabaseSetup,
  API,
  Auth,
  WebDeploy,
  ServerDeploy,
  ProjectConfig,
} from "@bikinproject/types";
