"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { getRoutesFlatten } from "@/lib/routes-config";

import { useVersion } from "./context/version";

export default function GetStarted() {
  const { currentVersion } = useVersion();
  const routes = getRoutesFlatten(currentVersion);
  return (
    <Link
      href={`/docs/${currentVersion}${routes[0].href}`}
      className={buttonVariants({
        className:
          "px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white dark:text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 border-none",
        size: "lg",
      })}
    >
      Get Started
    </Link>
  );
}
