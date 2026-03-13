"use client";

import { Clipboard, TerminalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

export default function TerminalTabs() {
  const { toast } = useToast();

  const commands = {
    npm: "npx create-bikinproject-app@latest",
    pnpm: "pnpm dlx create-bikinproject-app@latest",
    bun: "bunx create-bikinproject-app@latest",
  };

  const onCopy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    toast({
      description: "Command successfully copied to clipboard!",
    });
  };

  return (
    <div className="w-full my-6">
      <Tabs defaultValue="pnpm" className="relative group">
        <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-6">
              <div className="flex items-center text-zinc-500 font-mono text-xs select-none">
                <TerminalIcon className="w-4 h-4 mr-2" />
              </div>
              <TabsList className="h-auto p-0 bg-transparent border-none gap-4">
                <TabsTrigger
                  value="pnpm"
                  className="p-0 text-sm font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white text-zinc-500 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform"
                >
                  pnpm
                </TabsTrigger>
                <TabsTrigger
                  value="npm"
                  className="p-0 text-sm font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white text-zinc-500 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform"
                >
                  npm
                </TabsTrigger>
                <TabsTrigger
                  value="bun"
                  className="p-0 text-sm font-mono bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-white text-zinc-500 relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-500 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform"
                >
                  bun
                </TabsTrigger>
              </TabsList>
            </div>

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

          <div className="px-6 py-4 font-mono text-sm sm:text-base text-left min-h-[70px] flex items-center overflow-x-auto text-zinc-300">
            <TabsContent
              value="npm"
              className="m-0 w-full animate-in fade-in duration-300 border-none shadow-none leading-relaxed"
            >
              {commands.npm}
            </TabsContent>
            <TabsContent
              value="pnpm"
              className="m-0 w-full animate-in fade-in duration-300 border-none shadow-none leading-relaxed"
            >
              {commands.pnpm}
            </TabsContent>
            <TabsContent
              value="bun"
              className="m-0 w-full animate-in fade-in duration-300 border-none shadow-none leading-relaxed"
            >
              {commands.bun}
            </TabsContent>
          </div>
        </div>
      </Tabs>
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
