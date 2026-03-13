"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const VersionContextProvider = dynamic(() => import("@/components/context/version"), {
  ssr: false,
});

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <VersionContextProvider>
        <Navbar />
        <Toaster />
        <main className={`${isHomePage ? "" : "sm:container mx-auto w-[88vw]"} h-auto`}>
          {children}
        </main>
        <Footer />
      </VersionContextProvider>
    </ThemeProvider>
  );
}
