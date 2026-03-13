import { GithubIcon, MoveUpRightIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ReactNode } from "react";

import { ModeToggle } from "@/components/theme-toggle";
import { SheetClose } from "@/components/ui/sheet";

import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import NavGetStarted from "./nav-get-started";
import NavGuides from "./nav-guides";
import Search from "./search";
import { buttonVariants } from "./ui/button";

const VersionManager = dynamic(() => import("./version-select"), {
  ssr: false,
});

type NavLink =
  | {
      title: string;
      href: string;
      external?: boolean;
    }
  | { component: ReactNode; href: null };

export const NAVLINKS: NavLink[] = [
  {
    href: null,
    component: <NavGetStarted />,
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  {
    title: "Builder",
    href: "/builder",
  },
  {
    href: null,
    component: <NavGuides />,
  },
  {
    title: "Community",
    href: "https://github.com/nuflakbrr/bikinproject/discussions",
    external: true,
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-1 max-w-[1530px] mx-auto h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-4">
            <div className="sm:flex hidden gap-3">
              <Logo />
              <VersionManager />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://github.com/nisabmohd/NexDocs"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-2xl">📦</span>
      <h2 className="font-bold text-md">BikinProject</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp =
          item.href == null ? (
            item.component
          ) : (
            <Anchor
              key={item.title + item.href}
              activeClassName="text-primary font-semibold"
              absolute
              className="flex items-center gap-1"
              href={item.href}
            >
              {item.title}{" "}
              {item.external && <MoveUpRightIcon className="w-3 h-3 align-super" strokeWidth={3} />}
            </Anchor>
          );
        return isSheet ? (
          <SheetClose key={item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
