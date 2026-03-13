"use client";

import { usePathname } from "next/navigation";

import { getRoutesForVersion } from "@/lib/routes-config";

import { useVersion } from "./context/version";
import SubLink from "./sublink";

export default function DocsMenu({ isSheet = false }) {
  const { currentVersion } = useVersion();
  const pathname = usePathname();
  if (!pathname.startsWith("/docs")) return null;
  const routes = getRoutesForVersion(currentVersion);

  return (
    <div className="flex flex-col gap-3.5 mt-5">
      {routes.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/docs/${currentVersion}${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
