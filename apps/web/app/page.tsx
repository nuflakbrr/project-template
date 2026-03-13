"use client";
import { Clipboard, MoveUpRightIcon, TerminalIcon, GithubIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

import GetStarted from "../components/get-started";

export default function Home() {
  const { toast } = useToast();

  const onCopy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    toast({
      description: "Command successfully copied to clipboard!",
    });
  };

  const commands = {
    npm: "npx create-bikinproject-app@latest",
    pnpm: "pnpm dlx create-bikinproject-app@latest",
    bun: "bunx create-bikinproject-app@latest",
  };

  return (
    <div className="relative min-h-screen overflow-hidden -mt-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 pt-48 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-8 text-left">
            <Link
              href="https://github.com/nuflakbrr/bikinproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
                </span>
                Give it ⭐ on GitHub
              </div>
            </Link>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              Bikin Project Jadi <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-blue-500 dark:to-cyan-400">
                Lebih Sat-Set & Terstruktur
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
              Generator starter project yang didesain untuk kenyamanan developer. Lupakan setup
              manual, cukup satu perintah dan project Anda siap tempur.
            </p>

            <Tabs defaultValue="pnpm" className="relative group">
              <div className="bg-zinc-100 dark:bg-zinc-900 p-2 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 font-mono text-sm md:text-base flex flex-col gap-2">
                <div className="flex items-center justify-between px-2 pt-1">
                  <TabsList className="h-auto p-0 bg-transparent border-none gap-4">
                    <TabsTrigger
                      value="pnpm"
                      className="p-0 text-xs font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 text-zinc-500 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform"
                    >
                      pnpm
                    </TabsTrigger>
                    <TabsTrigger
                      value="npm"
                      className="p-0 text-xs font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 text-zinc-500 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform"
                    >
                      npm
                    </TabsTrigger>
                    <TabsTrigger
                      value="bun"
                      className="p-0 text-xs font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 text-zinc-500 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform"
                    >
                      bun
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex items-center">
                    <TabsContent value="npm" className="m-0 p-0 border-none shadow-none">
                      <CopyButton command={commands.npm} onCopy={onCopy} />
                    </TabsContent>
                    <TabsContent value="pnpm" className="m-0 p-0 border-none shadow-none">
                      <CopyButton command={commands.pnpm} onCopy={onCopy} />
                    </TabsContent>
                    <TabsContent value="bun" className="m-0 p-0 border-none shadow-none">
                      <CopyButton command={commands.bun} onCopy={onCopy} />
                    </TabsContent>
                  </div>
                </div>
                <div className="px-2 pb-2 flex items-center h-10">
                  <span className="text-zinc-800 dark:text-zinc-200">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">$</span>
                    <TabsContent value="npm" className="inline m-0 p-0 border-none shadow-none">
                      {commands.npm}
                    </TabsContent>
                    <TabsContent value="pnpm" className="inline m-0 p-0 border-none shadow-none">
                      {commands.pnpm}
                    </TabsContent>
                    <TabsContent value="bun" className="inline m-0 p-0 border-none shadow-none">
                      {commands.bun}
                    </TabsContent>
                  </span>
                </div>
              </div>
            </Tabs>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/docs/v2.1.5/getting-started/installation"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Coba Sekarang
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 text-center"
              >
                Lihat Fitur
              </Link>
            </div>
          </div>

          {/* Right Side: Terminal Mock-up */}
          <div className="lg:w-1/2 w-full animate-float">
            <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-950 max-w-2xl mx-auto">
              <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5 select-none">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 font-medium">
                  bash — create-bikinproject-app
                </div>
              </div>

              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[400px]">
                <TerminalContent command={commands.pnpm} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div
        id="features"
        className="relative container mx-auto px-4 py-24 border-t border-zinc-200 dark:border-white/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🚀"
            title="Fast Scaffolding"
            description="Generate a complete, production-ready project structure in less than a minute."
          />
          <FeatureCard
            icon="🛡️"
            title="Type-Safe"
            description="Built-in TypeScript support with strict configurations for maximum reliability."
          />
          <FeatureCard
            icon="🎨"
            title="Customizable"
            description="Choose your preferred tools: Drizzle, Prisma, tRPC, Shadcn UI, and more."
          />
        </div>
      </div>
    </div>
  );
}

