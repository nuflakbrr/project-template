"use client";

import { getRoutesFlatten } from "@/lib/routes-config";

import Anchor from "./anchor";
import { useVersion } from "./context/version";

export default function NavGuides() {
  const { currentVersion } = useVersion();
  const routes = getRoutesFlatten(currentVersion);
  return (
    <Anchor
      activeClassName="text-primary font-semibold"
      href={`/docs/${currentVersion}${routes[2].href}`}
    >
      Guides
    </Anchor>
  );
}
