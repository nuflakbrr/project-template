import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapshot = (): boolean => {
  return window.innerWidth < 1024; // Tailwind 'lg' breakpoint
};

const getServerSnapshot = () => false;

/**
 * Hook to detect if the current screen size is mobile/tablet (below 'lg' breakpoint).
 * @returns boolean
 */
const useMobileResponsive = (): boolean => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMobileResponsive;
