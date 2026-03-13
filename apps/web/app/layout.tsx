import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const VersionContextProvider = dynamic(() => import("@/components/context/version"), {
  ssr: false,
});

export const metadata: Metadata = {
  title:
    "BikinProject - An package starter project generator that makes it easier when create a project.",
  metadataBase: new URL("https://nuflakbrr.github.io/bikinproject"),
  description: "An package starter project generator that makes it easier when create a project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VersionContextProvider>
            <Navbar />
            <Toaster />
            <main className="sm:container mx-auto w-[88vw] h-auto">{children}</main>
            <Footer />
          </VersionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