function TerminalContent({ command }: { command: string }) {
  return (
    <div className="space-y-2">
      <p className="text-zinc-400">┌ create-bikinproject-app</p>
      <p className="flex gap-3">
        <span className="text-cyan-600 dark:text-cyan-400">│</span>
        <span className="text-zinc-800 dark:text-zinc-200">
          ◇ Where should we create your project?
        </span>
      </p>
      <p className="flex gap-3">
        <span className="text-cyan-600 dark:text-cyan-400">│</span>
        <span className="text-cyan-600 dark:text-cyan-400 font-bold underline">./your-project</span>
      </p>
      <p className="text-zinc-400">│</p>
      <p className="flex gap-3">
        <span className="text-cyan-600 dark:text-cyan-400">│</span>
        <span className="text-zinc-800 dark:text-zinc-200">◇ Pick a project type</span>
      </p>
      <p className="flex gap-3">
        <span className="text-cyan-600 dark:text-cyan-400">│</span>
        <span className="text-cyan-600 dark:text-cyan-400 font-bold">
          ● Next.js App Router (Tailwind + TypeScript)
        </span>
      </p>
      <p className="flex gap-3 pl-6">
        <span className="text-zinc-500">○ React.js (Tailwind + JavaScript)</span>
      </p>
      <p className="text-zinc-400">│</p>
      <p className="flex gap-3">
        <span className="text-cyan-600 dark:text-cyan-400">│</span>
        <span className="text-emerald-600 dark:text-emerald-400">⏳ Creating project...</span>
      </p>
      <p className="flex gap-3">
        <span className="text-cyan-600 dark:text-cyan-400">│</span>
        <span className="text-emerald-600 dark:text-emerald-400">
          ✅ Project created successfully!
        </span>
      </p>
      <p className="text-zinc-400">│</p>
      <p className="text-zinc-400 text-xs">────────────────────────╮</p>
      <p className="text-blue-600 dark:text-blue-400 font-bold"> 🎉 Project ready to use!</p>
      <p className="text-zinc-400 text-xs">────────────────────────╯</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-8 rounded-2xl glass hover:bg-white/[0.02] transition-all hover:-translate-y-1">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function CopyButton({ command, onCopy }: { command: string; onCopy: (txt: string) => void }) {
  return (
    <Button
      onClick={() => onCopy(command)}
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
      title="Copy command"
    >
      <Clipboard className="w-4 h-4" />
    </Button>
  );
}

// "use client";
// import { Clipboard, MoveUpRightIcon, TerminalIcon, GithubIcon } from "lucide-react";
// import Link from "next/link";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";

// import GetStarted from "../components/get-started";

// export default function Home() {
//   const { toast } = useToast();

//   const onCopy = (txt: string) => {
//     navigator.clipboard.writeText(txt);
//     toast({
//       description: "Command successfully copied to clipboard!",
//     });
//   };

//   const commands = {
//     npm: "npx create-bikinproject-app@latest",
//     pnpm: "pnpm dlx create-bikinproject-app@latest",
//     bun: "bunx create-bikinproject-app@latest",
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background blobs */}
//       <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//       <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

//       <div className="relative flex flex-col items-center justify-center text-center px-4 py-20 sm:py-32">
//         <Link
//           href="https://github.com/nuflakbrr/bikinproject"
//           className="group relative inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass text-sm font-medium transition-all hover:scale-105"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
//           Give it ⭐ on GitHub <MoveUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//         </Link>

//         <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-7xl">
//           Create Type-Safe Projects <br />
//           <span className="text-gradient">in Seconds.</span>
//         </h1>

