import { UserCancelledError } from "../utils/errors";
import { isCancel, navigableSelect } from "./navigable";

export type ProjectType = "frontend" | "backend";

export async function getProjectTypeChoice(
  initialValue?: ProjectType,
): Promise<ProjectType | symbol> {
  const options = [
    {
      value: "frontend" as const,
      label: "Frontend Only",
      hint: "Create a single-page application (React, Vue, Svelte, etc.)",
    },
    {
      value: "backend" as const,
      label: "Backend Only",
      hint: "Create an API server (Hono, Express, Fastify, etc.)",
    },
  ];

  const response = await navigableSelect<ProjectType>({
    message: "What type of project do you want to create?",
    options,
    initialValue: initialValue ?? "frontend",
  });

  if (isCancel(response)) {
    throw new UserCancelledError({ message: "Operation cancelled" });
  }

  return response;
}
