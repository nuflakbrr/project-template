export function shouldSkipExternalCommands(): boolean {
  return process.env.BPA_SKIP_EXTERNAL_COMMANDS === "1" || process.env.BPA_TEST_MODE === "1";
}
