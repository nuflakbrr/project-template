import { DEFAULT_CONFIG } from "../constants";
import type { Backend, Frontend } from "../types";
import { isFrontendAllowedWithBackend } from "../utils/compatibility-rules";
import { isFirstPrompt } from "../utils/context";
import { UserCancelledError } from "../utils/errors";
import {
  GO_BACK_SYMBOL,
  isCancel,
  isGoBack,
  navigableMultiselect,
  navigableSelect,
  setIsFirstPrompt,
} from "./navigable";

export async function getFrontendChoice(
  frontendOptions?: Frontend[],
  backend?: Backend,
  auth?: string,
): Promise<Frontend[] | symbol> {
  if (frontendOptions !== undefined) return frontendOptions;

  while (true) {
    const allWebOptions = [
      {
        value: "tanstack-router" as const,
        label: "TanStack Router",
        hint: "Modern and scalable routing for React Applications",
      },
      {
        value: "react-router" as const,
        label: "React Router",
        hint: "A user‑obsessed, standards‑focused, multi‑strategy router",
      },
      {
        value: "next" as const,
        label: "Next.js",
        hint: "The React Framework for the Web",
      },
      {
        value: "nuxt" as const,
        label: "Nuxt",
        hint: "The Progressive Web Framework for Vue.js",
      },
      {
        value: "svelte" as const,
        label: "Svelte",
        hint: "Web development for the rest of us",
      },
      {
        value: "solid" as const,
        label: "Solid",
        hint: "Simple and performant reactivity for building user interfaces",
      },
      {
        value: "astro" as const,
        label: "Astro",
        hint: "The web framework for content-driven websites",
      },
      {
        value: "tanstack-start" as const,
        label: "TanStack Start",
        hint: "SSR, Server Functions, API Routes and more with TanStack Router",
      },
    ];

    const webOptions = allWebOptions.filter((option) =>
      isFrontendAllowedWithBackend(option.value, backend, auth),
    );

    const webFramework = await navigableSelect<Frontend>({
      message: "Which frontend framework do you want to use?",
      options: webOptions,
      initialValue: DEFAULT_CONFIG.frontend[0],
    });

    if (isGoBack(webFramework)) return GO_BACK_SYMBOL;
    if (isCancel(webFramework)) throw new UserCancelledError({ message: "Operation cancelled" });

    return [webFramework as Frontend];
  }
}
