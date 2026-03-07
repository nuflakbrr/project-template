import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapshot = (): string | undefined => {
  const width = window.innerWidth;

  if (width <= 374) {
    return "Mobile XS";
  } else if (width >= 375 && width <= 424) {
    return "Mobile M";
  } else if (width >= 425 && width <= 767) {
    return "Mobile L";
  } else if (width >= 768 && width <= 1023) {
    return "Tablet";
  } else if (width >= 1024 && width <= 1439) {
    return "Laptop";
  } else if (width >= 1440 && width <= 2559) {
    return "Laptop LG";
  } else if (width >= 2560) {
    return "Laptop XL";
  }

  return undefined;
};

const getServerSnapshot = () => undefined;

const useScreenSize = (): string | undefined => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useScreenSize;
