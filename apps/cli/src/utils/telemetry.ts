/**
 * Returns true if telemetry/analytics should be enabled, false otherwise.
 *
 * - If BPA_TELEMETRY_DISABLED is present and "1", disables analytics.
 * - Otherwise, BPA_TELEMETRY: "0" disables, "1" enables (default: enabled).
 */
export function isTelemetryEnabled() {
  const BPA_TELEMETRY_DISABLED = process.env.BPA_TELEMETRY_DISABLED;
  const BPA_TELEMETRY = process.env.BPA_TELEMETRY;

  if (BPA_TELEMETRY_DISABLED !== undefined) {
    return BPA_TELEMETRY_DISABLED !== "1";
  }
  if (BPA_TELEMETRY !== undefined) {
    return BPA_TELEMETRY === "1";
  }
  // Default: enabled
  return true;
}