//         <p className="mb-10 text-lg sm:text-xl max-w-[700px] text-muted-foreground leading-relaxed">
//           The ultimate CLI toolkit to scaffold modern TypeScript projects with best practices.
//           Batteries included, fully customizable, and ready for production.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
//           <GetStarted />
//           <Button variant="outline" size="lg" className="px-8 glass hover:bg-white/10" asChild>
//             <Link href="https://github.com/nuflakbrr/bikinproject">
//               <GithubIcon className="w-4 h-4 mr-2" /> View GitHub
//             </Link>
//           </Button>
//         </div>

//         <div className="w-full max-w-2xl px-4">
//           <Tabs defaultValue="pnpm" className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-10 dark:opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

//             <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-2xl">
//               <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
//                 <div className="flex items-center gap-6">
//                   <div className="flex items-center text-zinc-500 font-mono text-xs select-none">
//                     <TerminalIcon className="w-4 h-4 mr-2" />
//                   </div>
//                   <TabsList className="h-auto p-0 bg-transparent border-none gap-4">
//                     <TabsTrigger value="pnpm" className="p-0 text-sm font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white text-zinc-500 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform">pnpm</TabsTrigger>
//                     <TabsTrigger value="npm" className="p-0 text-sm font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white text-zinc-500 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform">npm</TabsTrigger>
//                     <TabsTrigger value="bun" className="p-0 text-sm font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white text-zinc-500 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform">bun</TabsTrigger>
//                   </TabsList>
//                 </div>

//                 <div className="flex items-center">
//                   <TabsContent value="npm" className="m-0 p-0 border-none shadow-none"><CopyButton command={commands.npm} onCopy={onCopy} /></TabsContent>
//                   <TabsContent value="pnpm" className="m-0 p-0 border-none shadow-none"><CopyButton command={commands.pnpm} onCopy={onCopy} /></TabsContent>
//                   <TabsContent value="bun" className="m-0 p-0 border-none shadow-none"><CopyButton command={commands.bun} onCopy={onCopy} /></TabsContent>
//                 </div>
//               </div>

//               <div className="px-6 py-4 font-mono text-sm sm:text-base text-left min-h-[70px] flex items-center overflow-x-auto text-zinc-300">
//                 <TabsContent value="npm" className="m-0 w-full animate-in fade-in duration-300 border-none shadow-none">{commands.npm}</TabsContent>
//                 <TabsContent value="pnpm" className="m-0 w-full animate-in fade-in duration-300 border-none shadow-none">{commands.pnpm}</TabsContent>
//                 <TabsContent value="bun" className="m-0 w-full animate-in fade-in duration-300 border-none shadow-none">{commands.bun}</TabsContent>
//               </div>
//             </div>
//           </Tabs>
//         </div>
//       </div>

//       {/* Features section */}
//       <div className="relative max-w-7xl mx-auto px-4 py-24 border-t border-white/5">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <FeatureCard
//             icon="🚀"
//             title="Fast Scaffolding"
//             description="Generate a complete, production-ready project structure in less than a minute."
//           />
//           <FeatureCard
//             icon="🛡️"
//             title="Type-Safe"
//             description="Built-in TypeScript support with strict configurations for maximum reliability."
//           />
//           <FeatureCard
//             icon="🎨"
//             title="Customizable"
//             description="Choose your preferred tools: Drizzle, Prisma, tRPC, Shadcn UI, and more."
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
//   return (
//     <div className="group relative p-8 rounded-2xl glass hover:bg-white/[0.02] transition-all hover:-translate-y-1">
//       <div className="text-3xl mb-4">{icon}</div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-muted-foreground leading-relaxed">{description}</p>
//     </div>
//   );
// }

// function CopyButton({ command, onCopy }: { command: string; onCopy: (txt: string) => void }) {
//   return (
//     <Button
//       onClick={() => onCopy(command)}
//       variant="ghost"
//       size="icon"
//       className="h-8 w-8 text-zinc-500 hover:text-white hover:bg-white/10 transition-colors"
//       title="Copy command"
//     >
//       <Clipboard className="w-4 h-4" />
//     </Button>
//   );
// }
