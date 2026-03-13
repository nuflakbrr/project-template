"use client";
import { Clipboard, MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import GetStarted from "../components/get-started";

export default function Home() {
  const { toast } = useToast();

  const onCopy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    toast({
      description: "Command successfull copied to clipboard!",
    });
  };

  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <Link
        href="https://github.com/nuflakbrr/bikinproject"
        className="flex items-center gap-2 mb-5 underline sm:text-lg underline-offset-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Give it ⭐ on GitHub <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="mb-4 text-3xl font-bold sm:text-6xl">
        An package starter project generator that makes it easier when create a project.
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        The starter project provided is a custom starter project that has been designed in such a
        way that it can be easily used. Starter projects are available with various frameworks and
        programming languages.
      </p>
      <div className="flex flex-row items-center gap-5">
        <GetStarted />
        {/* <Link
          href="#"
          className={buttonVariants({
            variant: "outline",
            className: "px-6",
            size: "lg",
          })}
        >
          Customize
        </Link> */}
      </div>
      <span className="bg-zinc-100 dark:bg-zinc-900 p-5 rounded-xl flex flex-row items-center gap-2 text-zinc-600 dark:text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
        <TerminalIcon className="w-4 h-4 mr-1" />
        npx bikinproject@latest
        <Button
          onClick={() => onCopy("npx bikinproject@latest")}
          className="bg-transparent border-none cursor-pointer"
          variant="ghost"
          size="xs"
        >
          <Clipboard className="w-4 h-4 font-extrabold text-zinc-600 dark:text-zinc-400" />
        </Button>
      </span>
    </div>
  );
}
