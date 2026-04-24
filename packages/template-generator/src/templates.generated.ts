// Auto-generated - DO NOT EDIT
// Run 'bun run generate-templates' to regenerate

export const EMBEDDED_TEMPLATES: Map<string, string> = new Map([
  ["addons/biome/biome.json.hbs", `{
    "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
	"vcs": {
		"enabled": false,
		"clientKind": "git",
		"useIgnoreFile": false
	},
	"files": {
		"ignoreUnknown": false,
		"includes": [
			"**",
			"!**/.next",
			"!**/dist",
			"!**/.turbo",
			"!**/dev-dist",
			"!**/.zed",
			"!**/.vscode",
			"!**/routeTree.gen.ts",
			"!**/.nuxt",
			"!bpa.jsonc",
			"!**/.wrangler",
			"!**/.alchemy",
			"!**/.svelte-kit",
			"!**/wrangler.jsonc",
			"!**/.source",
			"!**/convex/_generated"
		]
	},
	"formatter": {
		"enabled": true,
		"indentStyle": "tab"
	},
	"assist": { "actions": { "source": { "organizeImports": "on" } } },
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true,
			"correctness": {
				"useExhaustiveDependencies": "info"
			},
			"nursery": {
				"useSortedClasses": {
					"level": "warn",
					"fix": "safe",
					"options": {
						"functions": ["clsx", "cva", "cn"]
					}
				}
			},
			"style": {
				"noParameterAssign": "error",
				"useAsConstAssertion": "error",
				"useDefaultParameterLast": "error",
				"useEnumInitializers": "error",
				"useSelfClosingElements": "error",
				"useSingleVarDeclarator": "error",
				"noUnusedTemplateLiteral": "error",
				"useNumberNamespace": "error",
				"noInferrableTypes": "error",
				"noUselessElse": "error"
			}
		}
	},
	"javascript": {
		"formatter": {
			"quoteStyle": "double"
		}
	},
	"css": {
		"parser": {
			"tailwindDirectives": true
		}
	}
	{{#if (or (includes frontend "svelte") (includes frontend "nuxt"))}}
	,
	"overrides": [
		{
			"includes": ["**/*.svelte", "**/*.vue"],
			"linter": {
				"rules": {
					"style": {
						"useConst": "off",
						"useImportType": "off"
					},
					"correctness": {
						"noUnusedVariables": "off",
						"noUnusedImports": "off"
					}
				}
			}
		}
	]
	{{/if}}
}
`],
  ["addons/husky/.husky/pre-commit", `lint-staged
`],
  ["addons/lefthook/lefthook.yml.hbs", `# Lefthook configuration
# https://github.com/evilmartians/lefthook

pre-commit:
  parallel: true
  jobs:
{{#if (includes addons "biome")}}
    - name: biome
      glob: "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}"
      run: {{packageManager}} biome check --write --no-errors-on-unmatched --files-ignore-unknown=true {staged_files}
      stage_fixed: true
{{else if (includes addons "oxlint")}}
    - name: oxlint
      run: {{packageManager}} oxlint --fix {staged_files}
      stage_fixed: true
    - name: oxfmt
      run: {{packageManager}} oxfmt --write {staged_files}
      stage_fixed: true
{{else}}
    # Add your pre-commit commands here
    # Example:
    # - name: lint
    #   run: {{packageManagerRunCmd}} lint
{{/if}}
`],
  ["addons/pwa/apps/web/next/public/favicon/apple-touch-icon.png", `[Binary file]`],
  ["addons/pwa/apps/web/next/public/favicon/favicon-96x96.png", `[Binary file]`],
  ["addons/pwa/apps/web/next/public/favicon/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="92" height="92"><svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="76" height="76" rx="12" fill="#F5EEFF" stroke="#B79AFF" stroke-width="3"></rect>
  <text x="46" y="56" text-anchor="middle" font-family="monospace" font-size="40" fill="#8F5BFF">$<tspan dx="0" dy="0">_</tspan></text>
</svg><style>@media (prefers-color-scheme: light) { :root { filter: none; } }
@media (prefers-color-scheme: dark) { :root { filter: none; } }
</style></svg>`],
  ["addons/pwa/apps/web/next/public/favicon/site.webmanifest.hbs", `{
	"name": "{{projectName}}",
	"short_name": "{{projectName}}",
	"icons": [
		{
			"src": "/web-app-manifest-192x192.png",
			"sizes": "192x192",
			"type": "image/png",
			"purpose": "maskable"
		},
		{
			"src": "/web-app-manifest-512x512.png",
			"sizes": "512x512",
			"type": "image/png",
			"purpose": "maskable"
		}
	],
	"theme_color": "#ffffff",
	"background_color": "#ffffff",
	"display": "standalone"
}
`],
  ["addons/pwa/apps/web/next/public/favicon/web-app-manifest-192x192.png", `[Binary file]`],
  ["addons/pwa/apps/web/next/public/favicon/web-app-manifest-512x512.png", `[Binary file]`],
  ["addons/pwa/apps/web/next/src/app/manifest.ts.hbs", `import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "{{projectName}}",
		short_name: "{{projectName}}",
		description:
			"my pwa app",
		start_url: "/new",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon/web-app-manifest-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/favicon/web-app-manifest-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
`],
  ["addons/pwa/apps/web/vite/public/logo.png", `[Binary file]`],
  ["addons/pwa/apps/web/vite/pwa-assets.config.ts.hbs", `import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  headLinkOptions: {
    preset: "2023",
  },
  preset,
  images: ["public/logo.png"],
});
`],
  ["addons/ruler/.ruler/bpa.md.hbs", `# BikinProject Project Rules

This is a {{projectName}} project created with BikinProject CLI.

## Project Structure

This is a monorepo with the following structure:

{{#if (or (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "tanstack-start")
(includes frontend "next") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}
- **\`apps/web/\`** - {{#if (eq backend "self")}}Fullstack application{{else}}Frontend application{{/if}}{{#if (includes frontend "tanstack-router")}} (React with TanStack Router){{else if (includes frontend "react-router")}} (React with React Router){{else if (includes frontend "tanstack-start")}} (TanStack Start){{else if (includes frontend "next")}} (Next.js){{else if (includes frontend "nuxt")}} (Nuxt.js){{else if (includes frontend "svelte")}} (SvelteKit){{else if (includes frontend "solid")}} (SolidStart){{/if}}
{{/if}}

{{#if (ne backend "convex")}}
{{#if (and (ne backend "none") (ne backend "self"))}}
- **\`apps/server/\`** - Backend server{{#if (eq backend "hono")}} (Hono){{else if (eq backend "express")}} (Express){{else if (eq backend "fastify")}} (Fastify){{/if}}
{{/if}}
{{else}}
- **\`packages/backend/\`** - Convex backend functions
{{/if}}

{{#if (ne backend "convex")}}
{{#if (ne api "none")}}
- **\`packages/api/\`** - Shared API logic and types
{{/if}}
{{#if (and (ne auth "none") (ne backend "convex"))}}
- **\`packages/auth/\`** - Authentication logic and utilities
{{/if}}
{{#if (and (ne database "none") (ne orm "none"))}}
- **\`packages/db/\`** - Database schema and utilities
{{/if}}
- **\`packages/env/\`** - Shared environment variables and validation
- **\`packages/config/\`** - Shared TypeScript configuration
{{#if (or (eq webDeploy "cloudflare") (eq serverDeploy "cloudflare"))}}
- **\`packages/infra/\`** - Infrastructure as code (Alchemy for Cloudflare)
{{/if}}
{{/if}}

## Available Scripts

- \`{{packageManager}} run dev\` - Start all apps in development mode
{{#if (and (or (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "tanstack-start")
(includes frontend "next") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid")) (ne backend "self"))}}
- \`{{packageManager}} run dev:web\` - Start only the web app
{{/if}}
{{#if (and (ne backend "none") (ne backend "convex") (ne backend "self"))}}
- \`{{packageManager}} run dev:server\` - Start only the server
{{/if}}
- \`{{packageManager}} run build\` - Build all apps
- \`{{packageManager}} run lint\` - Lint all packages
- \`{{packageManager}} run typecheck\` - Type check all packages

{{#if (and (ne database "none") (ne orm "none") (ne backend "convex"))}}
## Database Commands

All database operations should be run from the {{#if (eq backend "self")}}web{{else}}server{{/if}} workspace:

- \`{{packageManager}} run db:push\` - Push schema changes to database
- \`{{packageManager}} run db:studio\` - Open database studio
- \`{{packageManager}} run db:generate\` - Generate {{#if (eq orm "drizzle")}}Drizzle{{else if (eq orm "prisma")}}Prisma{{else}}{{orm}}{{/if}} files
- \`{{packageManager}} run db:migrate\` - Run database migrations

{{#if (eq orm "drizzle")}}
Database schema files are located in {{#if (eq backend "self")}}\`apps/web/src/db/schema/\`{{else}}\`packages/db/src/schema/\`{{/if}}
{{else if (eq orm "prisma")}}
Database schema is located in {{#if (eq backend "self")}}\`apps/web/prisma/schema.prisma\`{{else}}\`packages/db/prisma/schema.prisma\`{{/if}}
{{else if (eq orm "mongoose")}}
Database models are located in {{#if (eq backend "self")}}\`apps/web/src/db/models/\`{{else}}\`packages/db/src/models/\`{{/if}}
{{/if}}
{{/if}}

{{#if (ne api "none")}}
## API Structure

{{#if (eq api "trpc")}}
- tRPC routers are in \`packages/api/src/routers/\`
- Client-side tRPC utils are in \`apps/web/src/utils/trpc.ts\`
{{else if (eq api "orpc")}}
- oRPC contracts and routers are in \`packages/api/src/\`
- Client-side oRPC client is in \`apps/web/src/utils/orpc.ts\`
{{/if}}
{{/if}}

{{#if (eq auth "better-auth")}}
## Authentication

Authentication is powered by Better Auth:
- Auth configuration is in \`packages/auth/src/\`
{{#if (or (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "tanstack-start")
(includes frontend "next") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}
- Web app auth client is in \`apps/web/src/lib/auth-client.ts\`
{{/if}}
{{/if}}

## Project Configuration

This project includes a \`bpa.jsonc\` configuration file that stores your BikinProject settings:

- Contains your selected stack configuration (database, ORM, backend, frontend, etc.)
- Used by the CLI to understand your project structure
- Safe to delete if not needed

## Key Points

- This is a {{#if (includes addons "turborepo")}}Turborepo {{/if}}monorepo using {{packageManager}} workspaces
- Each app has its own \`package.json\` and dependencies
- Run commands from the root to execute across all workspaces
- Run workspace-specific commands with \`{{packageManager}} run command-name\`
{{#if (includes addons "turborepo")}}
- Turborepo handles build caching and parallel execution
{{/if}}
{{#if (or (includes addons "husky") (includes addons "lefthook"))}}
- Git hooks are configured with {{#if (includes addons "husky")}}Husky{{else}}Lefthook{{/if}} for pre-commit checks
{{/if}}
`],
  ["addons/ruler/.ruler/ruler.toml.hbs", `# Ruler Configuration File
# See https://okigu.com/ruler for documentation.

# Default agents to run when --agents is not specified
default_agents = []

# --- Global .gitignore Configuration ---
[gitignore]
# Enable/disable automatic .gitignore updates (default: true)
enabled = true
`],
  ["api/orpc/fullstack/astro/src/pages/rpc/[...rest].ts.hbs", `import type { APIRoute } from "astro";
import { RPCHandler } from "@orpc/server/fetch";
import { onError } from "@orpc/server";
import { appRouter } from "@{{projectName}}/api/routers/index";
import { createContext } from "@{{projectName}}/api/context";

const handler = new RPCHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export const prerender = false;

export const ALL: APIRoute = async ({ request }) => {
  const context = await createContext({ headers: request.headers });

  const { response } = await handler.handle(request, {
    prefix: "/rpc",
    context,
  });

  return response ?? new Response("Not found", { status: 404 });
};
`],
  ["api/orpc/fullstack/next/src/app/api/rpc/[[...rest]]/route.ts.hbs", `import { createContext } from "@{{projectName}}/api/context";
import { appRouter } from "@{{projectName}}/api/routers/index";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { RPCHandler } from "@orpc/server/fetch";
import { onError } from "@orpc/server";
import { NextRequest } from "next/server";

const rpcHandler = new RPCHandler(appRouter, {
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});
const apiHandler = new OpenAPIHandler(appRouter, {
	plugins: [
		new OpenAPIReferencePlugin({
			schemaConverters: [new ZodToJsonSchemaConverter()],
		}),
	],
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

async function handleRequest(req: NextRequest) {
	const rpcResult = await rpcHandler.handle(req, {
		prefix: "/api/rpc",
		context: await createContext(req),
	});
	if (rpcResult.response) return rpcResult.response;

	const apiResult = await apiHandler.handle(req, {
		prefix: "/api/rpc/api-reference",
		context: await createContext(req),
	});
	if (apiResult.response) return apiResult.response;

	return new Response("Not found", { status: 404 });
}

export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const PATCH = handleRequest;
export const DELETE = handleRequest;`],
  ["api/orpc/fullstack/nuxt/app/plugins/orpc.client.ts.hbs", `import type { AppRouterClient } from "@{{projectName}}/api/routers/index";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

export default defineNuxtPlugin(() => {
  const rpcLink = new RPCLink({
    url: \`\${window.location.origin}/rpc\`,
    {{#if (eq auth "better-auth")}}
    fetch(url, options) {
        return fetch(url, {
        ...options,
        credentials: "include",
        });
    },
    {{/if}}
  });

  const client: AppRouterClient = createORPCClient(rpcLink);
  const orpcUtils = createTanstackQueryUtils(client);

  return {
    provide: {
      orpc: orpcUtils,
    },
  };
});
`],
  ["api/orpc/fullstack/nuxt/app/plugins/orpc.server.ts.hbs", `import { createRouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { appRouter } from "@{{projectName}}/api/routers/index";
import { createContext } from "@{{projectName}}/api/context";

export default defineNuxtPlugin(async () => {
  const event = useRequestEvent();

  const context = await createContext({
    headers: event?.headers ?? new Headers(),
  });

  const client = createRouterClient(appRouter, {
    context,
  });

  const orpc = createTanstackQueryUtils(client);

  return {
    provide: {
      orpc,
    },
  };
});
`],
  ["api/orpc/fullstack/nuxt/server/routes/rpc/[...].ts.hbs", `import { RPCHandler } from "@orpc/server/fetch";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import { BatchHandlerPlugin } from "@orpc/server/plugins";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { appRouter } from "@{{projectName}}/api/routers/index";
import { createContext } from "@{{projectName}}/api/context";

const rpcHandler = new RPCHandler(appRouter, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
  plugins: [new BatchHandlerPlugin()],
});

const apiHandler = new OpenAPIHandler(appRouter, {
  plugins: [
    new OpenAPIReferencePlugin({
      schemaConverters: [new ZodToJsonSchemaConverter()],
    }),
  ],
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export default defineEventHandler(async (event) => {
  const request = toWebRequest(event);
  const context = await createContext({ headers: request.headers });

  const rpcResult = await rpcHandler.handle(request, {
    prefix: "/rpc",
    context,
  });
  if (rpcResult.response) return rpcResult.response;

  const apiResult = await apiHandler.handle(request, {
    prefix: "/rpc/api-reference",
    context,
  });
  if (apiResult.response) return apiResult.response;

  setResponseStatus(event, 404, "Not Found");
  return "Not found";
});
`],
  ["api/orpc/fullstack/nuxt/server/routes/rpc/index.ts.hbs", `export { default } from "./[...]";
`],
  ["api/orpc/fullstack/tanstack-start/src/routes/api/rpc/$.ts.hbs", `import { createContext } from "@{{projectName}}/api/context";
import { appRouter } from "@{{projectName}}/api/routers/index";
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { RPCHandler } from "@orpc/server/fetch";
import { onError } from "@orpc/server";
import { createFileRoute } from "@tanstack/react-router";

const rpcHandler = new RPCHandler(appRouter, {
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

const apiHandler = new OpenAPIHandler(appRouter, {
	plugins: [
		new OpenAPIReferencePlugin({
			schemaConverters: [new ZodToJsonSchemaConverter()],
		}),
	],
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

async function handle({ request }: { request: Request }) {
	const rpcResult = await rpcHandler.handle(request, {
		prefix: "/api/rpc",
		context: await createContext({ req: request }),
	});
	if (rpcResult.response) return rpcResult.response;

	const apiResult = await apiHandler.handle(request, {
		prefix: "/api/rpc/api-reference",
		context: await createContext({ req: request }),
	});
	if (apiResult.response) return apiResult.response;

	return new Response("Not found", { status: 404 });
}

export const Route = createFileRoute('/api/rpc/$')({
  server: {
    handlers: {
      HEAD: handle,
      GET: handle,
      POST: handle,
      PUT: handle,
      PATCH: handle,
      DELETE: handle,
    },
  },
})`],
  ["api/orpc/server/_gitignore", `# dependencies (bun install)
node_modules

# output
out
dist
*.tgz

# code coverage
coverage
*.lcov

# logs
logs
_.log
report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# caches
.eslintcache
.cache
*.tsbuildinfo

# IntelliJ based IDEs
.idea

# Finder (MacOS) folder config
.DS_Store
`],
  ["api/orpc/server/package.json.hbs", `{
  "name": "@{{projectName}}/api",
  "exports": {
    ".": {
      "default": "./src/index.ts"
    },
    "./*": {
      "default": "./src/*.ts"
    }
  },
  "type": "module",
  "scripts": {},
  "devDependencies": {},
  "dependencies": {}
}`],
  ["api/orpc/server/src/context.ts.hbs", `{{#if (and (eq backend 'self') (includes frontend "next"))}}
import type { NextRequest } from "next/server";
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export async function createContext(req: NextRequest) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  return {
    session,
  };
{{else}}
  return {}
{{/if}}
}

{{else if (and (eq backend 'self') (includes frontend "tanstack-start"))}}
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export async function createContext({ req }: { req: Request }) {
{{#if (eq auth "better-auth")}}
	const session = await auth.api.getSession({
		headers: req.headers,
	});
	return {
		session,
	};
{{else}}
	return {};
{{/if}}
}

{{else if (and (eq backend 'self') (includes frontend "nuxt"))}}
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export type CreateContextOptions = {
  headers: Headers;
};

export async function createContext({ headers }: CreateContextOptions) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({ headers });
  return {
    session,
  };
{{else}}
  return {};
{{/if}}
}

{{else if (and (eq backend 'self') (includes frontend "astro"))}}
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export type CreateContextOptions = {
  headers: Headers;
};

export async function createContext({ headers }: CreateContextOptions) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({ headers });
  return {
    session,
  };
{{else}}
  return {};
{{/if}}
}

{{else if (eq backend 'hono')}}
import type { Context as HonoContext } from "hono";
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export type CreateContextOptions = {
  context: HonoContext;
};

export async function createContext({ context }: CreateContextOptions) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({
    headers: context.req.raw.headers,
  });
  return {
    session,
  };
{{else}}
  // No auth configured
  return {
    session: null,
  };
{{/if}}
}

{{else if (eq backend 'express')}}
import type { Request } from "express";
{{#if (eq auth "better-auth")}}
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@{{projectName}}/auth";
{{/if}}

interface CreateContextOptions {
	req: Request;
}

export async function createContext(opts: CreateContextOptions) {
{{#if (eq auth "better-auth")}}
	const session = await auth.api.getSession({
		headers: fromNodeHeaders(opts.req.headers),
	});
	return {
		session,
	};
{{else}}
  // No auth configured
	return {
		session: null,
	};
{{/if}}
}

{{else if (eq backend 'fastify')}}
import type { IncomingHttpHeaders } from "node:http";
{{#if (eq auth "better-auth")}}
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@{{projectName}}/auth";
{{/if}}

export async function createContext(req: IncomingHttpHeaders) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req),
  });
  return {
    session,
  };
{{else}}
  // No auth configured
  return {
    session: null,
  };
{{/if}}
}

{{else}}
export async function createContext() {
  return {
    session: null,
  };
}
{{/if}}

export type Context = Awaited<ReturnType<typeof createContext>>;
`],
  ["api/orpc/server/src/index.ts.hbs", `import { ORPCError, os } from "@orpc/server";
import type { Context } from "./context";

export const o = os.$context<Context>();

export const publicProcedure = o;

{{#if (eq auth "better-auth")}}
const requireAuth = o.middleware(async ({ context, next }) => {
  if (!context.session?.user) {
    throw new ORPCError("UNAUTHORIZED");
  }
  return next({
    context: {
      session: context.session,
    },
  });
});

export const protectedProcedure = publicProcedure.use(requireAuth);
{{/if}}
`],
  ["api/orpc/server/src/routers/index.ts.hbs", `{{#if (eq api "orpc")}}
import { {{#if (eq auth "better-auth")}}protectedProcedure, {{/if}}publicProcedure } from "../index";
import type { RouterClient } from "@orpc/server";
{{#if (includes examples "todo")}}
import { todoRouter } from "./todo";
{{/if}}

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  {{#if (eq auth "better-auth")}}
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),
  {{/if}}
  {{#if (includes examples "todo")}}
  todo: todoRouter,
  {{/if}}
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
{{else if (eq api "trpc")}}
import {
  {{#if (eq auth "better-auth")}}protectedProcedure, {{/if}}publicProcedure,
  router,
} from "../index";
{{#if (includes examples "todo")}}
import { todoRouter } from "./todo";
{{/if}}

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  {{#if (eq auth "better-auth")}}
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),
  {{/if}}
  {{#if (includes examples "todo")}}
  todo: todoRouter,
  {{/if}}
});
export type AppRouter = typeof appRouter;
{{else}}
export const appRouter = {};
export type AppRouter = typeof appRouter;
{{/if}}
`],
  ["api/orpc/server/tsconfig.json.hbs", `{
  "extends": "@{{projectName}}/config/tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "composite": true
  }
}`],
  ["api/orpc/web/astro/src/lib/orpc.ts.hbs", `import type { AppRouterClient } from "@{{projectName}}/api/routers/index";

import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";

{{#if (eq backend "self")}}
export const link = new RPCLink({
  url: \`\${window.location.origin}/rpc\`,
});
{{else}}
import { PUBLIC_SERVER_URL } from "astro:env/client";

export const link = new RPCLink({
  url: \`\${PUBLIC_SERVER_URL}/rpc\`,
{{#if (eq auth "better-auth")}}
  fetch(url, options) {
    return fetch(url, {
      ...options,
      credentials: "include",
    });
  },
{{/if}}
});
{{/if}}

export const orpc: AppRouterClient = createORPCClient(link);
`],
  ["api/orpc/web/nuxt/app/plugins/orpc.ts.hbs", `import { defineNuxtPlugin } from '#app'
import type { AppRouterClient } from "@{{projectName}}/api/routers/index";
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const rpcUrl = \`\${config.public.serverUrl}/rpc\`;

  const rpcLink = new RPCLink({
    url: rpcUrl,
    {{#if (eq auth "better-auth")}}
    fetch(url, options) {
        return fetch(url, {
        ...options,
        credentials: "include",
        });
    },
    {{/if}}
  })


  const client: AppRouterClient = createORPCClient(rpcLink)
  const orpcUtils = createTanstackQueryUtils(client)

  return {
    provide: {
      orpc: orpcUtils
    }
  }
})
`],
  ["api/orpc/web/nuxt/app/plugins/vue-query.ts.hbs", `import type {
  DehydratedState,
  VueQueryPluginOptions,
} from '@tanstack/vue-query'
import {
  dehydrate,
  hydrate,
  QueryCache,
  QueryClient,
  VueQueryPlugin,
} from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>('vue-query')

  const toast = useToast()

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        console.log(error)
        toast.add({
          title: 'Error',
          description: error?.message || 'An unexpected error occurred.',
        })
      },
    }),
  })
  const options: VueQueryPluginOptions = { queryClient }

  nuxt.vueApp.use(VueQueryPlugin, options)

  if (import.meta.server) {
    nuxt.hooks.hook('app:rendered', () => {
      vueQueryState.value = dehydrate(queryClient)
    })
  }

  if (import.meta.client) {
    nuxt.hooks.hook('app:created', () => {
      hydrate(queryClient, vueQueryState.value)
    })
  }
})
`],
  ["api/orpc/web/react/base/src/utils/orpc.ts.hbs", `import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
{{#if (and (includes frontend "tanstack-start") (eq backend "self"))}}
import { createRouterClient } from "@orpc/server";
import type { RouterClient } from "@orpc/server";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { appRouter } from "@{{projectName}}/api/routers/index";
import { createContext } from "@{{projectName}}/api/context";
{{else if (includes frontend "tanstack-start")}}
import type { RouterClient } from "@orpc/server";
import type { AppRouter } from "@{{projectName}}/api/routers/index";
import { env } from "@{{projectName}}/env/web";
{{else}}
import type { AppRouterClient } from "@{{projectName}}/api/routers/index";
{{#unless (eq backend "self")}}
import { env } from "@{{projectName}}/env/web";
{{/unless}}
{{/if}}

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error, query) => {
			toast.error(\`Error: \${error.message}\`, {
				action: {
					label: "retry",
					onClick: query.invalidate,
				},
			});
		},
	}),
});

{{#if (and (includes frontend "tanstack-start") (eq backend "self"))}}
const getORPCClient = createIsomorphicFn()
	.server(() =>
		createRouterClient(appRouter, {
			context: async () => {
				return createContext({ req: getRequest() });
			},
		}),
	)
	.client((): RouterClient<typeof appRouter> => {
			const link = new RPCLink({
			url: \`\${window.location.origin}/api/rpc\`,
{{#if (eq auth "better-auth")}}
			fetch(url, options) {
				return fetch(url, {
					...options,
					credentials: "include",
				});
			},
{{/if}}
		});

		return createORPCClient(link);
	});

export const client: RouterClient<typeof appRouter> = getORPCClient();
{{else if (includes frontend "tanstack-start")}}
const link = new RPCLink({
	url: \`\${env.VITE_SERVER_URL}/rpc\`,
{{#if (eq auth "better-auth")}}
	fetch(url, options) {
		return fetch(url, {
			...options,
			credentials: "include",
		});
	},
{{/if}}
});

const getORPCClient = () => {
	return createORPCClient(link) as RouterClient<AppRouter>;
};

export const client: RouterClient<AppRouter> = getORPCClient();
{{else}}
export const link = new RPCLink({
{{#if (and (eq backend "self") (includes frontend "next"))}}
	url: \`\${typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"}/api/rpc\`,
{{else if (includes frontend "next")}}
	url: \`\${env.NEXT_PUBLIC_SERVER_URL}/rpc\`,
{{else}}
	url: \`\${env.VITE_SERVER_URL}/rpc\`,
{{/if}}
{{#if (eq auth "better-auth")}}
	fetch(url, options) {
		return fetch(url, {
			...options,
			credentials: "include",
		});
	},
{{#if (includes frontend "next")}}
	headers: async () => {
		if (typeof window !== "undefined") {
			return {}
		}

		const { headers } = await import("next/headers")
		return Object.fromEntries(await headers())
	},
{{/if}}
{{/if}}
});

export const client: AppRouterClient = createORPCClient(link)
{{/if}}

export const orpc = createTanstackQueryUtils(client)

`],
  ["api/orpc/web/solid/src/utils/orpc.ts.hbs", `import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { QueryCache, QueryClient } from "@tanstack/solid-query";
import type { AppRouterClient } from "@{{projectName}}/api/routers/index";
import { env } from "@{{projectName}}/env/web";

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			console.error(\`Error: \${error.message}\`);
		},
	}),
});

export const link = new RPCLink({
	url: \`\${env.VITE_SERVER_URL}/rpc\`,
{{#if (eq auth "better-auth")}}
	fetch(url, options) {
		return fetch(url, {
			...options,
			credentials: "include",
		});
	},
{{/if}}
});

export const client: AppRouterClient = createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);
`],
  ["api/orpc/web/svelte/src/lib/orpc.ts.hbs", `import { PUBLIC_SERVER_URL } from "$env/static/public";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { QueryCache, QueryClient } from "@tanstack/svelte-query";
import type { AppRouterClient } from "@{{projectName}}/api/routers/index";

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => {
			console.error(\`Error: \${error.message}\`);
		},
	}),
});

export const link = new RPCLink({
	url: \`\${PUBLIC_SERVER_URL}/rpc\`,
	{{#if (eq auth "better-auth")}}
	fetch(url, options) {
		return fetch(url, {
			...options,
			credentials: "include",
		});
	},
	{{/if}}
});

export const client: AppRouterClient = createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);
`],
  ["api/trpc/fullstack/next/src/app/api/trpc/[trpc]/route.ts.hbs", `import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@{{projectName}}/api/routers/index";
import { createContext } from "@{{projectName}}/api/context";
import { NextRequest } from "next/server";

function handler(req: NextRequest) {
	return fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext: () => createContext(req),
	});
}
export { handler as GET, handler as POST };
`],
  ["api/trpc/fullstack/tanstack-start/src/routes/api/trpc/$.ts.hbs", `import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@{{projectName}}/api/routers/index'
import { createContext } from '@{{projectName}}/api/context'
import { createFileRoute } from '@tanstack/react-router'

function handler({ request }: { request: Request }) {
  return fetchRequestHandler({
    req: request,
    router: appRouter,
    createContext,
    endpoint: '/api/trpc',
  })
}

export const Route = createFileRoute('/api/trpc/$')({
  server: {
    handlers: {
      GET: handler,
      POST: handler,
    },
  },
})
`],
  ["api/trpc/server/_gitignore", `# dependencies (bun install)
node_modules

# output
out
dist
*.tgz

# code coverage
coverage
*.lcov

# logs
logs
_.log
report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# caches
.eslintcache
.cache
*.tsbuildinfo

# IntelliJ based IDEs
.idea

# Finder (MacOS) folder config
.DS_Store
`],
  ["api/trpc/server/package.json.hbs", `{
  "name": "@{{projectName}}/api",
  "exports": {
    ".": {
      "default": "./src/index.ts"
    },
    "./*": {
      "default": "./src/*.ts"
    }
  },
  "type": "module",
  "scripts": {},
  "devDependencies": {}
}`],
  ["api/trpc/server/src/context.ts.hbs", `{{#if (and (eq backend 'self') (includes frontend "next"))}}
import type { NextRequest } from "next/server";
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export async function createContext(req: NextRequest) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({
    headers: req.headers,
  });
  return {
    session,
  };
{{else}}
  // No auth configured
  return {
    session: null,
  };
{{/if}}
}

{{else if (and (eq backend 'self') (includes frontend "tanstack-start"))}}
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export async function createContext({ req }: { req: Request }) {
{{#if (eq auth "better-auth")}}
	const session = await auth.api.getSession({
		headers: req.headers,
	});
	return {
		session,
	};
{{else}}
	// No auth configured
	return {
		session: null,
	};
{{/if}}
}

{{else if (eq backend 'hono')}}
import type { Context as HonoContext } from "hono";
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

export type CreateContextOptions = {
  context: HonoContext;
};

export async function createContext({ context }: CreateContextOptions) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({
    headers: context.req.raw.headers,
  });
  return {
    session,
  };
{{else}}
  // No auth configured
  return {
    session: null,
  };
{{/if}}
}

{{else if (eq backend 'express')}}
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
{{#if (eq auth "better-auth")}}
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@{{projectName}}/auth";
{{/if}}

export async function createContext(opts: CreateExpressContextOptions) {
{{#if (eq auth "better-auth")}}
	const session = await auth.api.getSession({
		headers: fromNodeHeaders(opts.req.headers),
	});
	return {
		session,
	};
{{else}}
  // No auth configured
	return {
		session: null,
	};
{{/if}}
}

{{else if (eq backend 'fastify')}}
import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
{{#if (eq auth "better-auth")}}
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "@{{projectName}}/auth";
{{/if}}

export async function createContext({ req, res }: CreateFastifyContextOptions) {
{{#if (eq auth "better-auth")}}
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return { session };
{{else}}
  // No auth configured
	return {
		session: null,
	};
{{/if}}
}

{{else}}
export async function createContext() {
  return {
    session: null,
  };
}
{{/if}}

export type Context = Awaited<ReturnType<typeof createContext>>;
`],
  ["api/trpc/server/src/index.ts.hbs", `import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

{{#if (eq auth "better-auth")}}
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Authentication required",
      cause: "No session",
    });
  }
  return next({
    ctx: {
      ...ctx,
      session: ctx.session,
    },
  });
});
{{/if}}
`],
  ["api/trpc/server/src/routers/index.ts.hbs", `{{#if (eq api "orpc")}}
import { {{#if (eq auth "better-auth")}}protectedProcedure, {{/if}}publicProcedure } from "../index";
import type { RouterClient } from "@orpc/server";
{{#if (includes examples "todo")}}
import { todoRouter } from "./todo";
{{/if}}

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  {{#if (eq auth "better-auth")}}
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),
  {{/if}}
  {{#if (includes examples "todo")}}
  todo: todoRouter,
  {{/if}}
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
{{else if (eq api "trpc")}}
import {
  {{#if (eq auth "better-auth")}}protectedProcedure, {{/if}}publicProcedure,
  router,
} from "../index";
{{#if (includes examples "todo")}}
import { todoRouter } from "./todo";
{{/if}}

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  {{#if (eq auth "better-auth")}}
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),
  {{/if}}
  {{#if (includes examples "todo")}}
  todo: todoRouter,
  {{/if}}
});
export type AppRouter = typeof appRouter;
{{else}}
export const appRouter = {};
export type AppRouter = typeof appRouter;
{{/if}}
`],
  ["api/trpc/server/tsconfig.json.hbs", `{
  "extends": "@{{projectName}}/config/tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "composite": true
  }
}`],
  ["api/trpc/web/react/base/src/utils/trpc.ts.hbs", `{{#if (includes frontend 'next')}}
import { QueryCache, QueryClient } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import type { AppRouter } from "@{{projectName}}/api/routers/index";
import { toast } from 'sonner';
{{#unless (eq backend "self")}}
import { env } from "@{{projectName}}/env/web";
{{/unless}}

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error, query) => {
			toast.error(error.message, {
				action: {
					label: "retry",
					onClick: query.invalidate,
				},
			});
		},
	}),
});

const trpcClient = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
{{#if (eq backend "self")}}
			url: "/api/trpc",
{{else}}
			url: \`\${env.NEXT_PUBLIC_SERVER_URL}/trpc\`,
{{/if}}
{{#if (eq auth "better-auth")}}
			fetch(url, options) {
				return fetch(url, {
					...options,
					credentials: "include",
				});
			},
{{/if}}
		}),
	],
})

export const trpc = createTRPCOptionsProxy<AppRouter>({
	client: trpcClient,
	queryClient,
});

{{else if (includes frontend 'tanstack-start')}}
import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { AppRouter } from "@{{projectName}}/api/routers/index";

export const { TRPCProvider, useTRPC, useTRPCClient } =
	createTRPCContext<AppRouter>();

{{else}}
import type { AppRouter } from "@{{projectName}}/api/routers/index";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { toast } from "sonner";
import { env } from "@{{projectName}}/env/web";

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error, query) => {
			toast.error(error.message, {
				action: {
					label: "retry",
					onClick: query.invalidate,
				},
			});
		},
	}),
});

export const trpcClient = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: \`\${env.VITE_SERVER_URL}/trpc\`,
{{#if (eq auth "better-auth")}}
			fetch(url, options) {
				return fetch(url, {
					...options,
					credentials: "include",
				});
			},
{{/if}}
		}),
	],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
	client: trpcClient,
	queryClient,
});
{{/if}}
`],
  ["auth/better-auth/convex/backend/convex/auth.config.ts.hbs", `import { getAuthConfigProvider } from "@convex-dev/better-auth/auth-config";
import type { AuthConfig } from "convex/server";

export default {
  providers: [getAuthConfigProvider()],
} satisfies AuthConfig;
`],
  ["auth/better-auth/convex/backend/convex/auth.ts.hbs", `import { createClient, type GenericCtx } from "@convex-dev/better-auth";
{{#if (or (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
{{else}}
import { convex } from "@convex-dev/better-auth/plugins";
{{/if}}
import { components } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth } from "better-auth/minimal";
import authConfig from "./auth.config";

{{#if (or (includes frontend "tanstack-start") (includes frontend "next") (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}
const siteUrl = process.env.SITE_URL{{#if (or (includes frontend "tanstack-start") (includes frontend "next") (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}!{{else}} || "http://localhost:8081"{{/if}};
{{/if}}

export const authComponent = createClient<DataModel>(components.betterAuth);

function createAuth(ctx: GenericCtx<DataModel>) {
  return betterAuth({
    {{#if (or (includes frontend "tanstack-start") (includes frontend "next"))}}
    baseURL: siteUrl,
    {{/if}}
    {{#if (or (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}
    trustedOrigins: [siteUrl],
    {{else if (or (includes frontend "tanstack-start") (includes frontend "next"))}}
    trustedOrigins: [siteUrl],
    {{/if}}
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    plugins: [
      {{#if (or (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}
      crossDomain({ siteUrl }),
      {{/if}}
      convex({
        authConfig,
        jwksRotateOnTokenGenerationError: true,
      }),
    ],
  });
}

export { createAuth };

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return await authComponent.safeGetAuthUser(ctx);
  },
});
`],
  ["auth/better-auth/convex/backend/convex/http.ts.hbs", `import { httpRouter } from "convex/server";
import { authComponent, createAuth } from "./auth";

const http = httpRouter();

{{#if (or (includes frontend "tanstack-router") (includes frontend "react-router") (includes frontend "nuxt") (includes frontend "svelte") (includes frontend "solid"))}}
authComponent.registerRoutes(http, createAuth, { cors: true });
{{else}}
authComponent.registerRoutes(http, createAuth);
{{/if}}

export default http;
`],
  ["auth/better-auth/convex/backend/convex/privateData.ts.hbs", `import { query } from "./_generated/server";
import { authComponent } from "./auth";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const authUser = await authComponent.safeGetAuthUser(ctx);
    if (!authUser) {
      return {
        message: "Not authenticated",
      };
    }
    return {
      message: "This is private",
    };
  },
});
`],
  ["auth/better-auth/convex/web/react/next/src/app/api/auth/[...all]/route.ts.hbs", `import { handler } from "@/lib/auth-server";

export const { GET, POST } = handler;
`],
  ["auth/better-auth/convex/web/react/next/src/app/dashboard/page.tsx.hbs", `"use client"

import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import UserMenu from "@/components/user-menu";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
import {
    Authenticated,
    AuthLoading,
    Unauthenticated,
    useQuery,
} from "convex/react";
import { useState } from "react";

export default function DashboardPage() {
    const [showSignIn, setShowSignIn] = useState(false);
    const privateData = useQuery(api.privateData.get);

    return (
        <>
            <Authenticated>
                <div>
                    <h1>Dashboard</h1>
                    <p>privateData: {privateData?.message}</p>
                    <UserMenu />
                </div>
            </Authenticated>
            <Unauthenticated>
                {showSignIn ? (
                    <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
                ) : (
                    <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
                )}
            </Unauthenticated>
            <AuthLoading>
                <div>Loading...</div>
            </AuthLoading>
        </>
    );
}
`],
  ["auth/better-auth/convex/web/react/next/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

export default function SignInForm({
	onSwitchToSignUp,
}: {
	onSwitchToSignUp: () => void;
}) {
	const router = useRouter();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signIn.email(
				{
					email: value.email,
					password: value.password,
				},
				{
					onSuccess: () => {
						router.push("/dashboard");
						toast.success("Sign in successful");
					},
					onError: (error) => {
						toast.error(error.error.message || error.error.statusText);
					},
				},
			);
		},
		validators: {
			onSubmit: z.object({
				email: z.email("Invalid email address"),
				password: z.string().min(8, "Password must be at least 8 characters"),
			}),
		},
	});

	return (
		<div className="mx-auto w-full mt-10 max-w-md p-6">
			<h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-4"
			>
				<div>
					<form.Field name="email">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name}>Email</Label>
								<Input
									id={field.name}
									name={field.name}
									type="email"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>
				</div>

				<div>
					<form.Field name="password">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name}>Password</Label>
								<Input
									id={field.name}
									name={field.name}
									type="password"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>
				</div>

				<form.Subscribe>
					{(state) => (
						<Button
							type="submit"
							className="w-full"
							disabled={!state.canSubmit || state.isSubmitting}
						>
							{state.isSubmitting ? "Submitting..." : "Sign In"}
						</Button>
					)}
				</form.Subscribe>
			</form>

			<div className="mt-4 text-center">
				<Button
					variant="link"
					onClick={onSwitchToSignUp}
					className="text-indigo-600 hover:text-indigo-800"
				>
					Need an account? Sign Up
				</Button>
			</div>
		</div>
	);
}
`],
  ["auth/better-auth/convex/web/react/next/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

export default function SignUpForm({
	onSwitchToSignIn,
}: {
	onSwitchToSignIn: () => void;
}) {
	const router = useRouter();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
		onSubmit: async ({ value }) => {
			await authClient.signUp.email(
				{
					email: value.email,
					password: value.password,
					name: value.name,
				},
				{
					onSuccess: () => {
						router.push("/dashboard");
						toast.success("Sign up successful");
					},
					onError: (error) => {
						toast.error(error.error.message || error.error.statusText);
					},
				},
			);
		},
		validators: {
			onSubmit: z.object({
				name: z.string().min(2, "Name must be at least 2 characters"),
				email: z.email("Invalid email address"),
				password: z.string().min(8, "Password must be at least 8 characters"),
			}),
		},
	});

	return (
		<div className="mx-auto w-full mt-10 max-w-md p-6">
			<h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-4"
			>
				<div>
					<form.Field name="name">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name}>Name</Label>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>
				</div>

				<div>
					<form.Field name="email">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name}>Email</Label>
								<Input
									id={field.name}
									name={field.name}
									type="email"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>
				</div>

				<div>
					<form.Field name="password">
						{(field) => (
							<div className="space-y-2">
								<Label htmlFor={field.name}>Password</Label>
								<Input
									id={field.name}
									name={field.name}
									type="password"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.errors.map((error) => (
									<p key={error?.message} className="text-red-500">
										{error?.message}
									</p>
								))}
							</div>
						)}
					</form.Field>
				</div>

				<form.Subscribe>
					{(state) => (
						<Button
							type="submit"
							className="w-full"
							disabled={!state.canSubmit || state.isSubmitting}
						>
							{state.isSubmitting ? "Submitting..." : "Sign Up"}
						</Button>
					)}
				</form.Subscribe>
			</form>

			<div className="mt-4 text-center">
				<Button
					variant="link"
					onClick={onSwitchToSignIn}
					className="text-indigo-600 hover:text-indigo-800"
				>
					Already have an account? Sign In
				</Button>
			</div>
		</div>
	);
}
`],
  ["auth/better-auth/convex/web/react/next/src/components/user-menu.tsx.hbs", `import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@{{projectName}}/backend/convex/_generated/api";

export default function UserMenu() {
	const router = useRouter();
	const user = useQuery(api.auth.getCurrentUser)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={<Button variant="outline" />}>
				{user?.name}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-card">
				<DropdownMenuGroup>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>{user?.email}</DropdownMenuItem>
					<DropdownMenuItem
						variant="destructive"
						onClick={() => {
							authClient.signOut({
								fetchOptions: {
									onSuccess: () => {
										router.push("/dashboard");
									},
								},
							});
						}}
					>
						Sign Out
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
`],
  ["auth/better-auth/convex/web/react/next/src/lib/auth-client.ts.hbs", `import { createAuthClient } from "better-auth/react";
import { convexClient } from "@convex-dev/better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [convexClient()],
});
`],
  ["auth/better-auth/convex/web/react/next/src/lib/auth-server.ts.hbs", `import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";
import { env } from "@{{projectName}}/env/web";

export const {
	handler,
	preloadAuthQuery,
	isAuthenticated,
	getToken,
	fetchAuthQuery,
	fetchAuthMutation,
	fetchAuthAction,
} = convexBetterAuthNextJs({
	convexUrl: env.NEXT_PUBLIC_CONVEX_URL,
	convexSiteUrl: env.NEXT_PUBLIC_CONVEX_SITE_URL,
});
`],
  ["auth/better-auth/convex/web/react/tanstack-router/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm({
    onSwitchToSignUp,
}: {
    onSwitchToSignUp: () => void;
}) {
    const navigate = useNavigate({
        from: "/",
    });

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({ value }) => {
            await authClient.signIn.email(
                {
                    email: value.email,
                    password: value.password,
                },
                {
                    onSuccess: () => {
                        navigate({
                            to: "/dashboard",
                        });
                        toast.success("Sign in successful");
                    },
                    onError: (error) => {
                        toast.error(error.error.message || error.error.statusText);
                    },
                },
            );
        },
        validators: {
            onSubmit: z.object({
                email: z.email("Invalid email address"),
                password: z.string().min(8, "Password must be at least 8 characters"),
            }),
        },
    });

    return (
        <div className="mx-auto w-full mt-10 max-w-md p-6">
            <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                <div>
                    <form.Field name="email">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Email</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="email"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <div>
                    <form.Field name="password">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Password</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="password"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <form.Subscribe>
                    {(state) => (
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!state.canSubmit || state.isSubmitting}
                        >
                            {state.isSubmitting ? "Submitting..." : "Sign In"}
                        </Button>
                    )}
                </form.Subscribe>
            </form>

            <div className="mt-4 text-center">
                <Button
                    variant="link"
                    onClick={onSwitchToSignUp}
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    Need an account? Sign Up
                </Button>
            </div>
        </div>
    );
}
`],
  ["auth/better-auth/convex/web/react/tanstack-router/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm({
    onSwitchToSignIn,
}: {
    onSwitchToSignIn: () => void;
}) {
    const navigate = useNavigate({
        from: "/",
    });

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
        onSubmit: async ({ value }) => {
            await authClient.signUp.email(
                {
                    email: value.email,
                    password: value.password,
                    name: value.name,
                },
                {
                    onSuccess: () => {
                        navigate({
                            to: "/dashboard",
                        });
                        toast.success("Sign up successful");
                    },
                    onError: (error) => {
                        toast.error(error.error.message || error.error.statusText);
                    },
                },
            );
        },
        validators: {
            onSubmit: z.object({
                name: z.string().min(2, "Name must be at least 2 characters"),
                email: z.email("Invalid email address"),
                password: z.string().min(8, "Password must be at least 8 characters"),
            }),
        },
    });

    return (
        <div className="mx-auto w-full mt-10 max-w-md p-6">
            <h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                <div>
                    <form.Field name="name">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Name</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <div>
                    <form.Field name="email">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Email</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="email"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <div>
                    <form.Field name="password">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Password</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="password"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <form.Subscribe>
                    {(state) => (
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!state.canSubmit || state.isSubmitting}
                        >
                            {state.isSubmitting ? "Submitting..." : "Sign Up"}
                        </Button>
                    )}
                </form.Subscribe>
            </form>

            <div className="mt-4 text-center">
                <Button
                    variant="link"
                    onClick={onSwitchToSignIn}
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    Already have an account? Sign In
                </Button>
            </div>
        </div>
    );
}
`],
  ["auth/better-auth/convex/web/react/tanstack-router/src/components/user-menu.tsx.hbs", `import { useNavigate } from "@tanstack/react-router";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { useQuery } from "convex/react";
import { api } from "@{{projectName}}/backend/convex/_generated/api";

import { Button } from "./ui/button";

export default function UserMenu() {
    const navigate = useNavigate();
    const user = useQuery(api.auth.getCurrentUser)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
                {user?.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                    <DropdownMenuItem
                        variant="destructive"
                        onClick={() => {
                            authClient.signOut({
                                fetchOptions: {
                                    onSuccess: () => {
                                        navigate({
                                            to: "/dashboard",
                                        });
                                    },
                                },
                            });
                        }}
                    >
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
`],
  ["auth/better-auth/convex/web/react/tanstack-router/src/lib/auth-client.ts.hbs", `import { createAuthClient } from "better-auth/react";
import {
	convexClient,
	crossDomainClient,
} from "@convex-dev/better-auth/client/plugins";
import { env } from "@{{projectName}}/env/web";

export const authClient = createAuthClient({
	baseURL: env.VITE_CONVEX_SITE_URL,
	plugins: [crossDomainClient(), convexClient()],
});
`],
  ["auth/better-auth/convex/web/react/tanstack-router/src/routes/dashboard.tsx.hbs", `import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import UserMenu from "@/components/user-menu";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
import { createFileRoute } from "@tanstack/react-router";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showSignIn, setShowSignIn] = useState(false);
  const privateData = useQuery(api.privateData.get);

  return (
    <>
      <Authenticated>
        <div>
          <h1>Dashboard</h1>
          <p>privateData: {privateData?.message}</p>
          <UserMenu />
        </div>
      </Authenticated>
      <Unauthenticated>
        {showSignIn ? (
          <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
        )}
      </Unauthenticated>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
    </>
  );
}
`],
  ["auth/better-auth/convex/web/react/tanstack-start/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm({
    onSwitchToSignUp,
}: {
    onSwitchToSignUp: () => void;
}) {
    const navigate = useNavigate({
        from: "/",
    });

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({ value }) => {
            await authClient.signIn.email(
                {
                    email: value.email,
                    password: value.password,
                },
                {
                    onSuccess: () => {
                        navigate({
                            to: "/dashboard",
                        });
                        toast.success("Sign in successful");
                    },
                    onError: (error) => {
                        toast.error(error.error.message || error.error.statusText);
                    },
                },
            );
        },
        validators: {
            onSubmit: z.object({
                email: z.email("Invalid email address"),
                password: z.string().min(8, "Password must be at least 8 characters"),
            }),
        },
    });

    return (
        <div className="mx-auto w-full mt-10 max-w-md p-6">
            <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                <div>
                    <form.Field name="email">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Email</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="email"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <div>
                    <form.Field name="password">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Password</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="password"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <form.Subscribe>
                    {(state) => (
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!state.canSubmit || state.isSubmitting}
                        >
                            {state.isSubmitting ? "Submitting..." : "Sign In"}
                        </Button>
                    )}
                </form.Subscribe>
            </form>

            <div className="mt-4 text-center">
                <Button
                    variant="link"
                    onClick={onSwitchToSignUp}
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    Need an account? Sign Up
                </Button>
            </div>
        </div>
    );
}
`],
  ["auth/better-auth/convex/web/react/tanstack-start/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm({
    onSwitchToSignIn,
}: {
    onSwitchToSignIn: () => void;
}) {
    const navigate = useNavigate({
        from: "/",
    });

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
        onSubmit: async ({ value }) => {
            await authClient.signUp.email(
                {
                    email: value.email,
                    password: value.password,
                    name: value.name,
                },
                {
                    onSuccess: () => {
                        navigate({
                            to: "/dashboard",
                        });
                        toast.success("Sign up successful");
                    },
                    onError: (error) => {
                        toast.error(error.error.message || error.error.statusText);
                    },
                },
            );
        },
        validators: {
            onSubmit: z.object({
                name: z.string().min(2, "Name must be at least 2 characters"),
                email: z.email("Invalid email address"),
                password: z.string().min(8, "Password must be at least 8 characters"),
            }),
        },
    });

    return (
        <div className="mx-auto w-full mt-10 max-w-md p-6">
            <h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                <div>
                    <form.Field name="name">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Name</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <div>
                    <form.Field name="email">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Email</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="email"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <div>
                    <form.Field name="password">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>Password</Label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type="password"
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors.map((error) => (
                                    <p key={error?.message} className="text-red-500">
                                        {error?.message}
                                    </p>
                                ))}
                            </div>
                        )}
                    </form.Field>
                </div>

                <form.Subscribe>
                    {(state) => (
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!state.canSubmit || state.isSubmitting}
                        >
                            {state.isSubmitting ? "Submitting..." : "Sign Up"}
                        </Button>
                    )}
                </form.Subscribe>
            </form>

            <div className="mt-4 text-center">
                <Button
                    variant="link"
                    onClick={onSwitchToSignIn}
                    className="text-indigo-600 hover:text-indigo-800"
                >
                    Already have an account? Sign In
                </Button>
            </div>
        </div>
    );
}
`],
  ["auth/better-auth/convex/web/react/tanstack-start/src/components/user-menu.tsx.hbs", `import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { useQuery } from "convex/react";
import { api } from "@{{projectName}}/backend/convex/_generated/api";

import { Button } from "./ui/button";

export default function UserMenu() {
    const user = useQuery(api.auth.getCurrentUser)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
                {user?.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                    <DropdownMenuItem
                        variant="destructive"
                        onClick={() => {
                            authClient.signOut({
                                fetchOptions: {
                                    onSuccess: () => {
                                        location.reload();
                                    },
                                },
                            });
                        }}
                    >
                        Sign Out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
`],
  ["auth/better-auth/convex/web/react/tanstack-start/src/lib/auth-client.ts.hbs", `import { createAuthClient } from "better-auth/react";
import { convexClient } from "@convex-dev/better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [convexClient()],
});`],
  ["auth/better-auth/convex/web/react/tanstack-start/src/lib/auth-server.ts.hbs", `import { convexBetterAuthReactStart } from "@convex-dev/better-auth/react-start";
import { env } from "@{{projectName}}/env/web";

export const {
	handler,
	getToken,
	fetchAuthQuery,
	fetchAuthMutation,
	fetchAuthAction,
} = convexBetterAuthReactStart({
	convexUrl: env.VITE_CONVEX_URL,
	convexSiteUrl: env.VITE_CONVEX_SITE_URL,
});
`],
  ["auth/better-auth/convex/web/react/tanstack-start/src/routes/api/auth/$.ts.hbs", `import { createFileRoute } from "@tanstack/react-router";
import { handler } from "@/lib/auth-server";

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => handler(request),
      POST: ({ request }) => handler(request),
    },
  },
});
`],
  ["auth/better-auth/convex/web/react/tanstack-start/src/routes/dashboard.tsx.hbs", `import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import UserMenu from "@/components/user-menu";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
import { createFileRoute } from "@tanstack/react-router";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showSignIn, setShowSignIn] = useState(false);
  const privateData = useQuery(api.privateData.get);

  return (
    <>
      <Authenticated>
        <div>
          <h1>Dashboard</h1>
          <p>privateData: {privateData?.message}</p>
          <UserMenu />
        </div>
      </Authenticated>
      <Unauthenticated>
        {showSignIn ? (
          <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
        )}
      </Unauthenticated>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
    </>
  );
}
`],
  ["auth/better-auth/fullstack/astro/src/env.d.ts.hbs", `/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    user: import("better-auth").User | null;
    session: import("better-auth").Session | null;
  }
}
`],
  ["auth/better-auth/fullstack/astro/src/middleware.ts.hbs", `import { auth } from "@{{projectName}}/auth";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const isAuthed = await auth.api.getSession({
    headers: context.request.headers,
  });

  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  return next();
});
`],
  ["auth/better-auth/fullstack/astro/src/pages/api/auth/[...all].ts.hbs", `import { auth } from "@{{projectName}}/auth";
import type { APIRoute } from "astro";

export const ALL: APIRoute = async (ctx) => {
  return auth.handler(ctx.request);
};
`],
  ["auth/better-auth/fullstack/next/src/app/api/auth/[...all]/route.ts.hbs", `import { auth } from "@{{projectName}}/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth.handler);
`],
  ["auth/better-auth/fullstack/nuxt/server/api/auth/[...all].ts.hbs", `import { auth } from "@{{projectName}}/auth";

export default defineEventHandler((event) => {
  return auth.handler(toWebRequest(event));
});
`],
  ["auth/better-auth/fullstack/tanstack-start/src/routes/api/auth/$.ts.hbs", `import { auth } from '@{{projectName}}/auth'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/auth/$')({
  server: {
    handlers: {
      GET: ({ request }) => {
        return auth.handler(request)
      },
      POST: ({ request }) => {
        return auth.handler(request)
      },
    },
  },
})
`],
  ["auth/better-auth/server/base/_gitignore", `# dependencies (bun install)
node_modules

# output
out
dist
*.tgz

# code coverage
coverage
*.lcov

# logs
logs
_.log
report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# caches
.eslintcache
.cache
*.tsbuildinfo

# IntelliJ based IDEs
.idea

# Finder (MacOS) folder config
.DS_Store
`],
  ["auth/better-auth/server/base/package.json.hbs", `{
  "name": "@{{projectName}}/auth",
  "exports": {
    ".": {
      "default": "./src/index.ts"
    },
    "./*": {
      "default": "./src/*.ts"
    }
  },
  "type": "module",
  "scripts": {},
  "devDependencies": {}
}`],
  ["auth/better-auth/server/base/src/index.ts.hbs", `{{#if (eq orm "prisma")}}
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "@{{projectName}}/env/server";
{{/if}}
import prisma from "@{{projectName}}/db";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
{{#if (eq database "postgres")}}provider: "postgresql",{{/if}}
{{#if (eq database "sqlite")}}provider: "sqlite",{{/if}}
{{#if (eq database "mysql")}}provider: "mysql",{{/if}}
{{#if (eq database "mongodb")}}provider: "mongodb",{{/if}}
	}),

	trustedOrigins: [
		env.CORS_ORIGIN,
	],
	emailAndPassword: {
		enabled: true,
	},
{{#if (ne backend "self")}}
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
{{/if}}
	plugins: [],
});
{{/if}}

{{#if (eq orm "drizzle")}}
{{#if (or (eq runtime "bun") (eq runtime "node") (eq runtime "none"))}}
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "@{{projectName}}/env/server";
{{/if}}
import { db } from "@{{projectName}}/db";
import * as schema from "@{{projectName}}/db/schema/auth";


export const auth = betterAuth({
	database: drizzleAdapter(db, {
{{#if (eq database "postgres")}}provider: "pg",{{/if}}
{{#if (eq database "sqlite")}}provider: "sqlite",{{/if}}
{{#if (eq database "mysql")}}provider: "mysql",{{/if}}
		schema: schema,
	}),
	trustedOrigins: [
		env.CORS_ORIGIN,
	],
	emailAndPassword: {
		enabled: true,
	},
{{#if (ne backend "self")}}
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
{{/if}}
	plugins: [],
});
{{/if}}

{{#if (eq runtime "workers")}}
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "@{{projectName}}/env/server";
import { db } from "@{{projectName}}/db";
import * as schema from "@{{projectName}}/db/schema/auth";


export const auth = betterAuth({
	database: drizzleAdapter(db, {
{{#if (eq database "postgres")}}provider: "pg",{{/if}}
{{#if (eq database "sqlite")}}provider: "sqlite",{{/if}}
{{#if (eq database "mysql")}}provider: "mysql",{{/if}}
		schema: schema,
	}),
	trustedOrigins: [
		env.CORS_ORIGIN,
	],
	emailAndPassword: {
		enabled: true,
	},
	// uncomment cookieCache setting when ready to deploy to Cloudflare using *.workers.dev domains
	// session: {
	//   cookieCache: {
	//     enabled: true,
	//     maxAge: 60,
	//   },
	// },
	secret: env.BETTER_AUTH_SECRET,
	baseURL: env.BETTER_AUTH_URL,
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
		// uncomment crossSubDomainCookies setting when ready to deploy and replace <your-workers-subdomain> with your actual workers subdomain
		// https://developers.cloudflare.com/workers/wrangler/configuration/#workersdev
		// crossSubDomainCookies: {
		//   enabled: true,
		//   domain: "<your-workers-subdomain>",
		// },
	},
	plugins: [],
});
{{/if}}

{{#if (eq orm "mongoose")}}
			use: [
				checkout({
					products: [
						{
							productId: "your-product-id",
							slug: "pro",
						},
					],
					successUrl: env.POLAR_SUCCESS_URL,
					authenticatedUsersOnly: true,
				}),
				portal(),
			],
		}),
	],
{{/if}}
});
{{/if}}
{{/if}}

{{#if (eq orm "mongoose")}}
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { env } from "@{{projectName}}/env/server";
{{/if}}
import { client } from "@{{projectName}}/db";

export const auth = betterAuth({
	database: mongodbAdapter(client),
	trustedOrigins: [
		env.CORS_ORIGIN,
	],
	emailAndPassword: {
		enabled: true,
	},
{{#if (ne backend "self")}}
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
{{/if}}
	plugins: [],
{{/if}}
});
{{/if}}

{{#if (eq orm "none")}}
import { betterAuth } from "better-auth";
import { env } from "@{{projectName}}/env/server";
{{/if}}


export const auth = betterAuth({
	database: "", // Invalid configuration
	trustedOrigins: [
		env.CORS_ORIGIN,
	],
	emailAndPassword: {
		enabled: true,
	},
{{#if (ne backend "self")}}
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
{{/if}}
	plugins: [],
});
{{/if}}
`],
  ["auth/better-auth/server/base/tsconfig.json.hbs", `{
  "extends": "@{{projectName}}/config/tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "composite": true
  }
}`],
  ["auth/better-auth/server/db/drizzle/mysql/src/schema/auth.ts.hbs", `import { relations } from "drizzle-orm";
import {
  mysqlTable,
  varchar,
  text,
  timestamp,
  boolean,
  index,
} from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at", { fsp: 3 }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { fsp: 3 })
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = mysqlTable(
  "session",
  {
    id: varchar("id", { length: 36 }).primaryKey(),
    expiresAt: timestamp("expires_at", { fsp: 3 }).notNull(),
    token: varchar("token", { length: 255 }).notNull().unique(),
    createdAt: timestamp("created_at", { fsp: 3 }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { fsp: 3 })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = mysqlTable(
  "account",
  {
    id: varchar("id", { length: 36 }).primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: varchar("user_id", { length: 36 })
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", { fsp: 3 }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { fsp: 3 }),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at", { fsp: 3 }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { fsp: 3 })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = mysqlTable(
  "verification",
  {
    id: varchar("id", { length: 36 }).primaryKey(),
    identifier: varchar("identifier", { length: 255 }).notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at", { fsp: 3 }).notNull(),
    createdAt: timestamp("created_at", { fsp: 3 }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { fsp: 3 })
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
`],
  ["auth/better-auth/server/db/drizzle/postgres/src/schema/auth.ts.hbs", `import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, index } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
`],
  ["auth/better-auth/server/db/drizzle/sqlite/src/schema/auth.ts.hbs", `import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .default(false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql\`(cast(unixepoch('subsecond') * 1000 as integer))\`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql\`(cast(unixepoch('subsecond') * 1000 as integer))\`)
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = sqliteTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    token: text("token").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql\`(cast(unixepoch('subsecond') * 1000 as integer))\`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = sqliteTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: integer("access_token_expires_at", {
      mode: "timestamp_ms",
    }),
    refreshTokenExpiresAt: integer("refresh_token_expires_at", {
      mode: "timestamp_ms",
    }),
    scope: text("scope"),
    password: text("password"),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql\`(cast(unixepoch('subsecond') * 1000 as integer))\`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = sqliteTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
    createdAt: integer("created_at", { mode: "timestamp_ms" })
      .default(sql\`(cast(unixepoch('subsecond') * 1000 as integer))\`)
      .notNull(),
    updatedAt: integer("updated_at", { mode: "timestamp_ms" })
      .default(sql\`(cast(unixepoch('subsecond') * 1000 as integer))\`)
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
`],
  ["auth/better-auth/server/db/mongoose/mongodb/src/models/auth.model.ts.hbs", `import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        _id: { type: String },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        emailVerified: { type: Boolean, required: true },
        image: { type: String },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
    },
    { collection: 'user' }
);

const sessionSchema = new Schema(
    {
        _id: { type: String },
        expiresAt: { type: Date, required: true },
        token: { type: String, required: true, unique: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
        ipAddress: { type: String },
        userAgent: { type: String },
        userId: { type: String, ref: 'User', required: true },
    },
    { collection: 'session' }
);

const accountSchema = new Schema(
    {
        _id: { type: String },
        accountId: { type: String, required: true },
        providerId: { type: String, required: true },
        userId: { type: String, ref: 'User', required: true },
        accessToken: { type: String },
        refreshToken: { type: String },
        idToken: { type: String },
        accessTokenExpiresAt: { type: Date },
        refreshTokenExpiresAt: { type: Date },
        scope: { type: String },
        password: { type: String },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
    },
    { collection: 'account' }
);

const verificationSchema = new Schema(
    {
        _id: { type: String },
        identifier: { type: String, required: true },
        value: { type: String, required: true },
        expiresAt: { type: Date, required: true },
        createdAt: { type: Date },
        updatedAt: { type: Date },
    },
    { collection: 'verification' }
);

const User = model('User', userSchema);
const Session = model('Session', sessionSchema);
const Account = model('Account', accountSchema);
const Verification = model('Verification', verificationSchema);

export { User, Session, Account, Verification };
`],
  ["auth/better-auth/server/db/prisma/mongodb/prisma/schema/auth.prisma.hbs", `model User {
  id            String    @id @map("_id")
  name          String
  email         String
  emailVerified Boolean   @default(false)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  sessions      Session[]
  accounts      Account[]

  @@unique([email])
  @@map("user")
}

model Session {
  id        String   @id @map("_id")
  expiresAt DateTime
  token     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([token])
  @@index([userId])
  @@map("session")
}

model Account {
  id                    String    @id @map("_id")
  accountId             String
  providerId            String
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@index([userId])
  @@map("account")
}

model Verification {
  id         String   @id @map("_id")
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([identifier])
  @@map("verification")
}
`],
  ["auth/better-auth/server/db/prisma/mysql/prisma/schema/auth.prisma.hbs", `model User {
  id            String    @id
  name          String    @db.Text
  email         String
  emailVerified Boolean   @default(false)
  image         String?   @db.Text
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  sessions      Session[]
  accounts      Account[]

  @@unique([email])
  @@map("user")
}

model Session {
  id        String   @id
  expiresAt DateTime
  token     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?  @db.Text
  userAgent String?  @db.Text
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([token])
  @@index([userId(length: 191)])
  @@map("session")
}

model Account {
  id                    String    @id
  accountId             String    @db.Text
  providerId            String    @db.Text
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?   @db.Text
  refreshToken          String?   @db.Text
  idToken               String?   @db.Text
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?   @db.Text
  password              String?   @db.Text
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@index([userId(length: 191)])
  @@map("account")
}

model Verification {
  id         String   @id
  identifier String   @db.Text
  value      String   @db.Text
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([identifier(length: 191)])
  @@map("verification")
}
`],
  ["auth/better-auth/server/db/prisma/postgres/prisma/schema/auth.prisma.hbs", `model User {
  id            String    @id
  name          String
  email         String
  emailVerified Boolean   @default(false)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  sessions      Session[]
  accounts      Account[]

  @@unique([email])
  @@map("user")
}

model Session {
  id        String   @id
  expiresAt DateTime
  token     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([token])
  @@index([userId])
  @@map("session")
}

model Account {
  id                    String    @id
  accountId             String
  providerId            String
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@index([userId])
  @@map("account")
}

model Verification {
  id         String   @id
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([identifier])
  @@map("verification")
}
`],
  ["auth/better-auth/server/db/prisma/sqlite/prisma/schema/auth.prisma.hbs", `model User {
  id            String    @id
  name          String
  email         String
  emailVerified Boolean   @default(false)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  sessions      Session[]
  accounts      Account[]

  @@unique([email])
  @@map("user")
}

model Session {
  id        String   @id
  expiresAt DateTime
  token     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([token])
  @@index([userId])
  @@map("session")
}

model Account {
  id                    String    @id
  accountId             String
  providerId            String
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@index([userId])
  @@map("account")
}

model Verification {
  id         String   @id
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@index([identifier])
  @@map("verification")
}
`],
  ["auth/better-auth/web/astro/src/components/SignInForm.astro.hbs", `---
import { authClient } from "../lib/auth-client";
---

<div class="mx-auto mt-10 w-full max-w-md p-6">
  <h1 class="mb-6 text-center font-bold text-3xl text-white">Welcome Back</h1>

  <form id="signin-form" class="space-y-4">
    <div class="space-y-1">
      <label for="email" class="block text-sm font-medium text-neutral-300">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder="you@example.com"
      />
      <p id="email-error" class="text-sm text-red-500 hidden"></p>
    </div>

    <div class="space-y-1">
      <label for="password" class="block text-sm font-medium text-neutral-300">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder="••••••••"
      />
      <p id="password-error" class="text-sm text-red-500 hidden"></p>
    </div>

    <p id="form-error" class="text-sm text-red-500 hidden"></p>

    <button
      type="submit"
      class="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Sign In
    </button>
  </form>

  <div class="mt-4 text-center">
    <a href="/signup" class="text-indigo-400 hover:text-indigo-300 text-sm">
      Need an account? Sign Up
    </a>
  </div>
</div>

<script>
  import { authClient } from "../lib/auth-client";

  const form = document.getElementById("signin-form") as HTMLFormElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const formError = document.getElementById("form-error") as HTMLParagraphElement;
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    formError.classList.add("hidden");
    submitButton.disabled = true;
    submitButton.textContent = "Signing in...";

    try {
      await authClient.signIn.email(
        {
          email: emailInput.value,
          password: passwordInput.value,
        },
        {
          onSuccess: () => {
            window.location.href = "/dashboard";
          },
          onError: (ctx) => {
            formError.textContent = ctx.error.message || "Sign in failed. Please try again.";
            formError.classList.remove("hidden");
          },
        }
      );
    } catch (error) {
      formError.textContent = "An unexpected error occurred.";
      formError.classList.remove("hidden");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Sign In";
    }
  });
</script>
`],
  ["auth/better-auth/web/astro/src/components/SignUpForm.astro.hbs", `---
import { authClient } from "../lib/auth-client";
---

<div class="mx-auto mt-10 w-full max-w-md p-6">
  <h1 class="mb-6 text-center font-bold text-3xl text-white">Create Account</h1>

  <form id="signup-form" class="space-y-4">
    <div class="space-y-1">
      <label for="name" class="block text-sm font-medium text-neutral-300">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder="John Doe"
      />
    </div>

    <div class="space-y-1">
      <label for="email" class="block text-sm font-medium text-neutral-300">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder="you@example.com"
      />
    </div>

    <div class="space-y-1">
      <label for="password" class="block text-sm font-medium text-neutral-300">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        minlength="8"
        class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder="••••••••"
      />
      <p class="text-xs text-neutral-500">Must be at least 8 characters</p>
    </div>

    <p id="form-error" class="text-sm text-red-500 hidden"></p>

    <button
      type="submit"
      class="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Sign Up
    </button>
  </form>

  <div class="mt-4 text-center">
    <a href="/login" class="text-indigo-400 hover:text-indigo-300 text-sm">
      Already have an account? Sign In
    </a>
  </div>
</div>

<script>
  import { authClient } from "../lib/auth-client";

  const form = document.getElementById("signup-form") as HTMLFormElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const formError = document.getElementById("form-error") as HTMLParagraphElement;
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    formError.classList.add("hidden");
    submitButton.disabled = true;
    submitButton.textContent = "Creating account...";

    try {
      await authClient.signUp.email(
        {
          name: nameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
        },
        {
          onSuccess: () => {
            window.location.href = "/dashboard";
          },
          onError: (ctx) => {
            formError.textContent = ctx.error.message || "Sign up failed. Please try again.";
            formError.classList.remove("hidden");
          },
        }
      );
    } catch (error) {
      formError.textContent = "An unexpected error occurred.";
      formError.classList.remove("hidden");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Sign Up";
    }
  });
</script>
`],
  ["auth/better-auth/web/astro/src/lib/auth-client.ts.hbs", `import { createAuthClient } from "better-auth/client";
{{#if (ne backend "self")}}
import { PUBLIC_SERVER_URL } from "astro:env/client";
{{/if}}

export const authClient = createAuthClient({
{{#if (ne backend "self")}}
  baseURL: PUBLIC_SERVER_URL,
{{/if}}
});
`],
  ["auth/better-auth/web/astro/src/pages/dashboard.astro.hbs", `---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Dashboard - {{projectName}}">
  <div id="dashboard-content" class="hidden">
    <main class="mx-auto max-w-4xl px-4 py-8">
      <div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
        <h1 class="text-3xl font-bold text-white mb-6">Dashboard</h1>
        
        <div class="space-y-4">
          <div class="rounded-lg bg-neutral-800/50 p-4">
            <p class="text-sm text-neutral-400">Welcome back,</p>
            <p id="user-name" class="text-xl font-medium text-white">Loading...</p>
          </div>
          
          <div class="rounded-lg bg-neutral-800/50 p-4">
            <p class="text-sm text-neutral-400 mb-2">Email</p>
            <p id="user-email" class="text-white">Loading...</p>
          </div>

          {{#if (eq api "orpc")}}
          <div class="rounded-lg bg-neutral-800/50 p-4">
            <p class="text-sm text-neutral-400 mb-2">Server Message</p>
            <p id="api-message" class="text-white">Loading...</p>
          </div>
          {{/if}}
        </div>
      </div>
    </main>
  </div>

  <div id="loading" class="flex h-[calc(100vh-4rem)] items-center justify-center">
    <p class="text-neutral-400">Loading...</p>
  </div>

  <div id="redirect" class="hidden flex h-[calc(100vh-4rem)] items-center justify-center">
    <p class="text-neutral-400">Redirecting to login...</p>
  </div>
</Layout>

<script>
  import { authClient } from "../lib/auth-client";
  {{#if (eq api "orpc")}}
  import { orpc } from "../lib/orpc";
  {{/if}}

  const dashboardContent = document.getElementById("dashboard-content")!;
  const loading = document.getElementById("loading")!;
  const redirect = document.getElementById("redirect")!;
  const userName = document.getElementById("user-name")!;
  const userEmail = document.getElementById("user-email")!;
  {{#if (eq api "orpc")}}
  const apiMessage = document.getElementById("api-message")!;
  {{/if}}

  async function init() {
    try {
      const { data: session } = await authClient.getSession();
      
      if (!session?.user) {
        loading.classList.add("hidden");
        redirect.classList.remove("hidden");
        window.location.href = "/login";
        return;
      }

      userName.textContent = session.user.name || "User";
      userEmail.textContent = session.user.email || "";

      {{#if (eq api "orpc")}}
      try {
        const data = await orpc.privateData();
        apiMessage.textContent = data.message || "Connected to server";
      } catch (e) {
        apiMessage.textContent = "Failed to load server data";
      }
      {{/if}}

      loading.classList.add("hidden");
      dashboardContent.classList.remove("hidden");
    } catch (error) {
      loading.classList.add("hidden");
      redirect.classList.remove("hidden");
      window.location.href = "/login";
    }
  }

  init();
</script>
`],
  ["auth/better-auth/web/astro/src/pages/login.astro.hbs", `---
import SignInForm from "../components/SignInForm.astro";
import Layout from "../layouts/Layout.astro";
---

<Layout title="Sign In - {{projectName}}">
  <div class="flex min-h-[calc(100vh-4rem)] items-center justify-center">
    <SignInForm />
  </div>
</Layout>
`],
  ["auth/better-auth/web/astro/src/pages/signup.astro.hbs", `---
import SignUpForm from "../components/SignUpForm.astro";
import Layout from "../layouts/Layout.astro";
---

<Layout title="Sign Up - {{projectName}}">
  <div class="flex min-h-[calc(100vh-4rem)] items-center justify-center">
    <SignUpForm />
  </div>
</Layout>
`],
  ["auth/better-auth/web/nuxt/app/components/SignInForm.vue.hbs", `<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const { $authClient } = useNuxtApp()

const emit = defineEmits(['switchToSignUp'])

const toast = useToast()
const loading = ref(false)

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true
  }
]

const schema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type Schema = z.output<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  try {
    await $authClient.signIn.email(
      {
        email: event.data.email,
        password: event.data.password,
      },
      {
        onSuccess: () => {
          toast.add({ title: 'Sign in successful' })
          navigateTo('/dashboard', { replace: true })
        },
        onError: (error) => {
          toast.add({ title: 'Sign in failed', description: error.error.message })
        },
      },
    )
  } catch (error: any) {
    toast.add({ title: 'An unexpected error occurred', description: error.message || 'Please try again.' })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        title="Welcome Back"
        icon="i-lucide-log-in"
        :submit="{ label: 'Sign In', loading }"
        @submit="onSubmit"
      >
        <template #description>
          Need an account?
          <ULink class="text-primary font-medium" @click="$emit('switchToSignUp')">
            Sign Up
          </ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
`],
  ["auth/better-auth/web/nuxt/app/components/SignUpForm.vue.hbs", `<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const { $authClient } = useNuxtApp()

const emit = defineEmits(['switchToSignIn'])

const toast = useToast()
const loading = ref(false)

const fields: AuthFormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    required: true
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true
  }
]

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type Schema = z.output<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  try {
    await $authClient.signUp.email(
      {
        name: event.data.name,
        email: event.data.email,
        password: event.data.password,
      },
      {
        onSuccess: () => {
          toast.add({ title: 'Sign up successful' })
          navigateTo('/dashboard', { replace: true })
        },
        onError: (error) => {
          toast.add({ title: 'Sign up failed', description: error.error.message })
        },
      },
    )
  } catch (error: any) {
    toast.add({ title: 'An unexpected error occurred', description: error.message || 'Please try again.' })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        title="Create Account"
        icon="i-lucide-user-plus"
        :submit="{ label: 'Sign Up', loading }"
        @submit="onSubmit"
      >
        <template #description>
          Already have an account?
          <ULink class="text-primary font-medium" @click="$emit('switchToSignIn')">
            Sign In
          </ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
`],
  ["auth/better-auth/web/nuxt/app/components/UserMenu.vue.hbs", `<script setup lang="ts">

const {$authClient} = useNuxtApp()
const session = $authClient.useSession()
const toast = useToast()

const handleSignOut = async () => {
  try {
    await $authClient.signOut({
      fetchOptions: {
        onSuccess: async () => {
          toast.add({ title: 'Signed out successfully' })
          await navigateTo('/', { replace: true, external: true })
        },
        onError: (error) => {
           toast.add({ title: 'Sign out failed', description: error?.error?.message || 'Unknown error'})
        }
      },
    })
  } catch (error: any) {
     toast.add({ title: 'An unexpected error occurred during sign out', description: error.message || 'Please try again.'})
  }
}
</script>

<template>
  <div>
    <USkeleton v-if="session.isPending" class="h-9 w-24" />

    <UButton v-else-if="!session.data" variant="outline" to="/login">
      Sign In
    </UButton>

    <UButton
      v-else
      variant="solid"
      icon="i-lucide-log-out"
      label="Sign out"
      @click="handleSignOut()"
    />
  </div>
</template>
`],
  ["auth/better-auth/web/nuxt/app/middleware/auth.ts.hbs", `export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server) return;

  const { $authClient } = useNuxtApp();
  const session = $authClient.useSession();

  if (session.value.isPending) {
    return;
  }

  if (!session.value.data) {
    return navigateTo("/login");
  }
});
`],
  ["auth/better-auth/web/nuxt/app/pages/dashboard.vue.hbs", `<script setup lang="ts">
{{#if (eq api "orpc")}}
import { useQuery } from '@tanstack/vue-query'
{{/if}}

const { $authClient, $orpc } = useNuxtApp()

definePageMeta({
  middleware: ['auth']
})

const session = $authClient.useSession()

{{#if (eq api "orpc")}}
const privateData = useQuery({
  ...$orpc.privateData.queryOptions(),
  enabled: computed(() => !!session.value?.data?.user)
})
{{/if}}
</script>

<template>
  <UContainer class="py-8">
    <UPageHeader
      title="Dashboard"
      :description="session?.data?.user ? \`Welcome back, \${session.data.user.name}!\` : 'Loading...'"
    />

    <div class="mt-6 space-y-4">
      {{#if (eq api "orpc")}}
      <UCard>
        <template #header>
          <div class="font-medium">Private Data</div>
        </template>

        <USkeleton v-if="privateData.status.value === 'pending'" class="h-6 w-48" />

        <UAlert
          v-else-if="privateData.status.value === 'error'"
          color="error"
          icon="i-lucide-alert-circle"
          title="Error loading data"
          :description="privateData.error.value?.message || 'Failed to load private data'"
        />

        <div v-else-if="privateData.data.value" class="flex items-center gap-2">
          <UIcon name="i-lucide-check-circle" class="text-success" />
          <span>\\{{ privateData.data.value.message }}</span>
        </div>
      </UCard>
      {{/if}}
    </div>
  </UContainer>
</template>
`],
  ["auth/better-auth/web/nuxt/app/pages/login.vue.hbs", `<script setup lang="ts">
const { $authClient } = useNuxtApp();
import SignInForm from "~/components/SignInForm.vue";
import SignUpForm from "~/components/SignUpForm.vue";

const session = $authClient.useSession();
const showSignIn = ref(true);

watchEffect(() => {
  if (!session?.value.isPending && session?.value.data) {
    navigateTo("/dashboard", { replace: true });
  }
});
</script>

<template>
  <UContainer class="py-8">
    <div v-if="session.isPending" class="flex flex-col items-center justify-center gap-4 py-12">
      <UIcon name="i-lucide-loader-2" class="animate-spin text-4xl text-primary" />
      <span class="text-muted">Loading...</span>
    </div>
    <div v-else-if="!session.data">
      <SignInForm v-if="showSignIn" @switch-to-sign-up="showSignIn = false" />
      <SignUpForm v-else @switch-to-sign-in="showSignIn = true" />
    </div>
  </UContainer>
</template>
`],
  ["auth/better-auth/web/nuxt/app/plugins/auth-client.ts.hbs", `import { createAuthClient } from "better-auth/vue";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const authClient = createAuthClient({
    baseURL: config.public.serverUrl,
    plugins: [],
  });

  return {
    provide: {
      authClient: authClient,
    },
  };
});
`],
  ["auth/better-auth/web/react/base/src/lib/auth-client.ts.hbs", `import { createAuthClient } from "better-auth/react";
{{#unless (eq backend "self")}}
import { env } from "@{{projectName}}/env/web";
{{/unless}}

export const authClient = createAuthClient({
{{#unless (eq backend "self")}}
	baseURL: env.{{#if (includes frontend "next")}}NEXT_PUBLIC_SERVER_URL{{else}}VITE_SERVER_URL{{/if}},
{{/unless}}
	plugins: []
});
`],
  ["auth/better-auth/web/react/next/src/app/dashboard/dashboard.tsx.hbs", `"use client";
import { authClient } from "@/lib/auth-client";
{{#if (eq api "orpc")}}
import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";
{{/if}}
{{#if (eq api "trpc")}}
import { useQuery } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
{{/if}}

export default function Dashboard({
	session
}: {
	session: typeof authClient.$Infer.Session;
}) {
	{{#if (eq api "orpc")}}
	const privateData = useQuery(orpc.privateData.queryOptions());
	{{/if}}
	{{#if (eq api "trpc")}}
	const privateData = useQuery(trpc.privateData.queryOptions());
	{{/if}}

	return (
		<>
			{{#if (eq api "orpc")}}
			<p>API: {privateData.data?.message}</p>
			{{/if}}
			{{#if (eq api "trpc")}}
			<p>API: {privateData.data?.message}</p>
			{{/if}}
		</>
	);
}
`],
  ["auth/better-auth/web/react/next/src/app/dashboard/page.tsx.hbs", `import { redirect } from "next/navigation";
import Dashboard from "./dashboard";
import { headers } from "next/headers";
{{#if (eq backend "self")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}
import { authClient } from "@/lib/auth-client";

export default async function DashboardPage() {
	{{#if (eq backend "self")}}
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	{{else}}
	const session = await authClient.getSession({
		fetchOptions: {
			headers: await headers(),
			throw: true
		}
	});
	{{/if}}

	if (!session?.user) {
		redirect("/login");
	}

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session.user.name}</p>
			<Dashboard session={session} />
		</div>
	);
}
`],
  ["auth/better-auth/web/react/next/src/app/login/page.tsx.hbs", `"use client"

import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { useState } from "react";


export default function LoginPage() {
  const [showSignIn, setShowSignIn] = useState(false);

  return showSignIn ? (
    <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
  ) : (
    <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
  );
}
`],
  ["auth/better-auth/web/react/next/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

export default function SignInForm({
  onSwitchToSignUp,
}: {
  onSwitchToSignUp: () => void;
}) {
  const router = useRouter()
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            router.push("/dashboard")
            toast.success("Sign in successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignUp}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Need an account? Sign Up
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/next/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

export default function SignUpForm({
  onSwitchToSignIn,
}: {
  onSwitchToSignIn: () => void;
}) {
  const router = useRouter();
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            router.push("/dashboard");
            toast.success("Sign up successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignIn}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Already have an account? Sign In
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/next/src/components/user-menu.tsx.hbs", `import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function UserMenu() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Skeleton className="h-9 w-24" />;
  }

  if (!session) {
    return (
      <Link href="/login">
        <Button variant="outline">Sign In</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {session.user.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/");
                  },
                },
              });
            }}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`],
  ["auth/better-auth/web/react/react-router/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm({
  onSwitchToSignUp,
}: {
  onSwitchToSignUp: () => void;
}) {
  const navigate = useNavigate();
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate("/dashboard");
            toast.success("Sign in successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        }
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignUp}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Need an account? Sign Up
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/react-router/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm({
  onSwitchToSignIn,
}: {
  onSwitchToSignIn: () => void;
}) {
  const navigate = useNavigate();
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            navigate("/dashboard");
            toast.success("Sign up successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        }
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignIn}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Already have an account? Sign In
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/react-router/src/components/user-menu.tsx.hbs", `import { Link, useNavigate } from "react-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function UserMenu() {
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Skeleton className="h-9 w-24" />;
  }

  if (!session) {
    return (
      <Link to="/login">
        <Button variant="outline">Sign In</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {session.user.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    navigate("/");
                  },
                },
              });
            }}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`],
  ["auth/better-auth/web/react/react-router/src/routes/dashboard.tsx.hbs", `import { authClient } from "@/lib/auth-client";
{{#if (eq api "orpc")}}
import { orpc } from "@/utils/orpc";
{{/if}}
{{#if (eq api "trpc")}}
import { trpc } from "@/utils/trpc";
{{/if}}
{{#if ( or (eq api "orpc") (eq api "trpc"))}}
import { useQuery } from "@tanstack/react-query";
{{/if}}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  const navigate = useNavigate();

  {{#if (eq api "orpc")}}
  const privateData = useQuery(orpc.privateData.queryOptions());
  {{/if}}
  {{#if (eq api "trpc")}}
  const privateData = useQuery(trpc.privateData.queryOptions());
  {{/if}}

  useEffect(() => {
    if (!session && !isPending) {
      navigate("/login");
    }
  }, [session, isPending, navigate]);

  useEffect(() => {
    async function fetchCustomerState() {
      if (session) {
        const { data } = await authClient.customer.state();
        setCustomerState(data);
      }
    }

    fetchCustomerState();
  }, [session]);
  {{/if}}

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session?.user.name}</p>
      {{#if ( or (eq api "orpc") (eq api "trpc"))}}
      <p>API: {privateData.data?.message}</p>
      {{/if}}
    </div>
  );
}
`],
  ["auth/better-auth/web/react/react-router/src/routes/login.tsx.hbs", `import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { useState } from "react";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(false);

  return showSignIn ? (
    <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
  ) : (
    <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
  );
}
`],
  ["auth/better-auth/web/react/tanstack-router/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm({ onSwitchToSignUp }: { onSwitchToSignUp: () => void }) {
  const navigate = useNavigate({
    from: "/",
  });
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            toast.success("Sign in successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignUp}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Need an account? Sign Up
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/tanstack-router/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm({ onSwitchToSignIn }: { onSwitchToSignIn: () => void }) {
  const navigate = useNavigate({
    from: "/",
  });
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            toast.success("Sign up successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignIn}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Already have an account? Sign In
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/tanstack-router/src/components/user-menu.tsx.hbs", `import { Link, useNavigate } from "@tanstack/react-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function UserMenu() {
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Skeleton className="h-9 w-24" />;
  }

  if (!session) {
    return (
      <Link to="/login">
        <Button variant="outline">Sign In</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {session.user.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    navigate({
                      to: "/",
                    });
                  },
                },
              });
            }}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`],
  ["auth/better-auth/web/react/tanstack-router/src/routes/dashboard.tsx.hbs", `import { authClient } from "@/lib/auth-client";
{{#if (eq api "orpc")}}
import { orpc } from "@/utils/orpc";
{{/if}}
{{#if (eq api "trpc")}}
import { trpc } from "@/utils/trpc";
{{/if}}
{{#if ( or (eq api "orpc") (eq api "trpc"))}}
import { useQuery } from "@tanstack/react-query";
{{/if}}
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
	beforeLoad: async () => {
		const session = await authClient.getSession();
		if (!session.data) {
			redirect({
				to: "/login",
				throw: true
			});
		}
		return { session };
	}
});

function RouteComponent() {
	const { session } = Route.useRouteContext();

	{{#if (eq api "orpc")}}
	const privateData = useQuery(orpc.privateData.queryOptions());
	{{/if}}
	{{#if (eq api "trpc")}}
	const privateData = useQuery(trpc.privateData.queryOptions());
	{{/if}}

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session.data?.user.name}</p>
			{{#if ( or (eq api "orpc") (eq api "trpc"))}}
			<p>API: {privateData.data?.message}</p>
			{{/if}}
		</div>
	);
}
`],
  ["auth/better-auth/web/react/tanstack-router/src/routes/login.tsx.hbs", `import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showSignIn, setShowSignIn] = useState(false);

  return showSignIn ? (
    <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
  ) : (
    <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
  );
}
`],
  ["auth/better-auth/web/react/tanstack-start/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm({ onSwitchToSignUp }: { onSwitchToSignUp: () => void }) {
  const navigate = useNavigate({
    from: "/",
  });
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            toast.success("Sign in successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignUp}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Need an account? Sign Up
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/tanstack-start/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import Loader from "./loader";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm({ onSwitchToSignIn }: { onSwitchToSignIn: () => void }) {
  const navigate = useNavigate({
    from: "/",
  });
  const { isPending } = authClient.useSession();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            toast.success("Sign up successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-full mt-10 max-w-md p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignIn}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Already have an account? Sign In
        </Button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/react/tanstack-start/src/components/user-menu.tsx.hbs", `import { Link, useNavigate } from "@tanstack/react-router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export default function UserMenu() {
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <Skeleton className="h-9 w-24" />;
  }

  if (!session) {
    return (
      <Link to="/login">
        <Button variant="outline">Sign In</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {session.user.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    navigate({
                      to: "/",
                    });
                  },
                },
              });
            }}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`],
  ["auth/better-auth/web/react/tanstack-start/src/functions/get-user.ts.hbs", `import { authMiddleware } from "@/middleware/auth";
import { createServerFn } from "@tanstack/react-start";

export const getUser = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(async ({ context }) => {
    return context.session
})`],
  ["auth/better-auth/web/react/tanstack-start/src/middleware/auth.ts.hbs", `{{#if (eq backend "self")}}
import { auth } from "@{{projectName}}/auth";
import { createMiddleware } from "@tanstack/react-start";


export const authMiddleware = createMiddleware().server(async ({ next, request }) => {
    const session = await auth.api.getSession({
        headers: request.headers,
    })
    return next({
        context: { session }
    })
})
{{else}}
import { authClient } from "@/lib/auth-client";
import { createMiddleware } from "@tanstack/react-start";

export const authMiddleware = createMiddleware().server(
	async ({ next, request }) => {
		const session = await authClient.getSession({
			fetchOptions: {
				headers: request.headers,
				throw: true
			}
		})
		return next({
			context: { session },
		});
	},
);
{{/if}}
`],
  ["auth/better-auth/web/react/tanstack-start/src/routes/dashboard.tsx.hbs", `import { getUser } from "@/functions/get-user";
{{#if (eq api "trpc") }}
import { useTRPC } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";
{{/if}}
{{#if (eq api "orpc") }}
import { orpc } from "@/utils/orpc";
import { useQuery } from "@tanstack/react-query";
{{/if}}
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  beforeLoad: async () => {
    const session = await getUser();
    return { session };
  },
  loader: async ({ context }) => {
    if (!context.session) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function RouteComponent() {
  const { session } = Route.useRouteContext();

  {{#if (eq api "trpc") }}
  const trpc = useTRPC();
  const privateData = useQuery(trpc.privateData.queryOptions());
  {{/if}}
  {{#if (eq api "orpc") }}
  const privateData = useQuery(orpc.privateData.queryOptions());
  {{/if}}

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session?.user.name}</p>
      {{#if (eq api "trpc") }}
      <p>API: {privateData.data?.message}</p>
      {{else if (eq api "orpc") }}
      <p>API: {privateData.data?.message}</p>
      {{/if}}
    </div>
  );
}`],
  ["auth/better-auth/web/react/tanstack-start/src/routes/login.tsx.hbs", `import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showSignIn, setShowSignIn] = useState(false);

  return showSignIn ? (
    <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
  ) : (
    <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
  );
}
`],
  ["auth/better-auth/web/solid/src/components/sign-in-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { createForm } from "@tanstack/solid-form";
import { useNavigate } from "@tanstack/solid-router";
import z from "zod";
import { For } from "solid-js";

export default function SignInForm({ onSwitchToSignUp }: { onSwitchToSignUp: () => void }) {
  const navigate = useNavigate({
    from: "/",
  });

  const form = createForm(() => ({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            console.log("Sign in successful");
          },
          onError: (error) => {
            console.error(error.error.message);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  }));

  return (
    <div class="mx-auto w-full mt-10 max-w-md p-6">
      <h1 class="mb-6 text-center text-3xl font-bold">Welcome Back</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        class="space-y-4"
      >
        <div>
          <form.Field name="email">
            {(field) => (
              <div class="space-y-2">
                <label for={field().name}>Email</label>
                <input
                  id={field().name}
                  name={field().name}
                  type="email"
                  value={field().state.value}
                  onBlur={field().handleBlur}
                  onInput={(e) => field().handleChange(e.currentTarget.value)}
                  class="w-full rounded border p-2"
                />
                <For each={field().state.meta.errors}>
                  {(error) => <p class="text-sm text-red-600">{error?.message}</p>}
                </For>
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div class="space-y-2">
                <label for={field().name}>Password</label>
                <input
                  id={field().name}
                  name={field().name}
                  type="password"
                  value={field().state.value}
                  onBlur={field().handleBlur}
                  onInput={(e) => field().handleChange(e.currentTarget.value)}
                  class="w-full rounded border p-2"
                />
                <For each={field().state.meta.errors}>
                  {(error) => <p class="text-sm text-red-600">{error?.message}</p>}
                </For>
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <button
              type="submit"
              class="w-full rounded bg-indigo-600 p-2 text-white hover:bg-indigo-700 disabled:opacity-50"
              disabled={!state().canSubmit || state().isSubmitting}
            >
              {state().isSubmitting ? "Submitting..." : "Sign In"}
            </button>
          )}
        </form.Subscribe>
      </form>

      <div class="mt-4 text-center">
        <button
          type="button"
          onClick={onSwitchToSignUp}
          class="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
        >
          Need an account? Sign Up
        </button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/solid/src/components/sign-up-form.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { createForm } from "@tanstack/solid-form";
import { useNavigate } from "@tanstack/solid-router";
import z from "zod";
import { For } from "solid-js";

export default function SignUpForm({ onSwitchToSignIn }: { onSwitchToSignIn: () => void }) {
  const navigate = useNavigate({
    from: "/",
  });

  const form = createForm(() => ({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            navigate({
              to: "/dashboard",
            });
            console.log("Sign up successful");
          },
          onError: (error) => {
            console.error(error.error.message);
          },
        },
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  }));

  return (
    <div class="mx-auto w-full mt-10 max-w-md p-6">
      <h1 class="mb-6 text-center text-3xl font-bold">Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        class="space-y-4"
      >
        <div>
          <form.Field name="name">
            {(field) => (
              <div class="space-y-2">
                <label for={field().name}>Name</label>
                <input
                  id={field().name}
                  name={field().name}
                  value={field().state.value}
                  onBlur={field().handleBlur}
                  onInput={(e) => field().handleChange(e.currentTarget.value)}
                  class="w-full rounded border p-2"
                />
                <For each={field().state.meta.errors}>
                  {(error) => <p class="text-sm text-red-600">{error?.message}</p>}
                </For>
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="email">
            {(field) => (
              <div class="space-y-2">
                <label for={field().name}>Email</label>
                <input
                  id={field().name}
                  name={field().name}
                  type="email"
                  value={field().state.value}
                  onBlur={field().handleBlur}
                  onInput={(e) => field().handleChange(e.currentTarget.value)}
                  class="w-full rounded border p-2"
                />
                <For each={field().state.meta.errors}>
                  {(error) => <p class="text-sm text-red-600">{error?.message}</p>}
                </For>
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div class="space-y-2">
                <label for={field().name}>Password</label>
                <input
                  id={field().name}
                  name={field().name}
                  type="password"
                  value={field().state.value}
                  onBlur={field().handleBlur}
                  onInput={(e) => field().handleChange(e.currentTarget.value)}
                  class="w-full rounded border p-2"
                />
                <For each={field().state.meta.errors}>
                  {(error) => <p class="text-sm text-red-600">{error?.message}</p>}
                </For>
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <button
              type="submit"
              class="w-full rounded bg-indigo-600 p-2 text-white hover:bg-indigo-700 disabled:opacity-50"
              disabled={!state().canSubmit || state().isSubmitting}
            >
              {state().isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          )}
        </form.Subscribe>
      </form>

      <div class="mt-4 text-center">
        <button
          type="button"
          onClick={onSwitchToSignIn}
          class="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
        >
          Already have an account? Sign In
        </button>
      </div>
    </div>
  );
}
`],
  ["auth/better-auth/web/solid/src/components/user-menu.tsx.hbs", `import { authClient } from "@/lib/auth-client";
import { useNavigate, Link } from "@tanstack/solid-router";
import { createSignal, Show } from "solid-js";

export default function UserMenu() {
  const navigate = useNavigate();
  const session = authClient.useSession();
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <div class="relative inline-block text-left">
      <Show when={session().isPending}>
        <div class="h-9 w-24 animate-pulse rounded" />
      </Show>

      <Show when={!session().isPending && !session().data}>
        <Link to="/login" class="inline-block border rounded px-4  text-sm">
          Sign In
        </Link>
      </Show>

      <Show when={!session().isPending && session().data}>
        <button
          type="button"
          class="inline-block border rounded px-4  text-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen())}
        >
          {session().data?.user.name}
        </button>

        <Show when={isMenuOpen()}>
          <div class="absolute right-0 mt-2 w-56 rounded p-1 shadow-sm">
            <div class="px-4  text-sm">{session().data?.user.email}</div>
            <button
              type="button"
              class="mt-1 w-full border rounded px-4  text-center text-sm"
              onClick={() => {
                setIsMenuOpen(false);
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      navigate({ to: "/" });
                    },
                  },
                });
              }}
            >
              Sign Out
            </button>
          </div>
        </Show>
      </Show>
    </div>
  );
}
`],
  ["auth/better-auth/web/solid/src/lib/auth-client.ts.hbs", `import { createAuthClient } from "better-auth/solid";
import { env } from "@{{projectName}}/env/web";

export const authClient = createAuthClient({
	baseURL: env.VITE_SERVER_URL,
});
`],
  ["auth/better-auth/web/solid/src/routes/dashboard.tsx.hbs", `import { authClient } from "@/lib/auth-client";
{{#if (eq api "orpc")}}
import { orpc } from "@/utils/orpc";
import { useQuery } from "@tanstack/solid-query";
{{/if}}
import { createFileRoute, redirect } from "@tanstack/solid-router";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
	beforeLoad: async () => {
		const session = await authClient.getSession();
		if (!session.data) {
			redirect({
				to: "/login",
				throw: true,
			});
		}
		return { session };
	},
});

function RouteComponent() {
	const context = Route.useRouteContext();

	const session = context().session;

	{{#if (eq api "orpc")}}
	const privateData = useQuery(() => orpc.privateData.queryOptions());
	{{/if}}

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session.data?.user.name}</p>
			{{#if (eq api "orpc")}}
			<p>API: {privateData.data?.message}</p>
			{{/if}}
		</div>
	);
}
`],
  ["auth/better-auth/web/solid/src/routes/login.tsx.hbs", `import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import { createFileRoute } from "@tanstack/solid-router";
import { createSignal, Match, Switch } from "solid-js";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showSignIn, setShowSignIn] = createSignal(false);

  return (
    <Switch>
      <Match when={showSignIn()}>
        <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
      </Match>
      <Match when={!showSignIn()}>
        <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
      </Match>
    </Switch>
  );
}
`],
  ["auth/better-auth/web/svelte/src/components/SignInForm.svelte.hbs", `<script lang="ts">
	import { createForm } from '@tanstack/svelte-form';
	import { z } from 'zod';
	import { authClient } from '$lib/auth-client';
	import { goto } from '$app/navigation';

	let { switchToSignUp } = $props<{ switchToSignUp: () => void }>();

	const validationSchema = z.object({
		email: z.email('Invalid email address'),
		password: z.string().min(1, 'Password is required'),
	});

	const form = createForm(() => ({
		defaultValues: { email: '', password: '' },
		onSubmit: async ({ value }) => {
				await authClient.signIn.email(
					{ email: value.email, password: value.password },
					{
						onSuccess: () => goto('/dashboard'),
						onError: (error) => {
							console.log(error.error.message || 'Sign in failed. Please try again.');
						},
					}
				);

		},
		validators: {
			onSubmit: validationSchema,
		},
	}));
</script>

<div class="mx-auto mt-10 w-full max-w-md p-6">
	<h1 class="mb-6 text-center font-bold text-3xl">Welcome Back</h1>

	<form
		class="space-y-4"
		onsubmit={(e) => {
			e.preventDefault();
			e.stopPropagation();
			form.handleSubmit();
		}}
	>
		<form.Field name="email">
			{#snippet children(field)}
				<div class="space-y-1">
					<label for={field.name}>Email</label>
					<input
						id={field.name}
						name={field.name}
						type="email"
						class="w-full border"
						onblur={field.handleBlur}
						value={field.state.value}
						oninput={(e: Event) => {
							const target = e.target as HTMLInputElement;
							field.handleChange(target.value);
						}}
					/>
					{#if field.state.meta.isTouched}
						{#each field.state.meta.errors as error}
							<p class="text-sm text-red-500" role="alert">{error}</p>
						{/each}
					{/if}
				</div>
			{/snippet}
		</form.Field>

		<form.Field name="password">
			{#snippet children(field)}
				<div class="space-y-1">
					<label for={field.name}>Password</label>
					<input
						id={field.name}
						name={field.name}
						type="password"
						class="w-full border"
						onblur={field.handleBlur}
						value={field.state.value}
						oninput={(e: Event) => {
							const target = e.target as HTMLInputElement;
							field.handleChange(target.value);
						}}
					/>
					{#if field.state.meta.isTouched}
						{#each field.state.meta.errors as error}
							<p class="text-sm text-red-500" role="alert">{error}</p>
						{/each}
					{/if}
				</div>
			{/snippet}
		</form.Field>

		<form.Subscribe selector={(state) => ({ canSubmit: state.canSubmit, isSubmitting: state.isSubmitting })}>
			{#snippet children(state)}
				<button type="submit" class="w-full" disabled={!state.canSubmit || state.isSubmitting}>
					{state.isSubmitting ? 'Submitting...' : 'Sign In'}
				</button>
			{/snippet}
		</form.Subscribe>
	</form>

	<div class="mt-4 text-center">
		<button type="button" class="text-indigo-600 hover:text-indigo-800" onclick={switchToSignUp}>
			Need an account? Sign Up
		</button>
	</div>
</div>
`],
  ["auth/better-auth/web/svelte/src/components/SignUpForm.svelte.hbs", `<script lang="ts">
	import { createForm } from '@tanstack/svelte-form';
	import { z } from 'zod';
	import { authClient } from '$lib/auth-client';
	import { goto } from '$app/navigation';

	let { switchToSignIn } = $props<{ switchToSignIn: () => void }>();

	const validationSchema = z.object({
		name: z.string().min(2, 'Name must be at least 2 characters'),
		email: z.email('Invalid email address'),
		password: z.string().min(8, 'Password must be at least 8 characters'),
	});


	const form = createForm(() => ({
		defaultValues: { name: '', email: '', password: '' },
		onSubmit: async ({ value }) => {
				await authClient.signUp.email(
					{
						email: value.email,
						password: value.password,
						name: value.name,
					},
					{
						onSuccess: () => {
							goto('/dashboard');
						},
						onError: (error) => {
							console.log(error.error.message || 'Sign up failed. Please try again.');
						},
					}
				);

		},
		validators: {
			onSubmit: validationSchema,
		},
	}));
</script>

<div class="mx-auto mt-10 w-full max-w-md p-6">
	<h1 class="mb-6 text-center font-bold text-3xl">Create Account</h1>

	<form
		id="form"
		class="space-y-4"
		onsubmit={(e) => {
			e.preventDefault();
			e.stopPropagation();
			form.handleSubmit();
		}}
	>
		<form.Field name="name">
			{#snippet children(field)}
				<div class="space-y-1">
					<label for={field.name}>Name</label>
					<input
						id={field.name}
						name={field.name}
						class="w-full border"
						onblur={field.handleBlur}
						value={field.state.value}
						oninput={(e: Event) => {
							const target = e.target as HTMLInputElement;
							field.handleChange(target.value);
						}}
					/>
					{#if field.state.meta.isTouched}
						{#each field.state.meta.errors as error}
							<p class="text-sm text-red-500" role="alert">{error}</p>
						{/each}
					{/if}
				</div>
			{/snippet}
		</form.Field>

		<form.Field name="email">
			{#snippet children(field)}
				<div class="space-y-1">
					<label for={field.name}>Email</label>
					<input
						id={field.name}
						name={field.name}
						type="email"
						class="w-full border"
						onblur={field.handleBlur}
						value={field.state.value}
						oninput={(e: Event) => {
							const target = e.target as HTMLInputElement;
							field.handleChange(target.value);
						}}
					/>
					{#if field.state.meta.isTouched}
						{#each field.state.meta.errors as error}
							<p class="text-sm text-red-500" role="alert">{error}</p>
						{/each}
					{/if}
				</div>
			{/snippet}
		</form.Field>

		<form.Field name="password">
			{#snippet children(field)}
				<div class="space-y-1">
					<label for={field.name}>Password</label>
					<input
						id={field.name}
						name={field.name}
						type="password"
						class="w-full border"
						onblur={field.handleBlur}
						value={field.state.value}
						oninput={(e: Event) => {
							const target = e.target as HTMLInputElement;
							field.handleChange(target.value);
						}}
					/>
					{#if field.state.meta.isTouched}
						{#each field.state.meta.errors as error}
							<p class="text-sm text-red-500" role="alert">{error}</p>
						{/each}
					{/if}
				</div>
			{/snippet}
		</form.Field>

		<form.Subscribe selector={(state) => ({ canSubmit: state.canSubmit, isSubmitting: state.isSubmitting })}>
			{#snippet children(state)}
				<button type="submit" class="w-full" disabled={!state.canSubmit || state.isSubmitting}>
					{state.isSubmitting ? 'Submitting...' : 'Sign Up'}
				</button>
			{/snippet}
		</form.Subscribe>
	</form>

	<div class="mt-4 text-center">
		<button type="button" class="text-indigo-600 hover:text-indigo-800" onclick={switchToSignIn}>
			Already have an account? Sign In
		</button>
	</div>
</div>
`],
  ["auth/better-auth/web/svelte/src/components/UserMenu.svelte.hbs", `<script lang="ts">
	import { authClient } from '$lib/auth-client';
	import { goto } from '$app/navigation';

	const sessionQuery = authClient.useSession();

	async function handleSignOut() {
		await authClient.signOut({
		fetchOptions: {
			onSuccess: () => {
				goto('/');
			},
			onError: (error) => {
				console.error('Sign out failed:', error);
			}
		}
		});
	}

	function goToLogin() {
		goto('/login');
	}

</script>

<div class="relative">
	{#if $sessionQuery.isPending}
		<div class="h-8 w-24 animate-pulse rounded bg-neutral-700"></div>
	{:else if $sessionQuery.data?.user}
		{@const user = $sessionQuery.data.user}
		<div class="flex items-center gap-3">
			<span class="text-sm text-neutral-300 hidden sm:inline" title={user.email}>
				{user.name || user.email?.split('@')[0] || 'User'}
			</span>
			<button
				onclick={handleSignOut}
				class="rounded px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white transition-colors"
			>
				Sign Out
			</button>
		</div>
	{:else}
		<div class="flex items-center gap-2">
			<button
				onclick={goToLogin}
				class="rounded px-3 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
			>
				Sign In
			</button>
		</div>
	{/if}
</div>
`],
  ["auth/better-auth/web/svelte/src/lib/auth-client.ts.hbs", `import { PUBLIC_SERVER_URL } from "$env/static/public";
import { createAuthClient } from "better-auth/svelte";

export const authClient = createAuthClient({
	baseURL: PUBLIC_SERVER_URL,
});
`],
  ["auth/better-auth/web/svelte/src/routes/dashboard/+page.svelte.hbs", `<script lang="ts">
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	{{#if (eq api "orpc")}}
	import { orpc } from '$lib/orpc';
	import { createQuery } from '@tanstack/svelte-query';
	{{/if}}

	const sessionQuery = authClient.useSession();

	{{#if (eq api "orpc")}}
	const privateDataQuery = createQuery(orpc.privateData.queryOptions());
	{{/if}}

	$effect(() => {
		if (!$sessionQuery.isPending && !$sessionQuery.data) {
			goto('/login');
		}
	});
</script>

{#if $sessionQuery.isPending}
	<div>Loading...</div>
{:else if !$sessionQuery.data}
	<div>Redirecting to login...</div>
{:else}
	<div>
		<h1>Dashboard</h1>
		<p>Welcome {$sessionQuery.data.user.name}</p>
		{{#if (eq api "orpc")}}
		<p>API: {$privateDataQuery.data?.message}</p>
		{{/if}}
	</div>
{/if}
`],
  ["auth/better-auth/web/svelte/src/routes/login/+page.svelte.hbs", `<script lang="ts">
	import SignInForm from '../../components/SignInForm.svelte';
	import SignUpForm from '../../components/SignUpForm.svelte';

	let showSignIn = $state(true);
</script>

{#if showSignIn}
	<SignInForm switchToSignUp={() => showSignIn = false} />
{:else}
	<SignUpForm switchToSignIn={() => showSignIn = true} />
{/if}
`],
  ["auth/clerk/convex/backend/convex/auth.config.ts.hbs", `export default {
	providers: [
		{
			// Replace with your own Clerk Issuer URL from your "convex" JWT template
			// or with \`process.env.CLERK_JWT_ISSUER_DOMAIN\`
			// and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
			// See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
			domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
			applicationID: "convex",
		},
	],
};
`],
  ["auth/clerk/convex/backend/convex/privateData.ts.hbs", `import { query } from "./_generated/server";

export const get = query({
	args: {},
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (identity === null) {
			return {
				message: "Not authenticated",
			};
		}
		return {
			message: "This is private",
		};
	},
});
`],
  ["auth/clerk/convex/web/react/next/src/app/dashboard/page.tsx.hbs", `"use client";

import { api } from "@{{projectName}}/backend/convex/_generated/api";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated, useQuery } from "convex/react";

export default function Dashboard() {
  const user = useUser();
  const privateData = useQuery(api.privateData.get);

  return (
    <>
      <Authenticated>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome {user.user?.fullName}</p>
          <p>privateData: {privateData?.message}</p>
          <UserButton />
        </div>
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
    </>
  );
}
`],
  ["auth/clerk/convex/web/react/next/src/middleware.ts.hbs", `import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
`],
  ["auth/clerk/convex/web/react/react-router/src/routes/dashboard.tsx.hbs", `import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
import {
	Authenticated,
	AuthLoading,
	Unauthenticated,
	useQuery,
} from "convex/react";

export default function Dashboard() {
	const privateData = useQuery(api.privateData.get);
	const user = useUser();

	return (
		<>
			<Authenticated>
				<div>
					<h1>Dashboard</h1>
					<p>Welcome {user.user?.fullName}</p>
					<p>privateData: {privateData?.message}</p>
					<UserButton />
				</div>
			</Authenticated>
			<Unauthenticated>
				<SignInButton />
			</Unauthenticated>
			<AuthLoading>
				<div>Loading...</div>
			</AuthLoading>
		</>
	);
}
`],
  ["auth/clerk/convex/web/react/tanstack-router/src/routes/dashboard.tsx.hbs", `import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
import { createFileRoute } from "@tanstack/react-router";
import {
	Authenticated,
	AuthLoading,
	Unauthenticated,
	useQuery,
} from "convex/react";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	const privateData = useQuery(api.privateData.get);
	const user = useUser()

	return (
		<>
			<Authenticated>
				<div>
					<h1>Dashboard</h1>
					<p>Welcome {user.user?.fullName}</p>
					<p>privateData: {privateData?.message}</p>
					<UserButton />
				</div>
			</Authenticated>
			<Unauthenticated>
				<SignInButton />
			</Unauthenticated>
			<AuthLoading>
				<div>Loading...</div>
			</AuthLoading>
		</>
	);
}
`],
  ["auth/clerk/convex/web/react/tanstack-start/src/routes/dashboard.tsx.hbs", `import { SignInButton, UserButton, useUser } from "@clerk/tanstack-react-start";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
import { createFileRoute } from "@tanstack/react-router";
import {
	Authenticated,
	AuthLoading,
	Unauthenticated,
	useQuery,
} from "convex/react";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	const privateData = useQuery(api.privateData.get);
	const user = useUser();

	return (
		<>
			<Authenticated>
				<div>
					<h1>Dashboard</h1>
					<p>Welcome {user.user?.fullName}</p>
					<p>privateData: {privateData?.message}</p>
					<UserButton />
				</div>
			</Authenticated>
			<Unauthenticated>
				<SignInButton />
			</Unauthenticated>
			<AuthLoading>
				<div>Loading...</div>
			</AuthLoading>
		</>
	);
}
`],
  ["auth/clerk/convex/web/react/tanstack-start/src/start.ts.hbs", `import { clerkMiddleware } from '@clerk/tanstack-react-start/server'
import { createStart } from '@tanstack/react-start'

export const startInstance = createStart(() => {
	return {
		requestMiddleware: [clerkMiddleware()],
	}
})`],
  ["backend/convex/packages/backend/_gitignore", `
.env.local
`],
  ["backend/convex/packages/backend/convex/convex.config.ts.hbs", `import { defineApp } from "convex/server";
{{#if (eq auth "better-auth")}}
import betterAuth from "@convex-dev/better-auth/convex.config";
{{/if}}
{{#if (includes examples "ai")}}
import agent from "@convex-dev/agent/convex.config";
{{/if}}

const app = defineApp();
{{#if (eq auth "better-auth")}}
app.use(betterAuth);
{{/if}}
{{#if (includes examples "ai")}}
app.use(agent);
{{/if}}

export default app;
`],
  ["backend/convex/packages/backend/convex/healthCheck.ts.hbs", `import { query } from "./_generated/server";

export const get = query({
  handler: async () => {
    return "OK";
  },
});
`],
  ["backend/convex/packages/backend/convex/README.md", `# Welcome to your Convex functions directory!

Write your Convex functions here.
See https://docs.convex.dev/functions for more.

A query function that takes two arguments looks like:

\`\`\`ts
// convex/myFunctions.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

export const myQueryFunction = query({
  // Validators for arguments.
  args: {
    first: v.number(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Read the database as many times as you need here.
    // See https://docs.convex.dev/database/reading-data.
    const documents = await ctx.db.query("tablename").collect();

    // Arguments passed from the client are properties of the args object.
    console.log(args.first, args.second);

    // Write arbitrary JavaScript here: filter, aggregate, build derived data,
    // remove non-public properties, or create new objects.
    return documents;
  },
});
\`\`\`

Using this query function in a React component looks like:

\`\`\`ts
const data = useQuery(api.myFunctions.myQueryFunction, {
  first: 10,
  second: "hello",
});
\`\`\`

A mutation function looks like:

\`\`\`ts
// convex/myFunctions.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const myMutationFunction = mutation({
  // Validators for arguments.
  args: {
    first: v.string(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Insert or modify documents in the database here.
    // Mutations can also read from the database like queries.
    // See https://docs.convex.dev/database/writing-data.
    const message = { body: args.first, author: args.second };
    const id = await ctx.db.insert("messages", message);

    // Optionally, return a value from your mutation.
    return await ctx.db.get("messages", id);
  },
});
\`\`\`

Using this mutation function in a React component looks like:

\`\`\`ts
const mutation = useMutation(api.myFunctions.myMutationFunction);
function handleButtonPress() {
  // fire and forget, the most common way to use mutations
  mutation({ first: "Hello!", second: "me" });
  // OR
  // use the result once the mutation has completed
  mutation({ first: "Hello!", second: "me" }).then((result) => console.log(result));
}
\`\`\`

Use the Convex CLI to push your functions to a deployment. See everything
the Convex CLI can do by running \`npx convex -h\` in your project root
directory. To learn more, launch the docs with \`npx convex docs\`.
`],
  ["backend/convex/packages/backend/convex/schema.ts.hbs", `import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
{{#if (includes examples "todo")}}
  todos: defineTable({
    text: v.string(),
    completed: v.boolean(),
  }),
{{/if}}
});
`],
  ["backend/convex/packages/backend/convex/tsconfig.json.hbs", `{
  /* This TypeScript project config describes the environment that
   * Convex functions run in and is used to typecheck them.
   * You can modify it, but some settings are required to use Convex.
   */
  "compilerOptions": {
    /* These settings are not required by Convex and can be modified. */
    "allowJs": true,
    "strict": true,
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,

    /* These compiler options are required by Convex */
    "target": "ESNext",
    "lib": ["ES2021", "dom"],
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["./**/*"],
  "exclude": ["./_generated"]
}
`],
  ["backend/convex/packages/backend/package.json.hbs", `{
  "name": "@{{projectName}}/backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "convex dev",
    "dev:setup": "convex dev --configure --until-success"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/node": "^24.3.0"
  },
  "dependencies": {}
}
`],
  ["backend/server/base/_gitignore", `# prod
dist/
/build
/out/

# dev
.yarn/
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions
.vscode/*
!.vscode/launch.json
!.vscode/*.code-snippets
.idea/workspace.xml
.idea/usage.statistics.xml
.idea/shelf
.wrangler
.alchemy
/.next/
.vercel
prisma/generated/


# deps
node_modules/
/node_modules
/.pnp
.pnp.*

# env
.env*
.env.production
!.env.example
.dev.vars

# logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# misc
.DS_Store
*.pem

# local db
*.db*

# typescript
*.tsbuildinfo
next-env.d.ts
`],
  ["backend/server/base/package.json.hbs", `{
	"name": "server",
	"main": "src/index.ts",
	"type": "module",
	"scripts": {
		"build": "tsdown",
		"check-types": "tsc -b",
		"compile": "bun build --compile --minify --sourcemap --bytecode ./src/index.ts --outfile server"
	},
	"dependencies": {},
	{{#if (eq dbSetup 'supabase')}}
	"trustedDependencies": [
        "supabase"
    ],
    {{/if}}
	"devDependencies": {}
}
`],
  ["backend/server/base/tsconfig.json.hbs", `{
  "extends": "@{{projectName}}/config/tsconfig.base.json",
  "compilerOptions": {
    "composite": true,
		"outDir": "dist",
		"baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "jsx": "react-jsx"{{#if (eq backend "hono")}},
    "jsxImportSource": "hono/jsx"{{/if}}
  }
}
`],
  ["backend/server/base/tsdown.config.ts.hbs", `import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: './src/index.ts',
    format: 'esm',
    outDir: './dist',
    clean: true,
    noExternal: [/@{{projectName}}\\/.*/]
});
`],
  ["backend/server/express/src/index.ts.hbs", `import { env } from "@{{projectName}}/env/server";
{{#if (eq api "trpc")}}
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { createContext } from "@{{projectName}}/api/context";
import { appRouter } from "@{{projectName}}/api/routers/index";
{{/if}}
{{#if (eq api "orpc")}}
import { OpenAPIHandler } from "@orpc/openapi/node";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { RPCHandler } from "@orpc/server/node";
import { onError } from "@orpc/server";
import { appRouter } from "@{{projectName}}/api/routers/index";
{{#if (eq auth "better-auth")}}
import { createContext } from "@{{projectName}}/api/context";
{{/if}}
{{/if}}
import cors from "cors";
import express from "express";
{{#if (includes examples "ai")}}
import { streamText, type UIMessage, convertToModelMessages, wrapLanguageModel } from "ai";
import { google } from "@ai-sdk/google";
import { devToolsMiddleware } from "@ai-sdk/devtools";
{{/if}}
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
import { toNodeHandler } from "better-auth/node";
{{/if}}

const app = express();

app.use(
	cors({
		origin: env.CORS_ORIGIN,
		methods: ["GET", "POST", "OPTIONS"],
{{#if (eq auth "better-auth")}}
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
{{/if}}
	})
);

{{#if (eq auth "better-auth")}}
app.all("/api/auth{/*path}", toNodeHandler(auth));
{{/if}}

{{#if (eq api "trpc")}}
app.use(
	"/trpc",
	createExpressMiddleware({
		router: appRouter,
		createContext,
	})
);
{{/if}}

{{#if (eq api "orpc")}}
const rpcHandler = new RPCHandler(appRouter, {
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});
const apiHandler = new OpenAPIHandler(appRouter, {
	plugins: [
		new OpenAPIReferencePlugin({
			schemaConverters: [new ZodToJsonSchemaConverter()],
		}),
	],
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

app.use(async (req, res, next) => {
	const rpcResult = await rpcHandler.handle(req, res, {
		prefix: "/rpc",
{{#if (eq auth "better-auth")}}
		context: await createContext({ req }),
{{else}}
		context: {},
{{/if}}
	});
	if (rpcResult.matched) return;

	const apiResult = await apiHandler.handle(req, res, {
		prefix: "/api-reference",
{{#if (eq auth "better-auth")}}
		context: await createContext({ req }),
{{else}}
		context: {},
{{/if}}
	});
	if (apiResult.matched) return;

	next();
});
{{/if}}

app.use(express.json());

{{#if (includes examples "ai")}}
app.post("/ai", async (req, res) => {
	const { messages = [] } = (req.body || {}) as { messages: UIMessage[] };
	const model = wrapLanguageModel({
		model: google("gemini-2.5-flash"),
		middleware: devToolsMiddleware(),
	});
	const result = streamText({
		model,
		messages: await convertToModelMessages(messages),
	});
	result.pipeUIMessageStreamToResponse(res);
});
{{/if}}

app.get("/", (_req, res) => {
	res.status(200).send("OK");
});

app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
`],
  ["backend/server/fastify/src/index.ts.hbs", `import { env } from "@{{projectName}}/env/server";
import Fastify from "fastify";
import fastifyCors from "@fastify/cors";

{{#if (eq api "trpc")}}
import { fastifyTRPCPlugin, type FastifyTRPCPluginOptions } from "@trpc/server/adapters/fastify";
import { createContext } from "@{{projectName}}/api/context";
import { appRouter, type AppRouter } from "@{{projectName}}/api/routers/index";
{{/if}}

{{#if (eq api "orpc")}}
import { OpenAPIHandler } from "@orpc/openapi/fastify";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { RPCHandler } from "@orpc/server/fastify";
import { onError } from "@orpc/server";
import { createContext } from "@{{projectName}}/api/context";
import { appRouter } from "@{{projectName}}/api/routers/index";
{{/if}}

{{#if (includes examples "ai")}}
import { streamText, type UIMessage, convertToModelMessages, wrapLanguageModel } from "ai";
import { google } from "@ai-sdk/google";
import { devToolsMiddleware } from "@ai-sdk/devtools";
{{/if}}

{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}

const baseCorsConfig = {
	origin: env.CORS_ORIGIN,
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: [
		"Content-Type",
		"Authorization",
		"X-Requested-With"
	],
	credentials: true,
	maxAge: 86400,
};

{{#if (eq api "orpc")}}
const rpcHandler = new RPCHandler(appRouter, {
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

const apiHandler = new OpenAPIHandler(appRouter, {
	plugins: [
		new OpenAPIReferencePlugin({
			schemaConverters: [new ZodToJsonSchemaConverter()],
		}),
	],
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

const fastify = Fastify({
	logger: true,
});
{{else}}
const fastify = Fastify({
	logger: true,
});
{{/if}}

fastify.register(fastifyCors, baseCorsConfig);

{{#if (eq api "orpc")}}
fastify.register(async (rpcApp) => {
	// Fully utilize oRPC features by letting oRPC parse the request body.
	rpcApp.addContentTypeParser("*", (_, _payload, done) => {
		done(null, undefined);
	});

	rpcApp.all("/rpc/*", async (request, reply) => {
		const { matched } = await rpcHandler.handle(request, reply, {
			context: await createContext(request.headers),
			prefix: "/rpc",
		});

		if (!matched) {
			reply.status(404).send();
		}
	});

	rpcApp.all("/api-reference/*", async (request, reply) => {
		const { matched } = await apiHandler.handle(request, reply, {
			context: await createContext(request.headers),
			prefix: "/api-reference",
		});

		if (!matched) {
			reply.status(404).send();
		}
	});
});
{{/if}}

{{#if (eq auth "better-auth")}}
fastify.route({
	method: ["GET", "POST"],
	url: "/api/auth/*",
	async handler(request, reply) {
		try {
			const url = new URL(request.url, \`http://\${request.headers.host}\`);
			const headers = new Headers();
			Object.entries(request.headers).forEach(([key, value]) => {
				if (value) headers.append(key, value.toString());
			});
			const req = new Request(url.toString(), {
				method: request.method,
				headers,
				body: request.body ? JSON.stringify(request.body) : undefined,
			});
			const response = await auth.handler(req);
			reply.status(response.status);
			response.headers.forEach((value, key) => reply.header(key, value));
			reply.send(response.body ? await response.text() : null);
		} catch (error) {
			fastify.log.error({ err: error }, "Authentication Error:");
			reply.status(500).send({
				error: "Internal authentication error",
				code: "AUTH_FAILURE"
			});
		}
	}
});
{{/if}}

{{#if (eq api "trpc")}}
fastify.register(fastifyTRPCPlugin, {
	prefix: "/trpc",
	trpcOptions: {
		router: appRouter,
		createContext,
		onError({ path, error }) {
			console.error(\`Error in tRPC handler on path '\${path}':\`, error);
		},
	} satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
});
{{/if}}

{{#if (includes examples "ai")}}
interface AiRequestBody {
	id?: string;
	messages: UIMessage[];
}

fastify.post('/ai', async function (request) {
	const { messages } = request.body as AiRequestBody;
	const model = wrapLanguageModel({
		model: google('gemini-2.5-flash'),
		middleware: devToolsMiddleware(),
	});
	const result = streamText({
		model,
		messages: await convertToModelMessages(messages),
	});

	return result.toUIMessageStreamResponse();
});
{{/if}}

fastify.get('/', async () => {
	return 'OK';
});

fastify.listen({ port: 3000 }, (err) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	console.log("Server running on port 3000");
});
`],
  ["backend/server/hono/src/index.ts.hbs", `import { env } from "@{{projectName}}/env/server";
{{#if (eq api "orpc")}}
import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { ZodToJsonSchemaConverter } from "@orpc/zod/zod4";
import { RPCHandler } from "@orpc/server/fetch";
import { onError } from "@orpc/server";
import { createContext } from "@{{projectName}}/api/context";
import { appRouter } from "@{{projectName}}/api/routers/index";
{{/if}}
{{#if (eq api "trpc")}}
import { trpcServer } from "@hono/trpc-server";
import { createContext } from "@{{projectName}}/api/context";
import { appRouter } from "@{{projectName}}/api/routers/index";
{{/if}}
{{#if (eq auth "better-auth")}}
import { auth } from "@{{projectName}}/auth";
{{/if}}
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
{{#if (and (includes examples "ai") (or (eq runtime "bun") (eq runtime "node")))}}
import { streamText, convertToModelMessages, wrapLanguageModel } from "ai";
import { google } from "@ai-sdk/google";
import { devToolsMiddleware } from "@ai-sdk/devtools";
{{/if}}
{{#if (and (includes examples "ai") (eq runtime "workers"))}}
import { streamText, convertToModelMessages, wrapLanguageModel } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { devToolsMiddleware } from "@ai-sdk/devtools";
{{/if}}

const app = new Hono();

app.use(logger());
app.use(
	"/*",
	cors({
		origin: env.CORS_ORIGIN,
		allowMethods: ["GET", "POST", "OPTIONS"],
{{#if (eq auth "better-auth")}}
		allowHeaders: ["Content-Type", "Authorization"],
		credentials: true,
{{/if}}
	})
);

{{#if (eq auth "better-auth")}}
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));
{{/if}}

{{#if (eq api "orpc")}}
export const apiHandler = new OpenAPIHandler(appRouter, {
	plugins: [
		new OpenAPIReferencePlugin({
			schemaConverters: [new ZodToJsonSchemaConverter()],
		}),
	],
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

export const rpcHandler = new RPCHandler(appRouter, {
	interceptors: [
		onError((error) => {
			console.error(error);
		}),
	],
});

app.use("/*", async (c, next) => {
	const context = await createContext({ context: c });

	const rpcResult = await rpcHandler.handle(c.req.raw, {
		prefix: "/rpc",
		context: context,
	});

	if (rpcResult.matched) {
		return c.newResponse(rpcResult.response.body, rpcResult.response);
	}

	const apiResult = await apiHandler.handle(c.req.raw, {
		prefix: "/api-reference",
		context: context,
	});

	if (apiResult.matched) {
		return c.newResponse(apiResult.response.body, apiResult.response);
	}

	await next();
});
{{/if}}

{{#if (eq api "trpc")}}
app.use(
	"/trpc/*",
	trpcServer({
		router: appRouter,
		createContext: (_opts, context) => {
			return createContext({ context });
		},
	})
);
{{/if}}

{{#if (and (includes examples "ai") (or (eq runtime "bun") (eq runtime "node")))}}
app.post("/ai", async (c) => {
	const body = await c.req.json();
	const uiMessages = body.messages || [];
	const model = wrapLanguageModel({
		model: google("gemini-2.5-flash"),
		middleware: devToolsMiddleware(),
	});
	const result = streamText({
		model,
		messages: await convertToModelMessages(uiMessages),
	});

	return result.toUIMessageStreamResponse();
});
{{/if}}

{{#if (and (includes examples "ai") (eq runtime "workers"))}}
app.post("/ai", async (c) => {
	const body = await c.req.json();
	const uiMessages = body.messages || [];
	const google = createGoogleGenerativeAI({
		apiKey: env.GOOGLE_GENERATIVE_AI_API_KEY,
	});
	const model = wrapLanguageModel({
		model: google("gemini-2.5-flash"),
		middleware: devToolsMiddleware(),
	});
	const result = streamText({
		model,
		messages: await convertToModelMessages(uiMessages),
	});

	return result.toUIMessageStreamResponse();
});
{{/if}}

app.get("/", (c) => {
	return c.text("OK");
});

{{#if (eq runtime "node")}}
import { serve } from "@hono/node-server";

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(\`Server is running on http://localhost:\${info.port}\`);
	}
);
{{else}}
{{#if (eq runtime "bun")}}
export default app;
{{/if}}
{{#if (eq runtime "workers")}}
export default app;
{{/if}}
{{/if}}
`],
  ["base/_gitignore", `# Dependencies
node_modules
.pnp
.pnp.js

# Build outputs
dist
build
*.tsbuildinfo

# Environment variables
.env
.env*.local

# IDEs and editors
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.idea
*.swp
*.swo
*~
.DS_Store

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Turbo
.turbo

# BikinProject
.alchemy

# Testing
coverage
.nyc_output

# Misc
*.tgz
.cache
tmp
temp`],
  ["base/package.json.hbs", `{
  "name": "{{projectName}}",
  "private": true,
  "type": "module",
  "scripts": {}
}
`],
  ["base/tsconfig.json.hbs", `{
  "extends": "./tsconfig.base.json",
}
`],
  ["db-setup/docker-compose/mongodb/docker-compose.yml.hbs", `name: {{projectName}}

services:
  mongodb:
    image: mongo
    container_name: {{projectName}}-mongodb
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: password
      MONGO_INITDB_DATABASE: {{projectName}}
    ports:
      - "27017:27017"
    volumes:
      - {{projectName}}_mongodb_data:/data/db
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

volumes:
  {{projectName}}_mongodb_data:`],
  ["db-setup/docker-compose/mysql/docker-compose.yml.hbs", `name: {{projectName}}

services:
  mysql:
    image: mysql
    container_name: {{projectName}}-mysql
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: {{projectName}}
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - {{projectName}}_mysql_data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

volumes:
  {{projectName}}_mysql_data:`],
  ["db-setup/docker-compose/postgres/docker-compose.yml.hbs", `name: {{projectName}}

services:
  postgres:
    image: postgres
    container_name: {{projectName}}-postgres
    environment:
      POSTGRES_DB: {{projectName}}
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - {{projectName}}_postgres_data:/var/lib/postgresql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

volumes:
  {{projectName}}_postgres_data:`],
  ["db/base/_gitignore", `# dependencies (bun install)
node_modules

# output
out
dist
*.tgz
/prisma/generated

# code coverage
coverage
*.lcov

# logs
logs
_.log
report.[0-9]_.[0-9]_.[0-9]_.[0-9]_.json

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# caches
.eslintcache
.cache
*.tsbuildinfo

# IntelliJ based IDEs
.idea

# Finder (MacOS) folder config
.DS_Store
`],
  ["db/base/package.json.hbs", `{
  "name": "@{{projectName}}/db",
  "type": "module",
  "exports": {
    ".": {
      "default": "./src/index.ts"
    },
    "./*": {
      "default": "./src/*.ts"
    }
  },
  "scripts": {},
  "devDependencies": {}
}`],
  ["db/base/tsconfig.json.hbs", `{
  "extends": "@{{projectName}}/config/tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "dist",
    "composite": true
  }
}`],
  ["db/drizzle/base/src/schema/index.ts.hbs", `{{#if (eq auth "better-auth")}}
export * from "./auth";
{{/if}}
{{#if (includes examples "todo")}}
export * from "./todo";
{{/if}}
export {};`],
  ["db/drizzle/mysql/drizzle.config.ts.hbs", `import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
    {{#if (eq backend "self")}}
    path: "../../apps/web/.env",
    {{else}}
    path: "../../apps/server/.env",
    {{/if}}
});

export default defineConfig({
  schema: "./src/schema",
  out: "./src/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
`],
  ["db/drizzle/mysql/src/index.ts.hbs", `{{#if (or (eq runtime "bun") (eq runtime "node") (eq runtime "none"))}}
import { env } from "@{{projectName}}/env/server";
import * as schema from "./schema";

{{#if (eq dbSetup "planetscale")}}
import { drizzle } from "drizzle-orm/planetscale-serverless";

export const db = drizzle({
	connection: {
		host: env.DATABASE_HOST,
		username: env.DATABASE_USERNAME,
		password: env.DATABASE_PASSWORD,
	},
	schema,
});
{{else}}
import { drizzle } from "drizzle-orm/mysql2";

export const db = drizzle({
	connection: {
		uri: env.DATABASE_URL,
	},
	schema,
});
{{/if}}
{{/if}}

{{#if (eq runtime "workers")}}
import * as schema from "./schema";

{{#if (eq dbSetup "planetscale")}}
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { env } from "@{{projectName}}/env/server";

export const db = drizzle({
	connection: {
		host: env.DATABASE_HOST,
		username: env.DATABASE_USERNAME,
		password: env.DATABASE_PASSWORD,
	},
	schema,
});
{{else}}
import { drizzle } from "drizzle-orm/mysql2";
import { env } from "@{{projectName}}/env/server";

export const db = drizzle({
	connection: {
		uri: env.DATABASE_URL,
	},
	schema,
});
{{/if}}
{{/if}}
`],
  ["db/drizzle/postgres/drizzle.config.ts.hbs", `import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
    {{#if (eq backend "self")}}
    path: "../../apps/web/.env",
    {{else}}
    path: "../../apps/server/.env",
    {{/if}}
});

export default defineConfig({
  schema: "./src/schema",
  out: "./src/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
`],
  ["db/drizzle/postgres/src/index.ts.hbs", `{{#if (or (eq runtime "bun") (eq runtime "node") (eq runtime "none"))}}
import { env } from "@{{projectName}}/env/server";
import * as schema from "./schema";

{{#if (eq dbSetup "neon")}}
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql, { schema });
{{else}}
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(env.DATABASE_URL, { schema });
{{/if}}
{{/if}}

{{#if (eq runtime "workers")}}
import * as schema from "./schema";

{{#if (eq dbSetup "neon")}}
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from "@{{projectName}}/env/server";

const sql = neon(env.DATABASE_URL || "");
export const db = drizzle(sql, { schema });
{{else}}
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "@{{projectName}}/env/server";

export const db = drizzle(env.DATABASE_URL || "", { schema });
{{/if}}
{{/if}}`],
  ["db/drizzle/sqlite/drizzle.config.ts.hbs", `import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
    {{#if (eq backend "self")}}
    path: "../../apps/web/.env",
    {{else}}
    path: "../../apps/server/.env",
    {{/if}}
});

export default defineConfig({
  schema: "./src/schema",
  out: "./src/migrations",
  {{#if (eq dbSetup "d1")}}
  // DOCS: https://orm.drizzle.team/docs/guides/d1-http-with-drizzle-kit
  dialect: "sqlite",
  driver: "d1-http",
  {{else}}
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    {{#if (eq dbSetup "turso")}}
    authToken: process.env.DATABASE_AUTH_TOKEN,
    {{/if}}
  },
  {{/if}}
});
`],
  ["db/drizzle/sqlite/src/index.ts.hbs", `{{#if (or (eq runtime "bun") (eq runtime "node") (eq runtime "none"))}}
import { env } from "@{{projectName}}/env/server";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
	url: env.DATABASE_URL,
{{#if (eq dbSetup "turso")}}
	authToken: env.DATABASE_AUTH_TOKEN,
{{/if}}
});

export const db = drizzle({ client, schema });
{{/if}}

{{#if (eq runtime "workers")}}
import * as schema from "./schema";

{{#if (eq dbSetup "d1")}}
import { drizzle } from "drizzle-orm/d1";
import { env } from "@{{projectName}}/env/server";

export const db = drizzle(env.DB, { schema });
{{else}}
import { drizzle } from "drizzle-orm/libsql";
import { env } from "@{{projectName}}/env/server";
import { createClient } from "@libsql/client";

const client = createClient({
	url: env.DATABASE_URL || "",
{{#if (eq dbSetup "turso")}}
	authToken: env.DATABASE_AUTH_TOKEN,
{{/if}}
});

export const db = drizzle({ client, schema });
{{/if}}
{{/if}}
`],
  ["db/mongoose/mongodb/src/index.ts.hbs", `import mongoose from "mongoose";
import { env } from "@{{projectName}}/env/server";

await mongoose.connect(env.DATABASE_URL).catch((error) => {
	console.log("Error connecting to database:", error);
});

const client = mongoose.connection.getClient().db("myDB");

export { client };
`],
  ["db/prisma/mongodb/prisma.config.ts.hbs", `import path from "node:path";
import type { PrismaConfig } from "prisma";
import dotenv from "dotenv";

dotenv.config({
    {{#if (eq backend "self")}}
    path: "../../apps/web/.env",
    {{else}}
    path: "../../apps/server/.env",
    {{/if}}
});

export default {
  schema: path.join("prisma", "schema"),
  migrations: {
    path: path.join("prisma", "migrations"),
  }
} satisfies PrismaConfig;
`],
  ["db/prisma/mongodb/prisma/schema/schema.prisma.hbs", `generator client {
  provider = "prisma-client"
  output   = "../generated"
  moduleFormat = "esm"
  {{#if (eq runtime "bun")}}
  runtime = "bun"
  {{/if}}
  {{#if (eq runtime "node")}}
  runtime = "nodejs"
  {{/if}}
  {{#if (or (eq runtime "workers") (and (eq backend "self") (eq webDeploy "cloudflare")))}}
  runtime = "workerd"
  {{/if}}
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
`],
  ["db/prisma/mongodb/src/index.ts.hbs", `import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

export default prisma;
`],
  ["db/prisma/mysql/prisma.config.ts.hbs", `import path from "node:path";
import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

dotenv.config({
  {{#if (eq backend "self")}}
  path: "../../apps/web/.env",
  {{else}}
  path: "../../apps/server/.env",
  {{/if}}
});

export default defineConfig({
  schema: path.join("prisma", "schema"),
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});`],
  ["db/prisma/mysql/prisma/schema/schema.prisma.hbs", `generator client {
  provider      = "prisma-client"
  output        = "../generated"
  moduleFormat  = "esm"
  {{#if (eq runtime "bun")}}
  runtime       = "bun"
  {{/if}}
  {{#if (eq runtime "node")}}
  runtime       = "nodejs"
  {{/if}}
  {{#if (or (eq runtime "workers") (and (eq backend "self") (eq webDeploy "cloudflare")))}}
  runtime       = "workerd"
  {{/if}}
}

datasource db {
  provider = "mysql"
  {{#if (eq dbSetup "planetscale")}}
  relationMode = "prisma"
  {{/if}}
}`],
  ["db/prisma/mysql/src/index.ts.hbs", `{{#if (eq runtime "workers")}}
import { PrismaClient } from "../prisma/generated/client";
import { env } from "@{{projectName}}/env/server";

{{#if (eq dbSetup "planetscale")}}
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";

const adapter = new PrismaPlanetScale({ url: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
{{else}}
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const databaseUrl: string = env.DATABASE_URL;
const url: URL = new URL(databaseUrl);
const connectionConfig = {
	host: url.hostname,
	port: parseInt(url.port || "3306"),
	user: url.username,
	password: url.password,
	database: url.pathname.slice(1),
};

const adapter = new PrismaMariaDb(connectionConfig);
const prisma = new PrismaClient({ adapter });
{{/if}}

export default prisma;
{{else}}
import { PrismaClient } from "../prisma/generated/client";
import { env } from "@{{projectName}}/env/server";

{{#if (eq dbSetup "planetscale")}}
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";

const adapter = new PrismaPlanetScale({ url: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
{{else}}
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const databaseUrl: string = env.DATABASE_URL;
const url: URL = new URL(databaseUrl);
const connectionConfig = {
	host: url.hostname,
	port: parseInt(url.port || "3306"),
	user: url.username,
	password: url.password,
	database: url.pathname.slice(1),
};

const adapter = new PrismaMariaDb(connectionConfig);
const prisma = new PrismaClient({ adapter });
{{/if}}

export default prisma;
{{/if}}`],
  ["db/prisma/postgres/prisma.config.ts.hbs", `import path from "node:path";
import { defineConfig, env } from 'prisma/config'
import dotenv from 'dotenv'

dotenv.config({
    {{#if (eq backend "self")}}
    path: "../../apps/web/.env",
    {{else}}
    path: "../../apps/server/.env",
    {{/if}}
})

export default defineConfig({
  schema: path.join("prisma", "schema"),
  migrations: {
    path: path.join("prisma", "migrations"),
    },
    datasource: {
        url: env('DATABASE_URL'),
    },
})
`],
  ["db/prisma/postgres/prisma/schema/schema.prisma.hbs", `generator client {
  provider = "prisma-client"
  output   = "../generated"
  moduleFormat = "esm"
  {{#if (eq runtime "bun")}}
  runtime = "bun"
  {{/if}}
  {{#if (eq runtime "node")}}
  runtime = "nodejs"
  {{/if}}
  {{#if (or (eq runtime "workers") (and (eq backend "self") (eq webDeploy "cloudflare")))}}
  runtime = "workerd"
  {{/if}}
}

datasource db {
  provider = "postgresql"
  {{#if (eq dbSetup "planetscale")}}
  relationMode = "prisma"
  {{/if}}
}
`],
  ["db/prisma/postgres/src/index.ts.hbs", `{{#if (eq runtime "workers")}}
import { PrismaClient } from "../prisma/generated/client";
import { env } from "@{{projectName}}/env/server";
{{#if (eq dbSetup "neon")}}
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";

neonConfig.poolQueryViaFetch = true;

const prisma = new PrismaClient({
	adapter: new PrismaNeon({
		connectionString: env.DATABASE_URL,
	}),
});

{{else if (eq dbSetup "prisma-postgres")}}
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
	connectionString: env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

{{else}}
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

{{/if}}

export default prisma;
{{else}}
import { PrismaClient } from "../prisma/generated/client";
import { env } from "@{{projectName}}/env/server";
{{#if (eq dbSetup "neon")}}
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
	connectionString: env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

{{else if (eq dbSetup "prisma-postgres")}}
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
	connectionString: env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

{{else}}
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

{{/if}}

export default prisma;
{{/if}}`],
  ["db/prisma/sqlite/prisma.config.ts.hbs", `import path from "node:path";
import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

dotenv.config({
  {{#if (eq backend "self")}}
  path: "../../apps/web/.env",
  {{else}}
  path: "../../apps/server/.env",
  {{/if}}
});

export default defineConfig({
  schema: path.join("prisma", "schema"),
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  datasource: {
    {{#if (eq dbSetup "turso")}}
    url: "file:./dev.db",
    {{else}}
    url: env("DATABASE_URL"),
    {{/if}}
  },
});`],
  ["db/prisma/sqlite/prisma/schema/schema.prisma.hbs", `generator client {
  provider = "prisma-client"
  output   = "../generated"
  moduleFormat = "esm"
  {{#if (eq runtime "bun")}}
  runtime = "bun"
  {{/if}}
  {{#if (eq runtime "node")}}
  runtime = "nodejs"
  {{/if}}
  {{#if (or (eq runtime "workers") (and (eq backend "self") (eq webDeploy "cloudflare")))}}
  runtime = "workerd"
  {{/if}}
}

datasource db {
  provider = "sqlite"
}
`],
  ["db/prisma/sqlite/src/index.ts.hbs", `import { PrismaClient } from "../prisma/generated/client";

{{#if (eq dbSetup "d1")}}
import { PrismaD1 } from "@prisma/adapter-d1";
import { env } from "@{{projectName}}/env/server";

const adapter = new PrismaD1(env.DB);
const prisma = new PrismaClient({ adapter });

export default prisma;
{{else}}
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { env } from "@{{projectName}}/env/server";

const adapter = new PrismaLibSql({
	url: env.DATABASE_URL,
{{#if (eq dbSetup "turso")}}
	authToken: env.DATABASE_AUTH_TOKEN || "",
{{/if}}
});

const prisma = new PrismaClient({ adapter });

export default prisma;
{{/if}}`],
  ["extras/_npmrc.hbs", `node-linker=isolated
{{#if (includes frontend "nuxt")}}
shamefully-hoist=true
strict-peer-dependencies=false
{{/if}}`],
  ["extras/bunfig.toml.hbs", `[install]
{{#if (or (includes frontend "nuxt"))}}
linker = "hoisted" # having issues with Nuxt when linker is isolated
{{else}}
linker = "isolated"
{{/if}}`],
  ["extras/env.d.ts.hbs", `import { type server } from "@{{projectName}}/infra/alchemy.run";

// This file infers types for the cloudflare:workers environment from your Alchemy Worker.
// @see https://alchemy.run/concepts/bindings/#type-safe-bindings

export type CloudflareEnv = typeof server.Env;

declare global {
  type Env = CloudflareEnv;
}

declare module "cloudflare:workers" {
  namespace Cloudflare {
    export interface Env extends CloudflareEnv {}
  }
}
`],
  ["frontend/astro/_gitignore", `# build output
dist/

# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# jetbrains setting folder
.idea/

# lockfiles
yarn.lock
package-lock.json
pnpm-lock.yaml
bun.lockb
bun.lock

# workspace
pnpm-workspace.yaml

`],
  ["frontend/astro/.prettierrc", `{
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
`],
  ["frontend/astro/astro.config.mjs.hbs", `// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import node from "@astrojs/node";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
{{#if (ne backend "self")}}
  env: {
    schema: {
      PUBLIC_SERVER_URL: envField.string({
        access: "public",
        context: "client",
        default: "http://localhost:3000",
      }),
    },
  },
{{/if}}
  vite: {
    resolve: {
      alias: {
        "@/app": resolve(__dirname, "src/app"),
        "@/api": resolve(__dirname, "src/app/api"),
        "@/features": resolve(__dirname, "src/features"),
        "@/shared": resolve(__dirname, "src/shared"),
        "@/assets": resolve(__dirname, "src/assets"),
        "@/": resolve(__dirname, "src"),
      },
    },
    plugins: [tailwindcss()],
  },
});
`],
  ["frontend/astro/package.json.hbs", `{
  "name": "web",
  "type": "module",
  "private": true,
  "version": "0.1.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.6",
    "@astrojs/node": "^9.5.4",
    "astro": "^5.16.11",
    "axios": "^1.13.6",
    "clsx": "^2.1.1",
    "smoothscroll-polyfill": "^0.4.4",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.2.1",
    "@types/node": "^25.3.5",
    "@types/smoothscroll-polyfill": "^0.3.4",
    "autoprefixer": "^10.4.27",
    "jiti": "^2.4.2",
    "lightningcss": "^1.31.1",
    "postcss": "^8.5.8",
    "prettier": "3.8.1",
    "prettier-plugin-astro": "0.14.1",
    "prettier-plugin-tailwindcss": "^0.7.2",
    "rollup": "4.59.0",
    "tailwindcss": "^4.2.1",
    "tsx": "^4.19.3",
    "typescript": "^5.9.3",
    "vite": "6.4.1",
    "yaml": "^2.8.2"
  }
}
`],
  ["frontend/astro/public/assets/img/template-img-room.png", `[Binary file]`],
  ["frontend/astro/public/assets/img/template-img.png", `[Binary file]`],
  ["frontend/astro/public/assets/svg/undraw_login.svg", `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="793" height="551.732" data-name="Layer 1" viewBox="0 0 793 551.732"><ellipse cx="158" cy="539.732" fill="#e6e6e6" rx="158" ry="12"/><path fill="#2f2e41" d="M324.27227,296.55377c27.49676-11.6953,61.74442-4.28528,95.19092.85757.31124-6.228,4.08385-13.80782.132-18.15284-4.80115-5.2788-4.35917-10.82529-1.47008-16.40375,7.38788-14.265-3.1969-29.44375-13.88428-42.0647a23.66937,23.66937,0,0,0-19.75537-8.29179l-19.7975,1.41411A23.70939,23.70939,0,0,0,343.635,230.85851v0c-4.72724,6.42917-7.25736,12.84055-5.66438,19.21854-7.08065,4.83882-8.27029,10.67977-5.08851,17.2644,2.698,4.14592,2.66928,8.18161-.12275,12.1056a55.89079,55.89079,0,0,0-8.31011,16.5061Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M977.70889,651.09727H417.29111A18.79111,18.79111,0,0,1,398.5,632.30616h0q304.727-35.41512,598,0h0A18.79111,18.79111,0,0,1,977.70889,651.09727Z" transform="translate(-203.5 -174.13424)"/><path fill="#3f3d56" d="M996.5,633.41151l-598-1.10536,69.30611-116.61553.3316-.55268V258.13057a23.7522,23.7522,0,0,1,23.75418-23.75418H899.792a23.7522,23.7522,0,0,1,23.75418,23.75418V516.90649Z" transform="translate(-203.5 -174.13424)"/><path fill="#fff" d="M491.35028,250.95679a7.74623,7.74623,0,0,0-7.73753,7.73753V493.03073a7.74657,7.74657,0,0,0,7.73753,7.73752H903.64972a7.74691,7.74691,0,0,0,7.73753-7.73752V258.69432a7.74657,7.74657,0,0,0-7.73753-7.73753Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M493.07794,531.71835a3.32522,3.32522,0,0,0-3.01275,1.93006l-21.35537,46.42514a3.31594,3.31594,0,0,0,3.01221,4.7021H920.81411a3.3157,3.3157,0,0,0,2.96526-4.79925L900.5668,533.55126a3.29926,3.29926,0,0,0-2.96526-1.83291Z" transform="translate(-203.5 -174.13424)"/><circle cx="492.342" cy="67.98" r="4.974" fill="#fff"/><path fill="#2f2e41" d="M651.69986,593.61853a3.32114,3.32114,0,0,0-3.20165,2.4536l-5.35679,19.89649a3.31576,3.31576,0,0,0,3.20166,4.17856h101.874a3.31531,3.31531,0,0,0,3.13257-4.40093l-6.88691-19.89649a3.31784,3.31784,0,0,0-3.13366-2.23123Z" transform="translate(-203.5 -174.13424)"/><polygon fill="#2f2e41" points="720.046 337.135 720.046 341.556 264.306 341.556 264.649 341.004 264.649 337.135 720.046 337.135"/><circle cx="707.335" cy="77.375" r="77.375" fill="#01a3a4"/><path fill="#fff" d="M942.89,285.223H878.77911a4.42582,4.42582,0,0,1-4.42144-4.42145V242.11391a4.42616,4.42616,0,0,1,4.42144-4.42144H942.89a4.42616,4.42616,0,0,1,4.42144,4.42144v38.68761A4.42582,4.42582,0,0,1,942.89,285.223Zm-64.11091-43.10906v38.68761h64.11415L942.89,242.11391Z" transform="translate(-203.5 -174.13424)"/><path fill="#fff" d="M930.73105,242.11391h-39.793V224.42814c0-12.80987,8.36792-22.10721,19.89649-22.10721s19.89648,9.29734,19.89648,22.10721Zm-35.37153-4.42144h30.95009V224.42814c0-10.413-6.36338-17.68576-15.475-17.68576s-15.47505,7.27281-15.47505,17.68576Z" transform="translate(-203.5 -174.13424)"/><circle cx="707.335" cy="86.218" r="4.421" fill="#fff"/><path fill="#e6e6e6" d="M856.81994,421.28372H538.18006a5.90767,5.90767,0,0,1-5.90073-5.90073V336.342a5.90767,5.90767,0,0,1,5.90073-5.90072H856.81994a5.90767,5.90767,0,0,1,5.90073,5.90072V415.383A5.90767,5.90767,0,0,1,856.81994,421.28372Zm-318.63988-88.4821a3.5443,3.5443,0,0,0-3.54043,3.54043V415.383a3.54431,3.54431,0,0,0,3.54043,3.54044H856.81994a3.54431,3.54431,0,0,0,3.54043-3.54044V336.342a3.5443,3.5443,0,0,0-3.54043-3.54043Z" transform="translate(-203.5 -174.13424)"/><circle cx="384.19" cy="198.695" r="24.036" fill="#e6e6e6"/><path fill="#e6e6e6" d="M643.203,356.80541a4.00608,4.00608,0,1,0,0,8.01215H832.06074a4.00607,4.00607,0,0,0,0-8.01215Z" transform="translate(-203.5 -174.13424)"/><path fill="#e6e6e6" d="M643.203,380.84186a4.00607,4.00607,0,1,0,0,8.01214H724.469a4.00607,4.00607,0,1,0,0-8.01214Z" transform="translate(-203.5 -174.13424)"/><path fill="#ffb8b8" d="M467.022,382.46241,408.1189,413.778l-.74561-26.09629c19.22553-3.20948,37.51669-8.7974,54.42941-17.8946l6.1605-15.22008a10.31753,10.31753,0,0,1,17.53643-2.67788l0,0a10.31753,10.31753,0,0,1-.90847,14.06885Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M323.09819,563.26707v0a11.57378,11.57378,0,0,1,1.46928-9.36311l12.93931-19.85777a22.61221,22.61221,0,0,1,29.335-7.73927h0c-5.438,9.25647-4.67994,17.37679,1.87806,24.43365a117.63085,117.63085,0,0,0-27.93606,19.04492A11.57386,11.57386,0,0,1,323.09819,563.26707Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M469.70475,537.30274l0,0a22.20314,22.20314,0,0,1-18.87085,10.77909l-85.96027.65122-3.728-21.62264,38.026-11.18413-32.06116-24.60507L402.154,450.31277l63.65,59.32431A22.20317,22.20317,0,0,1,469.70475,537.30274Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M351.45266,685.17939H331.32124c-18.07509-123.89772-36.47383-248.14186,17.8946-294.51529l64.12231,10.43852L405.13646,455.532l-35.7892,41.00845Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M369.14917,713.24594h0a11.57381,11.57381,0,0,1-9.3632-1.46873l-21.85854-2.93814a22.61221,22.61221,0,0,1-7.741-29.33451v0c9.2568,5.43749,17.37707,4.67891,24.43354-1.8795,4.98593,10.06738,13.20093,9.45331,21.04657,17.93494A11.57385,11.57385,0,0,1,369.14917,713.24594Z" transform="translate(-203.5 -174.13424)"/><path fill="#ffb8b8" d="M399.1716,307.90158l-37.28042-8.94731c6.19168-12.6739,6.70155-26.77618,3.728-41.75406l25.35068-.74561C391.76421,275.08,394.16732,292.48081,399.1716,307.90158Z" transform="translate(-203.5 -174.13424)"/><path fill="#01a3a4" d="M409.41752,423.55243c-27.13873,18.49308-46.31418.63272-60.94729-26.92346,2.03338-16.86188-1.259-37.04061-7.35672-58.96635a40.13762,40.13762,0,0,1,24.50567-48.40124h0l32.06116,13.421c27.22362,22.19038,32.582,46.227,22.36825,71.5784Z" transform="translate(-203.5 -174.13424)"/><path fill="#ffb8b8" d="M331.32124,326.54178,301.4969,342.19956l52.9382,31.31555,7.366,18.16951a9.63673,9.63673,0,0,1-5.78925,12.73088h0a9.63673,9.63673,0,0,1-12.76159-8.54442l-.74489-12.66307-67.2838-22.20366a15.73306,15.73306,0,0,1-9.87265-9.61147v0a15.733,15.733,0,0,1,5.90262-18.30258l54.10485-37.11845Z" transform="translate(-203.5 -174.13424)"/><path fill="#01a3a4" d="M361.14557,329.52422c-12.43861-5.4511-23.74934.47044-38.026,5.21926l-2.23683-39.51725c14.17612-7.55568,27.69209-9.59281,40.26285-3.728Z" transform="translate(-203.5 -174.13424)"/><circle cx="172.525" cy="78.093" r="23.802" fill="#ffb8b8"/><path fill="#2f2e41" d="M404.5,249.22353c-23.56616,2.30811-41.52338-1.54606-53-12.52007v-8.8377h51Z" transform="translate(-203.5 -174.13424)"/></svg>`],
  ["frontend/astro/public/assets/svg/undraw_not_found.svg", `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="860.131" height="571.148" data-name="Layer 1" viewBox="0 0 860.131 571.148"><path fill="#f2f2f2" d="M605.66974,324.95306c-7.66934-12.68446-16.7572-26.22768-30.98954-30.36953-16.482-4.7965-33.4132,4.73193-47.77473,14.13453a1392.15692,1392.15692,0,0,0-123.89338,91.28311l.04331.49238q46.22556-3.1878,92.451-6.37554c22.26532-1.53546,45.29557-3.2827,64.97195-13.8156,7.46652-3.99683,14.74475-9.33579,23.20555-9.70782,10.51175-.46217,19.67733,6.87923,26.8802,14.54931,42.60731,45.371,54.937,114.75409,102.73817,154.61591A1516.99453,1516.99453,0,0,0,605.66974,324.95306Z" transform="translate(-169.93432 -164.42601)"/><path fill="#e4e4e4" d="M867.57068,709.78146c-4.71167-5.94958-6.6369-7.343-11.28457-13.34761q-56.7644-73.41638-106.70791-151.79237-33.92354-53.23-64.48275-108.50439-14.54864-26.2781-28.29961-52.96872-10.67044-20.6952-20.8646-41.63793c-1.94358-3.98782-3.8321-7.99393-5.71122-12.00922-4.42788-9.44232-8.77341-18.93047-13.43943-28.24449-5.31686-10.61572-11.789-21.74485-21.55259-28.877a29.40493,29.40493,0,0,0-15.31855-5.89458c-7.948-.51336-15.28184,2.76855-22.17568,6.35295-50.43859,26.301-97.65922,59.27589-140.3696,96.79771A730.77816,730.77816,0,0,0,303.32241,496.24719c-1.008,1.43927-3.39164.06417-2.37419-1.38422q6.00933-8.49818,12.25681-16.81288A734.817,734.817,0,0,1,500.80465,303.06436q18.24824-11.82581,37.18269-22.54245c6.36206-3.60275,12.75188-7.15967,19.25136-10.49653,6.37146-3.27274,13.13683-6.21547,20.41563-6.32547,24.7701-.385,37.59539,27.66695,46.40506,46.54248q4.15283,8.9106,8.40636,17.76626,16.0748,33.62106,33.38729,66.628,10.68453,20.379,21.83683,40.51955,34.7071,62.71816,73.77854,122.897c34.5059,53.1429,68.73651,100.08874,108.04585,149.78472C870.59617,709.21309,868.662,711.17491,867.57068,709.78146Z" transform="translate(-169.93432 -164.42601)"/><path fill="#e4e4e4" d="M414.91613,355.804c-1.43911-1.60428-2.86927-3.20856-4.31777-4.81284-11.42244-12.63259-23.6788-25.11847-39.3644-32.36067a57.11025,57.11025,0,0,0-23.92679-5.54622c-8.56213.02753-16.93178,2.27348-24.84306,5.41792-3.74034,1.49427-7.39831,3.1902-11.00078,4.99614-4.11634,2.07182-8.15927,4.28118-12.1834,6.50883q-11.33112,6.27044-22.36816,13.09089-21.9606,13.57221-42.54566,29.21623-10.67111,8.11311-20.90174,16.75788-9.51557,8.03054-18.64618,16.492c-1.30169,1.20091-3.24527-.74255-1.94358-1.94347,1.60428-1.49428,3.22691-2.97938,4.84955-4.44613q6.87547-6.21546,13.9712-12.19257,12.93921-10.91827,26.54851-20.99312,21.16293-15.67614,43.78288-29.22541,11.30361-6.76545,22.91829-12.96259c2.33794-1.24675,4.70318-2.466,7.09572-3.6211a113.11578,113.11578,0,0,1,16.86777-6.86632,60.0063,60.0063,0,0,1,25.476-2.50265,66.32706,66.32706,0,0,1,23.50512,8.1314c15.40091,8.60812,27.34573,21.919,38.97,34.90915C418.03337,355.17141,416.09875,357.12405,414.91613,355.804Z" transform="translate(-169.93432 -164.42601)"/><path fill="#e4e4e4" d="M730.47659,486.71092l36.90462-13.498,18.32327-6.70183c5.96758-2.18267,11.92082-4.66747,18.08988-6.23036a28.53871,28.53871,0,0,1,16.37356.20862,37.73753,37.73753,0,0,1,12.771,7.91666,103.63965,103.63965,0,0,1,10.47487,11.18643c3.98932,4.79426,7.91971,9.63877,11.86772,14.46706q24.44136,29.89094,48.56307,60.04134,24.12117,30.14991,47.91981,60.556,23.85681,30.48041,47.38548,61.21573,2.88229,3.76518,5.75966,7.53415c1.0598,1.38809,3.44949.01962,2.37472-1.38808Q983.582,650.9742,959.54931,620.184q-24.09177-30.86383-48.51647-61.46586-24.42421-30.60141-49.17853-60.93743-6.16706-7.55761-12.35445-15.09858c-3.47953-4.24073-6.91983-8.52718-10.73628-12.47427-7.00539-7.24516-15.75772-13.64794-26.23437-13.82166-6.15972-.10214-12.121,1.85248-17.844,3.92287-6.16968,2.232-12.32455,4.50571-18.48633,6.75941l-37.16269,13.59243-9.29067,3.3981c-1.64875.603-.93651,3.2619.73111,2.652Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M366.37741,334.52609c-18.75411-9.63866-42.77137-7.75087-60.00508,4.29119a855.84708,855.84708,0,0,1,97.37056,22.72581C390.4603,353.75916,380.07013,341.5635,366.37741,334.52609Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M306.18775,338.7841l-3.61042,2.93462c1.22123-1.02713,2.4908-1.99013,3.795-2.90144C306.31073,338.80665,306.24935,338.79473,306.18775,338.7841Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M831.54929,486.84576c-3.6328-4.42207-7.56046-9.05222-12.99421-10.84836l-5.07308.20008A575.436,575.436,0,0,0,966.74929,651.418Q899.14929,569.13192,831.54929,486.84576Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M516.08388,450.36652A37.4811,37.4811,0,0,0,531.015,471.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M749.08388,653.36652A37.4811,37.4811,0,0,0,764.015,674.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M284.08388,639.36652A37.4811,37.4811,0,0,0,299.015,660.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)"/><circle cx="649.249" cy="51" r="51" fill="#0EA5E9"/><path fill="#f0f0f0" d="M911.21851,176.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C957.07935,195.76,935.93537,179.63727,911.21851,176.29639Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f0f0f0" d="M805.21851,244.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C851.07935,263.76,829.93537,247.63727,805.21851,244.29639Z" transform="translate(-169.93432 -164.42601)"/><path fill="#ccc" d="M1020.94552,257.15423a.98189.98189,0,0,1-.30176-.04688C756.237,173.48919,523.19942,184.42376,374.26388,208.32122c-20.26856,3.251-40.59131,7.00586-60.40381,11.16113-5.05811,1.05957-10.30567,2.19532-15.59668,3.37793-6.31885,1.40723-12.55371,2.85645-18.53223,4.30567q-3.873.917-7.59472,1.84863c-3.75831.92773-7.57178,1.89453-11.65967,2.957-4.56787,1.17774-9.209,2.41309-13.79737,3.67188a.44239.44239,0,0,1-.05127.01465l.00049.001c-5.18261,1.415-10.33789,2.8711-15.32324,4.3252-2.69824.77929-5.30371,1.54785-7.79932,2.30664-.2788.07715-.52587.15136-.77636.22754l-.53614.16308c-.31054.09473-.61718.1875-.92382.27539l-.01953.00586.00048.001-.81152.252c-.96777.293-1.91211.5791-2.84082.86426-24.54492,7.56641-38.03809,12.94922-38.17139,13.00195a1,1,0,1,1-.74414-1.85644c.13428-.05274,13.69336-5.46289,38.32764-13.05762.93213-.28613,1.87891-.57226,2.84961-.86621l.7539-.23438c.02588-.00976.05176-.01757.07813-.02539.30518-.08691.60986-.17968.91943-.27343l.53711-.16309c.26758-.08105.53125-.16113.80127-.23535,2.47852-.75391,5.09278-1.52441,7.79785-2.30664,4.98731-1.45508,10.14746-2.91113,15.334-4.32813.01611-.00586.03271-.00976.04883-.01464v-.001c4.60449-1.2627,9.26269-2.50293,13.84521-3.68457,4.09424-1.06348,7.915-2.03223,11.67969-2.96192q3.73755-.93017,7.60937-1.85253c5.98536-1.45118,12.23291-2.90235,18.563-4.3125,5.29932-1.1836,10.55567-2.32227,15.62207-3.38282,19.84326-4.16211,40.19776-7.92285,60.49707-11.17871C523.09591,182.415,756.46749,171.46282,1021.2463,255.2011a.99974.99974,0,0,1-.30078,1.95313Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M432.92309,584.266a6.72948,6.72948,0,0,0-1.7-2.67,6.42983,6.42983,0,0,0-.92-.71c-2.61-1.74-6.51-2.13-8.99,0a5.81012,5.81012,0,0,0-.69.71q-1.11,1.365-2.28,2.67c-1.28,1.46-2.59,2.87-3.96,4.24-.39.38-.78.77-1.18,1.15-.23.23-.46.45-.69.67-.88.84-1.78,1.65-2.69,2.45-.48.43-.96.85-1.45,1.26-.73.61-1.46,1.22-2.2,1.81-.07.05-.14.1-.21.16-.02.01-.03.03-.05.04-.01,0-.02,0-.03.02a.17861.17861,0,0,0-.07.05c-.22.15-.37.25-.48.34.04-.01995.08-.05.12-.07-.18.14-.37.28-.55.42-1.75,1.29-3.54,2.53-5.37,3.69a99.21022,99.21022,0,0,1-14.22,7.55c-.33.13-.67.27-1.01.4a85.96993,85.96993,0,0,1-40.85,6.02q-2.13008-.165-4.26-.45c-1.64-.24-3.27-.53-4.89-.86a97.93186,97.93186,0,0,1-18.02-5.44,118.65185,118.65185,0,0,1-20.66-12.12c-1-.71-2.01-1.42-3.02-2.11,1.15-2.82,2.28-5.64,3.38-8.48.55-1.37,1.08-2.74,1.6-4.12,4.09-10.63,7.93-21.36,11.61-32.13q5.58-16.365,10.53-32.92.51-1.68.99-3.36,2.595-8.745,4.98-17.53c.15-.56994.31-1.12994.45-1.7q.68994-2.52,1.35-5.04c1-3.79-1.26-8.32-5.24-9.23a7.63441,7.63441,0,0,0-9.22,5.24c-.43,1.62-.86,3.23-1.3,4.85q-3.165,11.74494-6.66,23.41-.51,1.68-1.02,3.36-7.71,25.41-16.93,50.31-1.11,3.015-2.25,6.01c-.37.98-.74,1.96-1.12,2.94-.73,1.93-1.48,3.86-2.23,5.79-.43006,1.13-.87006,2.26-1.31,3.38-.29.71-.57,1.42-.85,2.12a41.80941,41.80941,0,0,0-8.81-2.12l-.48-.06a27.397,27.397,0,0,0-7.01.06,23.91419,23.91419,0,0,0-17.24,10.66c-4.77,7.51-4.71,18.25,1.98,24.63,6.89,6.57,17.32,6.52,25.43,2.41a28.35124,28.35124,0,0,0,10.52-9.86,50.56939,50.56939,0,0,0,2.74-4.65c.21.14.42.28.63.43.8.56,1.6,1.13,2.39,1.69a111.73777,111.73777,0,0,0,14.51,8.91,108.35887,108.35887,0,0,0,34.62,10.47c.27.03.53.07.8.1,1.33.17,2.67.3,4.01.41a103.78229,103.78229,0,0,0,55.58-11.36q2.175-1.125,4.31-2.36,3.315-1.92,6.48-4.08c1.15-.78,2.27-1.57,3.38-2.4a101.04244,101.04244,0,0,0,13.51-11.95q2.35491-2.475,4.51-5.11005a8.0612,8.0612,0,0,0,2.2-5.3A7.5644,7.5644,0,0,0,432.92309,584.266Zm-165.59,23.82c.21-.15.42-.31.62-.47C267.89312,607.766,267.60308,607.936,267.33312,608.086Zm3.21-3.23c-.23.26-.44.52-.67.78a23.36609,23.36609,0,0,1-2.25,2.2c-.11.1-.23.2-.35.29a.00976.00976,0,0,0-.01.01,3.80417,3.80417,0,0,0-.42005.22q-.645.39-1.31994.72a17.00459,17.00459,0,0,1-2.71.75,16.79925,16.79925,0,0,1-2.13.02h-.02a14.82252,14.82252,0,0,1-1.45-.4c-.24-.12-.47-.25994-.7-.4-.09-.08-.17005-.16-.22-.21a2.44015,2.44015,0,0,1-.26995-.29.0098.0098,0,0,0-.01-.01c-.11005-.2-.23005-.4-.34-.6a.031.031,0,0,1-.01-.02c-.08-.25-.15-.51-.21-.77a12.51066,12.51066,0,0,1,.01-1.37,13.4675,13.4675,0,0,1,.54-1.88,11.06776,11.06776,0,0,1,.69-1.26c.02-.04.12-.2.23-.38.01-.01.01-.01.01-.02.15-.17.3-.35.46-.51.27-.3.56-.56.85-.83a18.02212,18.02212,0,0,1,1.75-1.01,19.48061,19.48061,0,0,1,2.93-.79,24.98945,24.98945,0,0,1,4.41.04,30.30134,30.30134,0,0,1,4.1,1.01,36.94452,36.94452,0,0,1-2.77,4.54C270.6231,604.746,270.58312,604.806,270.54308,604.856Zm-11.12-3.29a2.18029,2.18029,0,0,1-.31.38995A1.40868,1.40868,0,0,1,259.42309,601.566Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M402.86309,482.136q-.13494,4.71-.27,9.42-.285,10.455-.59,20.92-.315,11.775-.66,23.54-.165,6.07507-.34,12.15-.465,16.365-.92,32.72c-.03,1.13-.07,2.25-.1,3.38q-.225,8.11506-.45,16.23-.255,8.805-.5,17.61-.18,6.59994-.37,13.21-1.34994,47.895-2.7,95.79a7.64844,7.64844,0,0,1-7.5,7.5,7.56114,7.56114,0,0,1-7.5-7.5q.75-26.94,1.52-53.88.675-24.36,1.37-48.72.225-8.025.45-16.06.345-12.09.68-24.18c.03-1.13.07-2.25.1-3.38.02-.99.05-1.97.08-2.96q.66-23.475,1.32-46.96.27-9.24.52-18.49.3-10.545.6-21.08c.09-3.09.17005-6.17.26-9.26a7.64844,7.64844,0,0,1,7.5-7.5A7.56116,7.56116,0,0,1,402.86309,482.136Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M814.29118,484.2172a893.23753,893.23753,0,0,1-28.16112,87.94127c-3.007,7.94641-6.08319,15.877-9.3715,23.71185l.75606-1.7916a54.58274,54.58274,0,0,1-5.58953,10.61184q-.22935.32119-.46685.63642,1.16559-1.49043.4428-.589c-.25405.30065-.5049.60219-.7676.89546a23.66436,23.66436,0,0,1-2.2489,2.20318q-.30139.25767-.61188.5043l.93783-.729c-.10884.25668-.87275.59747-1.11067.74287a18.25362,18.25362,0,0,1-2.40479,1.21853l1.7916-.75606a19.0859,19.0859,0,0,1-4.23122,1.16069l1.9938-.26791a17.02055,17.02055,0,0,1-4.29785.046l1.99379.2679a14.0022,14.0022,0,0,1-3.40493-.917l1.79159.75606a12.01175,12.01175,0,0,1-1.67882-.89614c-.27135-.17688-1.10526-.80852-.01487.02461,1.13336.86595.14562.07434-.08763-.15584-.19427-.19171-.36962-.4-.55974-.595-.88208-.90454.99637,1.55662.39689.49858a18.18179,18.18179,0,0,1-.87827-1.63672l.75606,1.7916a11.92493,11.92493,0,0,1-.728-2.65143l.26791,1.9938a13.65147,13.65147,0,0,1-.00316-3.40491l-.2679,1.9938a15.96371,15.96371,0,0,1,.99486-3.68011l-.75606,1.7916a16.72914,16.72914,0,0,1,1.17794-2.29848,6.72934,6.72934,0,0,1,.72851-1.0714c.04915.01594-1.26865,1.51278-.56937.757.1829-.19767.354-.40592.539-.602.29617-.31382.61354-.60082.92561-.89791,1.04458-.99442-1.46188.966-.25652.17907a19.0489,19.0489,0,0,1,2.74925-1.49923l-1.79159.75606a20.31136,20.31136,0,0,1,4.99523-1.33984l-1.9938.2679a25.62828,25.62828,0,0,1,6.46062.07647l-1.9938-.2679a33.21056,33.21056,0,0,1,7.89178,2.2199l-1.7916-.75606c5.38965,2.31383,10.16308,5.74926,14.928,9.118a111.94962,111.94962,0,0,0,14.50615,8.9065,108.38849,108.38849,0,0,0,34.62226,10.47371,103.93268,103.93268,0,0,0,92.58557-36.75192,8.07773,8.07773,0,0,0,2.1967-5.3033,7.63232,7.63232,0,0,0-2.1967-5.3033c-2.75154-2.52586-7.94926-3.239-10.6066,0a95.63575,95.63575,0,0,1-8.10664,8.72692q-2.01736,1.914-4.14232,3.70983-1.21364,1.02588-2.46086,2.01121c-.3934.31081-1.61863,1.13807.26309-.19744-.43135.30614-.845.64036-1.27058.95478a99.26881,99.26881,0,0,1-20.33215,11.56478l1.79159-.75606a96.8364,96.8364,0,0,1-24.17119,6.62249l1.99379-.2679a97.64308,97.64308,0,0,1-25.75362-.03807l1.99379.2679a99.79982,99.79982,0,0,1-24.857-6.77027l1.7916.75607a116.02515,116.02515,0,0,1-21.7364-12.59112,86.87725,86.87725,0,0,0-11.113-6.99417,42.8238,42.8238,0,0,0-14.43784-4.38851c-9.43884-1.11076-19.0571,2.56562-24.24624,10.72035-4.77557,7.50482-4.71394,18.24362,1.97369,24.62519,6.8877,6.5725,17.31846,6.51693,25.43556,2.40567,7.81741-3.95946,12.51288-12.18539,15.815-19.94186,7.43109-17.45514,14.01023-35.31364,20.1399-53.263q9.09651-26.63712,16.49855-53.81332.91661-3.36581,1.80683-6.73869c1.001-3.78869-1.26094-8.32-5.23829-9.22589a7.63317,7.63317,0,0,0-9.22589,5.23829Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M889.12382,482.13557l-2.69954,95.79311-2.68548,95.29418-1.5185,53.88362a7.56465,7.56465,0,0,0,7.5,7.5,7.64923,7.64923,0,0,0,7.5-7.5l2.69955-95.79311,2.68548-95.29418,1.51849-53.88362a7.56465,7.56465,0,0,0-7.5-7.5,7.64923,7.64923,0,0,0-7.5,7.5Z" transform="translate(-169.93432 -164.42601)"/><path d="M629.52566,700.36106h2.32885V594.31942h54.32863v-2.32291H631.85451V547.25214H673.8102q-.92256-1.17339-1.89893-2.31694H631.85451V515.38231c-.7703-.32846-1.54659-.64493-2.32885-.9435V544.9352h-45.652V507.07c-.78227.03583-1.55258.08959-2.3289.15527v37.71h-36.4201V516.68409c-.78227.34636-1.55258.71061-2.31694,1.0928V544.9352h-30.6158v2.31694h30.6158v44.74437h-30.6158v2.32291h30.6158V700.36106h2.31694V594.31942a36.41283,36.41283,0,0,1,36.4201,36.42007v69.62157h2.3289V594.31942h45.652Zm-84.401-108.36455V547.25214h36.4201v44.74437Zm38.749,0V547.25214h.91362a44.74135,44.74135,0,0,1,44.73842,44.74437Z" opacity=".2" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M615.30309,668.566a63.05854,63.05854,0,0,1-20.05,33.7c-.74.64-1.48,1.26-2.25,1.87q-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43l-.27.03-.19-1.64-.76-6.64a37.623,37.623,0,0,1-3.3-32.44c2.64-7.12,7.42-13.41,12.12-19.65,6.49-8.62,12.8-17.14,13.03-27.65a60.54415,60.54415,0,0,1,7.9,13.33,16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32a63.99025,63.99025,0,0,1,2.45,12.18A61.18851,61.18851,0,0,1,615.30309,668.566Z" transform="translate(-169.93432 -164.42601)"/><path fill="#0EA5E9" d="M648.50311,642.356c-5.9,4.29-9.35,10.46-12.03,17.26a16.62776,16.62776,0,0,0-7.17,4.58c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39-2.68,8.04-5.14,16.36-9.88,23.15a36.98942,36.98942,0,0,1-12.03,10.91,38.49166,38.49166,0,0,1-4.02,1.99q-7.62.585-14.95,1.25-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43q-.015-.825,0-1.65a63.30382,63.30382,0,0,1,15.25-39.86c.45-.52.91-1.03,1.38-1.54a61.7925,61.7925,0,0,1,16.81-12.7A62.65425,62.65425,0,0,1,648.50311,642.356Z" transform="translate(-169.93432 -164.42601)"/><path fill="#0EA5E9" d="M589.16308,699.526l-1.15,3.4-.58,1.73c-1.53.14-3.04.29-4.54.43l-.27.03c-1.66.17-3.31.34-4.96.51-.43-.5-.86-1.01-1.28-1.53a62.03045,62.03045,0,0,1,8.07-87.11c-1.32,6.91.22,13.53,2.75,20.1-.27.11-.53.22-.78.34a16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32q.705.075,1.41.15c.07.15.13.29.2.44,2.85,6.18,5.92,12.39,7.65,18.83a43.66591,43.66591,0,0,1,1.02,4.91A37.604,37.604,0,0,1,589.16308,699.526Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M689.82123,554.48655c-8.60876-16.79219-21.94605-30.92088-37.63219-41.30357a114.2374,114.2374,0,0,0-52.5626-18.37992q-3.69043-.33535-7.399-.39281c-2.92141-.04371-46.866,12.63176-61.58712,22.98214a114.29462,114.29462,0,0,0-35.333,39.527,102.49972,102.49972,0,0,0-12.12557,51.6334,113.56387,113.56387,0,0,0,14.70268,51.47577,110.47507,110.47507,0,0,0,36.44425,38.74592C549.66655,708.561,565.07375,734.51,583.1831,735.426c18.24576.923,39.05418-23.55495,55.6951-30.98707a104.42533,104.42533,0,0,0,41.72554-34.005,110.24964,110.24964,0,0,0,19.599-48.94777c2.57368-18.08313,1.37415-36.73271-4.80123-54.01627a111.85969,111.85969,0,0,0-5.58024-12.9833c-1.77961-3.50519-6.996-4.7959-10.26142-2.69063a7.67979,7.67979,0,0,0-2.69064,10.26142q1.56766,3.08773,2.91536,6.27758l-.75606-1.7916a101.15088,101.15088,0,0,1,6.87641,25.53816l-.26791-1.99379a109.2286,109.2286,0,0,1-.06613,28.68252l.26791-1.9938a109.73379,109.73379,0,0,1-7.55462,27.67419l.75606-1.79159a104.212,104.212,0,0,1-6.67151,13.09835q-1.92308,3.18563-4.08062,6.22159c-.63172.8881-1.28287,1.761-1.939,2.63114-.85625,1.13555,1.16691-1.48321.28228-.36941-.15068.18972-.30049.3801-.45182.5693q-.68121.85165-1.3818,1.68765a93.61337,93.61337,0,0,1-10.17647,10.38359q-1.36615,1.19232-2.77786,2.33115c-.46871.37832-.932.77269-1.42079,1.12472.01861-.0134,1.57956-1.19945.65556-.511-.2905.21644-.57851.43619-.86961.65184q-2.90994,2.1558-5.97433,4.092a103.48509,103.48509,0,0,1-14.75565,7.7131l1.7916-.75606a109.21493,109.21493,0,0,1-27.59663,7.55154l1.9938-.26791a108.15361,108.15361,0,0,1-28.58907.0506l1.99379.2679a99.835,99.835,0,0,1-25.09531-6.78448l1.79159.75607a93.64314,93.64314,0,0,1-13.41605-6.99094q-3.17437-2-6.18358-4.24743c-.2862-.21359-.56992-.43038-.855-.64549-.9155-.69088.65765.50965.67021.51787a19.16864,19.16864,0,0,1-1.535-1.22469q-1.45353-1.18358-2.86136-2.4218a101.98931,101.98931,0,0,1-10.49319-10.70945q-1.21308-1.43379-2.37407-2.91054c-.33524-.4263-.9465-1.29026.40424.5289-.17775-.23939-.36206-.47414-.54159-.71223q-.64657-.85751-1.27568-1.72793-2.203-3.048-4.18787-6.24586a109.29037,109.29037,0,0,1-7.8054-15.10831l.75606,1.7916a106.58753,106.58753,0,0,1-7.34039-26.837l.26791,1.9938a97.86589,97.86589,0,0,1-.04843-25.63587l-.2679,1.9938A94.673,94.673,0,0,1,505.27587,570.55l-.75606,1.7916a101.55725,101.55725,0,0,1,7.19519-13.85624q2.0655-3.32328,4.37767-6.4847.52528-.71832,1.06244-1.42786c.324-.4279,1.215-1.49333-.30537.38842.14906-.18449.29252-.37428.43942-.56041q1.26882-1.60756,2.59959-3.1649A107.40164,107.40164,0,0,1,530.772,536.21508q1.47408-1.29171,2.99464-2.52906.6909-.56218,1.39108-1.11284c.18664-.14673.37574-.29073.56152-.43858-1.99743,1.58953-.555.43261-.10157.09288q3.13393-2.34833,6.43534-4.46134a103.64393,103.64393,0,0,1,15.38655-8.10791l-1.7916.75606c7.76008-3.25839,42.14086-10.9492,48.394-10.10973l-1.99379-.26791A106.22471,106.22471,0,0,1,628.768,517.419l-1.7916-.75606a110.31334,110.31334,0,0,1,12.6002,6.32922q3.04344,1.78405,5.96742,3.76252,1.38351.93658,2.73809,1.915.677.48917,1.34626.98885c.24789.185.49386.37253.74135.558,1.03924.779-1.43148-1.1281-.34209-.26655a110.84261,110.84261,0,0,1,10.36783,9.2532q2.401,2.445,4.63686,5.04515,1.14659,1.33419,2.24643,2.70757c.36436.45495,1.60506,2.101.08448.08457.37165.49285.74744.98239,1.11436,1.47884a97.97718,97.97718,0,0,1,8.39161,13.53807c1.79317,3.49775,6.98675,4.80186,10.26142,2.69064A7.67666,7.67666,0,0,0,689.82123,554.48655Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M602.43116,676.88167a3.77983,3.77983,0,0,1-2.73939-6.55137c.09531-.37882.16368-.65085.259-1.02968q-.05115-.12366-.1029-.24717c-3.47987-8.29769-25.685,14.83336-26.645,22.63179a30.029,30.029,0,0,0,.52714,10.32752A120.39223,120.39223,0,0,1,562.77838,652.01a116.20247,116.20247,0,0,1,.72078-12.96332q.59712-5.293,1.65679-10.51055a121.78667,121.78667,0,0,1,24.1515-51.61646c6.87378.38364,12.898-.66348,13.47967-13.98532.10346-2.36972,1.86113-4.42156,2.24841-6.756-.65621.08607-1.32321.13985-1.97941.18285-.20444.0107-.41958.02149-.624.03228l-.07709.00346a3.745,3.745,0,0,1-3.07566-6.10115q.425-.52305.85054-1.04557c.43036-.53793.87143-1.06507,1.30171-1.60292a1.865,1.865,0,0,0,.13986-.16144c.49494-.61322.98971-1.21564,1.48465-1.82885a10.82911,10.82911,0,0,0-3.55014-3.43169c-4.95941-2.90463-11.80146-.89293-15.38389,3.59313-3.59313,4.486-4.27083,10.77947-3.023,16.3843a43.39764,43.39764,0,0,0,6.003,13.3828c-.269.34429-.54872.67779-.81765,1.02209a122.57366,122.57366,0,0,0-12.79359,20.2681c1.0163-7.93863-11.41159-36.60795-16.21776-42.68052-5.773-7.29409-17.61108-4.11077-18.62815,5.13562q-.01476.13428-.02884.26849,1.07082.60411,2.0964,1.28237a5.12707,5.12707,0,0,1-2.06713,9.33031l-.10452.01613c-9.55573,13.64367,21.07745,49.1547,28.74518,41.18139a125.11045,125.11045,0,0,0-6.73449,31.69282,118.66429,118.66429,0,0,0,.08607,19.15986l-.03231-.22593C558.90163,648.154,529.674,627.51374,521.139,629.233c-4.91675.99041-9.75952.76525-9.01293,5.72484q.01788.11874.03635.2375a34.4418,34.4418,0,0,1,3.862,1.86105q1.07082.60423,2.09639,1.28237a5.12712,5.12712,0,0,1-2.06712,9.33039l-.10464.01606c-.07528.01079-.13987.02157-.21507.03237-4.34967,14.96631,27.90735,39.12,47.5177,31.43461h.01081a125.07484,125.07484,0,0,0,8.402,24.52806H601.679c.10765-.3335.20443-.67779.3013-1.01129a34.102,34.102,0,0,1-8.30521-.49477c2.22693-2.73257,4.45377-5.48664,6.6807-8.21913a1.86122,1.86122,0,0,0,.13986-.16135c1.12956-1.39849,2.26992-2.78627,3.39948-4.18476l.00061-.00173a49.95232,49.95232,0,0,0-1.46367-12.72495Zm-34.37066-67.613.0158-.02133-.0158.04282Zm-6.64832,59.93237-.25822-.58084c.01079-.41957.01079-.83914,0-1.26942,0-.11845-.0215-.23672-.0215-.35508.09678.74228.18285,1.48464.29042,2.22692Z" transform="translate(-169.93432 -164.42601)"/><circle cx="95.249" cy="439" r="11" fill="#3f3d56"/><circle cx="227.249" cy="559" r="11" fill="#3f3d56"/><circle cx="728.249" cy="559" r="11" fill="#3f3d56"/><circle cx="755.249" cy="419" r="11" fill="#3f3d56"/><circle cx="723.249" cy="317" r="11" fill="#3f3d56"/><path fill="#3f3d56" d="M434.1831,583.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,434.1831,583.426Z" transform="translate(-169.93432 -164.42601)"/><circle cx="484.249" cy="349" r="11" fill="#3f3d56"/><path fill="#3f3d56" d="M545.1831,513.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,545.1831,513.426Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M403.1831,481.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,403.1831,481.426Z" transform="translate(-169.93432 -164.42601)"/><circle cx="599.249" cy="443" r="11" fill="#3f3d56"/><circle cx="426.249" cy="338" r="16" fill="#3f3d56"/><path fill="#cacaca" d="M1028.875,735.26666l-857.75.30733a1.19068,1.19068,0,1,1,0-2.38136l857.75-.30734a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-169.93432 -164.42601)"/></svg>`],
  ["frontend/astro/public/assets/svg/undraw_register.svg", `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="870" height="520.139" data-name="Layer 1" viewBox="0 0 870 520.139"><path fill="#f2f2f2" d="M831.09242,704.18737c-11.13833-9.4118-17.90393-24.27967-16.12965-38.75366s12.76358-27.78,27.01831-30.85364,30.50415,5.43465,34.83378,19.3594c2.3828-26.84637,5.12854-54.81757,19.40179-77.67976,12.92407-20.70115,35.3088-35.51364,59.5688-38.16357s49.80265,7.35859,64.93272,26.50671,18.83461,46.98549,8.2379,68.96911c-7.80623,16.19456-22.188,28.24676-37.2566,38.05184a240.45181,240.45181,0,0,1-164.45376,35.97709Z" transform="translate(-165.00003 -189.93073)"/><path fill="#fff" d="M996.72788,546.00953a393.41394,393.41394,0,0,0-54.82622,54.44229,394.561,394.561,0,0,0-61.752,103.194c-1.112,2.72484,3.31272,3.911,4.4123,1.21642A392.34209,392.34209,0,0,1,999.96343,549.24507c2.28437-1.86015-.97-5.08035-3.23555-3.23554Z" transform="translate(-165.00003 -189.93073)"/><path fill="#f2f2f2" d="M445.06712,701.63014c15.2985-12.92712,24.591-33.34815,22.15408-53.22817s-17.53079-38.15588-37.10966-42.37749-41.89745,7.46449-47.8442,26.59014c-3.27278-36.87349-7.04406-75.29195-26.64837-106.69317-17.75122-28.433-48.49666-48.778-81.81777-52.41768s-68.40395,10.107-89.18511,36.407-25.86934,64.53459-11.31476,94.72909c10.72185,22.24324,30.47528,38.79693,51.17195,52.26422,66.02954,42.9653,147.93912,60.88443,225.8773,49.41454" transform="translate(-165.00003 -189.93073)"/><path fill="#fff" d="M217.56676,484.37281a540.35491,540.35491,0,0,1,75.30383,74.77651A548.0761,548.0761,0,0,1,352.25665,647.04a545.835,545.835,0,0,1,25.43041,53.8463c1.52726,3.74257-4.55,5.37169-6.06031,1.67075a536.35952,536.35952,0,0,0-49.009-92.727A539.73411,539.73411,0,0,0,256.889,528.63168a538.44066,538.44066,0,0,0-43.76626-39.81484c-3.13759-2.55492,1.33232-6.97788,4.444-4.444Z" transform="translate(-165.00003 -189.93073)"/><path fill="#f2f2f2" d="M789.5,708.93073h-365v-374.5c0-79.67773,64.82227-144.5,144.49976-144.5h76.00049c79.67749,0,144.49975,64.82227,144.49975,144.5Z" transform="translate(-165.00003 -189.93073)"/><path fill="#ccc" d="M713.5,708.93073h-289v-374.5a143.38177,143.38177,0,0,1,27.59571-84.94434c.66381-.90478,1.32592-1.79785,2.00878-2.68115a144.46633,144.46633,0,0,1,30.75415-29.85058c.65967-.48,1.322-.95166,1.99415-1.42334a144.15958,144.15958,0,0,1,31.47216-16.459c.66089-.25049,1.33374-.50146,2.00659-.74219a144.01979,144.01979,0,0,1,31.1084-7.33593c.65772-.08985,1.333-.16016,2.0083-.23047a146.28769,146.28769,0,0,1,31.10547,0c.67334.07031,1.34864.14062,2.01416.23144a143.995,143.995,0,0,1,31.10034,7.335c.6731.24073,1.346.4917,2.00879.74268a143.79947,143.79947,0,0,1,31.10645,16.21582c.67163.46143,1.344.93311,2.00635,1.40478a145.987,145.987,0,0,1,18.38354,15.564,144.305,144.305,0,0,1,12.72437,14.55078c.68066.88037,1.34277,1.77344,2.00537,2.67676A143.38227,143.38227,0,0,1,713.5,334.43073Z" transform="translate(-165.00003 -189.93073)"/><circle cx="525" cy="335.5" r="16" fill="#01a3a4"/><polygon fill="#ffb8b8" points="594.599 507.783 582.339 507.783 576.506 460.495 594.601 460.496 594.599 507.783"/><path fill="#2f2e41" d="M573.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H558.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z"/><polygon fill="#ffb8b8" points="655.599 507.783 643.339 507.783 637.506 460.495 655.601 460.496 655.599 507.783"/><path fill="#2f2e41" d="M634.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H619.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z"/><path fill="#ffb8b8" d="M698.09758,528.60035a10.74272,10.74272,0,0,1,4.51052-15.84307l41.67577-114.86667L764.791,409.082,717.20624,518.85271a10.80091,10.80091,0,0,1-19.10866,9.74764Z" transform="translate(-165.00003 -189.93073)"/><path fill="#ffb8b8" d="M814.33644,550.1843a10.74269,10.74269,0,0,1-2.89305-16.21659L798.53263,412.4583l23.33776,1.06622L827.23606,533.045a10.80091,10.80091,0,0,1-12.89962,17.13934Z" transform="translate(-165.00003 -189.93073)"/><circle cx="612.106" cy="162.123" r="24.561" fill="#ffb8b8"/><path fill="#01a3a4" d="M814.17958,522.54937H740.13271l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06933-14.5835h.00025c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23448,28.23448,0,0,1,9.45947,23.396Z" transform="translate(-165.00003 -189.93073)"/><path fill="#01a3a4" d="M754.35439,448.1812,721.01772,441.418l15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99755Z" transform="translate(-165.00003 -189.93073)"/><path fill="#01a3a4" d="M797.05043,460.73882l-2.00415-45.94141c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13476,7.60547-1.32959,15.03174,4.66016,16.55835,13.35986l7.533,42.92774Z" transform="translate(-165.00003 -189.93073)"/><path fill="#2f2e41" d="M811.71606,517.04933c11.91455,45.37671,13.21436,103.0694,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02972-10.61328-122.71527-2-160Z" transform="translate(-165.00003 -189.93073)"/><path fill="#2f2e41" d="M793.2891,371.03474c-4.582,4.88079-13.09131,2.26067-13.68835-4.40717a8.05467,8.05467,0,0,1,.01014-1.55569c.30826-2.95357,2.01461-5.63506,1.60587-8.7536a4.59046,4.59046,0,0,0-.84011-2.14892c-3.65124-4.88933-12.22227,2.18687-15.6682-2.23929-2.113-2.714.3708-6.98713-1.25065-10.02051-2.14006-4.00358-8.47881-2.0286-12.45388-4.22116-4.42275-2.43948-4.15822-9.22524-1.24686-13.35269,3.55052-5.03359,9.77572-7.71951,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78753,4.88021,6.97317,5.34986,16.34793,2.90917,24.50174C802.09785,360.98987,797.03077,367.04906,793.2891,371.03474Z" transform="translate(-165.00003 -189.93073)"/><path fill="#3f3d56" d="M1004.98163,709.57417h-738.294a1.19069,1.19069,0,0,1,0-2.38137h738.294a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-165.00003 -189.93073)"/><path fill="#fff" d="M634,600.43073H504a6.46539,6.46539,0,0,1-6.5-6.41531V303.846a6.46539,6.46539,0,0,1,6.5-6.41531H634a6.46539,6.46539,0,0,1,6.5,6.41531V594.01542A6.46539,6.46539,0,0,1,634,600.43073Z" transform="translate(-165.00003 -189.93073)"/><rect width="143" height="2" x="332.5" y="201.39" fill="#ccc"/><rect width="143" height="2" x="333" y="315.5" fill="#ccc"/><rect width="2" height="304" x="377.5" y="107.5" fill="#ccc"/><rect width="2" height="304" x="427.5" y="107.5" fill="#ccc"/></svg>`],
  ["frontend/astro/public/favicon.ico", `[Binary file]`],
  ["frontend/astro/public/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
    <path d="M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z" />
    <style>
        path { fill: #000; }
        @media (prefers-color-scheme: dark) {
            path { fill: #FFF; }
        }
    </style>
</svg>
`],
  ["frontend/astro/public/robots.txt", `User-agent: *
Allow: /

Sitemap: https://nuflakbrr.github.io/bikinproject/sitemap.xml
Host: https://nuflakbrr.github.io/bikinproject`],
  ["frontend/astro/public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/about</loc>
    <lastmod>2026-03-07T15:21:56.715Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/contact</loc>
    <lastmod>2026-03-07T15:21:56.716Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject</loc>
    <lastmod>2026-03-07T15:21:56.716Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/login</loc>
    <lastmod>2026-03-07T15:21:56.716Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/register</loc>
    <lastmod>2026-03-07T15:21:56.716Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`],
  ["frontend/astro/scripts/generate-seo.ts", `import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// We'll mimic the siteMetadata here to avoid complex TS import issues in a standalone script
const siteMetadata = {
  title: "BikinProject Astro Template by Naufal Akbar Nugroho",
  siteUrl: "https://nuflakbrr.github.io/bikinproject", // Change this to your production URL
  socialBanner: "/static/images/twitter-card.png",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const ROUTES_DIR = path.resolve(__dirname, "../src/pages");

/**
 * Recursively get all routes from the Astro pages directory.
 */
function getRoutes(dir: string, base: string = ""): string[] {
  let routes: string[] = [];

  if (!fs.existsSync(dir)) return routes;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();

    if (isDir) {
      // Exclude directories starting with _ (Astro convention)
      if (!item.startsWith("_")) {
        routes = routes.concat(getRoutes(fullPath, \`\${base}/\${item}\`));
      }
    } else {
      const ext = path.extname(item);
      // Support common Astro page extensions
      if (ext === ".astro" || ext === ".md" || ext === ".mdx") {
        const name = path.basename(item, ext);

        // Skip private files and dynamic routes for now
        if (name.startsWith("_") || name.includes("[") || name.includes("]")) continue;

        if (name === "index") {
          routes.push(base || "/");
        } else {
          routes.push(\`\${base}/\${name}\`);
        }
      }
    }
  }
  return routes;
}

// Ensure unique URLs and clean up root path
const urls = Array.from(new Set(getRoutes(ROUTES_DIR))).map((url) => (url === "/" ? "" : url));

function generateSitemap() {
  const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  \${urls
    .map((url) => {
      return \`
  <url>
    <loc>\${siteMetadata.siteUrl}\${url}</loc>
    <lastmod>\${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>\${url === "" ? "1.0" : "0.8"}</priority>
  </url>\`;
    })
    .join("")}
</urlset>\`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);
  console.log("✅ sitemap.xml generated in public/");
}

function generateRobots() {
  const robots = \`User-agent: *
Allow: /

Sitemap: \${siteMetadata.siteUrl}/sitemap.xml
Host: \${siteMetadata.siteUrl}\`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robots);
  console.log("✅ robots.txt generated in public/");
}

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

generateSitemap();
generateRobots();
`],
  ["frontend/astro/src/components/Common/CustomIcons/Facebook.astro.hbs", `<span>
  <svg
    class="h-5 w-5"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    ></path>
  </svg>
</span>
`],
  ["frontend/astro/src/components/Common/CustomIcons/Github.astro.hbs", `<span>
  <svg
    class="h-5 w-5 shrink-0"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>GitHub</title>
    <path
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    ></path>
  </svg>
</span>
`],
  ["frontend/astro/src/components/Common/CustomIcons/Google.astro.hbs", `<span>
  <svg
    class="h-5 w-5 shrink-0"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Google</title>
    <path
      d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
      fill="#4285F4"></path>
    <path
      d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
      fill="#34A853"></path>
    <path
      d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
      fill="#FBBC05"></path>
    <path
      d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
      fill="#EA4335"></path>
  </svg>
</span>
`],
  ["frontend/astro/src/components/Common/CustomIcons/Instagram.astro.hbs", `<span>
  <svg
    class="h-5 w-5"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Instagram</title>
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    ></path>
  </svg>
</span>
`],
  ["frontend/astro/src/components/Common/CustomIcons/LinkedIn.astro.hbs", `<span>
  <svg
    class="h-5 w-5"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>LinkedIn</title>
    <path
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    ></path>
  </svg>
</span>
`],
  ["frontend/astro/src/components/Common/CustomIcons/Twitter.astro.hbs", `<span>
  <svg
    class="h-5 w-5"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Twitter</title>
    <path
      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
    ></path>
  </svg>
</span>
`],
  ["frontend/astro/src/components/Common/ErrorState.astro.hbs", `---
import type {
  ErrorStateProps,
  ErrorMetadata,
  ErrorTheme,
} from "@/interfaces/error";

const { code, error } = Astro.props as ErrorStateProps;

const getErrorContent = (statusCode: number) => {
  const is5xx = statusCode >= 500;

  const metadataMap: Record<number, ErrorMetadata> = {
    401: {
      titlePrefix: "Sesi Anda",
      titleSuffix: "Berakhir",
      description:
        "Maaf, sesi Anda telah berakhir atau Anda belum login. Silakan login kembali untuk melanjutkan.",
      badge: "Error 401: Unauthorized",
      theme: "amber",
    },
    403: {
      titlePrefix: "Akses",
      titleSuffix: "Dibatasi",
      description:
        "Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator.",
      badge: "Error 403: Forbidden",
      theme: "amber",
    },
    404: {
      titlePrefix: "Halaman Tidak",
      titleSuffix: "Ditemukan",
      description:
        "Waduh! Sepertinya route yang Anda cari tidak ada atau sudah pindah ke tempat lain.",
      badge: "Error 404: Not Found",
      theme: "rose",
    },
    500: {
      titlePrefix: "Terjadi Kesalahan",
      titleSuffix: "Internal",
      description:
        "Ups! Server kami sedang mengalami gangguan sejenak. Silakan coba lagi nanti.",
      badge: "Error 500: Server Error",
      theme: "amber",
    },
    503: {
      titlePrefix: "Layanan Tidak",
      titleSuffix: "Tersedia",
      description:
        "Saat ini layanan sedang dalam pemeliharaan. Mohon tunggu beberapa saat lagi.",
      badge: "Error 503: Service Unavailable",
      theme: "emerald",
    },
  };

  const defaultContent: ErrorMetadata = is5xx
    ? {
        titlePrefix: "Terjadi Kesalahan",
        titleSuffix: "Server",
        description:
          "Server mengalami kendala yang tidak terduga. Mohon maaf atas ketidaknyamanan ini.",
        badge: \`Error \${statusCode}: Server Exception\`,
        theme: "amber",
      }
    : {
        titlePrefix: "Terjadi Kesalahan",
        titleSuffix: "Klien",
        description: "Permintaan Anda tidak dapat diproses oleh sistem kami.",
        badge: \`Error \${statusCode}: Client Error\`,
        theme: "rose",
      };

  const content = metadataMap[statusCode] ?? defaultContent;

  const themes: Record<ErrorMetadata["theme"], ErrorTheme> = {
    amber: {
      badgeColor:
        "bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400",
      pingColor: "bg-amber-400",
      dotColor: "bg-amber-600 dark:bg-amber-500",
      gradient:
        "from-amber-600 to-yellow-400 dark:from-amber-400 dark:to-yellow-400",
      glowStart: "bg-amber-600/10",
      glowEnd: "bg-yellow-600/10",
      terminalIcon: "bg-amber-500/40",
      borderType: "text-amber-600 dark:text-amber-400",
      errorColor: "text-amber-600 dark:text-amber-400",
    },
    rose: {
      badgeColor:
        "bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400",
      pingColor: "bg-rose-400",
      dotColor: "bg-rose-600 dark:bg-rose-500",
      gradient:
        "from-rose-600 to-orange-400 dark:from-rose-400 dark:to-orange-400",
      glowStart: "bg-rose-600/10",
      glowEnd: "bg-orange-600/10",
      terminalIcon: "bg-rose-500/40",
      borderType: "text-rose-600 dark:text-rose-400",
      errorColor: "text-rose-600 dark:text-rose-400",
    },
    emerald: {
      badgeColor:
        "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400",
      pingColor: "bg-emerald-400",
      dotColor: "bg-emerald-600 dark:bg-emerald-500",
      gradient:
        "from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-400",
      glowStart: "bg-emerald-600/10",
      glowEnd: "bg-teal-600/10",
      terminalIcon: "bg-emerald-500/40",
      borderType: "text-emerald-600 dark:text-emerald-400",
      errorColor: "text-emerald-600 dark:text-emerald-400",
    },
  };

  return { ...content, ...themes[content.theme] };
};

const meta = getErrorContent(code);
---

<section
  class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white pt-32 pb-20 dark:bg-zinc-950"
>
  <div class="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2">
    <div
      class={\`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] \${meta.glowStart} blur-[120px] rounded-full\`}
    >
    </div>
    <div
      class={\`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] \${meta.glowEnd} blur-[120px] rounded-full\`}
    >
    </div>
  </div>

  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center gap-16 lg:flex-row">
      <div class="space-y-8 text-left lg:w-1/2">
        <div
          class={\`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold shadow-sm \${meta.badgeColor}\`}
        >
          <span class="relative flex h-2 w-2">
            <span
              class={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${meta.pingColor}\`}
            ></span>
            <span
              class={\`relative inline-flex rounded-full h-2 w-2 \${meta.dotColor}\`}
            ></span>
          </span>
          {meta.badge}
        </div>

        <h1
          class="text-5xl leading-tight font-extrabold tracking-tight text-zinc-950 md:text-6xl dark:text-white"
        >
          {meta.titlePrefix}
          <br />
          <span
            class={\`inline-block py-1 bg-clip-text text-transparent bg-linear-to-r \${meta.gradient}\`}
          >
            {meta.titleSuffix}
          </span>
        </h1>

        <p
          class="max-w-xl text-lg leading-relaxed font-medium text-zinc-700 md:text-xl dark:text-zinc-400"
        >
          {meta.description}
        </p>

        <div class="flex flex-col items-center gap-4 pt-4 sm:flex-row">
          <a
            href="/"
            class="w-full rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98] sm:w-auto"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>

      <div class="animate-float w-full lg:w-1/2">
        <div
          class="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border-2 border-zinc-200 shadow-2xl dark:border-zinc-800"
        >
          <div
            class="flex items-center gap-2 border-b-2 border-zinc-200 bg-zinc-100 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div class="flex gap-1.5">
              <div class={\`w-3.5 h-3.5 rounded-full \${meta.terminalIcon}\`}>
              </div>
              <div class="h-3.5 w-3.5 rounded-full bg-amber-500/40"></div>
              <div class="h-3.5 w-3.5 rounded-full bg-emerald-500/40"></div>
            </div>
            <div class="mx-auto font-mono text-xs font-medium text-zinc-500">
              bash — system-error-{code}
            </div>
          </div>
          <div
            class="h-[350px] overflow-x-auto bg-white p-6 font-mono text-sm leading-relaxed dark:bg-zinc-950"
          >
            <div class="space-y-2">
              <p class="text-zinc-400">┌ checking system status...</p>
              <p class="flex gap-3">
                <span class={meta.borderType}>│</span>
                <span class="text-zinc-800 dark:text-zinc-200">
                  ✖ Fatal Error: {meta.badge}
                </span>
              </p>
              <p class="text-zinc-400">│</p>
              <p class="flex gap-3">
                <span class={meta.borderType}>│</span>
                <span class="text-zinc-500">[stacktrace]</span>
              </p>
              {
                error ? (
                  <p class="flex gap-3 text-xs">
                    <span class={meta.borderType}>│</span>
                    <span class="text-rose-500 dark:text-rose-400">
                      Error: {error.name} - {error.message}
                    </span>
                  </p>
                ) : (
                  <>
                    <p class="flex gap-3 text-xs">
                      <span class={meta.borderType}>│</span>
                      <span class="text-zinc-500">
                        at SystemHandler.resolve (internal/core.js:{code})
                      </span>
                    </p>
                    <p class="flex gap-3 text-xs">
                      <span class={meta.borderType}>│</span>
                      <span class="text-zinc-500">
                        at RequestPipeline.execute (internal/router.js:123)
                      </span>
                    </p>
                  </>
                )
              }
              <p class="text-zinc-400">│</p>
              <p class="text-center text-xs text-zinc-400">
                ────────────────────────
              </p>
              <p class={\`\${meta.errorColor} font-bold text-center\`}>
                {" "}
                ⚠️ ERROR_CODE: {code}
              </p>
              <p class="text-center text-xs text-zinc-400">
                ────────────────────────
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`],
  ["frontend/astro/src/components/Common/Loader.astro.hbs", `---
interface Props {
  size?: string;
  color?: string;
}

const { size = "h-12 w-12", color = "text-blue-500" } = Astro.props;
---

<div class="flex items-center justify-center">
  <div
    class={\`\${size} \${color} animate-spin rounded-full border-4 border-current border-t-transparent\`}
    role="status"
    aria-label="loading"
  >
    <span class="sr-only">Loading...</span>
  </div>
</div>
`],
  ["frontend/astro/src/components/Common/ScrollToTop.astro.hbs", `---

---

<div class="fixed right-6 bottom-6">
  <button
    id="scroll-to-top"
    type="button"
    class="flex cursor-default flex-col items-center justify-center rounded-lg bg-blue-500 p-2 text-white opacity-0 transition-all hover:bg-blue-600"
    aria-label="Scroll to top"
  >
    <svg
      class="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      fill="currentColor"
    >
      <path
        d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
      ></path>
    </svg>
  </button>
</div>

<script>
  import { polyfill } from "smoothscroll-polyfill";

  const scrollBtn = document.getElementById("scroll-to-top");

  if (scrollBtn) {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.remove("opacity-0", "cursor-default");
        scrollBtn.classList.add("opacity-100");
      } else {
        scrollBtn.classList.add("opacity-0", "cursor-default");
        scrollBtn.classList.remove("opacity-100");
      }
    };

    const scrollTop = () => {
      polyfill();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollBtn.addEventListener("click", scrollTop);
  }
</script>
`],
  ["frontend/astro/src/components/Common/ThemeToggle.astro.hbs", `---

---

<button
  aria-label="Toggle Dark Mode"
  class="theme-toggle group ml-3 transition-colors duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    class="h-6 w-6 text-black hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-200"
  >
    <!-- Sun Icon (shown in dark mode) -->
    <path
      class="hidden dark:block"
      fill-rule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clip-rule="evenodd"></path>
    <!-- Moon Icon (shown in light mode) -->
    <path
      class="block dark:hidden"
      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
    ></path>
  </svg>
</button>

<script>
  const handleToggleClick = () => {
    const isDark = document.documentElement.classList.contains("dark");
    // @ts-ignore
    window.setTheme(isDark ? "light" : "dark");
  };

  const setupThemeToggles = () => {
    const themeToggles = document.querySelectorAll(".theme-toggle");
    themeToggles.forEach((toggle) => {
      // Remove old listener to avoid duplicates if re-running
      toggle.removeEventListener("click", handleToggleClick);
      toggle.addEventListener("click", handleToggleClick);
    });
  };

  // Run on initial load
  setupThemeToggles();

  // Run on view transitions
  document.addEventListener("astro:after-swap", setupThemeToggles);
</script>
`],
  ["frontend/astro/src/components/Containers/Home/Features.astro.hbs", `---
const features = [
  {
    title: "Zero Config",
    description:
      "Lupakan setup yang rumit. Mulai project Anda dalam hitungan detik dengan konfigurasi yang sudah dioptimalkan.",
    icon: "⚙️",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Interactive CLI",
    description:
      "Antarmuka baris perintah yang interaktif dan intuitif, memudahkan Anda memilih opsi project.",
    icon: "💻",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    title: "Multi-framework",
    description:
      "Mendukung berbagai framework populer seperti Next.js, React, Laravel, dan akan terus bertambah.",
    icon: "📚",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Standardisasi Kode",
    description:
      "Setiap project dihasilkan dengan struktur folder dan standar kode terbaik yang konsisten.",
    icon: "🛠️",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Developer Experience",
    description:
      "Dibuat dengan fokus utama pada kenyamanan developer untuk produktivitas maksimal.",
    icon: "✨",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Open Source",
    description:
      "Didukung oleh komunitas dan bebas untuk dikustomisasi sesuai kebutuhan spesifik Anda.",
    icon: "🌐",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
];
---

<section id="features" class="bg-zinc-50 py-24 dark:bg-zinc-900">
  <div class="container mx-auto px-4">
    <div class="mx-auto mb-16 max-w-3xl space-y-4 text-center">
      <h2
        class="text-3xl font-extrabold text-zinc-950 md:text-5xl dark:text-white"
      >
        Fitur Unggulan Kami
      </h2>
      <p
        class="text-lg font-medium tracking-tight text-zinc-700 dark:text-zinc-400"
      >
        Segala yang Anda butuhkan untuk membangun project modern dalam satu
        platform yang terintegrasi.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {
        features.map((feature, index) => (
          <div class="group rounded-3xl border-2 border-zinc-100 bg-white p-8 transition-all duration-300 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-500">
            <div
              class={\`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl \${feature.color} border border-transparent shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-current\`}
            >
              {feature.icon}
            </div>
            <h3 class="mb-3 text-xl font-bold text-zinc-950 dark:text-white">
              {feature.title}
            </h3>
            <p class="leading-relaxed font-medium text-zinc-700 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))
      }
    </div>
  </div>
</section>
`],
  ["frontend/astro/src/components/Containers/Home/Hero.astro.hbs", `<section
  class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white pt-32 pb-20 dark:bg-zinc-950"
>
  {/* Decorative background elements */}
  <div class="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2">
    <div
      class="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 blur-[120px] dark:bg-blue-500/10"
    >
    </div>
    <div
      class="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-cyan-600/10 blur-[120px] dark:bg-cyan-500/10"
    >
    </div>
  </div>

  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center gap-16 lg:flex-row">
      {/* Left Side: Content */}
      <div class="space-y-8 text-left lg:w-1/2">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 shadow-sm dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"
            ></span>
          </span>
          CLI-Based Project Generator
        </div>

        <h1
          class="text-5xl leading-tight font-extrabold tracking-tight text-zinc-950 md:text-6xl dark:text-white"
        >
          Bikin Project Jadi <br />
          <span
            class="inline-block bg-linear-to-r from-blue-700 to-sky-400 bg-clip-text py-1 text-transparent dark:from-blue-400 dark:to-cyan-400"
          >
            Lebih Sat-Set & Terstruktur
          </span>
        </h1>

        <p
          class="max-w-xl text-lg leading-relaxed font-medium text-zinc-700 md:text-xl dark:text-zinc-400"
        >
          Generator starter project yang didesain untuk kenyamanan developer.
          Lupakan setup manual, cukup satu perintah dan project Anda siap
          tempur.
        </p>

        <div
          class="group flex items-center justify-between rounded-2xl border-2 border-zinc-200 bg-zinc-100 p-4 font-mono text-sm md:text-base dark:border-zinc-800 dark:bg-zinc-900"
        >
          <span class="text-zinc-800 dark:text-zinc-200">
            <span class="text-blue-600 dark:text-blue-400">$</span> npx bikinproject@latest
          </span>
          <button
            id="copy-btn"
            class="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-blue-600 dark:hover:bg-zinc-800"
            title="Copy to clipboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
              ></path>
            </svg>
          </button>
        </div>

        <div class="flex flex-col items-center gap-4 pt-4 sm:flex-row">
          <a
            href="/register"
            class="w-full rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98] sm:w-auto"
          >
            Coba Sekarang
          </a>
          <a
            href="#features"
            class="w-full rounded-2xl border-2 border-zinc-200 bg-white px-8 py-4 font-bold text-zinc-900 transition-all duration-300 hover:bg-zinc-50 sm:w-auto dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            Lihat Fitur
          </a>
        </div>
      </div>

      {/* Right Side: Terminal Mock-up */}
      <div class="w-full lg:w-1/2">
        <div
          class="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border-2 border-zinc-200 shadow-2xl dark:border-zinc-800"
        >
          <div
            class="flex items-center gap-2 border-b-2 border-zinc-200 bg-zinc-100 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div class="flex gap-1.5">
              <div class="h-3.5 w-3.5 rounded-full bg-rose-500/40"></div>
              <div class="h-3.5 w-3.5 rounded-full bg-amber-500/40"></div>
              <div class="h-3.5 w-3.5 rounded-full bg-emerald-500/40"></div>
            </div>
            <div class="mx-auto font-mono text-xs font-medium text-zinc-500">
              bash — create-bikinproject-app
            </div>
          </div>
          <div
            class="h-[400px] overflow-x-auto bg-white p-6 font-mono text-sm leading-relaxed dark:bg-zinc-950"
          >
            <div class="space-y-2">
              <p class="text-zinc-400">┌ create-bikinproject-app</p>
              <p class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span class="text-zinc-800 dark:text-zinc-200">
                  ◇ Where should we create your project?
                </span>
              </p>
              <p class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span
                  class="font-bold text-cyan-600 underline dark:text-cyan-400"
                >
                  ./your-project
                </span>
              </p>
              <p class="text-zinc-400">│</p>
              <p class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span class="text-zinc-800 dark:text-zinc-200"
                  >◇ Pick a project type</span
                >
              </p>
              <p class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span class="font-bold text-cyan-600 dark:text-cyan-400">
                  ● Next.js App Router (Tailwind + TypeScript)
                </span>
              </p>
              <div class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span class="text-zinc-500"
                  >○ React.js (Tailwind + JavaScript)</span
                >
              </div>
              <div class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span class="text-zinc-500"
                  >○ Laravel Breeze API w/ Next.js</span
                >
              </div>
              <p class="text-zinc-400">│</p>
              <p class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span class="text-emerald-600 dark:text-emerald-400">
                  ⏳ Creating project...
                </span>
              </p>
              <p class="flex gap-3">
                <span class="text-cyan-600 dark:text-cyan-400">│</span>
                <span class="text-emerald-600 dark:text-emerald-400">
                  ✅ Project created successfully!
                </span>
              </p>
              <p class="text-zinc-400">│</p>
              <p class="text-xs text-zinc-400">────────────────────────╮</p>
              <p class="font-bold text-blue-600 dark:text-blue-400">
                {" "}
                🎉 Project ready to use!
              </p>
              <p class="text-xs text-zinc-400">────────────────────────╯</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  const copyBtn = document.getElementById("copy-btn");
  copyBtn?.addEventListener("click", () => {
    navigator.clipboard.writeText("npx bikinproject@latest");

    // Simple feedback
    const originalContent = copyBtn.innerHTML;
    copyBtn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>\`;
    copyBtn.classList.add("text-emerald-500");

    setTimeout(() => {
      copyBtn.innerHTML = originalContent;
      copyBtn.classList.remove("text-emerald-500");
    }, 2000);
  });
</script>
`],
  ["frontend/astro/src/components/Containers/Home/Steps.astro.hbs", `---
const steps = [
  {
    number: "01",
    title: "Jalankan Command",
    description:
      'Buka terminal favorit Anda dan jalankan "npx bikinproject@latest". Tidak perlu instalasi global yang memberatkan sistem.',
  },
  {
    number: "02",
    title: "Pilih Konfigurasi",
    description:
      "Pilih framework (Next.js, React, Laravel), bahasa (TS/JS), dan CSS framework melalui antarmuka CLI yang interaktif.",
  },
  {
    number: "03",
    title: "Project Siap!",
    description:
      "BikinProject akan men-generate starter project lengkap dengan best practices, siap untuk Anda kembangkan lebih lanjut.",
  },
];
---

<section id="steps" class="bg-white py-24 dark:bg-zinc-950">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center gap-16 lg:flex-row">
      <div class="space-y-8 lg:w-1/2">
        <h2
          class="text-3xl leading-tight font-extrabold text-zinc-950 md:text-5xl dark:text-white"
        >
          Langkah Sederhana <br /> Untuk Project Terpercaya
        </h2>
        <p
          class="text-lg font-medium tracking-tight text-zinc-700 dark:text-zinc-400"
        >
          Kami menyederhanakan proses kompleks menjadi langkah-langkah yang
          mudah dipahami, memastikan Anda selalu terlibat dalam setiap progres.
        </p>
        <div class="pt-4">
          <button
            class="rounded-2xl bg-zinc-950 px-8 py-4 font-bold text-white shadow-lg shadow-zinc-500/10 transition-transform duration-300 hover:scale-105 dark:bg-white dark:text-zinc-900"
          >
            Mulai Konsultasi
          </button>
        </div>
      </div>

      <div class="w-full space-y-8 lg:w-1/2">
        {
          steps.map((step) => (
            <div class="group flex items-start gap-6 rounded-3xl border-2 border-transparent p-6 transition-all duration-300 hover:border-zinc-100 hover:bg-zinc-50 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/50">
              <div class="shrink-0 text-4xl font-black text-blue-600/20 transition-colors duration-300 group-hover:text-blue-600 dark:text-blue-500/20 dark:group-hover:text-blue-500">
                {step.number}
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold text-zinc-950 dark:text-white">
                  {step.title}
                </h3>
                <p class="text-justify leading-relaxed font-medium text-zinc-700 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
</section>
`],
  ["frontend/astro/src/components/Mixins/Footer.astro.hbs", `---
import GitHubIcon from "../Common/CustomIcons/Github.astro";
import TwitterIcon from "../Common/CustomIcons/Twitter.astro";
import LinkedInIcon from "../Common/CustomIcons/LinkedIn.astro";
import InstagramIcon from "../Common/CustomIcons/Instagram.astro";

const year = new Date().getFullYear();

const footerLinks = [
  {
    title: "Project",
    links: [
      { name: "Fitur", href: "#features" },
      { name: "Cara Kerja", href: "#steps" },
      { name: "Harga", href: "/pricing" },
      { name: "Showcase", href: "/showcase" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { name: "Tentang Kami", href: "/about" },
      { name: "Karir", href: "/career" },
      { name: "Blog", href: "/blog" },
      { name: "Kontak", href: "/contact" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { name: "Bantuan", href: "/help" },
      { name: "FAQ", href: "/faq" },
      { name: "Keamanan", href: "/security" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Ketentuan", href: "/terms" },
      { name: "Privasi", href: "/privacy" },
      { name: "Lisensi", href: "/license" },
    ],
  },
];

const socials = [
  { name: "GitHub", Icon: GitHubIcon, href: "#" },
  { name: "Twitter", Icon: TwitterIcon, href: "#" },
  { name: "LinkedIn", Icon: LinkedInIcon, href: "#" },
  { name: "Instagram", Icon: InstagramIcon, href: "#" },
];
---

<footer class="w-full border-t border-zinc-900 bg-zinc-950 py-20 text-zinc-400">
  <div class="container mx-auto px-4">
    {/* Top Section: Brand & Newsletter */}
    <div
      class="grid grid-cols-1 gap-12 border-b border-zinc-900 pb-16 lg:grid-cols-12"
    >
      <div class="space-y-6 lg:col-span-5">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-2xl font-bold text-white"
        >
          📦️ BikinProject
        </a>
        <p class="leading-relaxed font-medium text-zinc-600 dark:text-zinc-400">
          CLI-based package starter generator yang dirancang untuk mempercepat
          workflow pengembangan aplikasi Anda dengan standar industri.
        </p>
        <div class="flex gap-4 pt-2">
          {
            socials.map((social) => (
              <a
                href={social.href}
                class="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                aria-label={social.name}
              >
                <social.Icon />
              </a>
            ))
          }
        </div>
      </div>

      <div class="lg:col-span-7">
        <div
          class="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
        >
          <h3 class="text-xl font-bold text-white">Dapatkan Update Terbaru</h3>
          <p>
            Jadilah yang pertama tahu tentang fitur dan promo terbaru dari kami.
          </p>
          <form class="flex flex-col gap-3 pt-2 sm:flex-row">
            <input
              type="email"
              placeholder="name@email.com"
              class="flex-1 rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3 transition-colors focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              class="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-500/10 transition-colors hover:bg-blue-700"
            >
              Langganan
            </button>
          </form>
        </div>
      </div>
    </div>

    {/* Middle Section: Links */}
    <div class="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 lg:grid-cols-4">
      {
        footerLinks.map((group) => (
          <div class="space-y-6">
            <h4 class="text-sm font-bold tracking-wider text-white uppercase">
              {group.title}
            </h4>
            <ul class="space-y-4">
              {group.links.map((link) => (
                <li>
                  <a
                    href={link.href}
                    class="inline-block transition-all duration-300 hover:translate-x-1 hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>

    {/* Bottom Section: Copyright */}
    <div
      class="flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-sm tracking-wide md:flex-row"
    >
      <p>© {year} BikinProject. Seluruh hak cipta dilindungi undang-undang.</p>
      <div class="flex gap-8">
        <a href="/privacy" class="transition-colors hover:text-white">
          Kebijakan Privasi
        </a>
        <a href="/terms" class="transition-colors hover:text-white">
          Syarat & Ketentuan
        </a>
      </div>
    </div>
  </div>
</footer>
`],
  ["frontend/astro/src/components/Mixins/Navbar/constant/navLinks.ts", `export const navlinks = [
  { title: "Beranda", path: "/" },
  { title: "Fitur", path: "#features" },
  { title: "Cara Kerja", path: "#steps" },
  { title: "Tentang", path: "/about" },
  { title: "Kontak", path: "/contact" },
];
`],
  ["frontend/astro/src/components/Mixins/Navbar/index.astro.hbs", `---
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/Common/ThemeToggle.astro";
import { navlinks } from "./constant/navLinks";

const pathname = Astro.url.pathname;

// isMenuActive handler
const isMenuActive = (path: string) => {
  const isHomePage = pathname === "/" && path === "/";

  if (isHomePage) {
    return true;
  }

  return pathname !== "/" && path !== "/" && pathname.includes(path);
};
---

<header
  class="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent"
>
  <div class="container mx-auto">
    <div class="relative flex items-center justify-between">
      <div class="px-4">
        <a
          href="/"
          class="inline-flex items-center gap-2 py-6 text-xl font-bold lg:text-2xl dark:text-white"
          aria-label="logo"
        >
          📦️ BikinProject
        </a>
      </div>
      <div class="flex items-center px-4">
        <button
          id="hamburger"
          name="hamburger"
          type="button"
          class="absolute right-4 block lg:hidden"
        >
          <span
            class="hamburgerLine origin-top-left transition duration-300 ease-in-out"
          ></span>
          <span class="hamburgerLine transition duration-300 ease-in-out"
          ></span>
          <span
            class="hamburgerLine origin-bottom-left transition duration-300 ease-in-out"
          ></span>
        </button>

        <nav
          id="navMenu"
          class="absolute top-full right-4 hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none dark:bg-zinc-900 dark:lg:bg-transparent"
        >
          <ul class="block lg:flex lg:items-center">
            {
              navlinks?.map((a) => (
                <li class="group">
                  <a
                    href={a.path}
                    class={cn(
                      "navLink",
                      isMenuActive(a.path) && "navLinkActive",
                      "mx-8 flex lg:mx-4",
                    )}
                  >
                    {a.title}
                  </a>
                </li>
              ))
            }
            <li class="ml-8 flex items-center gap-4 lg:ml-6">
              <a
                href="/login"
                class="font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                Masuk
              </a>
              <a
                href="/register"
                class="rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]"
              >
                Daftar
              </a>
            </li>

            <li class="ml-8 flex items-center lg:ml-4">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>

<script>
  const header = document.querySelector("header");
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#navMenu");

  // Navbar fixed position if scrolling
  window.addEventListener("scroll", () => {
    const fixNav = header?.offsetTop ?? 0;

    if (window.pageYOffset > fixNav) {
      header?.classList.add("navbarFixed");
    } else {
      header?.classList.remove("navbarFixed");
    }
  });

  // Hamburger menu handler
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("hamburgerActive");
    navMenu?.classList.toggle("hidden");
  });
</script>

<style>
  @reference "@/styles/global.css";

  .navbarFixed {
    @apply fixed z-9999 bg-transparent shadow-md backdrop-blur-md dark:bg-zinc-900/80;
  }

  .hamburgerLine {
    @apply my-2 block h-[2px] w-[30px] bg-black dark:bg-white;
  }

  .hamburgerActive > span:nth-child(1) {
    @apply rotate-45;
  }

  .hamburgerActive > span:nth-child(2) {
    @apply scale-0;
  }

  .hamburgerActive > span:nth-child(3) {
    @apply -rotate-45;
  }

  .navLink {
    @apply relative py-2 font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400;
  }

  .navLink::after {
    content: "";
    @apply absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 dark:bg-blue-400;
  }

  .navLink:hover::after,
  .navLinkActive::after {
    @apply w-full;
  }

  .navLinkActive {
    @apply text-blue-600 dark:text-blue-400;
  }
</style>
`],
  ["frontend/astro/src/components/README.md", `# Arsitektur Komponen

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

### Common

Folder \`Common\` terletak pada \`/src/components/Common/\`. Folder ini berisi komponen-komponen atomik atau elemen UI dasar yang bersifat reusable dan independen.
Contoh: Tombol (\`Button\`), Input, Modal, Icon kustom, dll.

### Mixins

Folder \`Mixins\` terletak pada \`/src/components/Mixins/\`. Folder ini berisi komponen-komponen hasil gabungan atau komposisi dari beberapa komponen \`Common\` untuk membentuk fitur yang lebih kompleks.
Contoh: Navbar (gabungan dari Logo, Links, dan Theme Toggle), Footer, Sidebar, dll.

## Struktur Folder Lainnya

- **app/**: Berisi halaman (pages) dan layout utama menggunakan Next.js App Router.
- **hooks/**: Berisi custom logic React hooks yang dapat digunakan kembali di berbagai komponen.
- **lib/**: Berisi fungsi utilitas dan konfigurasi library pihak ketiga.
- **data/**: Berisi data statis, konstanta, dan metadata situs.
`],
  ["frontend/astro/src/data/siteMetadata.ts", `export const siteMetadata = {
  title: "BikinProject React Template by Naufal Akbar Nugroho",
  author: "Naufal Akbar Nugroho",
  headerTitle: "BikinProject",
  headerMobTitle: "BikinProject",
  description:
    "Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi bagi semua orang!",
  language: "id-ID",
  theme: "system", // system, dark or light
  siteUrl: "http://localhost:3000", // e.g. https://yourwebsite.com
  siteRepo: "https://github.com/nuflakbrr/frontend-template",
  sitePublicRepo: "https://github.com/nuflakbrr/frontend-template",
  siteLogo: "/static/favicons/icon-512x512.png",
  image: "/static/images/profile-picture.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "naufalakbar378@gmail.com",
  instagram: "https://www.instagram.com/kbrnugroho",
  github: "https://www.github.com/nuflakbrr",
  x: "https://www.twitter.com/nuflakbrr",
  linkedin: "https://www.linkedin.com/in/nuflakbrr/",
  facebook: "https://www.facebook.com",
  youtube: "https://www.youtube.com",
  locale: "id-ID",
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the \`next.config.js\` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: import.meta.env.VITE_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in \`next.config.js\` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
};
`],
  ["frontend/astro/src/interfaces/error.ts", `export interface RequestError extends Error {
  status?: number;
  statusCode?: number;
}

export interface ErrorStateProps {
  code: number;
  error?: Error;
}

export interface ErrorMetadata {
  titlePrefix: string;
  titleSuffix: string;
  description: string;
  badge: string;
  theme: "rose" | "amber" | "emerald";
}

export interface ErrorTheme {
  badgeColor: string;
  pingColor: string;
  dotColor: string;
  gradient: string;
  glowStart: string;
  glowEnd: string;
  terminalIcon: string;
  borderType: string;
  errorColor: string;
}
`],
  ["frontend/astro/src/interfaces/hooks/useSort.ts", `export interface SortHookReturn {
  sortBy: string;
  direction: SortDirection;
  handleSort: (field: string) => void;
}

export interface SortDirection {
  field: string;
  direction: string;
}
`],
  ["frontend/astro/src/interfaces/seo.ts", `export interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;

  [key: string]: string | number | boolean | undefined;
}
`],
  ["frontend/astro/src/layouts/Layout.astro.hbs", `---
import type { PageSEOProps } from "@/interfaces/seo";
import { siteMetadata } from "@/data/siteMetadata";

import "@/styles/global.css";
import ThemeProvider from "@/providers/ThemeProvider.astro";
import ScrollToTop from "@/components/Common/ScrollToTop.astro";
import Navbar from "@/components/Mixins/Navbar/index.astro";
import Footer from "@/components/Mixins/Footer.astro";

type Props = PageSEOProps;

const { title, description, image } = Astro.props;

const seoTitle = title ? \`\${title} | \${siteMetadata.headerTitle}\` : siteMetadata.title;
const seoDescription = description || siteMetadata.description;
const seoImage = image || siteMetadata.image;
---

<!doctype html>
<html lang={siteMetadata.language}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="generator" content={Astro.generator} />

    <title>{seoTitle}</title>
    <meta name="description" content={seoDescription} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteMetadata.siteUrl} />
    <meta property="og:title" content={seoTitle} />
    <meta property="og:description" content={seoDescription} />
    <meta property="og:image" content={new URL(seoImage, siteMetadata.siteUrl)} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={siteMetadata.siteUrl} />
    <meta property="twitter:title" content={seoTitle} />
    <meta property="twitter:description" content={seoDescription} />
    <meta property="twitter:image" content={new URL(seoImage, siteMetadata.siteUrl)} />

    <ThemeProvider storageKey="theme" />
  </head>
  <body>
    <Navbar />
    <main class="min-h-screen">
      <slot />
    </main>
    <ScrollToTop />
    <Footer />
  </body>
</html>

<style>
  html,
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
`],
  ["frontend/astro/src/lib/formatCurrency.ts", `export const formatCurrency = (num: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(Number(num));
};
`],
  ["frontend/astro/src/lib/formatLocalTime.ts", `export const formatLocalTime = (time: string | number | Date) => {
  const date = new Date(time);
  return \`\${date.getDate()}/\${Number(date.getMonth()) + 1}/\${date.getFullYear()}\`;
};
`],
  ["frontend/astro/src/lib/utils.ts", `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`],
  ["frontend/astro/src/pages/404.astro.hbs", `---
import Layout from "@/layouts/Layout.astro";
import ErrorState from "@/components/Common/ErrorState.astro";
---

<Layout title="Halaman Tidak Ditemukan">
  <ErrorState code={404} />
</Layout>
`],
  ["frontend/astro/src/pages/500.astro.hbs", `---
import Layout from "@/layouts/Layout.astro";
import ErrorState from "@/components/Common/ErrorState.astro";

interface Props {
  error: unknown;
}

const { error } = Astro.props;

// Coba ekstrak status code dari error (contoh: error.status atau error.statusCode)
// Jika tidak ada, gunakan default 500
const isErrorObject = typeof error === "object" && error !== null;
const statusCode = isErrorObject && "status" in error ? Number((error as any).status) : isErrorObject && "statusCode" in error ? Number((error as any).statusCode) : 500;

const normalizedError = error instanceof Error ? error : new Error(String(error));
---

<Layout title="Terjadi Kesalahan Server">
  <ErrorState code={statusCode} error={normalizedError} />
</Layout>
`],
  ["frontend/astro/src/pages/about.astro.hbs", `---
import { siteMetadata } from "@/data/siteMetadata";
import Layout from "@/layouts/Layout.astro";
---

<Layout title="Tentang">
  <section class="mx-auto flex min-h-screen items-center justify-center bg-white text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
            <div class="group relative h-64 overflow-hidden rounded-3xl border-2 border-zinc-100 bg-zinc-100 shadow-2xl transition-all duration-300 md:h-[700px] dark:border-zinc-800 dark:bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Laptop"
                class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-linear-to-t from-zinc-950/20 to-transparent"></div>
            </div>

            <div class="space-y-6 md:pt-8">
              <h1 class="text-4xl leading-tight font-extrabold text-zinc-950 md:text-5xl dark:text-white">
                Tentang <span class="text-blue-600 dark:text-blue-500">BikinProject.</span>
              </h1>

              <p class="text-justify text-lg leading-relaxed font-medium text-zinc-700 md:text-xl dark:text-zinc-400">
                <span class="rounded-xl border border-blue-100 bg-blue-50 p-1 px-3 font-mono font-bold text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-400"> BikinProject </span>{" "}
                adalah sebuah CLI-based starter project generator yang dirancang untuk mempercepat proses inisialisasi aplikasi dengan standar industri. Proyek ini mendukung berbagai framework populer seperti Next.js, React, dan Laravel.
              </p>

              <p class="text-justify text-lg leading-relaxed font-medium text-zinc-700 md:text-xl dark:text-zinc-400">
                Dibuatnya BikinProject berawal dari kebutuhan{" "}
                <a
                  href={siteMetadata.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="font-bold text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Saya
                </a>{" "}
                akan standarisasi struktur proyek saat memulai development baru. Alih-alih melakukan setup manual yang repetitif, BikinProject mengotomatisasi segalanya mulai dari pemilihan bahasa, styling framework, hingga struktur folder terbaik.
              </p>

              <div class="space-y-4">
                <p class="text-justify text-lg leading-relaxed font-medium text-zinc-700 md:text-xl dark:text-zinc-400">Hanya dengan satu perintah di terminal, Anda bisa langsung fokus membangun fitur tanpa pusing dengan boilerplate:</p>
                <div class="group rounded-2xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-sm text-emerald-400 shadow-xl transition-all duration-300 hover:border-emerald-500/30 md:text-base">
                  <div class="flex items-center gap-3">
                    <span class="text-zinc-600">$</span>
                    <span class="transition-colors group-hover:text-emerald-300">npx bikinproject@latest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</Layout>
`],
  ["frontend/astro/src/pages/contact.astro.hbs", `---
import { siteMetadata } from "@/data/siteMetadata";
import Layout from "@/layouts/Layout.astro";
---

<Layout title="Kontak">
  <section class="flex min-h-screen items-center justify-center bg-white text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <section class="body-font">
            <div class="container mx-auto flex flex-col items-center justify-center">
              <div class="group relative mb-10 w-5/6 overflow-hidden rounded-3xl border-2 border-zinc-100 shadow-2xl transition-all duration-300 md:w-3/6 lg:w-2/6 dark:border-zinc-800">
                <img src="https://avatars.githubusercontent.com/u/83068205?v=4" loading="lazy" alt="hero" class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-linear-to-t from-zinc-950/20 to-transparent"></div>
              </div>

              <div class="w-full space-y-4 text-center lg:w-2/3">
                <h1 class="text-4xl leading-tight font-extrabold text-zinc-950 md:text-5xl dark:text-white">Naufal Akbar Nugroho</h1>

                <h2 class="text-xl font-semibold text-blue-600 md:text-2xl dark:text-blue-400">Fullstack Web Developer | Undergraduate Information Systems Student</h2>

                <p class="mx-auto max-w-xl text-lg leading-relaxed font-medium text-zinc-700 md:text-xl dark:text-zinc-400">Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi bagi semua orang!</p>

                <div class="flex justify-center gap-4 pt-6">
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-2xl border-0 bg-blue-600 px-8 py-3 text-lg font-bold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 focus:outline-none active:scale-[0.98]"
                  >
                    GitHub Saya
                  </a>

                  <a
                    href={\`mailto:\${siteMetadata.email}\`}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex rounded-2xl border-2 border-zinc-200 bg-zinc-100 px-8 py-3 text-lg font-bold text-zinc-900 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200 focus:outline-none active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                  >
                    Hubungi Saya
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</Layout>
`],
  ["frontend/astro/src/pages/index.astro.hbs", `---
import Layout from "@/layouts/Layout.astro";
import Hero from "@/components/Containers/Home/Hero.astro";
import Features from "@/components/Containers/Home/Features.astro";
import Steps from "@/components/Containers/Home/Steps.astro";
---

<Layout title="Beranda">
  <div class="w-full">
    <Hero />
    <Features />
    <Steps />
  </div>
</Layout>
`],
  ["frontend/astro/src/pages/login.astro.hbs", `---
import GithubIcon from "@/components/Common/CustomIcons/Github.astro";
import Layout from "@/layouts/Layout.astro";
---

<Layout title="Masuk">
  <section class="flex min-h-screen items-center justify-center bg-white p-4 transition-colors duration-300 dark:bg-zinc-950">
    <div class="w-full max-w-md overflow-hidden rounded-3xl border-2 border-zinc-100 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
      <div class="flex items-center justify-between border-b-2 border-zinc-100 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div class="flex items-center gap-2">
          <span class="text-xl">📦</span>
          <span class="font-mono font-bold text-zinc-900 dark:text-white">auth --login</span>
        </div>
        <div class="flex gap-1.5 opacity-30">
          <div class="h-3 w-3 rounded-full bg-zinc-400"></div>
          <div class="h-3 w-3 rounded-full bg-zinc-400"></div>
          <div class="h-3 w-3 rounded-full bg-zinc-400"></div>
        </div>
      </div>

      <div class="space-y-8 p-8">
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-black text-zinc-950 dark:text-white">Selamat Datang</h1>
          <p class="font-medium text-zinc-500 dark:text-zinc-400">Masuk untuk mengelola project Anda.</p>
        </div>

        <form class="space-y-5">
          <div class="space-y-2">
            <label html-for="email" class="block font-mono text-sm font-bold text-zinc-700 dark:text-zinc-300"> $ user.email </label>
            <input
              type="email"
              id="email"
              class="w-full rounded-2xl border-2 border-zinc-100 bg-zinc-50 px-5 py-3.5 font-mono text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-500"
              placeholder="email@example.com"
              required
            />
          </div>

          <div class="space-y-2">
            <label html-for="password" class="block font-mono text-sm font-bold text-zinc-700 dark:text-zinc-300"> $ user.password </label>
            <input
              type="password"
              id="password"
              class="w-full rounded-2xl border-2 border-zinc-100 bg-zinc-50 px-5 py-3.5 font-mono text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" class="mt-4 w-full rounded-2xl bg-blue-600 py-4 font-black text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]">
            Masuk Ke Sistem
          </button>

          <div class="relative flex items-center justify-center">
            <span class="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
            <span class="relative bg-white px-4 text-xs font-bold tracking-widest text-zinc-500 uppercase dark:bg-zinc-950 dark:text-zinc-400"> Atau </span>
          </div>

          <button class="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-zinc-100 py-3.5 font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900">
            <GithubIcon />
            <span>GitHub Authentication</span>
          </button>
        </form>

        <p class="text-center font-medium text-zinc-500 dark:text-zinc-400">
          Belum punya akun?{" "}
          <a href="/register" class="font-bold text-blue-600 hover:underline dark:text-blue-400"> Daftar Sekarang </a>
        </p>
      </div>
    </div>
  </section>
</Layout>
`],
  ["frontend/astro/src/pages/register.astro.hbs", `---
import GithubIcon from "@/components/Common/CustomIcons/Github.astro";
import Layout from "@/layouts/Layout.astro";
---

<Layout title="Daftar">
  <section class="flex min-h-screen items-center justify-center bg-white p-4 transition-colors duration-300 dark:bg-zinc-950">
    <div class="w-full max-w-md overflow-hidden rounded-3xl border-2 border-zinc-100 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
      <div class="flex items-center justify-between border-b-2 border-zinc-100 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div class="flex items-center gap-2">
          <span class="text-xl">📦</span>
          <span class="font-mono font-bold text-zinc-900 dark:text-white"> auth --register </span>
        </div>
        <div class="flex gap-1.5 opacity-30">
          <div class="h-3 w-3 rounded-full bg-zinc-400"></div>
          <div class="h-3 w-3 rounded-full bg-zinc-400"></div>
          <div class="h-3 w-3 rounded-full bg-zinc-400"></div>
        </div>
      </div>

      <div class="space-y-8 p-8">
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-black text-zinc-950 dark:text-white">Buat Akun Baru</h1>
          <p class="font-medium text-zinc-500 dark:text-zinc-400">Bergabung dengan komunitas BikinProject.</p>
        </div>

        <form class="space-y-5">
          <div class="space-y-2">
            <label html-for="email" class="block font-mono text-sm font-bold text-zinc-700 dark:text-zinc-300"> $ user.email </label>
            <input
              type="email"
              id="email"
              class="w-full rounded-2xl border-2 border-zinc-100 bg-zinc-50 px-5 py-3.5 font-mono text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-500"
              placeholder="email@example.com"
              required
            />
          </div>

          <div class="space-y-2">
            <label html-for="password" class="block font-mono text-sm font-bold text-zinc-700 dark:text-zinc-300"> $ user.password </label>
            <input
              type="password"
              id="password"
              class="w-full rounded-2xl border-2 border-zinc-100 bg-zinc-50 px-5 py-3.5 font-mono text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" class="mt-4 w-full rounded-2xl bg-blue-600 py-4 font-black text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]">
            Daftar Sekarang
          </button>

          <div class="relative flex items-center justify-center">
            <span class="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
            <span class="relative bg-white px-4 text-xs font-bold tracking-widest text-zinc-500 uppercase dark:bg-zinc-950 dark:text-zinc-400"> Atau </span>
          </div>

          <button class="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-zinc-100 py-3.5 font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900">
            <GithubIcon />
            <span>GitHub Authentication</span>
          </button>
        </form>

        <p class="text-center font-medium text-zinc-500 dark:text-zinc-400">
          Sudah punya akun?{" "}
          <a href="/login" class="font-bold text-blue-600 hover:underline dark:text-blue-400"> Masuk Saja </a>
        </p>
      </div>
    </div>
  </section>
</Layout>
`],
  ["frontend/astro/src/providers/ThemeProvider.astro.hbs", `---
interface Props {
  defaultTheme?: "light" | "dark" | "system";
  storageKey?: string;
}

const { defaultTheme = "system", storageKey = "theme-preference" } =
  Astro.props;
---

<script is:inline define:vars=\\{{ defaultTheme, storageKey }}>
  function getTheme() {
    if (
      typeof localStorage !== "undefined" &&
      localStorage.getItem(storageKey)
    ) {
      return localStorage.getItem(storageKey);
    }
    return defaultTheme;
  }

  function applyTheme(theme) {
    let resolvedTheme = theme;
    if (theme === "system") {
      resolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    const root = document.documentElement;
    if (resolvedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Dispatch custom event for components that need to respond to theme changes
    window.dispatchEvent(
      new CustomEvent("theme-change", { detail: { theme, resolvedTheme } }),
    );
  }

  // Initial application to prevent FOUC
  const initialTheme = getTheme();
  applyTheme(initialTheme);

  // Re-apply on view transitions if using them
  document.addEventListener("astro:after-swap", () => {
    applyTheme(getTheme());
  });

  // Listen for system preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (getTheme() === "system") {
        applyTheme("system");
      }
    });

  // Listen for storage changes (cross-tab sync)
  window.addEventListener("storage", (e) => {
    if (e.key === storageKey) {
      applyTheme(e.newValue || defaultTheme);
    }
  });

  // Global helper for toggling/setting theme
  window.setTheme = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  };
</script>
`],
  ["frontend/astro/src/styles/global.css", `@import "tailwindcss";
@custom-variant dark (&:is(.dark *));

html {
  scroll-behavior: smooth;
}
`],
  ["frontend/astro/src/types/smoothscroll-polyfill.d.ts", `declare module "smoothscroll-polyfill" {
  export function polyfill(): void;
}
`],
  ["frontend/astro/tsconfig.json.hbs", `{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./src/components/*"],
      "@/data/*": ["./src/data/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/interfaces/*": ["./src/interfaces/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/providers/*": ["./src/providers/*"],
      "@/*": ["src/*"]
    }
  }
}
`],
  ["frontend/nuxt/_gitignore", `# Nuxt dev/build outputs
.output
.data
.nuxt
.nitro
.cache
dist
.wrangler
.alchemy

# Node dependencies
node_modules

# Logs
logs
*.log

# Misc
.DS_Store
.fleet
.idea

# Local env files
.env
.env.*
!.env.example

`],
  ["frontend/nuxt/app/app.config.ts.hbs", `export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    }
  }
})
`],
  ["frontend/nuxt/app/app.vue.hbs", `<script setup lang="ts">
{{#if (eq api "orpc")}}
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
{{/if}}
</script>

<template>
    <NuxtLoadingIndicator />
    <UApp>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
    {{#if (eq api "orpc")}}
    <VueQueryDevtools />
    {{/if}}
</template>
`],
  ["frontend/nuxt/app/assets/css/main.css", `@import "tailwindcss";
@import "@nuxt/ui";
`],
  ["frontend/nuxt/app/components/Header.vue.hbs", `<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
{{#if (eq auth "better-auth")}}
import UserMenu from './UserMenu.vue'
{{/if}}

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    { label: "Home", to: "/", active: route.path === "/" },
    {{#if (or (eq auth "better-auth") (eq auth "clerk"))}}
    { label: "Dashboard", to: "/dashboard", active: route.path.startsWith("/dashboard") },
    {{/if}}
    {{#if (includes examples "todo")}}
    { label: "Todos", to: "/todos", active: route.path.startsWith("/todos") },
    {{/if}}
    {{#if (includes examples "ai")}}
    { label: "AI Chat", to: "/ai", active: route.path.startsWith("/ai") },
    {{/if}}
])
</script>

<template>
  <UHeader>
    <template #left>
      <UNavigationMenu :items="items" />
    </template>

    <template #right>
      <UColorModeButton />
      {{#if (eq auth "better-auth")}}
      <UserMenu />
      {{/if}}
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
`],
  ["frontend/nuxt/app/layouts/default.vue.hbs", `<script setup></script>

<template>
  <div class="grid grid-rows-[auto_1fr] h-svh">
    <Header />
    <UMain>
      <slot />
    </UMain>
  </div>
</template>
`],
  ["frontend/nuxt/app/pages/index.vue.hbs", `<script setup lang="ts">
{{#if (eq backend "convex")}}
import { api } from "@{{ projectName }}/backend/convex/_generated/api";
import { useConvexQuery } from "convex-vue";
{{else}}
  {{#unless (eq api "none")}}
const { $orpc } = useNuxtApp()
import { useQuery } from '@tanstack/vue-query'
  {{/unless}}
{{/if}}

export const TITLE_TEXT = \`
██████╗ ██╗██╗  ██╗██╗███╗   ██╗
██╔══██╗██║██║ ██╔╝██║████╗  ██║
██████╔╝██║█████╔╝ ██║██╔██╗ ██║
██╔══██╗██║██╔═██╗ ██║██║╚██╗██║
██████╔╝██║██║  ██╗██║██║ ╚████║
╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝
\`;

{{#if (eq backend "convex")}}
const healthCheck = useConvexQuery(api.healthCheck.get, {});
{{else}}
  {{#unless (eq api "none")}}
const healthCheck = useQuery($orpc.healthCheck.queryOptions())
  {{/unless}}
{{/if}}
</script>

<template>
  <UContainer class="py-8">
    <pre class="overflow-x-auto font-mono text-sm whitespace-pre-wrap">\\{{ TITLE_TEXT }}</pre>

    <div class="grid gap-6 mt-6">
      <UCard>
        <template #header>
          <div class="font-medium">API Status</div>
        </template>

        {{#if (eq backend "convex")}}
        <div class="flex items-center gap-2">
          <UIcon
            :name="healthCheck === undefined ? 'i-lucide-loader-2' : healthCheck.data.value === 'OK' ? 'i-lucide-check-circle' : 'i-lucide-x-circle'"
            :class="[
              healthCheck === undefined ? 'animate-spin text-muted' : '',
              healthCheck?.data.value === 'OK' ? 'text-success' : 'text-error'
            ]"
          />
          <span class="text-sm">
            \\{{
              healthCheck === undefined
                ? "Checking..."
                : healthCheck.data.value === "OK"
                  ? "Connected"
                  : "Error"
            }}
          </span>
        </div>
        {{else}}
        {{#unless (eq api "none")}}
        <div class="flex items-center gap-2">
          <UIcon
            :name="healthCheck.isLoading.value ? 'i-lucide-loader-2' : healthCheck.isSuccess.value ? 'i-lucide-check-circle' : 'i-lucide-x-circle'"
            :class="[
              healthCheck.isLoading.value ? 'animate-spin text-muted' : '',
              healthCheck.isSuccess.value ? 'text-success' : '',
              healthCheck.isError.value ? 'text-error' : ''
            ]"
          />
          <span class="text-sm">
            <template v-if="healthCheck.isLoading.value">
              Checking...
            </template>
            <template v-else-if="healthCheck.isSuccess.value">
              Connected (\\{{ healthCheck.data.value }})
            </template>
            <template v-else-if="healthCheck.isError.value">
              Error: \\{{ healthCheck.error.value?.message || 'Failed to connect' }}
            </template>
            <template v-else>
              Idle
            </template>
          </span>
        </div>
        {{/unless}}
        {{/if}}
      </UCard>
    </div>
  </UContainer>
</template>
`],
  ["frontend/nuxt/nuxt.config.ts.hbs", `import "@{{projectName}}/env/web";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: 'latest',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui'
    {{#if (eq backend "convex")}},
    'convex-nuxt'
    {{/if}}
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 3000
  },
  {{#if (eq backend "convex")}}
  convex: {
    url: process.env.NUXT_PUBLIC_CONVEX_URL,
  },
  {{else if (ne backend "self")}}
  runtimeConfig: {
    public: {
      serverUrl: process.env.NUXT_PUBLIC_SERVER_URL,
    }
  },
  {{/if}}
})
`],
  ["frontend/nuxt/package.json.hbs", `{
  "name": "web",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "dependencies": {
    "@nuxt/ui": "4.2.1",
    "@nuxt/content": "^3.7.1",
    "@nuxtjs/mdc": "^0.17.4",
    "nuxt": "^4.1.2",
    "vue": "^3.5.21",
    "vue-router": "^4.5.1",
    "@vue/devtools-api": "^8.0.5"
  },
  "devDependencies": {
    "tailwindcss": "^4.1.13",
    "@iconify-json/lucide": "^1.2.57"
  }
}
`],
  ["frontend/nuxt/public/favicon.ico", `[Binary file]`],
  ["frontend/nuxt/public/robots.txt", `User-Agent: *
Disallow:
`],
  ["frontend/nuxt/server/tsconfig.json", `{
  "extends": "../.nuxt/tsconfig.server.json"
}
`],
  ["frontend/nuxt/tsconfig.json.hbs", `{
  // https://nuxt.com/docs/guide/concepts/typescript
  "files": [],
  "references": [
    {
      "path": "./.nuxt/tsconfig.app.json"
    },
    {
      "path": "./.nuxt/tsconfig.server.json"
    },
    {
      "path": "./.nuxt/tsconfig.shared.json"
    },
    {
      "path": "./.nuxt/tsconfig.node.json"
    }
  ]
}
`],
  ["frontend/react/next/.prettierrc", `{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "auto"
}
`],
  ["frontend/react/next/eslint.config.mjs", `import nextConfig from "eslint-config-next";
import prettierPlugin from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...nextConfig,
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-no-comment-textnodes": "off",
      "react-hooks/set-state-in-effect": "off",
      "@typescript-eslint/quotes": [
        "error",
        "single",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      "prettier/prettier": [
        "warn",
        {
          singleQuote: true,
          semi: true,
          endOfLine: "auto",
        },
      ],
      indent: ["error", 2, { SwitchCase: 1 }],
    },
  },
  prettierPlugin,
];
`],
  ["frontend/react/next/next-env.d.ts.hbs", `/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
`],
  ["frontend/react/next/next.config.ts.hbs", `{{#if (eq webDeploy "cloudflare")}}
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
{{/if}}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	reactCompiler: true,
	reactStrictMode: true,
	{{#if (includes examples "ai")}}
	transpilePackages: ["shiki"],
	{{/if}}
	{{#if (eq dbSetup "turso")}}
	serverExternalPackages: ["libsql", "@libsql/client"],
	{{/if}}
};

export default nextConfig;

{{#if (eq webDeploy "cloudflare")}}
initOpenNextCloudflareForDev();
{{/if}}
`],
  ["frontend/react/next/package.json.hbs", `{
  "name": "web",
  "version": "0.1.0",
  "author": {
    "email": "naufalakbar378@gmail.com",
    "name": "Naufal Akbar Nugroho"
  },
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start --turbopack",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "dependencies": {
    "@base-ui/react": "^1.0.0",
    "axios": "^1.13.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.546.0",
    "next": "16.1.6",
    "next-themes": "^0.4.6",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-spinners": "^0.15.0",
    "shadcn": "^3.6.2",
    "smoothscroll-polyfill": "^0.4.4",
    "sonner": "^2.0.5",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.3.4",
    "babel-plugin-react-compiler": "^1.0.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.4",
    "@tailwindcss/postcss": "^4.1.10",
    "@types/node": "^25.3.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@types/smoothscroll-polyfill": "^0.3.4",
    "@typescript-eslint/eslint-plugin": "^8.56.1",
    "autoprefixer": "^10.4.27",
    "eslint": "^9.21.0",
    "eslint-config-next": "16.1.6",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.5",
    "postcss": "^8.5.6",
    "prettier": "^3.8.1",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.9.3"
  }
}
`],
  ["frontend/react/next/postcss.config.mjs.hbs", `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
`],
  ["frontend/react/next/public/file.svg", `<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>`],
  ["frontend/react/next/public/globe.svg", `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>`],
  ["frontend/react/next/public/next.svg", `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>`],
  ["frontend/react/next/public/vercel.svg", `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>`],
  ["frontend/react/next/public/window.svg", `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>`],
  ["frontend/react/next/src/app/(auth)/login/page.tsx", `import Link from "next/link";
import { FC } from "react";

import { genPageMetadata } from "@/app/seo";
import { GitHubIcon } from "@/components/Common/CustomIcons";

export const metadata = genPageMetadata({
  title: "Masuk — Kelola Project Anda",
  description: "Masuk ke akun BikinProject untuk mulai mengelola project generator Anda.",
});

const Login: FC = () => {
  return (
    <section className="min-h-[100vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <span className="font-mono font-bold text-zinc-900 dark:text-white">auth --login</span>
          </div>
          <div className="flex gap-1.5 opacity-30">
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Selamat Datang</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Masuk untuk mengelola project Anda.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Masuk Ke Sistem
            </button>

            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span className="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Atau
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white">
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p className="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Belum punya akun?{" "}
            <Link
              href="/auth/register"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
`],
  ["frontend/react/next/src/app/(auth)/register/page.tsx", `import Link from "next/link";
import { FC } from "react";

import { genPageMetadata } from "@/app/seo";
import { GitHubIcon } from "@/components/Common/CustomIcons";

export const metadata = genPageMetadata({
  title: "Daftar — Bergabung dengan BikinProject",
  description:
    "Buat akun BikinProject dan mulai bangun project Anda dengan lebih cepat dan efisien.",
});

const Register: FC = () => {
  return (
    <section className="min-h-[100vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <span className="font-mono font-bold text-zinc-900 dark:text-white">
              auth --register
            </span>
          </div>
          <div className="flex gap-1.5 opacity-30">
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Buat Akun Baru</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Bergabung dengan komunitas BikinProject.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Daftar Sekarang
            </button>

            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span className="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Atau
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white">
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p className="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Sudah punya akun?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Masuk Saja
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
`],
  ["frontend/react/next/src/app/(root)/_components/Features.tsx.hbs", `'use client';
import { FC } from 'react';

const features = [
  {
    title: 'Zero Config',
    description:
      'Lupakan setup yang rumit. Mulai project Anda dalam hitungan detik dengan konfigurasi yang sudah dioptimalkan.',
    icon: '⚙️',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Interactive CLI',
    description:
      'Antarmuka baris perintah yang interaktif dan intuitif, memudahkan Anda memilih opsi project.',
    icon: '💻',
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'Multi-framework',
    description:
      'Mendukung berbagai framework populer seperti Next.js, React, Laravel, dan akan terus bertambah.',
    icon: '📚',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  {
    title: 'Standardisasi Kode',
    description:
      'Setiap project dihasilkan dengan struktur folder dan standar kode terbaik yang konsisten.',
    icon: '🛠️',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Developer Experience',
    description:
      'Dibuat dengan fokus utama pada kenyamanan developer untuk produktivitas maksimal.',
    icon: '✨',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Open Source',
    description:
      'Didukung oleh komunitas dan bebas untuk dikustomisasi sesuai kebutuhan spesifik Anda.',
    icon: '🌐',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
];

const Features: FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white">
            Fitur Unggulan Kami
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
            Segala yang Anda butuhkan untuk membangun project modern dalam satu platform yang
            terintegrasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div
                className={\`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 \${feature.color} border border-transparent group-hover:border-current transition-all duration-300 group-hover:scale-110 shadow-sm\`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
`],
  ["frontend/react/next/src/app/(root)/_components/Hero.tsx.hbs", `'use client';
import { FC } from 'react';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
              </span>
              CLI-Based Project Generator
            </div>

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

            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 font-mono text-sm md:text-base flex items-center justify-between group">
              <span className="text-zinc-800 dark:text-zinc-200">
                <span className="text-blue-600 dark:text-blue-400">$</span> npx bikinproject@latest
              </span>
              <button
                onClick={() => navigator.clipboard.writeText('npx bikinproject@latest')}
                className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-blue-600"
                title="Copy to clipboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/auth/register"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Coba Sekarang
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                Lihat Fitur
              </Link>
            </div>
          </div>

          {/* Right Side: Terminal Mock-up */}
          <div className="lg:w-1/2 w-full animate-float">
            <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 font-medium">
                  bash — create-bikinproject-app
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[400px]">
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
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold underline">
                      ./your-project
                    </span>
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
                  <p className="flex gap-3 pl-6">
                    <span className="text-zinc-500">○ Laravel Breeze API w/ Next.js</span>
                  </p>
                  <p className="text-zinc-400">│</p>
                  <p className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ⏳ Creating project...
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ✅ Project created successfully!
                    </span>
                  </p>
                  <p className="text-zinc-400">│</p>
                  <p className="text-zinc-400 text-xs">────────────────────────╮</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">
                    {' '}
                    🎉 Project ready to use!
                  </p>
                  <p className="text-zinc-400 text-xs">────────────────────────╯</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
`],
  ["frontend/react/next/src/app/(root)/_components/Steps.tsx.hbs", `'use client';
import { FC } from 'react';

const steps = [
  {
    number: '01',
    title: 'Jalankan Command',
    description:
      'Buka terminal favorit Anda dan jalankan "npx bikinproject@latest". Tidak perlu instalasi global yang memberatkan sistem.',
  },
  {
    number: '02',
    title: 'Pilih Konfigurasi',
    description:
      'Pilih framework (Next.js, React, Laravel), bahasa (TS/JS), dan CSS framework melalui antarmuka CLI yang interaktif.',
  },
  {
    number: '03',
    title: 'Project Siap!',
    description:
      'BikinProject akan men-generate starter project lengkap dengan best practices, siap untuk Anda kembangkan lebih lanjut.',
  },
];

const Steps: FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight">
              Langkah Sederhana <br /> Untuk Project Terpercaya
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
              Kami menyederhanakan proses kompleks menjadi langkah-langkah yang mudah dipahami,
              memastikan Anda selalu terlibat dalam setiap progres.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-zinc-500/10">
                Mulai Konsultasi
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-3xl border-2 border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 group"
              >
                <div className="text-4xl font-black text-blue-600/20 dark:text-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300 shrink-0">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{step.title}</h3>
                  <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
`],
  ["frontend/react/next/src/app/(root)/about/page.tsx.hbs", `import { FC } from 'react';

import { genPageMetadata } from '@/app/seo';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata = genPageMetadata({
  title: 'Tentang BikinProject',
  description:
    'Pelajari lebih lanjut tentang BikinProject, motivasi di baliknya, dan bagaimana alat ini dapat membantu Anda membangun proyek dengan lebih cepat.',
});

const About: FC = () => {
  return (
    <section className="flex items-center justify-center max-w-7xl mx-auto min-h-screen">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="h-64 md:h-auto bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Laptop"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="md:pt-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                  Tentang BikinProject.
                </h1>

                <p className="sm:text-lg mb-6 md:mb-8 text-justify">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-1 px-2 rounded font-mono font-bold">
                    BikinProject
                  </span>{' '}
                  adalah sebuah CLI-based starter project generator yang dirancang untuk mempercepat
                  proses inisialisasi aplikasi dengan standar industri. Proyek ini mendukung
                  berbagai framework populer seperti Next.js, React, dan Laravel.
                </p>

                <p className="sm:text-lg mb-6 md:mb-8 text-justify">
                  Dibuatnya BikinProject berawal dari kebutuhan{' '}
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-bold underline transition duration-100"
                  >
                    Saya
                  </a>{' '}
                  akan standarisasi struktur proyek saat memulai development baru. Alih-alih
                  melakukan setup manual yang repetitif, BikinProject mengotomatisasi segalanya
                  mulai dari pemilihan bahasa, styling framework, hingga struktur folder terbaik.
                </p>

                <div className="sm:text-lg mb-6 md:mb-8 text-justify">
                  Hanya dengan satu perintah di terminal, Anda bisa langsung fokus membangun fitur
                  tanpa pusing dengan boilerplate:
                  <div className="mt-4 p-4 bg-zinc-900 rounded-xl font-mono text-sm text-emerald-400 border border-zinc-800">
                    $ npx bikinproject@latest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
`],
  ["frontend/react/next/src/app/(root)/contact/page.tsx.hbs", `import { FC } from 'react';

import { genPageMetadata } from '@/app/seo';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata = genPageMetadata({
  title: 'Kontak — Hubungi Kami',
  description: 'Hubungi tim BikinProject untuk pertanyaan, masukan, atau kolaborasi lebih lanjut.',
});

const Contact: FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen max-w-7xl mx-auto">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex items-center justify-center flex-col">
                <img
                  src="https://avatars.githubusercontent.com/u/83068205?v=4"
                  loading="lazy"
                  alt="hero"
                  className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                />

                <div className="text-center lg:w-2/3 w-full">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-zinc-50">
                    Naufal Akbar Nugroho
                  </h1>

                  <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900 dark:text-zinc-50">
                    Fullstack Web Developer | Undergraduate Information Systems Student
                  </h1>

                  <p className="mb-8 leading-relaxed dark:text-gray-400">
                    Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi
                    bagi semua orang!
                  </p>

                  <div className="flex justify-center">
                    <a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-white bg-blue-500 hover:bg-blue-600 border-0 py-2 px-6 focus:outline-none rounded text-lg"
                    >
                      GitHub Saya
                    </a>

                    <a
                      href={\`mailto:\${siteMetadata.email}\`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                    >
                      Hubungi Saya
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
`],
  ["frontend/react/next/src/app/(root)/page.tsx.hbs", `'use client';
import { FC } from 'react';

import Hero from './_components/Hero';
import Features from './_components/Features';
import Steps from './_components/Steps';

const Home: FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Steps />
    </div>
  );
};

export default Home;
`],
  ["frontend/react/next/src/app/error.tsx.hbs", `'use client';

import { useEffect } from 'react';

import { RequestError } from '@/interfaces/error';
import ErrorState from '@/components/Common/ErrorState';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const reqError = error as RequestError;
  const statusCode = reqError.status || reqError.statusCode || 500;

  return <ErrorState code={statusCode} error={error} />;
}
`],
  ["frontend/react/next/src/app/favicon.ico", `[Binary file]`],
  ["frontend/react/next/src/app/globals.css.hbs", `@tailwind base;
@tailwind components;
@tailwind utilities;
{{#if (includes examples "ai")}}
@source "../node_modules/streamdown/dist/*.js";
{{/if}}

html {
  scroll-behavior: smooth;
}

`],
  ["frontend/react/next/src/app/layout.tsx.hbs", `import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
{{#if (eq auth "clerk")}}{{#if (eq backend "convex")}}import { ClerkProvider } from "@clerk/nextjs";
{{/if}}{{/if}}{{#if (and (eq backend "convex") (eq auth "better-auth"))}}
import { getToken } from "@/lib/auth-server";
{{/if}}
import { siteMetadata } from '@/data/siteMetadata';
import ThemeProvider from '@/providers/ThemeProvider';
import ScrollToTop from "@/components/Common/ScrollToTop";
import Navbar from '@/components/Mixins/Navbar';
import Footer from '@/components/Mixins/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl || 'http://localhost:3000'),
  title: {
    default: siteMetadata.title,
    template: \`%s | \${siteMetadata.headerTitle}\`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

{{#if (and (eq backend "convex") (eq auth "better-auth"))}}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getToken();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={\`\${geistSans.variable} \${geistMono.variable} antialiased\`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <ScrollToTop />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
{{else}}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={\`\${geistSans.variable} \${geistMono.variable} antialiased\`}
			>
				{{#if (and (eq auth "clerk") (eq backend "convex"))}}<ClerkProvider>
					<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <ScrollToTop />

          <Footer />
        </ThemeProvider>
				</ClerkProvider>{{else}}<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <ScrollToTop />

          <Footer />
        </ThemeProvider>{{/if}}
			</body>
		</html>
	);
}
{{/if}}
`],
  ["frontend/react/next/src/app/loading.tsx.hbs", `'use client';
import { FC } from 'react';

import Loader from '@/components/Common/Loader';

const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen">
      <Loader />
    </div>
  );
};

export default Loading;
`],
  ["frontend/react/next/src/app/not-found.tsx.hbs", `import { FC } from 'react';
import { Metadata } from 'next';

import { genPageMetadata } from '@/app/seo';
import ErrorState from '@/components/Common/ErrorState';

export const metadata: Metadata = genPageMetadata({
  title: '404 - Command Not Found',
  description: 'Halaman yang Anda cari tidak dapat ditemukan di terminal ini.',
});

const NotFound: FC = () => {
  return <ErrorState code={404} />;
};

export default NotFound;
`],
  ["frontend/react/next/src/app/robots.tsx.hbs", `import { MetadataRoute } from 'next';
import { siteMetadata } from '@/data/siteMetadata';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: \`\${siteMetadata.siteUrl}/sitemap.xml\`,
    host: siteMetadata.siteUrl,
  };
}
`],
  ["frontend/react/next/src/app/seo.tsx.hbs", `import { Metadata } from 'next';

import { PageSEOProps } from '@/interfaces/seo';
import { siteMetadata } from '@/data/siteMetadata';

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: \`\${title} | \${siteMetadata.title}\`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      title: \`\${title} | \${siteMetadata.title}\`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  };
}
`],
  ["frontend/react/next/src/app/sitemap.tsx.hbs", `import { MetadataRoute } from 'next';

import { siteMetadata } from '@/data/siteMetadata';
import { getAppRoutes } from '@/lib/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const routes = getAppRoutes().map((route) => ({
    url: \`\${siteUrl}\${route === '/' ? '' : route}\`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
`],
  ["frontend/react/next/src/components/Common/ErrorState.tsx.hbs", `/* eslint-disable prettier/prettier */
'use client';

import { FC } from 'react';
import Link from 'next/link';

import { ErrorMetadata, ErrorStateProps, ErrorTheme } from '@/interfaces/error';

const ErrorState: FC<ErrorStateProps> = ({ code, error }) => {
  const getErrorContent = (statusCode: number) => {
    const is5xx = statusCode >= 500;

    const metadataMap: Record<number, ErrorMetadata> = {
      401: {
        titlePrefix: 'Sesi Anda',
        titleSuffix: 'Berakhir',
        description:
          'Maaf, sesi Anda telah berakhir atau Anda belum login. Silakan login kembali untuk melanjutkan.',
        badge: 'Error 401: Unauthorized',
        theme: 'amber',
      },
      403: {
        titlePrefix: 'Akses',
        titleSuffix: 'Dibatasi',
        description:
          'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator.',
        badge: 'Error 403: Forbidden',
        theme: 'amber',
      },
      404: {
        titlePrefix: 'Halaman Tidak',
        titleSuffix: 'Ditemukan',
        description:
          'Waduh! Sepertinya route yang Anda cari tidak ada atau sudah pindah ke tempat lain.',
        badge: 'Error 404: Not Found',
        theme: 'rose',
      },
      500: {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Internal',
        description: 'Ups! Server kami sedang mengalami gangguan sejenak. Silakan coba lagi nanti.',
        badge: 'Error 500: Server Error',
        theme: 'amber',
      },
      503: {
        titlePrefix: 'Layanan Tidak',
        titleSuffix: 'Tersedia',
        description: 'Saat ini layanan sedang dalam pemeliharaan. Mohon tunggu beberapa saat lagi.',
        badge: 'Error 503: Service Unavailable',
        theme: 'emerald',
      },
    };

    const defaultContent: ErrorMetadata = is5xx
      ? {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Server',
        description:
          'Server mengalami kendala yang tidak terduga. Mohon maaf atas ketidaknyamanan ini.',
        badge: \`Error \${statusCode}: Server Exception\`,
        theme: 'amber',
      }
      : {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Klien',
        description: 'Permintaan Anda tidak dapat diproses oleh sistem kami.',
        badge: \`Error \${statusCode}: Client Error\`,
        theme: 'rose',
      };

    const content = metadataMap[statusCode] ?? defaultContent;

    const themes: Record<ErrorMetadata['theme'], ErrorTheme> = {
      amber: {
        badgeColor:
          'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400',
        pingColor: 'bg-amber-400',
        dotColor: 'bg-amber-600 dark:bg-amber-500',
        gradient: 'from-amber-600 to-yellow-400 dark:from-amber-400 dark:to-yellow-400',
        glowStart: 'bg-amber-600/10',
        glowEnd: 'bg-yellow-600/10',
        terminalIcon: 'bg-amber-500/40',
        borderType: 'text-amber-600 dark:text-amber-400',
        errorColor: 'text-amber-600 dark:text-amber-400',
      },
      rose: {
        badgeColor:
          'bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400',
        pingColor: 'bg-rose-400',
        dotColor: 'bg-rose-600 dark:bg-rose-500',
        gradient: 'from-rose-600 to-orange-400 dark:from-rose-400 dark:to-orange-400',
        glowStart: 'bg-rose-600/10',
        glowEnd: 'bg-orange-600/10',
        terminalIcon: 'bg-rose-500/40',
        borderType: 'text-rose-600 dark:text-rose-400',
        errorColor: 'text-rose-600 dark:text-rose-400',
      },
      emerald: {
        badgeColor:
          'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400',
        pingColor: 'bg-emerald-400',
        dotColor: 'bg-emerald-600 dark:bg-emerald-500',
        gradient: 'from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-400',
        glowStart: 'bg-emerald-600/10',
        glowEnd: 'bg-teal-600/10',
        terminalIcon: 'bg-emerald-500/40',
        borderType: 'text-emerald-600 dark:text-emerald-400',
        errorColor: 'text-emerald-600 dark:text-emerald-400',
      },
    };

    return { ...content, ...themes[content.theme] };
  };

  const meta = getErrorContent(code);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div
          className={\`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] \${meta.glowStart} blur-[120px] rounded-full\`}
        />
        <div
          className={\`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] \${meta.glowEnd} blur-[120px] rounded-full\`}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 text-left">
            <div
              className={\`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold shadow-sm \${meta.badgeColor}\`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${meta.pingColor}\`}
                ></span>
                <span
                  className={\`relative inline-flex rounded-full h-2 w-2 \${meta.dotColor}\`}
                ></span>
              </span>
              {meta.badge}
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              {meta.titlePrefix} <br />
              <span
                className={\`inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r \${meta.gradient}\`}
              >
                {meta.titleSuffix}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
              {meta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full animate-float">
            <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className={\`w-3.5 h-3.5 rounded-full \${meta.terminalIcon}\`} />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 font-medium">
                  bash — system-error-{code}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[350px]">
                <div className="space-y-2">
                  <p className="text-zinc-400">┌ checking system status...</p>
                  <p className="flex gap-3">
                    <span className={meta.borderType}>│</span>
                    <span className="text-zinc-800 dark:text-zinc-200">
                      ✖ Fatal Error: {meta.badge}
                    </span>
                  </p>
                  <p className="text-zinc-400">│</p>
                  <p className="flex gap-3">
                    <span className={meta.borderType}>│</span>
                    <span className="text-zinc-500">[stacktrace]</span>
                  </p>
                  {error ? (
                    <p className="flex gap-3 text-xs">
                      <span className={meta.borderType}>│</span>
                      <span className="text-rose-500 dark:text-rose-400">
                        Error: {error.name} - {error.message}
                      </span>
                    </p>
                  ) : (
                    <>
                      <p className="flex gap-3 text-xs">
                        <span className={meta.borderType}>│</span>
                        <span className="text-zinc-500">
                          at SystemHandler.resolve (internal/core.js:{code})
                        </span>
                      </p>
                      <p className="flex gap-3 text-xs">
                        <span className={meta.borderType}>│</span>
                        <span className="text-zinc-500">
                          at RequestPipeline.execute (internal/router.js:123)
                        </span>
                      </p>
                    </>
                  )}
                  <p className="text-zinc-400">│</p>
                  <p className="text-zinc-400 text-xs text-center">────────────────────────</p>
                  <p className={\`\${meta.errorColor} font-bold text-center\`}>
                    {' '}
                    ⚠️ ERROR_CODE: {code}
                  </p>
                  <p className="text-zinc-400 text-xs text-center">────────────────────────</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorState;
`],
  ["frontend/react/next/src/components/Common/ThemeToggle.tsx.hbs", `'use client';
import { FC, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="ml-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-black hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-200"
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
`],
  ["frontend/react/next/src/components/Mixins/Footer.tsx.hbs", `'use client';
import { FC } from 'react';
import Link from 'next/link';

import { InstagramIcon, LinkedInIcon, TwitterIcon, GitHubIcon } from '../Common/CustomIcons';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Project',
      links: [
        { name: 'Fitur', href: '#features' },
        { name: 'Cara Kerja', href: '#steps' },
        { name: 'Harga', href: '/pricing' },
        { name: 'Showcase', href: '/showcase' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Karir', href: '/career' },
        { name: 'Blog', href: '/blog' },
        { name: 'Kontak', href: '/contact' },
      ],
    },
    {
      title: 'Dukungan',
      links: [
        { name: 'Bantuan', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Keamanan', href: '/security' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Ketentuan', href: '/terms' },
        { name: 'Privasi', href: '/privacy' },
        { name: 'Lisensi', href: '/license' },
      ],
    },
  ];

  const socials = [
    { name: 'GitHub', icon: <GitHubIcon />, href: '#' },
    { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
    { name: 'Instagram', icon: <InstagramIcon />, href: '#' },
  ];

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 text-white font-bold text-2xl">
              📦️ BikinProject
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              CLI-based package starter generator yang dirancang untuk mempercepat workflow
              pengembangan aplikasi Anda dengan standar industri.
            </p>
            <div className="flex gap-4 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-zinc-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold text-white">Dapatkan Update Terbaru</h3>
              <p>Jadilah yang pertama tahu tentang fitur dan promo terbaru dari kami.</p>
              <form className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/10"
                >
                  Langganan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 py-16">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm tracking-wide">
          <p>© {year} BikinProject. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`],
  ["frontend/react/next/src/components/Mixins/Navbar/constant/navLinks.ts", `export const navlinks = [
  { title: "Beranda", path: "/" },
  { title: "Fitur", path: "#features" },
  { title: "Cara Kerja", path: "#steps" },
  { title: "Tentang", path: "/about" },
  { title: "Kontak", path: "/contact" },
];
`],
  ["frontend/react/next/src/components/Mixins/Navbar/index.tsx.hbs", `'use client';
import { FC, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { navlinks } from './constant/navLinks';
import ThemeToggle from '@/components/Common/ThemeToggle';
import styles from './Navbar.module.css';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  // Navbar fixed position if scrolling
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        header?.classList.add(styles.navbarFixed);
      } else {
        header?.classList.remove(styles.navbarFixed);
      }
    };
  }, []);

  // Hamburger menu handler
  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    setIsOpen(!isOpen);

    if (isOpen) {
      hamburger?.classList.remove(styles.hamburgerActive);
      navMenu?.classList.add('hidden');
    } else {
      hamburger?.classList.add(styles.hamburgerActive);
      navMenu?.classList.remove('hidden');
    }
  };

  // isMenuActive handler
  const isMenuActive = (path: string) => {
    const isHomePage = pathname === '/' && path === '/';

    if (isHomePage) {
      return true;
    }

    return pathname !== '/' && path !== '/' && pathname.includes(path);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-primary font-bold text-xl lg:text-2xl py-6"
              aria-label="logo"
            >
              📦️ BikinProject
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="right-4 block absolute lg:hidden"
              onClick={hamburgerHandler}
            >
              <span
                className={\`\${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out\`}
              ></span>
              <span
                className={\`\${styles.hamburgerLine} transition duration-300 ease-in-out\`}
              ></span>
              <span
                className={\`\${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out\`}
              ></span>
            </button>

            <nav
              id="navMenu"
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex lg:items-center">
                {navlinks?.map((a, i) => (
                  <li className="group" key={i}>
                    <Link
                      href={a.path}
                      className={cn(
                        styles.navLink,
                        isMenuActive(a.path) && styles.navLinkActive,
                        'mx-8 lg:mx-4 flex'
                      )}
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
                <li className="ml-8 lg:ml-6 flex items-center gap-4">
                  <Link
                    href="/login"
                    className="text-zinc-700 dark:text-zinc-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Masuk
                  </Link>
                  <Link
                    href="/register"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Daftar
                  </Link>
                </li>

                <li className="ml-8 lg:ml-4 flex items-center">
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
`],
  ["frontend/react/next/src/components/Mixins/Navbar/Navbar.module.css.hbs", `.navbarFixed {
  @apply fixed z-[9999] bg-transparent bg-opacity-70 shadow-md;
  backdrop-filter: blur(10px);
}

.hamburgerLine {
  @apply w-[30px] h-[2px] my-2 block bg-black;
}

.hamburgerActive > span:nth-child(1) {
  @apply rotate-45;
}

.hamburgerActive > span:nth-child(2) {
  @apply scale-0;
}

.hamburgerActive > span:nth-child(3) {
  @apply -rotate-45;
}

.navLink {
  @apply relative py-2 text-zinc-600 dark:text-zinc-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400;
}

.navLink::after {
  content: "";
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300;
}

.navLink:hover::after,
.navLinkActive::after {
  @apply w-full;
}

.navLinkActive {
  @apply text-blue-600 dark:text-blue-400;
}
`],
  ["frontend/react/next/src/components/providers.tsx.hbs", `"use client";

{{#if (eq backend "convex")}}
{{#if (eq auth "clerk")}}
import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { env } from "@{{projectName}}/env/web";
{{else if (eq auth "better-auth")}}
import { ConvexReactClient } from "convex/react";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { authClient } from "@/lib/auth-client";
import { env } from "@{{projectName}}/env/web";
{{else}}
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { env } from "@{{projectName}}/env/web";
{{/if}}
{{else}}
{{#unless (eq api "none")}}
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
{{#if (eq api "orpc")}}
import { queryClient } from "@/utils/orpc";
{{/if}}
{{#if (eq api "trpc")}}
import { queryClient } from "@/utils/trpc";
{{/if}}
{{/unless}}
{{/if}}
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";

{{#if (eq backend "convex")}}
const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL);
{{/if}}

export default function Providers({
  children,
{{#if (and (eq backend "convex") (eq auth "better-auth"))}}
  initialToken,
{{/if}}
}: {
  children: React.ReactNode;
{{#if (and (eq backend "convex") (eq auth "better-auth"))}}
  initialToken?: string | null;
{{/if}}
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {{#if (eq backend "convex")}}
      {{#if (eq auth "clerk")}}
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
      {{else if (eq auth "better-auth")}}
      <ConvexBetterAuthProvider
        client={convex}
        authClient={authClient}
        initialToken={initialToken}
      >
        {children}
      </ConvexBetterAuthProvider>
      {{else}}
      <ConvexProvider client={convex}>{children}</ConvexProvider>
      {{/if}}
      {{else}}
      {{#unless (eq api "none")}}
      <QueryClientProvider client={queryClient}>
        {{#if (eq api "orpc")}}
        {children}
        {{/if}}
        {{#if (eq api "trpc")}}
        {children}
        {{/if}}
        <ReactQueryDevtools />
      </QueryClientProvider>
      {{else}}
      {children}
      {{/unless}}
      {{/if}}
      <Toaster richColors />
    </ThemeProvider>
  );
}
`],
  ["frontend/react/next/src/components/README.md", `# Arsitektur Komponen

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

### Common

Folder \`Common\` terletak pada \`/src/components/Common/\`. Folder ini berisi komponen-komponen atomik atau elemen UI dasar yang bersifat reusable dan independen.
Contoh: Tombol (\`Button\`), Input, Modal, Icon kustom, dll.

### Mixins

Folder \`Mixins\` terletak pada \`/src/components/Mixins/\`. Folder ini berisi komponen-komponen hasil gabungan atau komposisi dari beberapa komponen \`Common\` untuk membentuk fitur yang lebih kompleks.
Contoh: Navbar (gabungan dari Logo, Links, dan Theme Toggle), Footer, Sidebar, dll.

## Struktur Folder Lainnya

- **app/**: Berisi halaman (pages) dan layout utama menggunakan Next.js App Router.
- **hooks/**: Berisi custom logic React hooks yang dapat digunakan kembali di berbagai komponen.
- **lib/**: Berisi fungsi utilitas dan konfigurasi library pihak ketiga.
- **data/**: Berisi data statis, konstanta, dan metadata situs.
`],
  ["frontend/react/next/src/hooks/useAxios.ts", `import https from "https";

import axios, { AxiosInstance } from "axios";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const createNewClient: () => AxiosInstance = () => {
  const BASE_API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/";

  return axios.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
    },
    httpsAgent,
  });
};

export const client: AxiosInstance = createNewClient();

type HookType = (accessToken?: string) => AxiosInstance;

export const useAxios: HookType = (accessToken) => {
  client.interceptors.request.use((config) => {
    const newConfig = { ...config };

    if (accessToken) {
      newConfig.headers.Authorization = \`Bearer \${accessToken}\`;
    }

    return newConfig;
  });

  return client;
};

export const { isAxiosError } = axios;
`],
  ["frontend/react/next/src/hooks/useClipboard.ts", `const useClipboard = () => {
  const copy = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      alert("Copied to clipboard!"); // replace this line with your toast notification
    } catch (err) {
      alert("Failed to copy to clipboard!"); // replace this line with your toast notification
    }
  };

  return { copy };
};

export default useClipboard;
`],
  ["frontend/react/next/src/hooks/useDebounce.ts", `import { useEffect, useRef, useState, useCallback } from "react";

export const useDebounce = <T>(initialValue: T, delay = 300): [T, (value: T) => void] => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setDebouncedHandler = useCallback(
    (newValue: T) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setDebouncedValue(newValue);
      }, delay);
    },
    [delay],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return [debouncedValue, setDebouncedHandler];
};
`],
  ["frontend/react/next/src/hooks/usePagination.ts", `import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

function usePagination() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = useMemo(() => {
    const value = parseInt(searchParams.get("page") ?? "1", 10);
    return isNaN(value) ? 1 : value;
  }, [searchParams]);

  const size = useMemo(() => {
    const value = parseInt(searchParams.get("size") ?? "10", 10);
    return isNaN(value) ? 10 : value;
  }, [searchParams]);

  const currentParams = useMemo(() => {
    return new URLSearchParams(searchParams.toString());
  }, [searchParams]);

  const handleChangePage = (page: number) => {
    const newParams = new URLSearchParams(currentParams.toString());
    newParams.set("page", String(page));
    router.push(\`?\${newParams.toString()}\`);
  };

  const handleChangeSize = (size: number) => {
    const newParams = new URLSearchParams(currentParams.toString());
    newParams.set("size", String(size));
    router.push(\`?\${newParams.toString()}\`);
  };

  return {
    page,
    size,
    handleChangePage,
    handleChangeSize,
  };
}

export default usePagination;
`],
  ["frontend/react/next/src/hooks/useScreenSize.ts", `"use client";
import { useState, useEffect } from "react";

type ScreenSize = {
  width: number;
  height: number;
};

const useScreenSize = (): string | undefined => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return undefined;
  }

  if (screenSize.width <= 374) {
    return "Mobile XS";
  } else if (screenSize.width >= 375 && screenSize.width <= 424) {
    return "Mobile M";
  } else if (screenSize.width >= 425 && screenSize.width <= 765) {
    return "Mobile L";
  } else if (screenSize.width >= 768 && screenSize.width <= 1023) {
    return "Tablet";
  } else if (screenSize.width >= 1024 && screenSize.width <= 1439) {
    return "Laptop";
  } else if (screenSize.width >= 1440 && screenSize.width <= 2559) {
    return "Laptop LG";
  } else if (screenSize.width >= 2560) {
    return "Laptop XL";
  }

  return undefined;
};

export default useScreenSize;
`],
  ["frontend/react/next/src/hooks/useSort.ts", `import { useState } from "react";

import { SortDirection } from "@/interfaces/hooks/useSort";

function useSort(): SortHookReturn {
  const [direction, setDirection] = useState<SortDirection>({ field: "", direction: "" });
  const [sortBy, setSortBy] = useState<string>("");

  const handleSort = (field: string): void => {
    if (!field) return;

    let newDirection = "";

    if (direction.field !== field || direction.direction === "") {
      newDirection = "asc";
    } else if (direction.direction === "asc") {
      newDirection = "desc";
    } else if (direction.direction === "desc") {
      newDirection = "";
    }

    setDirection({ field, direction: newDirection });
    const sortParam = newDirection === "asc" ? field : \`-\${field}\`;

    if (newDirection === "") {
      deleteSort();
    } else {
      handleChangeSort(sortParam);
    }
  };

  const deleteSort = (): void => {
    setSortBy("");
  };

  const handleChangeSort = (field: string): void => {
    setSortBy(field);
  };

  return {
    sortBy: sortBy,
    direction,
    handleSort,
  };
}

export type SortHookReturn = {
  sortBy: string;
  direction: SortDirection;
  handleSort: (field: string) => void;
};

export default useSort;
`],
  ["frontend/react/next/src/interfaces/error.ts", `export interface RequestError extends Error {
  status?: number;
  statusCode?: number;
}

export interface ErrorStateProps {
  code: number;
  error?: Error;
}

export interface ErrorMetadata {
  titlePrefix: string;
  titleSuffix: string;
  description: string;
  badge: string;
  theme: "rose" | "amber" | "emerald";
}

export interface ErrorTheme {
  badgeColor: string;
  pingColor: string;
  dotColor: string;
  gradient: string;
  glowStart: string;
  glowEnd: string;
  terminalIcon: string;
  borderType: string;
  errorColor: string;
}
`],
  ["frontend/react/next/src/interfaces/hooks/useSort.ts", `export interface SortHookReturn {
  sortBy: string;
  direction: SortDirection;
  handleSort: (field: string) => void;
}

export interface SortDirection {
  field: string;
  direction: string;
}
`],
  ["frontend/react/next/src/interfaces/seo.ts", `export interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;

  [key: string]: string | number | boolean | undefined;
}
`],
  ["frontend/react/next/src/lib/sitemap.ts", `import fs from "fs";
import path from "path";

/**
 * Recursively crawl the app directory to find all pages.
 * Handles route groups (e.g., (auth)) by omitting them from the path.
 * Ignores API routes and internal components (folders starting with _).
 */
export function getAppRoutes(baseDir: string = "src/app"): string[] {
  const absoluteBaseDir = path.resolve(process.cwd(), baseDir);
  const routes: string[] = [];

  function crawl(currentDir: string, currentRoute: string = "") {
    const items = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const item of items) {
      if (item.isDirectory()) {
        const name = item.name;

        // Ignore internal folders (e.g., _components) and api folder
        if (name.startsWith("_") || name === "api") continue;

        // Handle route groups: folders in parentheses don't affect the URL
        const nextRouteSegment = name.startsWith("(") && name.endsWith(")") ? "" : name;
        const nextRoute = path.join(currentRoute, nextRouteSegment);

        crawl(path.join(currentDir, name), nextRoute);
      } else if (item.isFile() && (item.name === "page.tsx" || item.name === "page.js")) {
        // We found a page!
        // Normalize the route: ensure forward slashes and correct root
        let normalizedRoute = currentRoute.replace(/\\\\/g, "/");

        if (!normalizedRoute || normalizedRoute === ".") {
          normalizedRoute = "/";
        } else {
          if (!normalizedRoute.startsWith("/")) {
            normalizedRoute = "/" + normalizedRoute;
          }
          if (normalizedRoute.endsWith("/")) {
            normalizedRoute = normalizedRoute.slice(0, -1);
          }
        }

        // Only add if not already present
        if (!routes.includes(normalizedRoute)) {
          routes.push(normalizedRoute);
        }
      }
    }
  }

  if (fs.existsSync(absoluteBaseDir)) {
    crawl(absoluteBaseDir);
  }

  return routes;
}
`],
  ["frontend/react/next/src/providers/ThemeProvider.tsx.hbs", `'use client';
import { FC } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
`],
  ["frontend/react/next/tailwind.config.ts.hbs", `import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
`],
  ["frontend/react/next/tsconfig.json.hbs", `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }{{#if (or (eq serverDeploy "cloudflare") (eq webDeploy "cloudflare"))}},
    "types": [
      "@cloudflare/workers-types"
    ]{{/if}}
  },
  "include": [
    {{#if (eq serverDeploy "cloudflare")}}
    "../server/env.d.ts",
    {{/if}}
    "./next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "src/data/siteMedadata.js",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
`],
  ["frontend/react/tanstack-router/.eslintrc.cjs", `module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
`],
  ["frontend/react/tanstack-router/.prettierrc", `{
  "bracketSpacing": true,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false
}
`],
  ["frontend/react/tanstack-router/eslint.config.js", `import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["*.config.{ts,js}", "vite.config.ts", "tailwind.config.ts"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    ignores: ["dist", "eslint.config.js"],
  },
];
`],
  ["frontend/react/tanstack-router/index.html.hbs", `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>`],
  ["frontend/react/tanstack-router/package.json.hbs", `{
  "name": "web",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@base-ui/react": "^1.0.0",
    "@hookform/resolvers": "^5.1.1",
    "@svgr/rollup": "^8.1.0",
    "@tailwindcss/vite": "^4.0.15",
    "@tanstack/react-query": "^5.90.21",
    "@tanstack/react-query-devtools": "^5.91.3",
    "@tanstack/react-router": "^1.163.3",
    "@tanstack/react-router-devtools": "^1.163.3",
    "axios": "^1.13.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.577.0",
    "moment": "^2.30.1",
    "next-themes": "^0.4.6",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-spinners": "^0.17.0",
    "smoothscroll-polyfill": "^0.4.4",
    "sonner": "^2.0.5",
    "shadcn": "^3.6.2",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.2.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.4",
    "@eslint/js": "^10.0.1",
    "@tanstack/router-cli": "^1.164.0",
    "@tanstack/router-vite-plugin": "^1.164.0",
    "@types/node": "^25.3.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@types/smoothscroll-polyfill": "^0.3.4",
    "@typescript-eslint/eslint-plugin": "^8.56.1",
    "@typescript-eslint/parser": "^8.56.1",
    "@vitejs/plugin-react-swc": "^4.2.3",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.27",
    "eslint": "^10.0.2",
    "eslint-config-next": "^16.1.6",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "postcss": "^8.5.8",
    "prettier": "^3.8.1",
    "tailwindcss": "^3.4.1",
    "tailwindcss-animate": "^1.0.7",
    "tsx": "^4.21.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^7.3.1",
    "vite-tsconfig-paths": "^6.1.1"
  }
}
`],
  ["frontend/react/tanstack-router/postcss.config.js.hbs", `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`],
  ["frontend/react/tanstack-router/public/robots.txt", `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
`],
  ["frontend/react/tanstack-router/public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/login</loc>
    <lastmod>2026-03-04T16:16:35.163Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/register</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/about</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/contact</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`],
  ["frontend/react/tanstack-router/scripts/generate-seo.ts", `import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// We'll mimic the siteMetadata here to avoid complex TS import issues in a standalone script
// If the user changes siteMetadata, they should update it here or we can try to import it if tsx/ts-node setup allows
const siteMetadata = {
  title: "BikinProject React Template by Naufal Akbar Nugroho",
  siteUrl: "https://nuflakbrr.github.io/bikinproject", // Change this to your production URL
  socialBanner: "/static/images/twitter-card.png",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const ROUTES_DIR = path.resolve(__dirname, "../src/routes");

/**
 * Recursively get all routes from the routes directory.
 * Tailored for TanStack Router file-based routing.
 */
function getRoutes(dir: string, base: string = ""): string[] {
  let routes: string[] = [];

  if (!fs.existsSync(dir)) return routes;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();

    if (isDir) {
      if (item.startsWith("(") && item.endsWith(")")) {
        // Route groups like (auth), (root) - skip adding to the URL path
        routes = routes.concat(getRoutes(fullPath, base));
      } else if (!item.startsWith("_")) {
        // Regular directory - add to the URL path
        routes = routes.concat(getRoutes(fullPath, \`\${base}/\${item}\`));
      }
    } else {
      const ext = path.extname(item);
      if (ext === ".tsx" || ext === ".ts") {
        const name = path.basename(item, ext);

        // Skip layout files (_layout.tsx), root (__root.tsx), or splat ($)
        if (name.startsWith("_") || name === "$") continue;

        if (name === "index") {
          // index.tsx maps to the current base path
          routes.push(base);
        } else {
          // about.tsx maps to /about if in root, or /parent/about if in a dir
          routes.push(\`\${base}/\${name}\`);
        }
      }
    }
  }
  return routes;
}

const urls = Array.from(new Set(getRoutes(ROUTES_DIR)));

function generateSitemap() {
  const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  \${urls
    .map((url) => {
      return \`
  <url>
    <loc>\${siteMetadata.siteUrl}\${url}</loc>
    <lastmod>\${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>\${url === "" ? "1.0" : "0.8"}</priority>
  </url>\`;
    })
    .join("")}
</urlset>\`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);
  console.log("✅ sitemap.xml generated in public/");
}

function generateRobots() {
  const robots = \`User-agent: *
Allow: /

Sitemap: \${siteMetadata.siteUrl}/sitemap.xml
Host: \${siteMetadata.siteUrl}\`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robots);
  console.log("✅ robots.txt generated in public/");
}

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

generateSitemap();
generateRobots();
`],
  ["frontend/react/tanstack-router/src/components/Common/ErrorState.tsx.hbs", `import { FC } from 'react'
import { Link } from '@tanstack/react-router'

import { ErrorMetadata, ErrorStateProps, ErrorTheme } from '@/interfaces/error'

const ErrorState: FC<ErrorStateProps> = ({ code, error }) => {
  const getErrorContent = (statusCode: number) => {
    const is5xx = statusCode >= 500

    const metadataMap: Record<number, ErrorMetadata> = {
      401: {
        titlePrefix: 'Sesi Anda',
        titleSuffix: 'Berakhir',
        description: 'Maaf, sesi Anda telah berakhir atau Anda belum login. Silakan login kembali untuk melanjutkan.',
        badge: 'Error 401: Unauthorized',
        theme: 'amber',
      },
      403: {
        titlePrefix: 'Akses',
        titleSuffix: 'Dibatasi',
        description: 'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator.',
        badge: 'Error 403: Forbidden',
        theme: 'amber',
      },
      404: {
        titlePrefix: 'Halaman Tidak',
        titleSuffix: 'Ditemukan',
        description: 'Waduh! Sepertinya route yang Anda cari tidak ada atau sudah pindah ke tempat lain.',
        badge: 'Error 404: Not Found',
        theme: 'rose',
      },
      500: {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Internal',
        description: 'Ups! Server kami sedang mengalami gangguan sejenak. Silakan coba lagi nanti.',
        badge: 'Error 500: Server Error',
        theme: 'amber',
      },
      503: {
        titlePrefix: 'Layanan Tidak',
        titleSuffix: 'Tersedia',
        description: 'Saat ini layanan sedang dalam pemeliharaan. Mohon tunggu beberapa saat lagi.',
        badge: 'Error 503: Service Unavailable',
        theme: 'emerald',
      },
    }

    const defaultContent: ErrorMetadata = is5xx
      ? {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Server',
        description: 'Server mengalami kendala yang tidak terduga. Mohon maaf atas ketidaknyamanan ini.',
        badge: \`Error \${statusCode}: Server Exception\`,
        theme: 'amber',
      }
      : {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Klien',
        description: 'Permintaan Anda tidak dapat diproses oleh sistem kami.',
        badge: \`Error \${statusCode}: Client Error\`,
        theme: 'rose',
      }

    const content = metadataMap[statusCode] ?? defaultContent

    const themes: Record<ErrorMetadata['theme'], ErrorTheme> = {
      amber: {
        badgeColor: 'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400',
        pingColor: 'bg-amber-400',
        dotColor: 'bg-amber-600 dark:bg-amber-500',
        gradient: 'from-amber-600 to-yellow-400 dark:from-amber-400 dark:to-yellow-400',
        glowStart: 'bg-amber-600/10',
        glowEnd: 'bg-yellow-600/10',
        terminalIcon: 'bg-amber-500/40',
        borderType: 'text-amber-600 dark:text-amber-400',
        errorColor: 'text-amber-600 dark:text-amber-400',
      },
      rose: {
        badgeColor: 'bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400',
        pingColor: 'bg-rose-400',
        dotColor: 'bg-rose-600 dark:bg-rose-500',
        gradient: 'from-rose-600 to-orange-400 dark:from-rose-400 dark:to-orange-400',
        glowStart: 'bg-rose-600/10',
        glowEnd: 'bg-orange-600/10',
        terminalIcon: 'bg-rose-500/40',
        borderType: 'text-rose-600 dark:text-rose-400',
        errorColor: 'text-rose-600 dark:text-rose-400',
      },
      emerald: {
        badgeColor: 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400',
        pingColor: 'bg-emerald-400',
        dotColor: 'bg-emerald-600 dark:bg-emerald-500',
        gradient: 'from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-400',
        glowStart: 'bg-emerald-600/10',
        glowEnd: 'bg-teal-600/10',
        terminalIcon: 'bg-emerald-500/40',
        borderType: 'text-emerald-600 dark:text-emerald-400',
        errorColor: 'text-emerald-600 dark:text-emerald-400',
      },
    }

    return { ...content, ...themes[content.theme] }
  }

  const meta = getErrorContent(code)

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className={\`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] \${meta.glowStart} blur-[120px] rounded-full\`} />
        <div className={\`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] \${meta.glowEnd} blur-[120px] rounded-full\`} />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className={\`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold shadow-sm \${meta.badgeColor}\`}>
              <span className="relative flex h-2 w-2">
                <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${meta.pingColor}\`}></span>
                <span className={\`relative inline-flex rounded-full h-2 w-2 \${meta.dotColor}\`}></span>
              </span>
              {meta.badge}
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              {meta.titlePrefix} <br />
              <span className={\`inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r \${meta.gradient}\`}>
                {meta.titleSuffix}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
              {meta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full animate-float">
            <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className={\`w-3.5 h-3.5 rounded-full \${meta.terminalIcon}\`} />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 font-medium">
                  bash — system-error-{code}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[350px]">
                <div className="space-y-2">
                  <p className="text-zinc-400">┌ checking system status...</p>
                  <p className="flex gap-3">
                    <span className={meta.borderType}>│</span>
                    <span className="text-zinc-800 dark:text-zinc-200">
                      ✖ Fatal Error: {meta.badge}
                    </span>
                  </p>
                  <p className="text-zinc-400">│</p>
                  <p className="flex gap-3">
                    <span className={meta.borderType}>│</span>
                    <span className="text-zinc-500">
                      [stacktrace]
                    </span>
                  </p>
                  {error ? (
                    <p className="flex gap-3 text-xs">
                      <span className={meta.borderType}>│</span>
                      <span className="text-rose-500 dark:text-rose-400">
                        Error: {error.name} - {error.message}
                      </span>
                    </p>
                  ) : (
                    <>
                      <p className="flex gap-3 text-xs">
                        <span className={meta.borderType}>│</span>
                        <span className="text-zinc-500">
                          at SystemHandler.resolve (internal/core.js:{code})
                        </span>
                      </p>
                      <p className="flex gap-3 text-xs">
                        <span className={meta.borderType}>│</span>
                        <span className="text-zinc-500">
                          at RequestPipeline.execute (internal/router.js:123)
                        </span>
                      </p>
                    </>
                  )}
                  <p className="text-zinc-400">│</p>
                  <p className="text-zinc-400 text-xs text-center">────────────────────────</p>
                  <p className={\`\${meta.errorColor} font-bold text-center\`}>
                    {' '}
                    ⚠️ ERROR_CODE: {code}
                  </p>
                  <p className="text-zinc-400 text-xs text-center">────────────────────────</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorState
`],
  ["frontend/react/tanstack-router/src/components/Common/ThemeToggle.tsx.hbs", `import { FC } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { useHasMounted } from '@/hooks/useHasMounted';

const ThemeToggle: FC = () => {
  const mounted = useHasMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="ml-3 h-6 w-6" /> // Placeholder to prevent layout shift
    );
  }

  const isDark = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="ml-3 focus:outline-none transition-transform hover:scale-110 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-zinc-900 hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400 transition-colors"
      >
        {isDark ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
`],
  ["frontend/react/tanstack-router/src/components/Mixins/Footer.tsx.hbs", `import { FC } from 'react';
import { Link } from '@tanstack/react-router';

import { InstagramIcon, LinkedInIcon, TwitterIcon, GitHubIcon } from '../Common/CustomIcons';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Project',
      links: [
        { name: 'Fitur', href: '#features' },
        { name: 'Cara Kerja', href: '#steps' },
        { name: 'Harga', href: '/pricing' },
        { name: 'Showcase', href: '/showcase' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Karir', href: '/career' },
        { name: 'Blog', href: '/blog' },
        { name: 'Kontak', href: '/contact' },
      ],
    },
    {
      title: 'Dukungan',
      links: [
        { name: 'Bantuan', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Keamanan', href: '/security' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Ketentuan', href: '/terms' },
        { name: 'Privasi', href: '/privacy' },
        { name: 'Lisensi', href: '/license' },
      ],
    },
  ];

  const socials = [
    { name: 'GitHub', icon: <GitHubIcon />, href: '#' },
    { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
    { name: 'Instagram', icon: <InstagramIcon />, href: '#' },
  ];

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 text-white font-bold text-2xl">
              📦️ BikinProject
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              CLI-based package starter generator yang dirancang untuk mempercepat workflow
              pengembangan aplikasi Anda dengan standar industri.
            </p>
            <div className="flex gap-4 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-zinc-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold text-white">Dapatkan Update Terbaru</h3>
              <p>Jadilah yang pertama tahu tentang fitur dan promo terbaru dari kami.</p>
              <form className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/10"
                >
                  Langganan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 py-16">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm tracking-wide">
          <p>© {year} BikinProject. Seluruh hak cipta dilindungi undang-undang.</p>
          {/* <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`],
  ["frontend/react/tanstack-router/src/components/Mixins/Navbar/constant/navLinks.ts", `export const navlinks = [
  { title: "Beranda", path: "/" },
  { title: "Fitur", path: "#features" },
  { title: "Cara Kerja", path: "#steps" },
  { title: "Tentang", path: "/about" },
  { title: "Kontak", path: "/contact" },
];
`],
  ["frontend/react/tanstack-router/src/components/Mixins/Navbar/index.tsx.hbs", `import { FC, useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

import { cn } from '@/lib/utils';
import { navlinks } from './constant/navLinks';
import ThemeToggle from '@/components/Common/ThemeToggle';
import useMobileResponsive from '@/hooks/useMobileResponsive';
import styles from './Navbar.module.css';

const Navbar: FC = () => {
  const isMobile = useMobileResponsive();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Navbar fixed position if scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full flex items-center z-[50] transition-all duration-300',
        (isScrolled || (isMobile && isOpen)) ? styles.navbarFixed : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-primary font-bold text-xl lg:text-2xl py-6 text-zinc-900 dark:text-white"
              aria-label="logo"
            >
              📦️ BikinProject
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={cn(
                'right-4 block absolute lg:hidden outline-none',
                isOpen && styles.hamburgerActive
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={\`\${styles.hamburgerLine} bg-black dark:bg-white origin-top-left transition duration-300 ease-in-out\`}
              ></span>
              <span
                className={\`\${styles.hamburgerLine} bg-black dark:bg-white transition duration-300 ease-in-out\`}
              ></span>
              <span
                className={\`\${styles.hamburgerLine} bg-black dark:bg-white origin-bottom-left transition duration-300 ease-in-out\`}
              ></span>
            </button>

            <nav
              id="navMenu"
              className={cn(
                'absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-[calc(100%+0.5rem)] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all duration-300',
                !isOpen && 'hidden',
                isMobile && 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg'
              )}
            >
              <ul className="block lg:flex lg:items-center">
                {navlinks?.map((a, i) => (
                  <li className="group" key={i}>
                    <Link
                      to={a.path}
                      className={cn(
                        styles.navLink,
                        'mx-8 lg:mx-4 flex'
                      )}
                      activeProps=\\{{ className: styles.navLinkActive }}
                      activeOptions=\\{{ exact: a.path === '/' }}
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
                <li className="ml-8 lg:ml-6 flex items-center gap-6 py-4 lg:py-0">
                  <Link
                    to="/login"
                    className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Daftar
                  </Link>
                </li>

                <li className="ml-8 lg:ml-4 flex items-center">
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
`],
  ["frontend/react/tanstack-router/src/components/Mixins/Navbar/Navbar.module.css.hbs", `.navbarFixed {
  @apply fixed z-[9999] bg-transparent dark:bg-zinc-900/80 shadow-md backdrop-blur-md;
}

.hamburgerLine {
  @apply w-[30px] h-[2px] my-2 block;
}

.hamburgerActive > span:nth-child(1) {
  @apply rotate-45;
}

.hamburgerActive > span:nth-child(2) {
  @apply scale-0;
}

.hamburgerActive > span:nth-child(3) {
  @apply -rotate-45;
}

.navLink {
  @apply relative py-2 text-zinc-600 dark:text-zinc-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400;
}

.navLink::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300;
}

.navLink:hover::after,
.navLinkActive::after {
  @apply w-full;
}

.navLinkActive {
  @apply text-blue-600 dark:text-blue-400;
}
`],
  ["frontend/react/tanstack-router/src/components/README.md", `# Arsitektur Komponen

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

### Common

Folder \`Common\` terletak pada \`/src/components/Common/\`. Folder ini berisi komponen-komponen atomik atau elemen UI dasar yang bersifat reusable dan independen.
Contoh: Tombol (\`Button\`), Input, Modal, Icon kustom, dll.

### Mixins

Folder \`Mixins\` terletak pada \`/src/components/Mixins/\`. Folder ini berisi komponen-komponen hasil gabungan atau komposisi dari beberapa komponen \`Common\` untuk membentuk fitur yang lebih kompleks.
Contoh: Navbar (gabungan dari Logo, Links, dan Theme Toggle), Footer, Sidebar, dll.

## Struktur Folder Lainnya

- **app/**: Berisi halaman (pages) dan layout utama menggunakan Next.js App Router.
- **hooks/**: Berisi custom logic React hooks yang dapat digunakan kembali di berbagai komponen.
- **lib/**: Berisi fungsi utilitas dan konfigurasi library pihak ketiga.
- **data/**: Berisi data statis, konstanta, dan metadata situs.
`],
  ["frontend/react/tanstack-router/src/hooks/useAxios.ts", `import https from "https";

import axios, { AxiosInstance } from "axios";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const createNewClient: () => AxiosInstance = () => {
  const BASE_API = import.meta.env.VITE_API_URL || "http://localhost:3000/api/";

  return axios.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
    },
    httpsAgent,
  });
};

export const client: AxiosInstance = createNewClient();

type HookType = (accessToken?: string) => AxiosInstance;

export const useAxios: HookType = (accessToken) => {
  client.interceptors.request.use((config) => {
    const newConfig = { ...config };

    if (accessToken) {
      newConfig.headers.Authorization = \`Bearer \${accessToken}\`;
    }

    return newConfig;
  });

  return client;
};

export const { isAxiosError } = axios;
`],
  ["frontend/react/tanstack-router/src/hooks/useClipboard.ts", `const useClipboard = () => {
  const copy = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      alert("Copied to clipboard!"); // replace this line with your toast notification
    } catch (err) {
      console.error(err);
      alert("Failed to copy to clipboard!"); // replace this line with your toast notification
    }
  };

  return { copy };
};

export default useClipboard;
`],
  ["frontend/react/tanstack-router/src/hooks/useDebounce.ts", `import { useEffect, useRef, useState, useCallback } from "react";

export const useDebounce = <T>(initialValue: T, delay = 300): [T, (value: T) => void] => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setDebouncedHandler = useCallback(
    (newValue: T) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setDebouncedValue(newValue);
      }, delay);
    },
    [delay],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return [debouncedValue, setDebouncedHandler];
};
`],
  ["frontend/react/tanstack-router/src/hooks/useHasMounted.ts", `import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useHasMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
`],
  ["frontend/react/tanstack-router/src/hooks/useMobileResponsive.ts", `import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapshot = (): boolean => {
  return window.innerWidth < 1024; // Tailwind 'lg' breakpoint
};

const getServerSnapshot = () => false;

/**
 * Hook to detect if the current screen size is mobile/tablet (below 'lg' breakpoint).
 * @returns boolean
 */
const useMobileResponsive = (): boolean => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMobileResponsive;
`],
  ["frontend/react/tanstack-router/src/hooks/useScreenSize.ts", `import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapshot = (): string | undefined => {
  const width = window.innerWidth;

  if (width <= 374) {
    return "Mobile XS";
  } else if (width >= 375 && width <= 424) {
    return "Mobile M";
  } else if (width >= 425 && width <= 767) {
    return "Mobile L";
  } else if (width >= 768 && width <= 1023) {
    return "Tablet";
  } else if (width >= 1024 && width <= 1439) {
    return "Laptop";
  } else if (width >= 1440 && width <= 2559) {
    return "Laptop LG";
  } else if (width >= 2560) {
    return "Laptop XL";
  }

  return undefined;
};

const getServerSnapshot = () => undefined;

const useScreenSize = (): string | undefined => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useScreenSize;
`],
  ["frontend/react/tanstack-router/src/hooks/useSort.ts", `import { useState } from "react";

import { SortDirection, SortHookReturn } from "@/interfaces/hooks/useSort";

function useSort(): SortHookReturn {
  const [direction, setDirection] = useState<SortDirection>({ field: "", direction: "" });
  const [sortBy, setSortBy] = useState<string>("");

  const handleSort = (field: string): void => {
    if (!field) return;

    let newDirection = "";

    if (direction.field !== field || direction.direction === "") {
      newDirection = "asc";
    } else if (direction.direction === "asc") {
      newDirection = "desc";
    } else if (direction.direction === "desc") {
      newDirection = "";
    }

    setDirection({ field, direction: newDirection });
    const sortParam = newDirection === "asc" ? field : \`-\${field}\`;

    if (newDirection === "") {
      deleteSort();
    } else {
      handleChangeSort(sortParam);
    }
  };

  const deleteSort = (): void => {
    setSortBy("");
  };

  const handleChangeSort = (field: string): void => {
    setSortBy(field);
  };

  return {
    sortBy: sortBy,
    direction,
    handleSort,
  };
}

export default useSort;
`],
  ["frontend/react/tanstack-router/src/index.css.hbs", `@tailwind base;
@tailwind components;
@tailwind utilities;
{{#if (includes examples "ai")}}
@source "../node_modules/streamdown/dist/*.js";
{{/if}}

html {
  scroll-behavior: smooth;
}

`],
  ["frontend/react/tanstack-router/src/interfaces/error.ts", `export interface ErrorStateProps {
  code: number;
  error?: Error;
}

export interface ErrorMetadata {
  titlePrefix: string;
  titleSuffix: string;
  description: string;
  badge: string;
  theme: "rose" | "amber" | "emerald";
}

export interface ErrorTheme {
  badgeColor: string;
  pingColor: string;
  dotColor: string;
  gradient: string;
  glowStart: string;
  glowEnd: string;
  terminalIcon: string;
  borderType: string;
  errorColor: string;
}
`],
  ["frontend/react/tanstack-router/src/interfaces/hooks/useSort.ts", `export interface SortHookReturn {
  sortBy: string;
  direction: SortDirection;
  handleSort: (field: string) => void;
}

export interface SortDirection {
  field: string;
  direction: string;
}
`],
  ["frontend/react/tanstack-router/src/interfaces/providers/ThemeProvider.ts", `export type Theme = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}
`],
  ["frontend/react/tanstack-router/src/interfaces/seo.ts", `export interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;

  [key: string]: string | number | boolean | undefined;
}
`],
  ["frontend/react/tanstack-router/src/main.tsx.hbs", `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";

import { ThemeProvider } from "./providers/ThemeProvider";

{{#if (eq api "orpc")}}
  import { QueryClientProvider } from "@tanstack/react-query";
  import { orpc, queryClient } from "./utils/orpc";
{{/if}}
{{#if (eq api "trpc")}}
  import { QueryClientProvider } from "@tanstack/react-query";
  import { queryClient, trpc } from "./utils/trpc";
{{/if}}
{{#if (eq backend "convex")}}
  import { ConvexReactClient } from "convex/react";
  import { env } from "@{{projectName}}/env/web";
  {{#if (eq auth "clerk")}}
  import { ClerkProvider, useAuth } from "@clerk/clerk-react";
  import { ConvexProviderWithClerk } from "convex/react-clerk";
  {{else if (eq auth "better-auth")}}
  import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
  import { authClient } from "@/lib/auth-client";
  {{else}}
  import { ConvexProvider } from "convex/react";
  {{/if}}
  const convex = new ConvexReactClient(env.VITE_CONVEX_URL);
{{/if}}

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  {{#if (eq api "orpc")}}
  context: { orpc, queryClient },
  Wrap: function WrapComponent({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  },
  {{else if (eq api "trpc")}}
  context: { trpc, queryClient },
  Wrap: function WrapComponent({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  },
  {{else if (eq backend "convex")}}
  context: {},
  Wrap: function WrapComponent({ children }: { children: React.ReactNode }) {
    {{#if (eq auth "clerk")}}
    return (
      <ClerkProvider
        publishableKey={env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    );
    {{else if (eq auth "better-auth")}}
    return <ConvexBetterAuthProvider client={convex} authClient={authClient}>{children}</ConvexBetterAuthProvider>;
    {{else}}
    return <ConvexProvider client={convex}>{children}</ConvexProvider>;
    {{/if}}
  },
  {{else}}
  context: {},
  {{/if}}
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="theme-preference">
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>,
  );
}
`],
  ["frontend/react/tanstack-router/src/providers/ThemeProvider.tsx.hbs", `import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useSyncExternalStore,
  useCallback,
} from 'react';

import { Theme, ThemeContextType } from '@/interfaces/providers/ThemeProvider';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'theme-preference',
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      window.addEventListener('storage', callback);
      return () => window.removeEventListener('storage', callback);
    },
    []
  );

  const getSnapshot = useCallback(() => {
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  }, [storageKey, defaultTheme]);

  const getServerSnapshot = useCallback(() => {
    return defaultTheme;
  }, [defaultTheme]);

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  const setTheme = useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      // Dispatch a storage event so useSyncExternalStore updates in the same tab
      window.dispatchEvent(new Event('storage'));
    },
    [storageKey]
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (t: Theme) => {
      let resolved: 'light' | 'dark';

      if (t === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      } else {
        resolved = t as 'light' | 'dark';
      }

      root.classList.remove('light', 'dark');
      root.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme('system');
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value=\\{{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
`],
  ["frontend/react/tanstack-router/src/routes/__root.tsx.hbs", `{{#if (eq api "orpc")}}
import { link, orpc } from "@/utils/orpc";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import type { AppRouterClient } from "@{{projectName}}/api/routers/index";
import { createORPCClient } from "@orpc/client";
{{/if}}
{{#if (eq api "trpc")}}
import type { trpc } from "@/utils/trpc";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
{{/if}}
/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { siteMetadata } from '@/data/siteMetadata'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Navbar from '@/components/Mixins/Navbar'
import Footer from '@/components/Mixins/Footer'
import ScrollToTop from '@/components/Common/ScrollToTop'
import ErrorState from '@/components/Common/ErrorState'
import '../index.css'

{{#if (eq api "orpc")}}
export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}
{{else if (eq api "trpc")}}
export interface RouterAppContext {
  trpc: typeof trpc;
  queryClient: QueryClient;
}
{{else}}
export interface RouterAppContext {}
{{/if}}

export const Route = createRootRouteWithContext<RouterAppContext>()({
   errorComponent: (props: { error: Error }) => {
    const error = props.error as unknown as Record<string, unknown>
    const statusCode =
      typeof error.status === 'number'
        ? error.status
        : typeof error.statusCode === 'number'
          ? error.statusCode
          : 500
    return <ErrorState code={statusCode} error={props.error} />
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteMetadata.title,
      },
      {
        name: 'description',
        content: siteMetadata.description,
      },
      {
        name: 'author',
        content: siteMetadata.author,
      },
      {
        name: 'keywords',
        content:
          'tanstack, react, start, template, frontend, seo, sitemap, naufal akbar nugroho',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteMetadata.siteUrl,
      },
      {
        property: 'og:title',
        content: siteMetadata.title,
      },
      {
        property: 'og:description',
        content: siteMetadata.description,
      },
      {
        property: 'og:image',
        content: \`\${siteMetadata.siteUrl}\${siteMetadata.socialBanner}\`,
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: siteMetadata.siteUrl,
      },
      {
        name: 'twitter:title',
        content: siteMetadata.title,
      },
      {
        name: 'twitter:description',
        content: siteMetadata.description,
      },
      {
        name: 'twitter:image',
        content: \`\${siteMetadata.siteUrl}\${siteMetadata.socialBanner}\`,
      },
      {
        name: 'twitter:creator',
        content: siteMetadata.x,
      },
    ],
    links: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'canonical',
        href: siteMetadata.siteUrl,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  {{#if (eq api "orpc")}}
  const [client] = useState<AppRouterClient>(() => createORPCClient(link));
  const [orpcUtils] = useState(() => createTanstackQueryUtils(client));
  {{/if}}

  return (
    <ThemeProvider>
      <RootDocument>
        <Outlet />
        <TanStackRouterDevtools initialIsOpen={false} />
        {{#if (or (eq api "orpc") (eq api "trpc"))}}
        <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
        {{/if}}
      </RootDocument>
    </ThemeProvider>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <HeadContent />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <ScrollToTop />
      <Footer />
      <Scripts />
    </>
  )
}
`],
  ["frontend/react/tanstack-router/src/routes/(auth)/login/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { GitHubIcon } from '@/components/Common/CustomIcons'

const Login: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <span className="font-mono font-bold text-zinc-900 dark:text-white">auth --login</span>
          </div>
          <div className="flex gap-1.5 opacity-30">
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Selamat Datang</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Masuk untuk mengelola project Anda.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Masuk Ke Sistem
            </button>

            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span className="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Atau
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white">
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p className="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Belum punya akun?{' '}
            <Link
              to="/register"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(auth)/login/')({
  component: Login,
})`],
  ["frontend/react/tanstack-router/src/routes/(auth)/register/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { GitHubIcon } from '@/components/Common/CustomIcons'

const Register: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <span className="font-mono font-bold text-zinc-900 dark:text-white">
              auth --register
            </span>
          </div>
          <div className="flex gap-1.5 opacity-30">
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Buat Akun Baru</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Bergabung dengan komunitas BikinProject.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Daftar Sekarang
            </button>

            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span className="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Atau
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white">
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p className="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Sudah punya akun?{' '}
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Masuk Saja
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(auth)/register/')({
  component: Register,
})
`],
  ["frontend/react/tanstack-router/src/routes/(root)/_components/Features.tsx.hbs", `import { FC } from 'react';

const features = [
  {
    title: 'Zero Config',
    description:
      'Lupakan setup yang rumit. Mulai project Anda dalam hitungan detik dengan konfigurasi yang sudah dioptimalkan.',
    icon: '⚙️',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Interactive CLI',
    description:
      'Antarmuka baris perintah yang interaktif dan intuitif, memudahkan Anda memilih opsi project.',
    icon: '💻',
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'Multi-framework',
    description:
      'Mendukung berbagai framework populer seperti Next.js, React, Laravel, dan akan terus bertambah.',
    icon: '📚',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  {
    title: 'Standardisasi Kode',
    description:
      'Setiap project dihasilkan dengan struktur folder dan standar kode terbaik yang konsisten.',
    icon: '🛠️',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Developer Experience',
    description:
      'Dibuat dengan fokus utama pada kenyamanan developer untuk produktivitas maksimal.',
    icon: '✨',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Open Source',
    description:
      'Didukung oleh komunitas dan bebas untuk dikustomisasi sesuai kebutuhan spesifik Anda.',
    icon: '🌐',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
];

const Features: FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white">
            Fitur Unggulan Kami
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
            Segala yang Anda butuhkan untuk membangun project modern dalam satu platform yang
            terintegrasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div
                className={\`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 \${feature.color} border border-transparent group-hover:border-current transition-all duration-300 group-hover:scale-110 shadow-sm\`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
`],
  ["frontend/react/tanstack-router/src/routes/(root)/_components/Hero.tsx.hbs", `import { FC } from 'react';
import { Link } from '@tanstack/react-router';

const Hero: FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
              </span>
              CLI-Based Project Generator
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              Bikin Project Jadi <br />
              <span className="inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-400 dark:from-blue-400 dark:to-cyan-400">
                Lebih Sat-Set & Terstruktur
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
              Generator starter project yang didesain untuk kenyamanan developer. Lupakan setup
              manual, cukup satu perintah dan project Anda siap tempur.
            </p>

            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 font-mono text-sm md:text-base flex items-center justify-between group">
              <span className="text-zinc-800 dark:text-zinc-200">
                <span className="text-blue-600 dark:text-blue-400">$</span> npx bikinproject@latest
              </span>
              <button
                onClick={() => navigator.clipboard.writeText('npx bikinproject@latest')}
                className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-blue-600"
                title="Copy to clipboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Coba Sekarang
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                Lihat Fitur
              </a>
            </div>
          </div>

          {/* Right Side: Terminal Mock-up */}
          <div className="lg:w-1/2 w-full animate-float">
            <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 font-medium">
                  bash — create-bikinproject-app
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[400px]">
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
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold underline">
                      ./your-project
                    </span>
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
                  <div className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-zinc-500">○ React.js (Tailwind + JavaScript)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-zinc-500">○ Laravel Breeze API w/ Next.js</span>
                  </div>
                  <p className="text-zinc-400">│</p>
                  <p className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ⏳ Creating project...
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ✅ Project created successfully!
                    </span>
                  </p>
                  <p className="text-zinc-400">│</p>
                  <p className="text-zinc-400 text-xs">────────────────────────╮</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">
                    {' '}
                    🎉 Project ready to use!
                  </p>
                  <p className="text-zinc-400 text-xs">────────────────────────╯</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
`],
  ["frontend/react/tanstack-router/src/routes/(root)/_components/Steps.tsx.hbs", `import { FC } from 'react';

const steps = [
  {
    number: '01',
    title: 'Jalankan Command',
    description:
      'Buka terminal favorit Anda dan jalankan "npx bikinproject@latest". Tidak perlu instalasi global yang memberatkan sistem.',
  },
  {
    number: '02',
    title: 'Pilih Konfigurasi',
    description:
      'Pilih framework (Next.js, React, Laravel), bahasa (TS/JS), dan CSS framework melalui antarmuka CLI yang interaktif.',
  },
  {
    number: '03',
    title: 'Project Siap!',
    description:
      'BikinProject akan men-generate starter project lengkap dengan best practices, siap untuk Anda kembangkan lebih lanjut.',
  },
];

const Steps: FC = () => {
  return (
    <section id="steps" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight">
              Langkah Sederhana <br /> Untuk Project Terpercaya
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
              Kami menyederhanakan proses kompleks menjadi langkah-langkah yang mudah dipahami,
              memastikan Anda selalu terlibat dalam setiap progres.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-zinc-500/10">
                Mulai Konsultasi
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-3xl border-2 border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 group"
              >
                <div className="text-4xl font-black text-blue-600/20 dark:text-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300 shrink-0">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{step.title}</h3>
                  <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
`],
  ["frontend/react/tanstack-router/src/routes/(root)/about/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { siteMetadata } from '@/data/siteMetadata'

const About: FC = () => {
  return (
    <section className="flex items-center justify-center mx-auto min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="h-64 md:h-[700px] relative group bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-3xl shadow-2xl border-2 border-zinc-100 dark:border-zinc-800 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Laptop"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
              </div>

              <div className="md:pt-8 space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight">
                  Tentang <span className="text-blue-600 dark:text-blue-500">BikinProject.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium">
                  <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-1 px-3 rounded-xl font-mono font-bold border border-blue-100 dark:border-blue-800/50">
                    BikinProject
                  </span>{' '}
                  adalah sebuah CLI-based starter project generator yang dirancang untuk mempercepat
                  proses inisialisasi aplikasi dengan standar industri. Proyek ini mendukung
                  berbagai framework populer seperti Next.js, React, dan Laravel.
                </p>

                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium">
                  Dibuatnya BikinProject berawal dari kebutuhan{' '}
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold underline decoration-blue-500/30 underline-offset-4 transition duration-200"
                  >
                    Saya
                  </a>{' '}
                  akan standarisasi struktur proyek saat memulai development baru. Alih-alih
                  melakukan setup manual yang repetitif, BikinProject mengotomatisasi segalanya
                  mulai dari pemilihan bahasa, styling framework, hingga struktur folder terbaik.
                </p>

                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium">
                    Hanya dengan satu perintah di terminal, Anda bisa langsung fokus membangun fitur
                    tanpa pusing dengan boilerplate:
                  </p>
                  <div className="p-5 bg-zinc-950 rounded-2xl font-mono text-sm md:text-base text-emerald-400 border border-zinc-800 shadow-xl group transition-all duration-300 hover:border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-600">$</span>
                      <span className="group-hover:text-emerald-300 transition-colors">npx bikinproject@latest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(root)/about/')({
  head: () => ({
    meta: [
      {
        title: \`Tentang Kami | \${siteMetadata.title}\`,
      },
      {
        name: 'description',
        content: \`Pelajari lebih lanjut tentang \${siteMetadata.title} dan bagaimana kami membantu proses development Anda.\`,
      },
    ],
  }),
  component: About,
})`],
  ["frontend/react/tanstack-router/src/routes/(root)/contact/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { siteMetadata } from '@/data/siteMetadata'

const Contact: FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <section className="body-font">
              <div className="container mx-auto flex items-center justify-center flex-col">
                <div className="relative group lg:w-2/6 md:w-3/6 w-5/6 mb-10 overflow-hidden rounded-3xl shadow-2xl border-2 border-zinc-100 dark:border-zinc-800 transition-all duration-300">
                  <img
                    src="https://avatars.githubusercontent.com/u/83068205?v=4"
                    loading="lazy"
                    alt="hero"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                </div>

                <div className="text-center lg:w-2/3 w-full space-y-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight">
                    Naufal Akbar Nugroho
                  </h1>

                  <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                    Fullstack Web Developer | Undergraduate Information Systems Student
                  </h2>

                  <p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                    Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi
                    bagi semua orang!
                  </p>

                  <div className="flex justify-center gap-4 pt-6">
                    <a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-white bg-blue-600 hover:bg-blue-700 border-0 py-3 px-8 focus:outline-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      GitHub Saya
                    </a>

                    <a
                      href={\`mailto:\${siteMetadata.email}\`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 py-3 px-8 focus:outline-none hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Hubungi Saya
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(root)/contact/')({
  head: () => ({
    meta: [
      {
        title: \`Kontak | \${siteMetadata.title}\`,
      },
      {
        name: 'description',
        content: \`Hubungi kami untuk kolaborasi atau pertanyaan terkait \${siteMetadata.title}.\`,
      },
    ],
  }),
  component: Contact,
})
`],
  ["frontend/react/tanstack-router/src/routes/(root)/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { siteMetadata } from '@/data/siteMetadata'

{{#if (eq backend "convex")}}
import { convexQuery } from "@convex-dev/react-query";
import { useQuery } from "@tanstack/react-query";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
{{else if (or (eq api "trpc") (eq api "orpc"))}}
import { useQuery } from "@tanstack/react-query";
  {{#if (eq api "trpc")}}
import { useTRPC } from "@/utils/trpc";
  {{/if}}
  {{#if (eq api "orpc")}}
import { orpc } from "@/utils/orpc";
  {{/if}}
{{/if}}

import Hero from './_components/Hero'
import Features from './_components/Features'
import Steps from './_components/Steps'

const Home: FC = () => {
  {{#if (eq backend "convex")}}
  const healthCheck = useQuery(convexQuery(api.healthCheck.get, {}));
  {{else if (eq api "trpc")}}
  const trpc = useTRPC();
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());
  {{else if (eq api "orpc")}}
  const healthCheck = useQuery(orpc.healthCheck.queryOptions());
  {{/if}}

  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Steps />

      {{#unless (eq api "none")}}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t-2 border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="p-8 bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-500/5 group hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center justify-between gap-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-extrabold text-zinc-950 dark:text-white">API Connection</h2>
                  <p className="text-zinc-700 dark:text-zinc-400 font-medium">Monitoring status sistem secara real-time.</p>
                </div>
                
                {{#if (eq backend "convex")}}
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800">
                  <span className="relative flex h-3 w-3">
                    <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${healthCheck.data === "OK" ? "bg-emerald-400" : healthCheck.isLoading ? "bg-amber-400" : "bg-rose-400"}\`}></span>
                    <span className={\`relative inline-flex rounded-full h-3 w-3 \${healthCheck.data === "OK" ? "bg-emerald-500" : healthCheck.isLoading ? "bg-amber-500" : "bg-rose-500"}\`}></span>
                  </span>
                  <span className="font-bold text-sm tracking-tight text-zinc-800 dark:text-zinc-200">
                    {healthCheck.isLoading
                      ? "CHECKING"
                      : healthCheck.data === "OK"
                        ? "CONNECTED"
                        : "OFFLINE"}
                  </span>
                </div>
                {{else}}
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800">
                  <span className="relative flex h-3 w-3">
                    <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${healthCheck.data ? "bg-emerald-400" : healthCheck.isLoading ? "bg-amber-400" : "bg-rose-400"}\`}></span>
                    <span className={\`relative inline-flex rounded-full h-3 w-3 \${healthCheck.data ? "bg-emerald-500" : healthCheck.isLoading ? "bg-amber-500" : "bg-rose-500"}\`}></span>
                  </span>
                  <span className="font-bold text-sm tracking-tight text-zinc-800 dark:text-zinc-200">
                    {healthCheck.isLoading
                      ? "CHECKING"
                      : healthCheck.data
                        ? "CONNECTED"
                        : "OFFLINE"}
                  </span>
                </div>
                {{/if}}
              </div>
            </div>
          </div>
        </div>
      </section>
      {{/unless}}
    </div>
  )
}

export const Route = createFileRoute('/(root)/')({
  head: () => ({
    meta: [
      {
        title: \`Beranda | \${siteMetadata.title}\`,
      },
    ],
  }),
  component: Home,
})`],
  ["frontend/react/tanstack-router/src/routes/$.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { siteMetadata } from '@/data/siteMetadata'
import ErrorState from '@/components/Common/ErrorState'

const NotFound: FC = () => {
  return <ErrorState code={404} />
}

export const Route = createFileRoute('/$')({
  head: () => ({
    meta: [
      {
        title: \`404 | \${siteMetadata.title}\`,
      },
    ],
  }),
  component: NotFound,
})
`],
  ["frontend/react/tanstack-router/src/routeTree.gen.ts", `/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.
`],
  ["frontend/react/tanstack-router/tailwind.config.ts.hbs", `import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
	],
	theme: {
		fontFamily: {
			sans: [
				'Plus Jakarta Sans',
				'system-ui',
				'-apple-system',
				'sans-serif'
			]
		},
		extend: ({
			boxShadow: {
				md: '0px 2px 4px -1px rgba(175, 182, 201, 0.2);',
				lg: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
				'dark-md': 'rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.02) 0px 12px 24px -4px',
				sm: '0 6px 24.2px -10px rgba(41, 52, 61, .22)',
				'btn-shadow': 'box-shadow: rgba(0, 0, 0, .05) 0 9px 17.5px',
				tw: 'rgba(175, 182, 201, 0.2) 0px 2px 4px -1px',
				btnshdw: '0 17px 20px -8px rgba(77, 91, 236, .231372549)',
				elevation1: '0px 12px 30px -2px rgba(58,75,116,0.14);',
				elevation2: '0px 24px 24px -12px rgba(0,0,0,0.05);',
				elevation3: '0px 24px 24px -12px rgba(99,91,255,0.15);',
				elevation4: '0px 12px 12px -6px rgba(0,0,0,0.15);'
			},
			borderRadius: {
				sm: "6px",
				md: "9px",
				lg: "24px",
				tw: "12px",
				bb: "20px",
			},
			container: {
				center: true,
				padding: '20px'
			},
			letterSpacing: {
				tightest: '-.075em',
				tighter: '-.05em',
				tight: '-.025em',
				normal: '0',
				wide: '.025em',
				wider: '.05em',
				widest: '1.5px',
				'-2': '-0.02em',
				'6': '0.06em'
			},
			gap: {
				'30': '30px'
			},
			padding: {
				'30': '30px'
			},
			margin: {
				'30': '30px'
			},
			fontSize: {
				'15': '15px',
				'17': '17px',
				'13': '13px',
				'22': '22px',
				'28': '28px',
				'34': '34px',
				'40': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
				'44': '44px',
				'50': '50px',
				'56': ['56px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
				'64': '64px',
				// Hero/Title Text
				'hero-h1': ['56px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h2': ['48px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h3': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h4': ['32px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h5': ['24px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h6': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				// Heading Text
				'heading-h1': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h2': ['32px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h3': ['24px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h4': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h5': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h6': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				// Body Text
				'body-xl': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-xl-regular': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-l': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-l-regular': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-m': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-m-regular': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-s': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-s-regular': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-xs': ['12px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-xs-regular': ['12px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				// Caption Text
				'caption-l': ['14px', { lineHeight: '120%', letterSpacing: '0.06em', fontWeight: '500' }],
				'caption-s': ['12px', { lineHeight: '120%', letterSpacing: '0.06em', fontWeight: '500' }],
			},
			colors: {
				black: '#2A3547',
				cyan: {
					'500': 'var(--color-primary)',
					'600': 'var(--color-primary)',
					'700': 'var(--color-primary)'
				},
				primary: ({ opacityValue, opacityVariable }: { opacityValue?: string; opacityVariable?: string }) => {
					if (opacityValue !== undefined) {
						return \`rgba(var(--color-primary-rgb), \${opacityValue})\`;
					}
					if (opacityVariable !== undefined) {
						return \`rgba(var(--color-primary-rgb), var(\${opacityVariable}, 1))\`;
					}
					return \`rgb(var(--color-primary-rgb))\`;
				},
				secondary: 'var(--color-secondary)',
				info: 'var(--color-info)',
				success: 'var(--color-success)',
				warning: 'var(--color-warning)',
				// error: 'var(--color-error)',
				error: ({ opacityValue, opacityVariable }: { opacityValue?: string; opacityVariable?: string }) => {
					if (opacityValue !== undefined) {
						return \`rgba(var(--color-error-rgb), \${opacityValue})\`;
					}
					if (opacityVariable !== undefined) {
						return \`rgba(var(--color-error-rgb), var(\${opacityVariable}, 1))\`;
					}
					return \`rgb(var(--color-error-rgb))\`;
				},
				lightprimary: 'var(--color-lightprimary)',
				lightsecondary: 'var(--color-lightsecondary)',
				lightsuccess: 'var( --color-lightsuccess)',
				lighterror: 'var(--color-lighterror)',
				lightinfo: 'var(--color-lightinfo)',
				lightwarning: 'var(--color-lightwarning)',
				border: 'var(--color-border)',
				bordergray: 'var(--color-bordergray)',
				lightgray: 'var( --color-lightgray)',
				muted: 'var(--color-muted)',
				lighthover: 'var(--color-lighthover)',
				surface: 'var(--color-surface-ld)',
				sky: 'var(--color-sky)',
				bodytext: 'var(--color-bodytext)',
				dark: 'var(--color-dark)',
				link: 'var(--color-link)',
				darklink: 'var(--color-darklink)',
				darkborder: 'var(--color-darkborder)',
				darkgray: 'var(--color-darkgray)',
				primaryemphasis: 'var(--color-primary-emphasis)',
				secondaryemphasis: 'var(--color-secondary-emphasis)',
				warningemphasis: 'var(--color-warning-emphasis)',
				erroremphasis: 'var(--color-error-emphasis)',
				successemphasis: 'var(--color-success-emphasis)',
				infoemphasis: 'var(--color-info-emphasis)',
				darkmuted: 'var( --color-darkmuted)'
			}
		} as any)
	},
	plugins: [
		require("tailwindcss-animate")
	],
};
export default config;
`],
  ["frontend/react/tanstack-router/tsconfig.app.json.hbs", `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./src/components/*"],
      "@/data/*": ["./src/data/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/interfaces/*": ["./src/interfaces/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/providers/*": ["./src/providers/*"],
      "src/*": ["src/*"]
    },
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "types": ["node"]
  },
  "include": ["src"]
}
`],
  ["frontend/react/tanstack-router/tsconfig.json.hbs", `{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
`],
  ["frontend/react/tanstack-router/tsconfig.node.json.hbs", `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./src/components/*"],
      "@/data/*": ["./src/data/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/interfaces/*": ["./src/interfaces/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/providers/*": ["./src/providers/*"],
      "src/*": ["src/*"]
    },
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "types": ["node"]
  },
  "include": ["vite.config.ts"]
}
`],
  ["frontend/react/tanstack-router/vite.config.ts.hbs", `import svgr from '@svgr/rollup'
import { tanstackRouter } from '@tanstack/router-vite-plugin'
import fs from 'fs/promises'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@/api': resolve(__dirname, 'src/api'),
      '@/features': resolve(__dirname, 'src/features'),
      '@/shared': resolve(__dirname, 'src/shared'),
      src: resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    loader: 'tsx',
    // include: /src\\/.*\\.tsx?$/,
    // exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-tsx',
          setup(build) {
            build.onLoad(
              { filter: /src\\\\.*\\.js$/ },
              async (args) => ({
                loader: 'tsx',
                contents: await fs.readFile(args.path, 'utf8'),
              })
            );
          },
        },
      ],
    },
  },
  plugins: [
    svgr(),
    tsConfigPaths(),
    tanstackRouter(),
    react()
  ],
})
`],
  ["frontend/react/tanstack-start/.eslintrc.cjs", `module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
`],
  ["frontend/react/tanstack-start/.prettierrc", `{
  "bracketSpacing": true,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "useTabs": false
}
`],
  ["frontend/react/tanstack-start/eslint.config.js", `import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["*.config.{ts,js}", "vite.config.ts", "tailwind.config.ts"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    ignores: ["dist", "eslint.config.js"],
  },
];
`],
  ["frontend/react/tanstack-start/package.json.hbs", `{
  "name": "web",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@base-ui/react": "^1.0.0",
    "@svgr/rollup": "^8.1.0",
    "@tailwindcss/vite": "^4.1.8",
    "@tanstack/react-query": "^5.90.21",
    "@tanstack/react-query-devtools": "^5.91.3",
    "@tanstack/react-router": "^1.163.3",
    "@tanstack/react-router-devtools": "^1.163.3",
    "@tanstack/react-start": "^1.166.1",
    "@tanstack/router-plugin": "^1.141.1",
    "axios": "^1.13.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.576.0",
    "moment": "^2.30.1",
    "next-themes": "^0.4.6",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-spinners": "^0.17.0",
    "shadcn": "^3.6.2",
    "smoothscroll-polyfill": "^0.4.4",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.5.0",
    "tw-animate-css": "^1.2.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.4",
    "@eslint/js": "^10.0.1",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/react": "^16.2.0",
    "@types/node": "^25.3.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@types/smoothscroll-polyfill": "^0.3.4",
    "@typescript-eslint/eslint-plugin": "^8.56.1",
    "@typescript-eslint/parser": "^8.56.1",
    "@vitejs/plugin-react": "^5.1.4",
    "autoprefixer": "^10.4.27",
    "eslint": "^10.0.2",
    "eslint-config-next": "^16.1.6",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.5",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.4.0",
    "jsdom": "^26.0.0",
    "postcss": "^8.5.6",
    "prettier": "^3.8.1",
    "tailwindcss": "^3.4.1",
    "tailwindcss-animate": "^1.0.7",
    "tsx": "^4.21.0",
    "typescript": "^5.9.3",
    "vite": "^7.3.1",
    "vite-tsconfig-paths": "^6.1.1",
    "web-vitals": "^5.0.3"
  }
}
`],
  ["frontend/react/tanstack-start/postcss.config.js.hbs", `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`],
  ["frontend/react/tanstack-start/public/robots.txt", `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
`],
  ["frontend/react/tanstack-start/public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/login</loc>
    <lastmod>2026-03-04T16:16:35.163Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/register</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/about</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/contact</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject</loc>
    <lastmod>2026-03-04T16:16:35.164Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`],
  ["frontend/react/tanstack-start/scripts/generate-seo.ts", `import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// We'll mimic the siteMetadata here to avoid complex TS import issues in a standalone script
// If the user changes siteMetadata, they should update it here or we can try to import it if tsx/ts-node setup allows
const siteMetadata = {
  title: "BikinProject React Template by Naufal Akbar Nugroho",
  siteUrl: "https://nuflakbrr.github.io/bikinproject", // Change this to your production URL
  socialBanner: "/static/images/twitter-card.png",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const ROUTES_DIR = path.resolve(__dirname, "../src/routes");

/**
 * Recursively get all routes from the routes directory.
 * Tailored for TanStack Router file-based routing.
 */
function getRoutes(dir: string, base: string = ""): string[] {
  let routes: string[] = [];

  if (!fs.existsSync(dir)) return routes;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();

    if (isDir) {
      if (item.startsWith("(") && item.endsWith(")")) {
        // Route groups like (auth), (root) - skip adding to the URL path
        routes = routes.concat(getRoutes(fullPath, base));
      } else if (!item.startsWith("_")) {
        // Regular directory - add to the URL path
        routes = routes.concat(getRoutes(fullPath, \`\${base}/\${item}\`));
      }
    } else {
      const ext = path.extname(item);
      if (ext === ".tsx" || ext === ".ts") {
        const name = path.basename(item, ext);

        // Skip layout files (_layout.tsx), root (__root.tsx), or splat ($)
        if (name.startsWith("_") || name === "$") continue;

        if (name === "index") {
          // index.tsx maps to the current base path
          routes.push(base);
        } else {
          // about.tsx maps to /about if in root, or /parent/about if in a dir
          routes.push(\`\${base}/\${name}\`);
        }
      }
    }
  }
  return routes;
}

const urls = Array.from(new Set(getRoutes(ROUTES_DIR)));

function generateSitemap() {
  const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  \${urls
    .map((url) => {
      return \`
  <url>
    <loc>\${siteMetadata.siteUrl}\${url}</loc>
    <lastmod>\${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>\${url === "" ? "1.0" : "0.8"}</priority>
  </url>\`;
    })
    .join("")}
</urlset>\`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);
  console.log("✅ sitemap.xml generated in public/");
}

function generateRobots() {
  const robots = \`User-agent: *
Allow: /

Sitemap: \${siteMetadata.siteUrl}/sitemap.xml
Host: \${siteMetadata.siteUrl}\`;

  fs.writeFileSync(path.join(PUBLIC_DIR, "robots.txt"), robots);
  console.log("✅ robots.txt generated in public/");
}

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

generateSitemap();
generateRobots();
`],
  ["frontend/react/tanstack-start/src/components/Common/ErrorState.tsx.hbs", `import { FC } from 'react'
import { Link } from '@tanstack/react-router'

import { ErrorMetadata, ErrorStateProps, ErrorTheme } from '@/interfaces/error'

const ErrorState: FC<ErrorStateProps> = ({ code, error }) => {
  const getErrorContent = (statusCode: number) => {
    const is5xx = statusCode >= 500

    const metadataMap: Record<number, ErrorMetadata> = {
      401: {
        titlePrefix: 'Sesi Anda',
        titleSuffix: 'Berakhir',
        description: 'Maaf, sesi Anda telah berakhir atau Anda belum login. Silakan login kembali untuk melanjutkan.',
        badge: 'Error 401: Unauthorized',
        theme: 'amber',
      },
      403: {
        titlePrefix: 'Akses',
        titleSuffix: 'Dibatasi',
        description: 'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator.',
        badge: 'Error 403: Forbidden',
        theme: 'amber',
      },
      404: {
        titlePrefix: 'Halaman Tidak',
        titleSuffix: 'Ditemukan',
        description: 'Waduh! Sepertinya route yang Anda cari tidak ada atau sudah pindah ke tempat lain.',
        badge: 'Error 404: Not Found',
        theme: 'rose',
      },
      500: {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Internal',
        description: 'Ups! Server kami sedang mengalami gangguan sejenak. Silakan coba lagi nanti.',
        badge: 'Error 500: Server Error',
        theme: 'amber',
      },
      503: {
        titlePrefix: 'Layanan Tidak',
        titleSuffix: 'Tersedia',
        description: 'Saat ini layanan sedang dalam pemeliharaan. Mohon tunggu beberapa saat lagi.',
        badge: 'Error 503: Service Unavailable',
        theme: 'emerald',
      },
    }

    const defaultContent: ErrorMetadata = is5xx
      ? {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Server',
        description: 'Server mengalami kendala yang tidak terduga. Mohon maaf atas ketidaknyamanan ini.',
        badge: \`Error \${statusCode}: Server Exception\`,
        theme: 'amber',
      }
      : {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Klien',
        description: 'Permintaan Anda tidak dapat diproses oleh sistem kami.',
        badge: \`Error \${statusCode}: Client Error\`,
        theme: 'rose',
      }

    const content = metadataMap[statusCode] ?? defaultContent

    const themes: Record<ErrorMetadata['theme'], ErrorTheme> = {
      amber: {
        badgeColor: 'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400',
        pingColor: 'bg-amber-400',
        dotColor: 'bg-amber-600 dark:bg-amber-500',
        gradient: 'from-amber-600 to-yellow-400 dark:from-amber-400 dark:to-yellow-400',
        glowStart: 'bg-amber-600/10',
        glowEnd: 'bg-yellow-600/10',
        terminalIcon: 'bg-amber-500/40',
        borderType: 'text-amber-600 dark:text-amber-400',
        errorColor: 'text-amber-600 dark:text-amber-400',
      },
      rose: {
        badgeColor: 'bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400',
        pingColor: 'bg-rose-400',
        dotColor: 'bg-rose-600 dark:bg-rose-500',
        gradient: 'from-rose-600 to-orange-400 dark:from-rose-400 dark:to-orange-400',
        glowStart: 'bg-rose-600/10',
        glowEnd: 'bg-orange-600/10',
        terminalIcon: 'bg-rose-500/40',
        borderType: 'text-rose-600 dark:text-rose-400',
        errorColor: 'text-rose-600 dark:text-rose-400',
      },
      emerald: {
        badgeColor: 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400',
        pingColor: 'bg-emerald-400',
        dotColor: 'bg-emerald-600 dark:bg-emerald-500',
        gradient: 'from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-400',
        glowStart: 'bg-emerald-600/10',
        glowEnd: 'bg-teal-600/10',
        terminalIcon: 'bg-emerald-500/40',
        borderType: 'text-emerald-600 dark:text-emerald-400',
        errorColor: 'text-emerald-600 dark:text-emerald-400',
      },
    }

    return { ...content, ...themes[content.theme] }
  }

  const meta = getErrorContent(code)

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className={\`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] \${meta.glowStart} blur-[120px] rounded-full\`} />
        <div className={\`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] \${meta.glowEnd} blur-[120px] rounded-full\`} />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className={\`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold shadow-sm \${meta.badgeColor}\`}>
              <span className="relative flex h-2 w-2">
                <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${meta.pingColor}\`}></span>
                <span className={\`relative inline-flex rounded-full h-2 w-2 \${meta.dotColor}\`}></span>
              </span>
              {meta.badge}
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              {meta.titlePrefix} <br />
              <span className={\`inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r \${meta.gradient}\`}>
                {meta.titleSuffix}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
              {meta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 w-full animate-float">
            <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className={\`w-3.5 h-3.5 rounded-full \${meta.terminalIcon}\`} />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 font-medium">
                  bash — system-error-{code}
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[350px]">
                <div className="space-y-2">
                  <p className="text-zinc-400">┌ checking system status...</p>
                  <p className="flex gap-3">
                    <span className={meta.borderType}>│</span>
                    <span className="text-zinc-800 dark:text-zinc-200">
                      ✖ Fatal Error: {meta.badge}
                    </span>
                  </p>
                  <p className="text-zinc-400">│</p>
                  <p className="flex gap-3">
                    <span className={meta.borderType}>│</span>
                    <span className="text-zinc-500">
                      [stacktrace]
                    </span>
                  </p>
                  {error ? (
                    <p className="flex gap-3 text-xs">
                      <span className={meta.borderType}>│</span>
                      <span className="text-rose-500 dark:text-rose-400">
                        Error: {error.name} - {error.message}
                      </span>
                    </p>
                  ) : (
                    <>
                      <p className="flex gap-3 text-xs">
                        <span className={meta.borderType}>│</span>
                        <span className="text-zinc-500">
                          at SystemHandler.resolve (internal/core.js:{code})
                        </span>
                      </p>
                      <p className="flex gap-3 text-xs">
                        <span className={meta.borderType}>│</span>
                        <span className="text-zinc-500">
                          at RequestPipeline.execute (internal/router.js:123)
                        </span>
                      </p>
                    </>
                  )}
                  <p className="text-zinc-400">│</p>
                  <p className="text-zinc-400 text-xs text-center">────────────────────────</p>
                  <p className={\`\${meta.errorColor} font-bold text-center\`}>
                    {' '}
                    ⚠️ ERROR_CODE: {code}
                  </p>
                  <p className="text-zinc-400 text-xs text-center">────────────────────────</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorState
`],
  ["frontend/react/tanstack-start/src/components/Common/ThemeToggle.tsx.hbs", `import { FC } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { useHasMounted } from '@/hooks/useHasMounted';

const ThemeToggle: FC = () => {
  const mounted = useHasMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="ml-3 h-6 w-6" /> // Placeholder to prevent layout shift
    );
  }

  const isDark = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="ml-3 focus:outline-none transition-transform hover:scale-110 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-zinc-900 hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400 transition-colors"
      >
        {isDark ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
`],
  ["frontend/react/tanstack-start/src/components/Mixins/Footer.tsx.hbs", `import { FC } from 'react';
import { Link } from '@tanstack/react-router';

import { InstagramIcon, LinkedInIcon, TwitterIcon, GitHubIcon } from '../Common/CustomIcons';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Project',
      links: [
        { name: 'Fitur', href: '#features' },
        { name: 'Cara Kerja', href: '#steps' },
        { name: 'Harga', href: '/pricing' },
        { name: 'Showcase', href: '/showcase' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { name: 'Tentang Kami', href: '/about' },
        { name: 'Karir', href: '/career' },
        { name: 'Blog', href: '/blog' },
        { name: 'Kontak', href: '/contact' },
      ],
    },
    {
      title: 'Dukungan',
      links: [
        { name: 'Bantuan', href: '/help' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Keamanan', href: '/security' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Ketentuan', href: '/terms' },
        { name: 'Privasi', href: '/privacy' },
        { name: 'Lisensi', href: '/license' },
      ],
    },
  ];

  const socials = [
    { name: 'GitHub', icon: <GitHubIcon />, href: '#' },
    { name: 'Twitter', icon: <TwitterIcon />, href: '#' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: '#' },
    { name: 'Instagram', icon: <InstagramIcon />, href: '#' },
  ];

  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 text-white font-bold text-2xl">
              📦️ BikinProject
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              CLI-based package starter generator yang dirancang untuk mempercepat workflow
              pengembangan aplikasi Anda dengan standar industri.
            </p>
            <div className="flex gap-4 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-zinc-800"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 space-y-4">
              <h3 className="text-xl font-bold text-white">Dapatkan Update Terbaru</h3>
              <p>Jadilah yang pertama tahu tentang fitur dan promo terbaru dari kami.</p>
              <form className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/10"
                >
                  Langganan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 py-16">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm tracking-wide">
          <p>© {year} BikinProject. Seluruh hak cipta dilindungi undang-undang.</p>
          {/* <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`],
  ["frontend/react/tanstack-start/src/components/Mixins/Navbar/constant/navLinks.ts", `export const navlinks = [
  { title: "Beranda", path: "/" },
  { title: "Fitur", path: "#features" },
  { title: "Cara Kerja", path: "#steps" },
  { title: "Tentang", path: "/about" },
  { title: "Kontak", path: "/contact" },
];
`],
  ["frontend/react/tanstack-start/src/components/Mixins/Navbar/index.tsx.hbs", `import { FC, useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

import { cn } from '@/lib/utils';
import { navlinks } from './constant/navLinks';
import ThemeToggle from '@/components/Common/ThemeToggle';
import useMobileResponsive from '@/hooks/useMobileResponsive';
import styles from './Navbar.module.css';

const Navbar: FC = () => {
  const isMobile = useMobileResponsive();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Navbar fixed position if scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full flex items-center z-[50] transition-all duration-300',
        (isScrolled || (isMobile && isOpen)) ? styles.navbarFixed : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-primary font-bold text-xl lg:text-2xl py-6 text-zinc-900 dark:text-white"
              aria-label="logo"
            >
              📦️ BikinProject
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={cn(
                'right-4 block absolute lg:hidden outline-none',
                isOpen && styles.hamburgerActive
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={\`\${styles.hamburgerLine} bg-black dark:bg-white origin-top-left transition duration-300 ease-in-out\`}
              ></span>
              <span
                className={\`\${styles.hamburgerLine} bg-black dark:bg-white transition duration-300 ease-in-out\`}
              ></span>
              <span
                className={\`\${styles.hamburgerLine} bg-black dark:bg-white origin-bottom-left transition duration-300 ease-in-out\`}
              ></span>
            </button>

            <nav
              id="navMenu"
              className={cn(
                'absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-[calc(100%+0.5rem)] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all duration-300',
                !isOpen && 'hidden',
                isMobile && 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg'
              )}
            >
              <ul className="block lg:flex lg:items-center">
                {navlinks?.map((a, i) => (
                  <li className="group" key={i}>
                    <Link
                      to={a.path}
                      className={cn(
                        styles.navLink,
                        'mx-8 lg:mx-4 flex'
                      )}
                      activeProps=\\{{ className: styles.navLinkActive }}
                      activeOptions=\\{{ exact: a.path === '/' }}
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
                <li className="ml-8 lg:ml-6 flex items-center gap-6 py-4 lg:py-0">
                  <Link
                    to="/login"
                    className="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    Masuk
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Daftar
                  </Link>
                </li>

                <li className="ml-8 lg:ml-4 flex items-center">
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
`],
  ["frontend/react/tanstack-start/src/components/Mixins/Navbar/Navbar.module.css.hbs", `.navbarFixed {
  @apply fixed z-[9999] bg-transparent dark:bg-zinc-900/80 shadow-md backdrop-blur-md;
}

.hamburgerLine {
  @apply w-[30px] h-[2px] my-2 block;
}

.hamburgerActive > span:nth-child(1) {
  @apply rotate-45;
}

.hamburgerActive > span:nth-child(2) {
  @apply scale-0;
}

.hamburgerActive > span:nth-child(3) {
  @apply -rotate-45;
}

.navLink {
  @apply relative py-2 text-zinc-600 dark:text-zinc-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400;
}

.navLink::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300;
}

.navLink:hover::after,
.navLinkActive::after {
  @apply w-full;
}

.navLinkActive {
  @apply text-blue-600 dark:text-blue-400;
}
`],
  ["frontend/react/tanstack-start/src/components/README.md", `# Arsitektur Komponen

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

### Common

Folder \`Common\` terletak pada \`/src/components/Common/\`. Folder ini berisi komponen-komponen atomik atau elemen UI dasar yang bersifat reusable dan independen.
Contoh: Tombol (\`Button\`), Input, Modal, Icon kustom, dll.

### Mixins

Folder \`Mixins\` terletak pada \`/src/components/Mixins/\`. Folder ini berisi komponen-komponen hasil gabungan atau komposisi dari beberapa komponen \`Common\` untuk membentuk fitur yang lebih kompleks.
Contoh: Navbar (gabungan dari Logo, Links, dan Theme Toggle), Footer, Sidebar, dll.

## Struktur Folder Lainnya

- **app/**: Berisi halaman (pages) dan layout utama menggunakan Next.js App Router.
- **hooks/**: Berisi custom logic React hooks yang dapat digunakan kembali di berbagai komponen.
- **lib/**: Berisi fungsi utilitas dan konfigurasi library pihak ketiga.
- **data/**: Berisi data statis, konstanta, dan metadata situs.
`],
  ["frontend/react/tanstack-start/src/hooks/useAxios.ts", `import https from "https";

import axios, { AxiosInstance } from "axios";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const createNewClient: () => AxiosInstance = () => {
  const BASE_API = import.meta.env.VITE_API_URL || "http://localhost:3000/api/";

  return axios.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
    },
    httpsAgent,
  });
};

export const client: AxiosInstance = createNewClient();

type HookType = (accessToken?: string) => AxiosInstance;

export const useAxios: HookType = (accessToken) => {
  client.interceptors.request.use((config) => {
    const newConfig = { ...config };

    if (accessToken) {
      newConfig.headers.Authorization = \`Bearer \${accessToken}\`;
    }

    return newConfig;
  });

  return client;
};

export const { isAxiosError } = axios;
`],
  ["frontend/react/tanstack-start/src/hooks/useClipboard.ts", `const useClipboard = () => {
  const copy = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      alert("Copied to clipboard!"); // replace this line with your toast notification
    } catch (err) {
      console.error(err);
      alert("Failed to copy to clipboard!"); // replace this line with your toast notification
    }
  };

  return { copy };
};

export default useClipboard;
`],
  ["frontend/react/tanstack-start/src/hooks/useDebounce.ts", `import { useEffect, useRef, useState, useCallback } from "react";

export const useDebounce = <T>(initialValue: T, delay = 300): [T, (value: T) => void] => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setDebouncedHandler = useCallback(
    (newValue: T) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setDebouncedValue(newValue);
      }, delay);
    },
    [delay],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return [debouncedValue, setDebouncedHandler];
};
`],
  ["frontend/react/tanstack-start/src/hooks/useHasMounted.ts", `import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useHasMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
`],
  ["frontend/react/tanstack-start/src/hooks/useMobileResponsive.ts", `import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapshot = (): boolean => {
  return window.innerWidth < 1024; // Tailwind 'lg' breakpoint
};

const getServerSnapshot = () => false;

/**
 * Hook to detect if the current screen size is mobile/tablet (below 'lg' breakpoint).
 * @returns boolean
 */
const useMobileResponsive = (): boolean => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useMobileResponsive;
`],
  ["frontend/react/tanstack-start/src/hooks/useScreenSize.ts", `import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getSnapshot = (): string | undefined => {
  const width = window.innerWidth;

  if (width <= 374) {
    return "Mobile XS";
  } else if (width >= 375 && width <= 424) {
    return "Mobile M";
  } else if (width >= 425 && width <= 767) {
    return "Mobile L";
  } else if (width >= 768 && width <= 1023) {
    return "Tablet";
  } else if (width >= 1024 && width <= 1439) {
    return "Laptop";
  } else if (width >= 1440 && width <= 2559) {
    return "Laptop LG";
  } else if (width >= 2560) {
    return "Laptop XL";
  }

  return undefined;
};

const getServerSnapshot = () => undefined;

const useScreenSize = (): string | undefined => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

export default useScreenSize;
`],
  ["frontend/react/tanstack-start/src/hooks/useSort.ts", `import { useState } from "react";

import { SortDirection, SortHookReturn } from "@/interfaces/hooks/useSort";

function useSort(): SortHookReturn {
  const [direction, setDirection] = useState<SortDirection>({ field: "", direction: "" });
  const [sortBy, setSortBy] = useState<string>("");

  const handleSort = (field: string): void => {
    if (!field) return;

    let newDirection = "";

    if (direction.field !== field || direction.direction === "") {
      newDirection = "asc";
    } else if (direction.direction === "asc") {
      newDirection = "desc";
    } else if (direction.direction === "desc") {
      newDirection = "";
    }

    setDirection({ field, direction: newDirection });
    const sortParam = newDirection === "asc" ? field : \`-\${field}\`;

    if (newDirection === "") {
      deleteSort();
    } else {
      handleChangeSort(sortParam);
    }
  };

  const deleteSort = (): void => {
    setSortBy("");
  };

  const handleChangeSort = (field: string): void => {
    setSortBy(field);
  };

  return {
    sortBy: sortBy,
    direction,
    handleSort,
  };
}

export default useSort;
`],
  ["frontend/react/tanstack-start/src/index.css.hbs", `@tailwind base;
@tailwind components;
@tailwind utilities;
{{#if (includes examples "ai")}}
@source "../node_modules/streamdown/dist/*.js";
{{/if}}

html {
  scroll-behavior: smooth;
}

`],
  ["frontend/react/tanstack-start/src/interfaces/error.ts", `export interface ErrorStateProps {
  code: number;
  error?: Error;
}

export interface ErrorMetadata {
  titlePrefix: string;
  titleSuffix: string;
  description: string;
  badge: string;
  theme: "rose" | "amber" | "emerald";
}

export interface ErrorTheme {
  badgeColor: string;
  pingColor: string;
  dotColor: string;
  gradient: string;
  glowStart: string;
  glowEnd: string;
  terminalIcon: string;
  borderType: string;
  errorColor: string;
}
`],
  ["frontend/react/tanstack-start/src/interfaces/hooks/useSort.ts", `export interface SortHookReturn {
  sortBy: string;
  direction: SortDirection;
  handleSort: (field: string) => void;
}

export interface SortDirection {
  field: string;
  direction: string;
}
`],
  ["frontend/react/tanstack-start/src/interfaces/providers/ThemeProvider.ts", `export type Theme = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}
`],
  ["frontend/react/tanstack-start/src/interfaces/seo.ts", `export interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;

  [key: string]: string | number | boolean | undefined;
}
`],
  ["frontend/react/tanstack-start/src/providers/ThemeProvider.tsx.hbs", `import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useSyncExternalStore,
  useCallback,
} from 'react';

import { Theme, ThemeContextType } from '@/interfaces/providers/ThemeProvider';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'theme-preference',
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      window.addEventListener('storage', callback);
      return () => window.removeEventListener('storage', callback);
    },
    []
  );

  const getSnapshot = useCallback(() => {
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  }, [storageKey, defaultTheme]);

  const getServerSnapshot = useCallback(() => {
    return defaultTheme;
  }, [defaultTheme]);

  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  const setTheme = useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      // Dispatch a storage event so useSyncExternalStore updates in the same tab
      window.dispatchEvent(new Event('storage'));
    },
    [storageKey]
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (t: Theme) => {
      let resolved: 'light' | 'dark';

      if (t === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      } else {
        resolved = t as 'light' | 'dark';
      }

      root.classList.remove('light', 'dark');
      root.classList.add(resolved);
      setResolvedTheme(resolved);
    };

    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme('system');
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value=\\{{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
`],
  ["frontend/react/tanstack-start/src/router.tsx.hbs", `{{#if (eq backend "convex")}}
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { routeTree } from "./routeTree.gen";
import Loader from "./components/Common/Loader";
import "./index.css";
{{else}}
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import Loader from "./components/Common/Loader";
import "./index.css";
import { routeTree } from "./routeTree.gen";
{{#if (eq api "trpc")}}
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { toast } from "sonner";
import type { AppRouter } from "@{{projectName}}/api/routers/index";
import { TRPCProvider } from "./utils/trpc";
{{else if (eq api "orpc")}}
import { QueryClientProvider } from "@tanstack/react-query";
import { orpc, queryClient } from "./utils/orpc";
{{/if}}
{{/if}}

{{#if (eq backend "convex")}}
export function getRouter() {
	const convexUrl = env.VITE_CONVEX_URL;
	if (!convexUrl) {
		throw new Error("VITE_CONVEX_URL is not set");
	}

	const convexQueryClient = new ConvexQueryClient(convexUrl);

	const queryClient: QueryClient = new QueryClient({
		defaultOptions: {
			queries: {
				queryKeyHashFn: convexQueryClient.hashFn(),
				queryFn: convexQueryClient.queryFn(),
			},
		},
	});
	convexQueryClient.connect(queryClient);

	const router = createTanStackRouter({
		routeTree,
		defaultPreload: "intent",
		context: { queryClient, convexQueryClient },
	});

	setupRouterSsrQueryIntegration({
		router,
		queryClient,
	});

	return router;
}
{{else}}
{{#if (eq api "trpc")}}
export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error, query) => {
			toast.error(error.message, {
				action: {
					label: "retry",
					onClick: query.invalidate,
				},
			});
		},
	}),
	defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

const trpcClient = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: {{#if (eq backend "self")}}"/api/trpc"{{else}}\`\${env.VITE_SERVER_URL}/trpc\`{{/if}},
{{#if (eq auth "better-auth")}}
			fetch(url, options) {
				return fetch(url, {
					...options,
					credentials: "include",
				});
			},
{{/if}}
		}),
	],
});

const trpc = createTRPCOptionsProxy({
	client: trpcClient,
	queryClient: queryClient,
});
{{else if (eq api "orpc")}}
{{/if}}

export const getRouter = () => {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
{{#if (eq api "trpc")}}
		context: { trpc, queryClient },
{{else if (eq api "orpc")}}
		context: { orpc, queryClient },
{{else}}
		context: {},
{{/if}}
{{#if (eq api "trpc")}}
		Wrap: ({ children }) => (
			<QueryClientProvider client={queryClient}>
				<TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
					{children}
				</TRPCProvider>
			</QueryClientProvider>
		),
{{else if (eq api "orpc")}}
		Wrap: ({ children }) => (
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		),
{{else}}
		Wrap: ({ children }) => <>{children}</>,
{{/if}}
	});
	return router;
};
{{/if}}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
`],
  ["frontend/react/tanstack-start/src/routes/__root.tsx.hbs", `import { Toaster } from "@/components/ui/sonner";
/// <reference types="vite/client" />
import type { ReactNode } from 'react'
{{#unless (eq backend "convex")}} {{#unless (eq api "none")}}
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
{{/unless}} {{/unless}}
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
{{#if (and (eq backend "convex") (or (eq auth "clerk") (eq auth "better-auth")))}}
  useRouteContext,
{{/if}}
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { siteMetadata } from '@/data/siteMetadata'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Navbar from '@/components/Mixins/Navbar'
import Footer from '@/components/Mixins/Footer'
import ScrollToTop from '@/components/Common/ScrollToTop'
import ErrorState from '@/components/Common/ErrorState'
import '../index.css'

{{#if (eq backend "convex")}}
import type { QueryClient } from "@tanstack/react-query";
import type { ConvexQueryClient } from "@convex-dev/react-query";
{{else}}
{{#if (or (eq api "trpc") (eq api "orpc"))}}
import type { QueryClient } from "@tanstack/react-query";
{{/if}}
{{/if}}

{{#if (and (eq backend "convex") (eq auth "clerk"))}}
import { ClerkProvider, useAuth } from "@clerk/tanstack-react-start";
import { auth } from "@clerk/tanstack-react-start/server";
import { createServerFn } from "@tanstack/react-start";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
  const clerkAuth = await auth();
  const token = await clerkAuth.getToken({ template: "convex" });
  return { userId: clerkAuth.userId, token };
});
{{else if (and (eq backend "convex") (eq auth "better-auth"))}}
import { createServerFn } from "@tanstack/react-start";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { authClient } from "@/lib/auth-client";
import { getToken } from "@/lib/auth-server";

const getAuth = createServerFn({ method: "GET" }).handler(async () => {
  return await getToken();
});
{{else if (eq backend "convex")}}
import { ConvexProvider } from "convex/react";
{{/if}}

{{#if (eq backend "convex")}}
export interface RouterAppContext {
  queryClient: QueryClient;
  convexQueryClient: ConvexQueryClient;
}
{{else}}
  {{#if (eq api "trpc")}}
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import type { AppRouter } from "@{{projectName}}/api/routers/index";
export interface RouterAppContext {
  trpc: TRPCOptionsProxy<AppRouter>;
  queryClient: QueryClient;
}
  {{else if (eq api "orpc")}}
import type { orpc } from "@/utils/orpc";
export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}
  {{else}}
export interface RouterAppContext {
}
  {{/if}}
{{/if}}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  errorComponent: (props: { error: Error }) => {
    const error = props.error as unknown as Record<string, unknown>
    const statusCode =
      typeof error.status === 'number'
        ? error.status
        : typeof error.statusCode === 'number'
          ? error.statusCode
          : 500
    return <ErrorState code={statusCode} error={props.error} />
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteMetadata.title,
      },
      {
        name: 'description',
        content: siteMetadata.description,
      },
      {
        name: 'author',
        content: siteMetadata.author,
      },
      {
        name: 'keywords',
        content:
          'tanstack, react, start, template, frontend, seo, sitemap, naufal akbar nugroho',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: siteMetadata.siteUrl,
      },
      {
        property: 'og:title',
        content: siteMetadata.title,
      },
      {
        property: 'og:description',
        content: siteMetadata.description,
      },
      {
        property: 'og:image',
        content: \`\${siteMetadata.siteUrl}\${siteMetadata.socialBanner}\`,
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: siteMetadata.siteUrl,
      },
      {
        name: 'twitter:title',
        content: siteMetadata.title,
      },
      {
        name: 'twitter:description',
        content: siteMetadata.description,
      },
      {
        name: 'twitter:image',
        content: \`\${siteMetadata.siteUrl}\${siteMetadata.socialBanner}\`,
      },
      {
        name: 'twitter:creator',
        content: siteMetadata.x,
      },
    ],
    links: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'canonical',
        href: siteMetadata.siteUrl,
      },
    ],
  }),
  component: RootComponent,
  {{#if (and (eq backend "convex") (eq auth "clerk"))}}
  beforeLoad: async (ctx) => {
    const { userId, token } = await fetchClerkAuth();
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
    }
    return { userId, token };
  },
  {{else if (and (eq backend "convex") (eq auth "better-auth"))}}
  beforeLoad: async (ctx) => {
    const token = await getAuth();
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
    }
    return {
      isAuthenticated: !!token,
      token,
    };
  },
  {{/if}}
})

function RootComponent() {
  return (
    <ThemeProvider>
      {{#if (and (eq backend "convex") (eq auth "clerk"))}}
      <ClerkWrapper>
        <RootDocument>
          <Outlet />
          <TanStackRouterDevtools initialIsOpen={false} />
        </RootDocument>
      </ClerkWrapper>
      {{else if (and (eq backend "convex") (eq auth "better-auth"))}}
      <BetterAuthWrapper>
        <RootDocument>
          <Outlet />
          <TanStackRouterDevtools initialIsOpen={false} />
        </RootDocument>
      </BetterAuthWrapper>
      {{else if (eq backend "convex")}}
      <ConvexWrapper>
        <RootDocument>
          <Outlet />
          <TanStackRouterDevtools initialIsOpen={false} />
        </RootDocument>
      </ConvexWrapper>
      {{else}}
      <RootDocument>
        <Outlet />
        <TanStackRouterDevtools initialIsOpen={false} />
      </RootDocument>
      {{/if}}
    </ThemeProvider>
  )
}

{{#if (and (eq backend "convex") (eq auth "clerk"))}}
function ClerkWrapper({ children }: { children: ReactNode }) {
  const context = useRouteContext({ from: Route.id });
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={context.convexQueryClient.convexClient} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
{{else if (and (eq backend "convex") (eq auth "better-auth"))}}
function BetterAuthWrapper({ children }: { children: ReactNode }) {
  const context = useRouteContext({ from: Route.id });
  return (
    <ConvexBetterAuthProvider
      client={context.convexQueryClient.convexClient}
      authClient={authClient}
      initialToken={context.token}
    >
      {children}
    </ConvexBetterAuthProvider>
  )
}
{{else if (eq backend "convex")}}
function ConvexWrapper({ children }: { children: ReactNode }) {
  const { convexQueryClient } = Route.useRouteContext();
  return (
    <ConvexProvider client={convexQueryClient.convexClient}>
      {children}
    </ConvexProvider>
  )
}
{{/if}}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ScrollToTop />
        <Footer />
        <Toaster richColors />
        {{#unless (eq api "none")}}
        <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
        {{/unless}}
        <Scripts />
      </body>
    </html>
  )
}
`],
  ["frontend/react/tanstack-start/src/routes/(auth)/login/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { GitHubIcon } from '@/components/Common/CustomIcons'

const Login: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <span className="font-mono font-bold text-zinc-900 dark:text-white">auth --login</span>
          </div>
          <div className="flex gap-1.5 opacity-30">
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Selamat Datang</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Masuk untuk mengelola project Anda.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Masuk Ke Sistem
            </button>

            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span className="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Atau
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white">
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p className="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Belum punya akun?{' '}
            <Link
              to="/register"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Daftar Sekarang
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(auth)/login/')({
  component: Login,
})`],
  ["frontend/react/tanstack-start/src/routes/(auth)/register/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

import { GitHubIcon } from '@/components/Common/CustomIcons'

const Register: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📦</span>
            <span className="font-mono font-bold text-zinc-900 dark:text-white">
              auth --register
            </span>
          </div>
          <div className="flex gap-1.5 opacity-30">
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
            <div className="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-zinc-950 dark:text-white">Buat Akun Baru</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Bergabung dengan komunitas BikinProject.
            </p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Daftar Sekarang
            </button>

            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span className="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Atau
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white">
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p className="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Sudah punya akun?{' '}
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Masuk Saja
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(auth)/register/')({
  component: Register,
})
`],
  ["frontend/react/tanstack-start/src/routes/(root)/_components/Features.tsx.hbs", `import { FC } from 'react';

const features = [
  {
    title: 'Zero Config',
    description:
      'Lupakan setup yang rumit. Mulai project Anda dalam hitungan detik dengan konfigurasi yang sudah dioptimalkan.',
    icon: '⚙️',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Interactive CLI',
    description:
      'Antarmuka baris perintah yang interaktif dan intuitif, memudahkan Anda memilih opsi project.',
    icon: '💻',
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'Multi-framework',
    description:
      'Mendukung berbagai framework populer seperti Next.js, React, Laravel, dan akan terus bertambah.',
    icon: '📚',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  {
    title: 'Standardisasi Kode',
    description:
      'Setiap project dihasilkan dengan struktur folder dan standar kode terbaik yang konsisten.',
    icon: '🛠️',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Developer Experience',
    description:
      'Dibuat dengan fokus utama pada kenyamanan developer untuk produktivitas maksimal.',
    icon: '✨',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Open Source',
    description:
      'Didukung oleh komunitas dan bebas untuk dikustomisasi sesuai kebutuhan spesifik Anda.',
    icon: '🌐',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
];

const Features: FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white">
            Fitur Unggulan Kami
          </h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
            Segala yang Anda butuhkan untuk membangun project modern dalam satu platform yang
            terintegrasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div
                className={\`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 \${feature.color} border border-transparent group-hover:border-current transition-all duration-300 group-hover:scale-110 shadow-sm\`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
`],
  ["frontend/react/tanstack-start/src/routes/(root)/_components/Hero.tsx.hbs", `import { FC } from 'react';
import { Link } from '@tanstack/react-router';

const Hero: FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"></span>
              </span>
              CLI-Based Project Generator
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              Bikin Project Jadi <br />
              <span className="inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-400 dark:from-blue-400 dark:to-cyan-400">
                Lebih Sat-Set & Terstruktur
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium">
              Generator starter project yang didesain untuk kenyamanan developer. Lupakan setup
              manual, cukup satu perintah dan project Anda siap tempur.
            </p>

            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 font-mono text-sm md:text-base flex items-center justify-between group">
              <span className="text-zinc-800 dark:text-zinc-200">
                <span className="text-blue-600 dark:text-blue-400">$</span> npx bikinproject@latest
              </span>
              <button
                onClick={() => navigator.clipboard.writeText('npx bikinproject@latest')}
                className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-blue-600"
                title="Copy to clipboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Coba Sekarang
              </Link>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                Lihat Fitur
              </a>
            </div>
          </div>

          {/* Right Side: Terminal Mock-up */}
          <div className="lg:w-1/2 w-full animate-float">
            <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
                </div>
                <div className="mx-auto text-xs font-mono text-zinc-500 font-medium">
                  bash — create-bikinproject-app
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[400px]">
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
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold underline">
                      ./your-project
                    </span>
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
                  <div className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-zinc-500">○ React.js (Tailwind + JavaScript)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-zinc-500">○ Laravel Breeze API w/ Next.js</span>
                  </div>
                  <p className="text-zinc-400">│</p>
                  <p className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ⏳ Creating project...
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-cyan-600 dark:text-cyan-400">│</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      ✅ Project created successfully!
                    </span>
                  </p>
                  <p className="text-zinc-400">│</p>
                  <p className="text-zinc-400 text-xs">────────────────────────╮</p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">
                    {' '}
                    🎉 Project ready to use!
                  </p>
                  <p className="text-zinc-400 text-xs">────────────────────────╯</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
`],
  ["frontend/react/tanstack-start/src/routes/(root)/_components/Steps.tsx.hbs", `import { FC } from 'react';

const steps = [
  {
    number: '01',
    title: 'Jalankan Command',
    description:
      'Buka terminal favorit Anda dan jalankan "npx bikinproject@latest". Tidak perlu instalasi global yang memberatkan sistem.',
  },
  {
    number: '02',
    title: 'Pilih Konfigurasi',
    description:
      'Pilih framework (Next.js, React, Laravel), bahasa (TS/JS), dan CSS framework melalui antarmuka CLI yang interaktif.',
  },
  {
    number: '03',
    title: 'Project Siap!',
    description:
      'BikinProject akan men-generate starter project lengkap dengan best practices, siap untuk Anda kembangkan lebih lanjut.',
  },
];

const Steps: FC = () => {
  return (
    <section id="steps" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight">
              Langkah Sederhana <br /> Untuk Project Terpercaya
            </h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
              Kami menyederhanakan proses kompleks menjadi langkah-langkah yang mudah dipahami,
              memastikan Anda selalu terlibat dalam setiap progres.
            </p>
            <div className="pt-4">
              <button className="px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-zinc-500/10">
                Mulai Konsultasi
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-3xl border-2 border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 group"
              >
                <div className="text-4xl font-black text-blue-600/20 dark:text-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300 shrink-0">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{step.title}</h3>
                  <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
`],
  ["frontend/react/tanstack-start/src/routes/(root)/about/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { siteMetadata } from '@/data/siteMetadata'

const About: FC = () => {
  return (
    <section className="flex items-center justify-center mx-auto min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="h-64 md:h-[700px] relative group bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-3xl shadow-2xl border-2 border-zinc-100 dark:border-zinc-800 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Laptop"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
              </div>

              <div className="md:pt-8 space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight">
                  Tentang <span className="text-blue-600 dark:text-blue-500">BikinProject.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium">
                  <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-1 px-3 rounded-xl font-mono font-bold border border-blue-100 dark:border-blue-800/50">
                    BikinProject
                  </span>{' '}
                  adalah sebuah CLI-based starter project generator yang dirancang untuk mempercepat
                  proses inisialisasi aplikasi dengan standar industri. Proyek ini mendukung
                  berbagai framework populer seperti Next.js, React, dan Laravel.
                </p>

                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium">
                  Dibuatnya BikinProject berawal dari kebutuhan{' '}
                  <a
                    href={siteMetadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold underline decoration-blue-500/30 underline-offset-4 transition duration-200"
                  >
                    Saya
                  </a>{' '}
                  akan standarisasi struktur proyek saat memulai development baru. Alih-alih
                  melakukan setup manual yang repetitif, BikinProject mengotomatisasi segalanya
                  mulai dari pemilihan bahasa, styling framework, hingga struktur folder terbaik.
                </p>

                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium">
                    Hanya dengan satu perintah di terminal, Anda bisa langsung fokus membangun fitur
                    tanpa pusing dengan boilerplate:
                  </p>
                  <div className="p-5 bg-zinc-950 rounded-2xl font-mono text-sm md:text-base text-emerald-400 border border-zinc-800 shadow-xl group transition-all duration-300 hover:border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-600">$</span>
                      <span className="group-hover:text-emerald-300 transition-colors">npx bikinproject@latest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(root)/about/')({
  head: () => ({
    meta: [
      {
        title: \`Tentang Kami | \${siteMetadata.title}\`,
      },
      {
        name: 'description',
        content: \`Pelajari lebih lanjut tentang \${siteMetadata.title} dan bagaimana kami membantu proses development Anda.\`,
      },
    ],
  }),
  component: About,
})`],
  ["frontend/react/tanstack-start/src/routes/(root)/contact/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { siteMetadata } from '@/data/siteMetadata'

const Contact: FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <section className="body-font">
              <div className="container mx-auto flex items-center justify-center flex-col">
                <div className="relative group lg:w-2/6 md:w-3/6 w-5/6 mb-10 overflow-hidden rounded-3xl shadow-2xl border-2 border-zinc-100 dark:border-zinc-800 transition-all duration-300">
                  <img
                    src="https://avatars.githubusercontent.com/u/83068205?v=4"
                    loading="lazy"
                    alt="hero"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                </div>

                <div className="text-center lg:w-2/3 w-full space-y-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight">
                    Naufal Akbar Nugroho
                  </h1>

                  <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                    Fullstack Web Developer | Undergraduate Information Systems Student
                  </h2>

                  <p className="max-w-xl mx-auto text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
                    Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi
                    bagi semua orang!
                  </p>

                  <div className="flex justify-center gap-4 pt-6">
                    <a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-white bg-blue-600 hover:bg-blue-700 border-0 py-3 px-8 focus:outline-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      GitHub Saya
                    </a>

                    <a
                      href={\`mailto:\${siteMetadata.email}\`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 py-3 px-8 focus:outline-none hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Hubungi Saya
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Route = createFileRoute('/(root)/contact/')({
  head: () => ({
    meta: [
      {
        title: \`Kontak | \${siteMetadata.title}\`,
      },
      {
        name: 'description',
        content: \`Hubungi kami untuk kolaborasi atau pertanyaan terkait \${siteMetadata.title}.\`,
      },
    ],
  }),
  component: Contact,
})
`],
  ["frontend/react/tanstack-start/src/routes/(root)/index.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { siteMetadata } from '@/data/siteMetadata'

{{#if (eq backend "convex")}}
import { convexQuery } from "@convex-dev/react-query";
import { useQuery } from "@tanstack/react-query";
import { api } from "@{{projectName}}/backend/convex/_generated/api";
{{else if (or (eq api "trpc") (eq api "orpc"))}}
import { useQuery } from "@tanstack/react-query";
  {{#if (eq api "trpc")}}
import { useTRPC } from "@/utils/trpc";
  {{/if}}
  {{#if (eq api "orpc")}}
import { orpc } from "@/utils/orpc";
  {{/if}}
{{/if}}

import Hero from './_components/Hero'
import Features from './_components/Features'
import Steps from './_components/Steps'

const Home: FC = () => {
  {{#if (eq backend "convex")}}
  const healthCheck = useQuery(convexQuery(api.healthCheck.get, {}));
  {{else if (eq api "trpc")}}
  const trpc = useTRPC();
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());
  {{else if (eq api "orpc")}}
  const healthCheck = useQuery(orpc.healthCheck.queryOptions());
  {{/if}}

  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Steps />

      {{#unless (eq api "none")}}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t-2 border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="p-8 bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-500/5 group hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center justify-between gap-6">
                <div className="space-y-1">
                  <h2 className="text-2xl font-extrabold text-zinc-950 dark:text-white">API Connection</h2>
                  <p className="text-zinc-700 dark:text-zinc-400 font-medium">Monitoring status sistem secara real-time.</p>
                </div>
                
                {{#if (eq backend "convex")}}
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800">
                  <span className="relative flex h-3 w-3">
                    <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${healthCheck.data === "OK" ? "bg-emerald-400" : healthCheck.isLoading ? "bg-amber-400" : "bg-rose-400"}\`}></span>
                    <span className={\`relative inline-flex rounded-full h-3 w-3 \${healthCheck.data === "OK" ? "bg-emerald-500" : healthCheck.isLoading ? "bg-amber-500" : "bg-rose-500"}\`}></span>
                  </span>
                  <span className="font-bold text-sm tracking-tight text-zinc-800 dark:text-zinc-200">
                    {healthCheck.isLoading
                      ? "CHECKING"
                      : healthCheck.data === "OK"
                        ? "CONNECTED"
                        : "OFFLINE"}
                  </span>
                </div>
                {{else}}
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800">
                  <span className="relative flex h-3 w-3">
                    <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${healthCheck.data ? "bg-emerald-400" : healthCheck.isLoading ? "bg-amber-400" : "bg-rose-400"}\`}></span>
                    <span className={\`relative inline-flex rounded-full h-3 w-3 \${healthCheck.data ? "bg-emerald-500" : healthCheck.isLoading ? "bg-amber-500" : "bg-rose-500"}\`}></span>
                  </span>
                  <span className="font-bold text-sm tracking-tight text-zinc-800 dark:text-zinc-200">
                    {healthCheck.isLoading
                      ? "CHECKING"
                      : healthCheck.data
                        ? "CONNECTED"
                        : "OFFLINE"}
                  </span>
                </div>
                {{/if}}
              </div>
            </div>
          </div>
        </div>
      </section>
      {{/unless}}
    </div>
  )
}

export const Route = createFileRoute('/(root)/')({
  head: () => ({
    meta: [
      {
        title: \`Beranda | \${siteMetadata.title}\`,
      },
    ],
  }),
  component: Home,
})`],
  ["frontend/react/tanstack-start/src/routes/$.tsx.hbs", `import { FC } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { siteMetadata } from '@/data/siteMetadata'
import ErrorState from '@/components/Common/ErrorState'

const NotFound: FC = () => {
  return <ErrorState code={404} />
}

export const Route = createFileRoute('/$')({
  head: () => ({
    meta: [
      {
        title: \`404 | \${siteMetadata.title}\`,
      },
    ],
  }),
  component: NotFound,
})
`],
  ["frontend/react/tanstack-start/src/routeTree.gen.ts", `/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.
`],
  ["frontend/react/tanstack-start/tailwind.config.ts.hbs", `import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
	],
	theme: {
		fontFamily: {
			sans: [
				'Plus Jakarta Sans',
				'system-ui',
				'-apple-system',
				'sans-serif'
			]
		},
		extend: ({
			boxShadow: {
				md: '0px 2px 4px -1px rgba(175, 182, 201, 0.2);',
				lg: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
				'dark-md': 'rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.02) 0px 12px 24px -4px',
				sm: '0 6px 24.2px -10px rgba(41, 52, 61, .22)',
				'btn-shadow': 'box-shadow: rgba(0, 0, 0, .05) 0 9px 17.5px',
				tw: 'rgba(175, 182, 201, 0.2) 0px 2px 4px -1px',
				btnshdw: '0 17px 20px -8px rgba(77, 91, 236, .231372549)',
				elevation1: '0px 12px 30px -2px rgba(58,75,116,0.14);',
				elevation2: '0px 24px 24px -12px rgba(0,0,0,0.05);',
				elevation3: '0px 24px 24px -12px rgba(99,91,255,0.15);',
				elevation4: '0px 12px 12px -6px rgba(0,0,0,0.15);'
			},
			borderRadius: {
				sm: "6px",
				md: "9px",
				lg: "24px",
				tw: "12px",
				bb: "20px",
			},
			container: {
				center: true,
				padding: '20px'
			},
			letterSpacing: {
				tightest: '-.075em',
				tighter: '-.05em',
				tight: '-.025em',
				normal: '0',
				wide: '.025em',
				wider: '.05em',
				widest: '1.5px',
				'-2': '-0.02em',
				'6': '0.06em'
			},
			gap: {
				'30': '30px'
			},
			padding: {
				'30': '30px'
			},
			margin: {
				'30': '30px'
			},
			fontSize: {
				'15': '15px',
				'17': '17px',
				'13': '13px',
				'22': '22px',
				'28': '28px',
				'34': '34px',
				'40': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
				'44': '44px',
				'50': '50px',
				'56': ['56px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
				'64': '64px',
				// Hero/Title Text
				'hero-h1': ['56px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h2': ['48px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h3': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h4': ['32px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h5': ['24px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h6': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				// Heading Text
				'heading-h1': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h2': ['32px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h3': ['24px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h4': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h5': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h6': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				// Body Text
				'body-xl': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-xl-regular': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-l': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-l-regular': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-m': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-m-regular': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-s': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-s-regular': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-xs': ['12px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-xs-regular': ['12px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				// Caption Text
				'caption-l': ['14px', { lineHeight: '120%', letterSpacing: '0.06em', fontWeight: '500' }],
				'caption-s': ['12px', { lineHeight: '120%', letterSpacing: '0.06em', fontWeight: '500' }],
			},
			colors: {
				black: '#2A3547',
				cyan: {
					'500': 'var(--color-primary)',
					'600': 'var(--color-primary)',
					'700': 'var(--color-primary)'
				},
				primary: ({ opacityValue, opacityVariable }: { opacityValue?: string; opacityVariable?: string }) => {
					if (opacityValue !== undefined) {
						return \`rgba(var(--color-primary-rgb), \${opacityValue})\`;
					}
					if (opacityVariable !== undefined) {
						return \`rgba(var(--color-primary-rgb), var(\${opacityVariable}, 1))\`;
					}
					return \`rgb(var(--color-primary-rgb))\`;
				},
				secondary: 'var(--color-secondary)',
				info: 'var(--color-info)',
				success: 'var(--color-success)',
				warning: 'var(--color-warning)',
				// error: 'var(--color-error)',
				error: ({ opacityValue, opacityVariable }: { opacityValue?: string; opacityVariable?: string }) => {
					if (opacityValue !== undefined) {
						return \`rgba(var(--color-error-rgb), \${opacityValue})\`;
					}
					if (opacityVariable !== undefined) {
						return \`rgba(var(--color-error-rgb), var(\${opacityVariable}, 1))\`;
					}
					return \`rgb(var(--color-error-rgb))\`;
				},
				lightprimary: 'var(--color-lightprimary)',
				lightsecondary: 'var(--color-lightsecondary)',
				lightsuccess: 'var( --color-lightsuccess)',
				lighterror: 'var(--color-lighterror)',
				lightinfo: 'var(--color-lightinfo)',
				lightwarning: 'var(--color-lightwarning)',
				border: 'var(--color-border)',
				bordergray: 'var(--color-bordergray)',
				lightgray: 'var( --color-lightgray)',
				muted: 'var(--color-muted)',
				lighthover: 'var(--color-lighthover)',
				surface: 'var(--color-surface-ld)',
				sky: 'var(--color-sky)',
				bodytext: 'var(--color-bodytext)',
				dark: 'var(--color-dark)',
				link: 'var(--color-link)',
				darklink: 'var(--color-darklink)',
				darkborder: 'var(--color-darkborder)',
				darkgray: 'var(--color-darkgray)',
				primaryemphasis: 'var(--color-primary-emphasis)',
				secondaryemphasis: 'var(--color-secondary-emphasis)',
				warningemphasis: 'var(--color-warning-emphasis)',
				erroremphasis: 'var(--color-error-emphasis)',
				successemphasis: 'var(--color-success-emphasis)',
				infoemphasis: 'var(--color-info-emphasis)',
				darkmuted: 'var( --color-darkmuted)'
			}
		} as any)
	},
	plugins: [
		require("tailwindcss-animate")
	],
};
export default config;
`],
  ["frontend/react/tanstack-start/tsconfig.json.hbs", `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./src/components/*"],
      "@/data/*": ["./src/data/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/interfaces/*": ["./src/interfaces/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/providers/*": ["./src/providers/*"],
      "src/*": ["src/*"]
    },
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
`],
  ["frontend/react/tanstack-start/tsconfig.node.json.hbs", `{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
`],
  ["frontend/react/tanstack-start/vite.config.ts.hbs", `import svgr from '@svgr/rollup'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import fs from 'fs/promises'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@/app': resolve(__dirname, 'src/app'),
            '@/api': resolve(__dirname, 'src/app/api'),
            '@/features': resolve(__dirname, 'src/features'),
            '@/shared': resolve(__dirname, 'src/shared'),
            '@/assets': resolve(__dirname, 'src/assets'),
            src: resolve(__dirname, 'src'),
        },
    },
    esbuild: {
        loader: 'tsx',
        // include: /src\\/.*\\.tsx?$/,
        // exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-tsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /src\\\\.*\\.js$/ },
                            async (args) => ({
                                loader: 'tsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        );
                    },
                },
            ],
        },
    },

    plugins: [
        svgr(),
        tsConfigPaths(),
        tanstackStart(),
        // react's vite plugin must come after start's vite plugin
        viteReact(),
    ],
    {{#if (and (eq backend "convex") (eq auth "better-auth"))}}
    ssr: {
      noExternal: ["@convex-dev/better-auth"],
    },
    {{/if}}
})`],
  ["frontend/react/web-base/_gitignore", `# Dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# Testing
/coverage

# Build outputs
/.next/
/out/
/build/
/dist/
.vinxi
.output
.react-router/
.tanstack/
.nitro/

# Deployment
.vercel
.netlify
.wrangler
.alchemy

# Environment & local files
.env*
!.env.example
.DS_Store
*.pem
*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
*.log*

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/*
!.vscode/extensions.json
.idea

# Other
dev-dist

.wrangler
.dev.vars*

.open-next
`],
  ["frontend/react/web-base/public/assets/img/template-img-room.png", `[Binary file]`],
  ["frontend/react/web-base/public/assets/img/template-img.png", `[Binary file]`],
  ["frontend/react/web-base/public/assets/svg/undraw_login.svg", `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="793" height="551.732" data-name="Layer 1" viewBox="0 0 793 551.732"><ellipse cx="158" cy="539.732" fill="#e6e6e6" rx="158" ry="12"/><path fill="#2f2e41" d="M324.27227,296.55377c27.49676-11.6953,61.74442-4.28528,95.19092.85757.31124-6.228,4.08385-13.80782.132-18.15284-4.80115-5.2788-4.35917-10.82529-1.47008-16.40375,7.38788-14.265-3.1969-29.44375-13.88428-42.0647a23.66937,23.66937,0,0,0-19.75537-8.29179l-19.7975,1.41411A23.70939,23.70939,0,0,0,343.635,230.85851v0c-4.72724,6.42917-7.25736,12.84055-5.66438,19.21854-7.08065,4.83882-8.27029,10.67977-5.08851,17.2644,2.698,4.14592,2.66928,8.18161-.12275,12.1056a55.89079,55.89079,0,0,0-8.31011,16.5061Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M977.70889,651.09727H417.29111A18.79111,18.79111,0,0,1,398.5,632.30616h0q304.727-35.41512,598,0h0A18.79111,18.79111,0,0,1,977.70889,651.09727Z" transform="translate(-203.5 -174.13424)"/><path fill="#3f3d56" d="M996.5,633.41151l-598-1.10536,69.30611-116.61553.3316-.55268V258.13057a23.7522,23.7522,0,0,1,23.75418-23.75418H899.792a23.7522,23.7522,0,0,1,23.75418,23.75418V516.90649Z" transform="translate(-203.5 -174.13424)"/><path fill="#fff" d="M491.35028,250.95679a7.74623,7.74623,0,0,0-7.73753,7.73753V493.03073a7.74657,7.74657,0,0,0,7.73753,7.73752H903.64972a7.74691,7.74691,0,0,0,7.73753-7.73752V258.69432a7.74657,7.74657,0,0,0-7.73753-7.73753Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M493.07794,531.71835a3.32522,3.32522,0,0,0-3.01275,1.93006l-21.35537,46.42514a3.31594,3.31594,0,0,0,3.01221,4.7021H920.81411a3.3157,3.3157,0,0,0,2.96526-4.79925L900.5668,533.55126a3.29926,3.29926,0,0,0-2.96526-1.83291Z" transform="translate(-203.5 -174.13424)"/><circle cx="492.342" cy="67.98" r="4.974" fill="#fff"/><path fill="#2f2e41" d="M651.69986,593.61853a3.32114,3.32114,0,0,0-3.20165,2.4536l-5.35679,19.89649a3.31576,3.31576,0,0,0,3.20166,4.17856h101.874a3.31531,3.31531,0,0,0,3.13257-4.40093l-6.88691-19.89649a3.31784,3.31784,0,0,0-3.13366-2.23123Z" transform="translate(-203.5 -174.13424)"/><polygon fill="#2f2e41" points="720.046 337.135 720.046 341.556 264.306 341.556 264.649 341.004 264.649 337.135 720.046 337.135"/><circle cx="707.335" cy="77.375" r="77.375" fill="#01a3a4"/><path fill="#fff" d="M942.89,285.223H878.77911a4.42582,4.42582,0,0,1-4.42144-4.42145V242.11391a4.42616,4.42616,0,0,1,4.42144-4.42144H942.89a4.42616,4.42616,0,0,1,4.42144,4.42144v38.68761A4.42582,4.42582,0,0,1,942.89,285.223Zm-64.11091-43.10906v38.68761h64.11415L942.89,242.11391Z" transform="translate(-203.5 -174.13424)"/><path fill="#fff" d="M930.73105,242.11391h-39.793V224.42814c0-12.80987,8.36792-22.10721,19.89649-22.10721s19.89648,9.29734,19.89648,22.10721Zm-35.37153-4.42144h30.95009V224.42814c0-10.413-6.36338-17.68576-15.475-17.68576s-15.47505,7.27281-15.47505,17.68576Z" transform="translate(-203.5 -174.13424)"/><circle cx="707.335" cy="86.218" r="4.421" fill="#fff"/><path fill="#e6e6e6" d="M856.81994,421.28372H538.18006a5.90767,5.90767,0,0,1-5.90073-5.90073V336.342a5.90767,5.90767,0,0,1,5.90073-5.90072H856.81994a5.90767,5.90767,0,0,1,5.90073,5.90072V415.383A5.90767,5.90767,0,0,1,856.81994,421.28372Zm-318.63988-88.4821a3.5443,3.5443,0,0,0-3.54043,3.54043V415.383a3.54431,3.54431,0,0,0,3.54043,3.54044H856.81994a3.54431,3.54431,0,0,0,3.54043-3.54044V336.342a3.5443,3.5443,0,0,0-3.54043-3.54043Z" transform="translate(-203.5 -174.13424)"/><circle cx="384.19" cy="198.695" r="24.036" fill="#e6e6e6"/><path fill="#e6e6e6" d="M643.203,356.80541a4.00608,4.00608,0,1,0,0,8.01215H832.06074a4.00607,4.00607,0,0,0,0-8.01215Z" transform="translate(-203.5 -174.13424)"/><path fill="#e6e6e6" d="M643.203,380.84186a4.00607,4.00607,0,1,0,0,8.01214H724.469a4.00607,4.00607,0,1,0,0-8.01214Z" transform="translate(-203.5 -174.13424)"/><path fill="#ffb8b8" d="M467.022,382.46241,408.1189,413.778l-.74561-26.09629c19.22553-3.20948,37.51669-8.7974,54.42941-17.8946l6.1605-15.22008a10.31753,10.31753,0,0,1,17.53643-2.67788l0,0a10.31753,10.31753,0,0,1-.90847,14.06885Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M323.09819,563.26707v0a11.57378,11.57378,0,0,1,1.46928-9.36311l12.93931-19.85777a22.61221,22.61221,0,0,1,29.335-7.73927h0c-5.438,9.25647-4.67994,17.37679,1.87806,24.43365a117.63085,117.63085,0,0,0-27.93606,19.04492A11.57386,11.57386,0,0,1,323.09819,563.26707Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M469.70475,537.30274l0,0a22.20314,22.20314,0,0,1-18.87085,10.77909l-85.96027.65122-3.728-21.62264,38.026-11.18413-32.06116-24.60507L402.154,450.31277l63.65,59.32431A22.20317,22.20317,0,0,1,469.70475,537.30274Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M351.45266,685.17939H331.32124c-18.07509-123.89772-36.47383-248.14186,17.8946-294.51529l64.12231,10.43852L405.13646,455.532l-35.7892,41.00845Z" transform="translate(-203.5 -174.13424)"/><path fill="#2f2e41" d="M369.14917,713.24594h0a11.57381,11.57381,0,0,1-9.3632-1.46873l-21.85854-2.93814a22.61221,22.61221,0,0,1-7.741-29.33451v0c9.2568,5.43749,17.37707,4.67891,24.43354-1.8795,4.98593,10.06738,13.20093,9.45331,21.04657,17.93494A11.57385,11.57385,0,0,1,369.14917,713.24594Z" transform="translate(-203.5 -174.13424)"/><path fill="#ffb8b8" d="M399.1716,307.90158l-37.28042-8.94731c6.19168-12.6739,6.70155-26.77618,3.728-41.75406l25.35068-.74561C391.76421,275.08,394.16732,292.48081,399.1716,307.90158Z" transform="translate(-203.5 -174.13424)"/><path fill="#01a3a4" d="M409.41752,423.55243c-27.13873,18.49308-46.31418.63272-60.94729-26.92346,2.03338-16.86188-1.259-37.04061-7.35672-58.96635a40.13762,40.13762,0,0,1,24.50567-48.40124h0l32.06116,13.421c27.22362,22.19038,32.582,46.227,22.36825,71.5784Z" transform="translate(-203.5 -174.13424)"/><path fill="#ffb8b8" d="M331.32124,326.54178,301.4969,342.19956l52.9382,31.31555,7.366,18.16951a9.63673,9.63673,0,0,1-5.78925,12.73088h0a9.63673,9.63673,0,0,1-12.76159-8.54442l-.74489-12.66307-67.2838-22.20366a15.73306,15.73306,0,0,1-9.87265-9.61147v0a15.733,15.733,0,0,1,5.90262-18.30258l54.10485-37.11845Z" transform="translate(-203.5 -174.13424)"/><path fill="#01a3a4" d="M361.14557,329.52422c-12.43861-5.4511-23.74934.47044-38.026,5.21926l-2.23683-39.51725c14.17612-7.55568,27.69209-9.59281,40.26285-3.728Z" transform="translate(-203.5 -174.13424)"/><circle cx="172.525" cy="78.093" r="23.802" fill="#ffb8b8"/><path fill="#2f2e41" d="M404.5,249.22353c-23.56616,2.30811-41.52338-1.54606-53-12.52007v-8.8377h51Z" transform="translate(-203.5 -174.13424)"/></svg>`],
  ["frontend/react/web-base/public/assets/svg/undraw_not_found.svg", `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="860.131" height="571.148" data-name="Layer 1" viewBox="0 0 860.131 571.148"><path fill="#f2f2f2" d="M605.66974,324.95306c-7.66934-12.68446-16.7572-26.22768-30.98954-30.36953-16.482-4.7965-33.4132,4.73193-47.77473,14.13453a1392.15692,1392.15692,0,0,0-123.89338,91.28311l.04331.49238q46.22556-3.1878,92.451-6.37554c22.26532-1.53546,45.29557-3.2827,64.97195-13.8156,7.46652-3.99683,14.74475-9.33579,23.20555-9.70782,10.51175-.46217,19.67733,6.87923,26.8802,14.54931,42.60731,45.371,54.937,114.75409,102.73817,154.61591A1516.99453,1516.99453,0,0,0,605.66974,324.95306Z" transform="translate(-169.93432 -164.42601)"/><path fill="#e4e4e4" d="M867.57068,709.78146c-4.71167-5.94958-6.6369-7.343-11.28457-13.34761q-56.7644-73.41638-106.70791-151.79237-33.92354-53.23-64.48275-108.50439-14.54864-26.2781-28.29961-52.96872-10.67044-20.6952-20.8646-41.63793c-1.94358-3.98782-3.8321-7.99393-5.71122-12.00922-4.42788-9.44232-8.77341-18.93047-13.43943-28.24449-5.31686-10.61572-11.789-21.74485-21.55259-28.877a29.40493,29.40493,0,0,0-15.31855-5.89458c-7.948-.51336-15.28184,2.76855-22.17568,6.35295-50.43859,26.301-97.65922,59.27589-140.3696,96.79771A730.77816,730.77816,0,0,0,303.32241,496.24719c-1.008,1.43927-3.39164.06417-2.37419-1.38422q6.00933-8.49818,12.25681-16.81288A734.817,734.817,0,0,1,500.80465,303.06436q18.24824-11.82581,37.18269-22.54245c6.36206-3.60275,12.75188-7.15967,19.25136-10.49653,6.37146-3.27274,13.13683-6.21547,20.41563-6.32547,24.7701-.385,37.59539,27.66695,46.40506,46.54248q4.15283,8.9106,8.40636,17.76626,16.0748,33.62106,33.38729,66.628,10.68453,20.379,21.83683,40.51955,34.7071,62.71816,73.77854,122.897c34.5059,53.1429,68.73651,100.08874,108.04585,149.78472C870.59617,709.21309,868.662,711.17491,867.57068,709.78146Z" transform="translate(-169.93432 -164.42601)"/><path fill="#e4e4e4" d="M414.91613,355.804c-1.43911-1.60428-2.86927-3.20856-4.31777-4.81284-11.42244-12.63259-23.6788-25.11847-39.3644-32.36067a57.11025,57.11025,0,0,0-23.92679-5.54622c-8.56213.02753-16.93178,2.27348-24.84306,5.41792-3.74034,1.49427-7.39831,3.1902-11.00078,4.99614-4.11634,2.07182-8.15927,4.28118-12.1834,6.50883q-11.33112,6.27044-22.36816,13.09089-21.9606,13.57221-42.54566,29.21623-10.67111,8.11311-20.90174,16.75788-9.51557,8.03054-18.64618,16.492c-1.30169,1.20091-3.24527-.74255-1.94358-1.94347,1.60428-1.49428,3.22691-2.97938,4.84955-4.44613q6.87547-6.21546,13.9712-12.19257,12.93921-10.91827,26.54851-20.99312,21.16293-15.67614,43.78288-29.22541,11.30361-6.76545,22.91829-12.96259c2.33794-1.24675,4.70318-2.466,7.09572-3.6211a113.11578,113.11578,0,0,1,16.86777-6.86632,60.0063,60.0063,0,0,1,25.476-2.50265,66.32706,66.32706,0,0,1,23.50512,8.1314c15.40091,8.60812,27.34573,21.919,38.97,34.90915C418.03337,355.17141,416.09875,357.12405,414.91613,355.804Z" transform="translate(-169.93432 -164.42601)"/><path fill="#e4e4e4" d="M730.47659,486.71092l36.90462-13.498,18.32327-6.70183c5.96758-2.18267,11.92082-4.66747,18.08988-6.23036a28.53871,28.53871,0,0,1,16.37356.20862,37.73753,37.73753,0,0,1,12.771,7.91666,103.63965,103.63965,0,0,1,10.47487,11.18643c3.98932,4.79426,7.91971,9.63877,11.86772,14.46706q24.44136,29.89094,48.56307,60.04134,24.12117,30.14991,47.91981,60.556,23.85681,30.48041,47.38548,61.21573,2.88229,3.76518,5.75966,7.53415c1.0598,1.38809,3.44949.01962,2.37472-1.38808Q983.582,650.9742,959.54931,620.184q-24.09177-30.86383-48.51647-61.46586-24.42421-30.60141-49.17853-60.93743-6.16706-7.55761-12.35445-15.09858c-3.47953-4.24073-6.91983-8.52718-10.73628-12.47427-7.00539-7.24516-15.75772-13.64794-26.23437-13.82166-6.15972-.10214-12.121,1.85248-17.844,3.92287-6.16968,2.232-12.32455,4.50571-18.48633,6.75941l-37.16269,13.59243-9.29067,3.3981c-1.64875.603-.93651,3.2619.73111,2.652Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M366.37741,334.52609c-18.75411-9.63866-42.77137-7.75087-60.00508,4.29119a855.84708,855.84708,0,0,1,97.37056,22.72581C390.4603,353.75916,380.07013,341.5635,366.37741,334.52609Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M306.18775,338.7841l-3.61042,2.93462c1.22123-1.02713,2.4908-1.99013,3.795-2.90144C306.31073,338.80665,306.24935,338.79473,306.18775,338.7841Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M831.54929,486.84576c-3.6328-4.42207-7.56046-9.05222-12.99421-10.84836l-5.07308.20008A575.436,575.436,0,0,0,966.74929,651.418Q899.14929,569.13192,831.54929,486.84576Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M516.08388,450.36652A37.4811,37.4811,0,0,0,531.015,471.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M749.08388,653.36652A37.4811,37.4811,0,0,0,764.015,674.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)"/><path fill="#f2f2f2" d="M284.08388,639.36652A37.4811,37.4811,0,0,0,299.015,660.32518c2.82017,1.92011,6.15681,3.76209,7.12158,7.03463a8.37858,8.37858,0,0,1-.87362,6.1499,24.88351,24.88351,0,0,1-3.86126,5.04137l-.13667.512c-6.99843-4.14731-13.65641-9.3934-17.52227-16.55115s-4.40553-16.53895.34116-23.14544" transform="translate(-169.93432 -164.42601)"/><circle cx="649.249" cy="51" r="51" fill="#0EA5E9"/><path fill="#f0f0f0" d="M911.21851,176.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C957.07935,195.76,935.93537,179.63727,911.21851,176.29639Z" transform="translate(-169.93432 -164.42601)"/><path fill="#f0f0f0" d="M805.21851,244.29639c-24.7168-3.34094-52.93512,10.01868-59.34131,34.12353a21.59653,21.59653,0,0,0-41.09351,2.10871l2.82972,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C851.07935,263.76,829.93537,247.63727,805.21851,244.29639Z" transform="translate(-169.93432 -164.42601)"/><path fill="#ccc" d="M1020.94552,257.15423a.98189.98189,0,0,1-.30176-.04688C756.237,173.48919,523.19942,184.42376,374.26388,208.32122c-20.26856,3.251-40.59131,7.00586-60.40381,11.16113-5.05811,1.05957-10.30567,2.19532-15.59668,3.37793-6.31885,1.40723-12.55371,2.85645-18.53223,4.30567q-3.873.917-7.59472,1.84863c-3.75831.92773-7.57178,1.89453-11.65967,2.957-4.56787,1.17774-9.209,2.41309-13.79737,3.67188a.44239.44239,0,0,1-.05127.01465l.00049.001c-5.18261,1.415-10.33789,2.8711-15.32324,4.3252-2.69824.77929-5.30371,1.54785-7.79932,2.30664-.2788.07715-.52587.15136-.77636.22754l-.53614.16308c-.31054.09473-.61718.1875-.92382.27539l-.01953.00586.00048.001-.81152.252c-.96777.293-1.91211.5791-2.84082.86426-24.54492,7.56641-38.03809,12.94922-38.17139,13.00195a1,1,0,1,1-.74414-1.85644c.13428-.05274,13.69336-5.46289,38.32764-13.05762.93213-.28613,1.87891-.57226,2.84961-.86621l.7539-.23438c.02588-.00976.05176-.01757.07813-.02539.30518-.08691.60986-.17968.91943-.27343l.53711-.16309c.26758-.08105.53125-.16113.80127-.23535,2.47852-.75391,5.09278-1.52441,7.79785-2.30664,4.98731-1.45508,10.14746-2.91113,15.334-4.32813.01611-.00586.03271-.00976.04883-.01464v-.001c4.60449-1.2627,9.26269-2.50293,13.84521-3.68457,4.09424-1.06348,7.915-2.03223,11.67969-2.96192q3.73755-.93017,7.60937-1.85253c5.98536-1.45118,12.23291-2.90235,18.563-4.3125,5.29932-1.1836,10.55567-2.32227,15.62207-3.38282,19.84326-4.16211,40.19776-7.92285,60.49707-11.17871C523.09591,182.415,756.46749,171.46282,1021.2463,255.2011a.99974.99974,0,0,1-.30078,1.95313Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M432.92309,584.266a6.72948,6.72948,0,0,0-1.7-2.67,6.42983,6.42983,0,0,0-.92-.71c-2.61-1.74-6.51-2.13-8.99,0a5.81012,5.81012,0,0,0-.69.71q-1.11,1.365-2.28,2.67c-1.28,1.46-2.59,2.87-3.96,4.24-.39.38-.78.77-1.18,1.15-.23.23-.46.45-.69.67-.88.84-1.78,1.65-2.69,2.45-.48.43-.96.85-1.45,1.26-.73.61-1.46,1.22-2.2,1.81-.07.05-.14.1-.21.16-.02.01-.03.03-.05.04-.01,0-.02,0-.03.02a.17861.17861,0,0,0-.07.05c-.22.15-.37.25-.48.34.04-.01995.08-.05.12-.07-.18.14-.37.28-.55.42-1.75,1.29-3.54,2.53-5.37,3.69a99.21022,99.21022,0,0,1-14.22,7.55c-.33.13-.67.27-1.01.4a85.96993,85.96993,0,0,1-40.85,6.02q-2.13008-.165-4.26-.45c-1.64-.24-3.27-.53-4.89-.86a97.93186,97.93186,0,0,1-18.02-5.44,118.65185,118.65185,0,0,1-20.66-12.12c-1-.71-2.01-1.42-3.02-2.11,1.15-2.82,2.28-5.64,3.38-8.48.55-1.37,1.08-2.74,1.6-4.12,4.09-10.63,7.93-21.36,11.61-32.13q5.58-16.365,10.53-32.92.51-1.68.99-3.36,2.595-8.745,4.98-17.53c.15-.56994.31-1.12994.45-1.7q.68994-2.52,1.35-5.04c1-3.79-1.26-8.32-5.24-9.23a7.63441,7.63441,0,0,0-9.22,5.24c-.43,1.62-.86,3.23-1.3,4.85q-3.165,11.74494-6.66,23.41-.51,1.68-1.02,3.36-7.71,25.41-16.93,50.31-1.11,3.015-2.25,6.01c-.37.98-.74,1.96-1.12,2.94-.73,1.93-1.48,3.86-2.23,5.79-.43006,1.13-.87006,2.26-1.31,3.38-.29.71-.57,1.42-.85,2.12a41.80941,41.80941,0,0,0-8.81-2.12l-.48-.06a27.397,27.397,0,0,0-7.01.06,23.91419,23.91419,0,0,0-17.24,10.66c-4.77,7.51-4.71,18.25,1.98,24.63,6.89,6.57,17.32,6.52,25.43,2.41a28.35124,28.35124,0,0,0,10.52-9.86,50.56939,50.56939,0,0,0,2.74-4.65c.21.14.42.28.63.43.8.56,1.6,1.13,2.39,1.69a111.73777,111.73777,0,0,0,14.51,8.91,108.35887,108.35887,0,0,0,34.62,10.47c.27.03.53.07.8.1,1.33.17,2.67.3,4.01.41a103.78229,103.78229,0,0,0,55.58-11.36q2.175-1.125,4.31-2.36,3.315-1.92,6.48-4.08c1.15-.78,2.27-1.57,3.38-2.4a101.04244,101.04244,0,0,0,13.51-11.95q2.35491-2.475,4.51-5.11005a8.0612,8.0612,0,0,0,2.2-5.3A7.5644,7.5644,0,0,0,432.92309,584.266Zm-165.59,23.82c.21-.15.42-.31.62-.47C267.89312,607.766,267.60308,607.936,267.33312,608.086Zm3.21-3.23c-.23.26-.44.52-.67.78a23.36609,23.36609,0,0,1-2.25,2.2c-.11.1-.23.2-.35.29a.00976.00976,0,0,0-.01.01,3.80417,3.80417,0,0,0-.42005.22q-.645.39-1.31994.72a17.00459,17.00459,0,0,1-2.71.75,16.79925,16.79925,0,0,1-2.13.02h-.02a14.82252,14.82252,0,0,1-1.45-.4c-.24-.12-.47-.25994-.7-.4-.09-.08-.17005-.16-.22-.21a2.44015,2.44015,0,0,1-.26995-.29.0098.0098,0,0,0-.01-.01c-.11005-.2-.23005-.4-.34-.6a.031.031,0,0,1-.01-.02c-.08-.25-.15-.51-.21-.77a12.51066,12.51066,0,0,1,.01-1.37,13.4675,13.4675,0,0,1,.54-1.88,11.06776,11.06776,0,0,1,.69-1.26c.02-.04.12-.2.23-.38.01-.01.01-.01.01-.02.15-.17.3-.35.46-.51.27-.3.56-.56.85-.83a18.02212,18.02212,0,0,1,1.75-1.01,19.48061,19.48061,0,0,1,2.93-.79,24.98945,24.98945,0,0,1,4.41.04,30.30134,30.30134,0,0,1,4.1,1.01,36.94452,36.94452,0,0,1-2.77,4.54C270.6231,604.746,270.58312,604.806,270.54308,604.856Zm-11.12-3.29a2.18029,2.18029,0,0,1-.31.38995A1.40868,1.40868,0,0,1,259.42309,601.566Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M402.86309,482.136q-.13494,4.71-.27,9.42-.285,10.455-.59,20.92-.315,11.775-.66,23.54-.165,6.07507-.34,12.15-.465,16.365-.92,32.72c-.03,1.13-.07,2.25-.1,3.38q-.225,8.11506-.45,16.23-.255,8.805-.5,17.61-.18,6.59994-.37,13.21-1.34994,47.895-2.7,95.79a7.64844,7.64844,0,0,1-7.5,7.5,7.56114,7.56114,0,0,1-7.5-7.5q.75-26.94,1.52-53.88.675-24.36,1.37-48.72.225-8.025.45-16.06.345-12.09.68-24.18c.03-1.13.07-2.25.1-3.38.02-.99.05-1.97.08-2.96q.66-23.475,1.32-46.96.27-9.24.52-18.49.3-10.545.6-21.08c.09-3.09.17005-6.17.26-9.26a7.64844,7.64844,0,0,1,7.5-7.5A7.56116,7.56116,0,0,1,402.86309,482.136Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M814.29118,484.2172a893.23753,893.23753,0,0,1-28.16112,87.94127c-3.007,7.94641-6.08319,15.877-9.3715,23.71185l.75606-1.7916a54.58274,54.58274,0,0,1-5.58953,10.61184q-.22935.32119-.46685.63642,1.16559-1.49043.4428-.589c-.25405.30065-.5049.60219-.7676.89546a23.66436,23.66436,0,0,1-2.2489,2.20318q-.30139.25767-.61188.5043l.93783-.729c-.10884.25668-.87275.59747-1.11067.74287a18.25362,18.25362,0,0,1-2.40479,1.21853l1.7916-.75606a19.0859,19.0859,0,0,1-4.23122,1.16069l1.9938-.26791a17.02055,17.02055,0,0,1-4.29785.046l1.99379.2679a14.0022,14.0022,0,0,1-3.40493-.917l1.79159.75606a12.01175,12.01175,0,0,1-1.67882-.89614c-.27135-.17688-1.10526-.80852-.01487.02461,1.13336.86595.14562.07434-.08763-.15584-.19427-.19171-.36962-.4-.55974-.595-.88208-.90454.99637,1.55662.39689.49858a18.18179,18.18179,0,0,1-.87827-1.63672l.75606,1.7916a11.92493,11.92493,0,0,1-.728-2.65143l.26791,1.9938a13.65147,13.65147,0,0,1-.00316-3.40491l-.2679,1.9938a15.96371,15.96371,0,0,1,.99486-3.68011l-.75606,1.7916a16.72914,16.72914,0,0,1,1.17794-2.29848,6.72934,6.72934,0,0,1,.72851-1.0714c.04915.01594-1.26865,1.51278-.56937.757.1829-.19767.354-.40592.539-.602.29617-.31382.61354-.60082.92561-.89791,1.04458-.99442-1.46188.966-.25652.17907a19.0489,19.0489,0,0,1,2.74925-1.49923l-1.79159.75606a20.31136,20.31136,0,0,1,4.99523-1.33984l-1.9938.2679a25.62828,25.62828,0,0,1,6.46062.07647l-1.9938-.2679a33.21056,33.21056,0,0,1,7.89178,2.2199l-1.7916-.75606c5.38965,2.31383,10.16308,5.74926,14.928,9.118a111.94962,111.94962,0,0,0,14.50615,8.9065,108.38849,108.38849,0,0,0,34.62226,10.47371,103.93268,103.93268,0,0,0,92.58557-36.75192,8.07773,8.07773,0,0,0,2.1967-5.3033,7.63232,7.63232,0,0,0-2.1967-5.3033c-2.75154-2.52586-7.94926-3.239-10.6066,0a95.63575,95.63575,0,0,1-8.10664,8.72692q-2.01736,1.914-4.14232,3.70983-1.21364,1.02588-2.46086,2.01121c-.3934.31081-1.61863,1.13807.26309-.19744-.43135.30614-.845.64036-1.27058.95478a99.26881,99.26881,0,0,1-20.33215,11.56478l1.79159-.75606a96.8364,96.8364,0,0,1-24.17119,6.62249l1.99379-.2679a97.64308,97.64308,0,0,1-25.75362-.03807l1.99379.2679a99.79982,99.79982,0,0,1-24.857-6.77027l1.7916.75607a116.02515,116.02515,0,0,1-21.7364-12.59112,86.87725,86.87725,0,0,0-11.113-6.99417,42.8238,42.8238,0,0,0-14.43784-4.38851c-9.43884-1.11076-19.0571,2.56562-24.24624,10.72035-4.77557,7.50482-4.71394,18.24362,1.97369,24.62519,6.8877,6.5725,17.31846,6.51693,25.43556,2.40567,7.81741-3.95946,12.51288-12.18539,15.815-19.94186,7.43109-17.45514,14.01023-35.31364,20.1399-53.263q9.09651-26.63712,16.49855-53.81332.91661-3.36581,1.80683-6.73869c1.001-3.78869-1.26094-8.32-5.23829-9.22589a7.63317,7.63317,0,0,0-9.22589,5.23829Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M889.12382,482.13557l-2.69954,95.79311-2.68548,95.29418-1.5185,53.88362a7.56465,7.56465,0,0,0,7.5,7.5,7.64923,7.64923,0,0,0,7.5-7.5l2.69955-95.79311,2.68548-95.29418,1.51849-53.88362a7.56465,7.56465,0,0,0-7.5-7.5,7.64923,7.64923,0,0,0-7.5,7.5Z" transform="translate(-169.93432 -164.42601)"/><path d="M629.52566,700.36106h2.32885V594.31942h54.32863v-2.32291H631.85451V547.25214H673.8102q-.92256-1.17339-1.89893-2.31694H631.85451V515.38231c-.7703-.32846-1.54659-.64493-2.32885-.9435V544.9352h-45.652V507.07c-.78227.03583-1.55258.08959-2.3289.15527v37.71h-36.4201V516.68409c-.78227.34636-1.55258.71061-2.31694,1.0928V544.9352h-30.6158v2.31694h30.6158v44.74437h-30.6158v2.32291h30.6158V700.36106h2.31694V594.31942a36.41283,36.41283,0,0,1,36.4201,36.42007v69.62157h2.3289V594.31942h45.652Zm-84.401-108.36455V547.25214h36.4201v44.74437Zm38.749,0V547.25214h.91362a44.74135,44.74135,0,0,1,44.73842,44.74437Z" opacity=".2" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M615.30309,668.566a63.05854,63.05854,0,0,1-20.05,33.7c-.74.64-1.48,1.26-2.25,1.87q-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43l-.27.03-.19-1.64-.76-6.64a37.623,37.623,0,0,1-3.3-32.44c2.64-7.12,7.42-13.41,12.12-19.65,6.49-8.62,12.8-17.14,13.03-27.65a60.54415,60.54415,0,0,1,7.9,13.33,16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32a63.99025,63.99025,0,0,1,2.45,12.18A61.18851,61.18851,0,0,1,615.30309,668.566Z" transform="translate(-169.93432 -164.42601)"/><path fill="#0EA5E9" d="M648.50311,642.356c-5.9,4.29-9.35,10.46-12.03,17.26a16.62776,16.62776,0,0,0-7.17,4.58c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39-2.68,8.04-5.14,16.36-9.88,23.15a36.98942,36.98942,0,0,1-12.03,10.91,38.49166,38.49166,0,0,1-4.02,1.99q-7.62.585-14.95,1.25-2.805.25506-5.57.52c-1.53.14-3.04.29-4.54.43q-.015-.825,0-1.65a63.30382,63.30382,0,0,1,15.25-39.86c.45-.52.91-1.03,1.38-1.54a61.7925,61.7925,0,0,1,16.81-12.7A62.65425,62.65425,0,0,1,648.50311,642.356Z" transform="translate(-169.93432 -164.42601)"/><path fill="#0EA5E9" d="M589.16308,699.526l-1.15,3.4-.58,1.73c-1.53.14-3.04.29-4.54.43l-.27.03c-1.66.17-3.31.34-4.96.51-.43-.5-.86-1.01-1.28-1.53a62.03045,62.03045,0,0,1,8.07-87.11c-1.32,6.91.22,13.53,2.75,20.1-.27.11-.53.22-.78.34a16.432,16.432,0,0,0-5.12,3.76995c-.41.45-.82,1.08-.54,1.62006.24.46.84.57,1.36.62994,1.25.13,2.51.26,3.76.39,1,.11,2,.21,3,.32q.705.075,1.41.15c.07.15.13.29.2.44,2.85,6.18,5.92,12.39,7.65,18.83a43.66591,43.66591,0,0,1,1.02,4.91A37.604,37.604,0,0,1,589.16308,699.526Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M689.82123,554.48655c-8.60876-16.79219-21.94605-30.92088-37.63219-41.30357a114.2374,114.2374,0,0,0-52.5626-18.37992q-3.69043-.33535-7.399-.39281c-2.92141-.04371-46.866,12.63176-61.58712,22.98214a114.29462,114.29462,0,0,0-35.333,39.527,102.49972,102.49972,0,0,0-12.12557,51.6334,113.56387,113.56387,0,0,0,14.70268,51.47577,110.47507,110.47507,0,0,0,36.44425,38.74592C549.66655,708.561,565.07375,734.51,583.1831,735.426c18.24576.923,39.05418-23.55495,55.6951-30.98707a104.42533,104.42533,0,0,0,41.72554-34.005,110.24964,110.24964,0,0,0,19.599-48.94777c2.57368-18.08313,1.37415-36.73271-4.80123-54.01627a111.85969,111.85969,0,0,0-5.58024-12.9833c-1.77961-3.50519-6.996-4.7959-10.26142-2.69063a7.67979,7.67979,0,0,0-2.69064,10.26142q1.56766,3.08773,2.91536,6.27758l-.75606-1.7916a101.15088,101.15088,0,0,1,6.87641,25.53816l-.26791-1.99379a109.2286,109.2286,0,0,1-.06613,28.68252l.26791-1.9938a109.73379,109.73379,0,0,1-7.55462,27.67419l.75606-1.79159a104.212,104.212,0,0,1-6.67151,13.09835q-1.92308,3.18563-4.08062,6.22159c-.63172.8881-1.28287,1.761-1.939,2.63114-.85625,1.13555,1.16691-1.48321.28228-.36941-.15068.18972-.30049.3801-.45182.5693q-.68121.85165-1.3818,1.68765a93.61337,93.61337,0,0,1-10.17647,10.38359q-1.36615,1.19232-2.77786,2.33115c-.46871.37832-.932.77269-1.42079,1.12472.01861-.0134,1.57956-1.19945.65556-.511-.2905.21644-.57851.43619-.86961.65184q-2.90994,2.1558-5.97433,4.092a103.48509,103.48509,0,0,1-14.75565,7.7131l1.7916-.75606a109.21493,109.21493,0,0,1-27.59663,7.55154l1.9938-.26791a108.15361,108.15361,0,0,1-28.58907.0506l1.99379.2679a99.835,99.835,0,0,1-25.09531-6.78448l1.79159.75607a93.64314,93.64314,0,0,1-13.41605-6.99094q-3.17437-2-6.18358-4.24743c-.2862-.21359-.56992-.43038-.855-.64549-.9155-.69088.65765.50965.67021.51787a19.16864,19.16864,0,0,1-1.535-1.22469q-1.45353-1.18358-2.86136-2.4218a101.98931,101.98931,0,0,1-10.49319-10.70945q-1.21308-1.43379-2.37407-2.91054c-.33524-.4263-.9465-1.29026.40424.5289-.17775-.23939-.36206-.47414-.54159-.71223q-.64657-.85751-1.27568-1.72793-2.203-3.048-4.18787-6.24586a109.29037,109.29037,0,0,1-7.8054-15.10831l.75606,1.7916a106.58753,106.58753,0,0,1-7.34039-26.837l.26791,1.9938a97.86589,97.86589,0,0,1-.04843-25.63587l-.2679,1.9938A94.673,94.673,0,0,1,505.27587,570.55l-.75606,1.7916a101.55725,101.55725,0,0,1,7.19519-13.85624q2.0655-3.32328,4.37767-6.4847.52528-.71832,1.06244-1.42786c.324-.4279,1.215-1.49333-.30537.38842.14906-.18449.29252-.37428.43942-.56041q1.26882-1.60756,2.59959-3.1649A107.40164,107.40164,0,0,1,530.772,536.21508q1.47408-1.29171,2.99464-2.52906.6909-.56218,1.39108-1.11284c.18664-.14673.37574-.29073.56152-.43858-1.99743,1.58953-.555.43261-.10157.09288q3.13393-2.34833,6.43534-4.46134a103.64393,103.64393,0,0,1,15.38655-8.10791l-1.7916.75606c7.76008-3.25839,42.14086-10.9492,48.394-10.10973l-1.99379-.26791A106.22471,106.22471,0,0,1,628.768,517.419l-1.7916-.75606a110.31334,110.31334,0,0,1,12.6002,6.32922q3.04344,1.78405,5.96742,3.76252,1.38351.93658,2.73809,1.915.677.48917,1.34626.98885c.24789.185.49386.37253.74135.558,1.03924.779-1.43148-1.1281-.34209-.26655a110.84261,110.84261,0,0,1,10.36783,9.2532q2.401,2.445,4.63686,5.04515,1.14659,1.33419,2.24643,2.70757c.36436.45495,1.60506,2.101.08448.08457.37165.49285.74744.98239,1.11436,1.47884a97.97718,97.97718,0,0,1,8.39161,13.53807c1.79317,3.49775,6.98675,4.80186,10.26142,2.69064A7.67666,7.67666,0,0,0,689.82123,554.48655Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M602.43116,676.88167a3.77983,3.77983,0,0,1-2.73939-6.55137c.09531-.37882.16368-.65085.259-1.02968q-.05115-.12366-.1029-.24717c-3.47987-8.29769-25.685,14.83336-26.645,22.63179a30.029,30.029,0,0,0,.52714,10.32752A120.39223,120.39223,0,0,1,562.77838,652.01a116.20247,116.20247,0,0,1,.72078-12.96332q.59712-5.293,1.65679-10.51055a121.78667,121.78667,0,0,1,24.1515-51.61646c6.87378.38364,12.898-.66348,13.47967-13.98532.10346-2.36972,1.86113-4.42156,2.24841-6.756-.65621.08607-1.32321.13985-1.97941.18285-.20444.0107-.41958.02149-.624.03228l-.07709.00346a3.745,3.745,0,0,1-3.07566-6.10115q.425-.52305.85054-1.04557c.43036-.53793.87143-1.06507,1.30171-1.60292a1.865,1.865,0,0,0,.13986-.16144c.49494-.61322.98971-1.21564,1.48465-1.82885a10.82911,10.82911,0,0,0-3.55014-3.43169c-4.95941-2.90463-11.80146-.89293-15.38389,3.59313-3.59313,4.486-4.27083,10.77947-3.023,16.3843a43.39764,43.39764,0,0,0,6.003,13.3828c-.269.34429-.54872.67779-.81765,1.02209a122.57366,122.57366,0,0,0-12.79359,20.2681c1.0163-7.93863-11.41159-36.60795-16.21776-42.68052-5.773-7.29409-17.61108-4.11077-18.62815,5.13562q-.01476.13428-.02884.26849,1.07082.60411,2.0964,1.28237a5.12707,5.12707,0,0,1-2.06713,9.33031l-.10452.01613c-9.55573,13.64367,21.07745,49.1547,28.74518,41.18139a125.11045,125.11045,0,0,0-6.73449,31.69282,118.66429,118.66429,0,0,0,.08607,19.15986l-.03231-.22593C558.90163,648.154,529.674,627.51374,521.139,629.233c-4.91675.99041-9.75952.76525-9.01293,5.72484q.01788.11874.03635.2375a34.4418,34.4418,0,0,1,3.862,1.86105q1.07082.60423,2.09639,1.28237a5.12712,5.12712,0,0,1-2.06712,9.33039l-.10464.01606c-.07528.01079-.13987.02157-.21507.03237-4.34967,14.96631,27.90735,39.12,47.5177,31.43461h.01081a125.07484,125.07484,0,0,0,8.402,24.52806H601.679c.10765-.3335.20443-.67779.3013-1.01129a34.102,34.102,0,0,1-8.30521-.49477c2.22693-2.73257,4.45377-5.48664,6.6807-8.21913a1.86122,1.86122,0,0,0,.13986-.16135c1.12956-1.39849,2.26992-2.78627,3.39948-4.18476l.00061-.00173a49.95232,49.95232,0,0,0-1.46367-12.72495Zm-34.37066-67.613.0158-.02133-.0158.04282Zm-6.64832,59.93237-.25822-.58084c.01079-.41957.01079-.83914,0-1.26942,0-.11845-.0215-.23672-.0215-.35508.09678.74228.18285,1.48464.29042,2.22692Z" transform="translate(-169.93432 -164.42601)"/><circle cx="95.249" cy="439" r="11" fill="#3f3d56"/><circle cx="227.249" cy="559" r="11" fill="#3f3d56"/><circle cx="728.249" cy="559" r="11" fill="#3f3d56"/><circle cx="755.249" cy="419" r="11" fill="#3f3d56"/><circle cx="723.249" cy="317" r="11" fill="#3f3d56"/><path fill="#3f3d56" d="M434.1831,583.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,434.1831,583.426Z" transform="translate(-169.93432 -164.42601)"/><circle cx="484.249" cy="349" r="11" fill="#3f3d56"/><path fill="#3f3d56" d="M545.1831,513.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,545.1831,513.426Z" transform="translate(-169.93432 -164.42601)"/><path fill="#3f3d56" d="M403.1831,481.426a10.949,10.949,0,1,1-.21-2.16A10.9921,10.9921,0,0,1,403.1831,481.426Z" transform="translate(-169.93432 -164.42601)"/><circle cx="599.249" cy="443" r="11" fill="#3f3d56"/><circle cx="426.249" cy="338" r="16" fill="#3f3d56"/><path fill="#cacaca" d="M1028.875,735.26666l-857.75.30733a1.19068,1.19068,0,1,1,0-2.38136l857.75-.30734a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-169.93432 -164.42601)"/></svg>`],
  ["frontend/react/web-base/public/assets/svg/undraw_register.svg", `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="870" height="520.139" data-name="Layer 1" viewBox="0 0 870 520.139"><path fill="#f2f2f2" d="M831.09242,704.18737c-11.13833-9.4118-17.90393-24.27967-16.12965-38.75366s12.76358-27.78,27.01831-30.85364,30.50415,5.43465,34.83378,19.3594c2.3828-26.84637,5.12854-54.81757,19.40179-77.67976,12.92407-20.70115,35.3088-35.51364,59.5688-38.16357s49.80265,7.35859,64.93272,26.50671,18.83461,46.98549,8.2379,68.96911c-7.80623,16.19456-22.188,28.24676-37.2566,38.05184a240.45181,240.45181,0,0,1-164.45376,35.97709Z" transform="translate(-165.00003 -189.93073)"/><path fill="#fff" d="M996.72788,546.00953a393.41394,393.41394,0,0,0-54.82622,54.44229,394.561,394.561,0,0,0-61.752,103.194c-1.112,2.72484,3.31272,3.911,4.4123,1.21642A392.34209,392.34209,0,0,1,999.96343,549.24507c2.28437-1.86015-.97-5.08035-3.23555-3.23554Z" transform="translate(-165.00003 -189.93073)"/><path fill="#f2f2f2" d="M445.06712,701.63014c15.2985-12.92712,24.591-33.34815,22.15408-53.22817s-17.53079-38.15588-37.10966-42.37749-41.89745,7.46449-47.8442,26.59014c-3.27278-36.87349-7.04406-75.29195-26.64837-106.69317-17.75122-28.433-48.49666-48.778-81.81777-52.41768s-68.40395,10.107-89.18511,36.407-25.86934,64.53459-11.31476,94.72909c10.72185,22.24324,30.47528,38.79693,51.17195,52.26422,66.02954,42.9653,147.93912,60.88443,225.8773,49.41454" transform="translate(-165.00003 -189.93073)"/><path fill="#fff" d="M217.56676,484.37281a540.35491,540.35491,0,0,1,75.30383,74.77651A548.0761,548.0761,0,0,1,352.25665,647.04a545.835,545.835,0,0,1,25.43041,53.8463c1.52726,3.74257-4.55,5.37169-6.06031,1.67075a536.35952,536.35952,0,0,0-49.009-92.727A539.73411,539.73411,0,0,0,256.889,528.63168a538.44066,538.44066,0,0,0-43.76626-39.81484c-3.13759-2.55492,1.33232-6.97788,4.444-4.444Z" transform="translate(-165.00003 -189.93073)"/><path fill="#f2f2f2" d="M789.5,708.93073h-365v-374.5c0-79.67773,64.82227-144.5,144.49976-144.5h76.00049c79.67749,0,144.49975,64.82227,144.49975,144.5Z" transform="translate(-165.00003 -189.93073)"/><path fill="#ccc" d="M713.5,708.93073h-289v-374.5a143.38177,143.38177,0,0,1,27.59571-84.94434c.66381-.90478,1.32592-1.79785,2.00878-2.68115a144.46633,144.46633,0,0,1,30.75415-29.85058c.65967-.48,1.322-.95166,1.99415-1.42334a144.15958,144.15958,0,0,1,31.47216-16.459c.66089-.25049,1.33374-.50146,2.00659-.74219a144.01979,144.01979,0,0,1,31.1084-7.33593c.65772-.08985,1.333-.16016,2.0083-.23047a146.28769,146.28769,0,0,1,31.10547,0c.67334.07031,1.34864.14062,2.01416.23144a143.995,143.995,0,0,1,31.10034,7.335c.6731.24073,1.346.4917,2.00879.74268a143.79947,143.79947,0,0,1,31.10645,16.21582c.67163.46143,1.344.93311,2.00635,1.40478a145.987,145.987,0,0,1,18.38354,15.564,144.305,144.305,0,0,1,12.72437,14.55078c.68066.88037,1.34277,1.77344,2.00537,2.67676A143.38227,143.38227,0,0,1,713.5,334.43073Z" transform="translate(-165.00003 -189.93073)"/><circle cx="525" cy="335.5" r="16" fill="#01a3a4"/><polygon fill="#ffb8b8" points="594.599 507.783 582.339 507.783 576.506 460.495 594.601 460.496 594.599 507.783"/><path fill="#2f2e41" d="M573.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H558.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z"/><polygon fill="#ffb8b8" points="655.599 507.783 643.339 507.783 637.506 460.495 655.601 460.496 655.599 507.783"/><path fill="#2f2e41" d="M634.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H619.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z"/><path fill="#ffb8b8" d="M698.09758,528.60035a10.74272,10.74272,0,0,1,4.51052-15.84307l41.67577-114.86667L764.791,409.082,717.20624,518.85271a10.80091,10.80091,0,0,1-19.10866,9.74764Z" transform="translate(-165.00003 -189.93073)"/><path fill="#ffb8b8" d="M814.33644,550.1843a10.74269,10.74269,0,0,1-2.89305-16.21659L798.53263,412.4583l23.33776,1.06622L827.23606,533.045a10.80091,10.80091,0,0,1-12.89962,17.13934Z" transform="translate(-165.00003 -189.93073)"/><circle cx="612.106" cy="162.123" r="24.561" fill="#ffb8b8"/><path fill="#01a3a4" d="M814.17958,522.54937H740.13271l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06933-14.5835h.00025c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23448,28.23448,0,0,1,9.45947,23.396Z" transform="translate(-165.00003 -189.93073)"/><path fill="#01a3a4" d="M754.35439,448.1812,721.01772,441.418l15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99755Z" transform="translate(-165.00003 -189.93073)"/><path fill="#01a3a4" d="M797.05043,460.73882l-2.00415-45.94141c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13476,7.60547-1.32959,15.03174,4.66016,16.55835,13.35986l7.533,42.92774Z" transform="translate(-165.00003 -189.93073)"/><path fill="#2f2e41" d="M811.71606,517.04933c11.91455,45.37671,13.21436,103.0694,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02972-10.61328-122.71527-2-160Z" transform="translate(-165.00003 -189.93073)"/><path fill="#2f2e41" d="M793.2891,371.03474c-4.582,4.88079-13.09131,2.26067-13.68835-4.40717a8.05467,8.05467,0,0,1,.01014-1.55569c.30826-2.95357,2.01461-5.63506,1.60587-8.7536a4.59046,4.59046,0,0,0-.84011-2.14892c-3.65124-4.88933-12.22227,2.18687-15.6682-2.23929-2.113-2.714.3708-6.98713-1.25065-10.02051-2.14006-4.00358-8.47881-2.0286-12.45388-4.22116-4.42275-2.43948-4.15822-9.22524-1.24686-13.35269,3.55052-5.03359,9.77572-7.71951,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78753,4.88021,6.97317,5.34986,16.34793,2.90917,24.50174C802.09785,360.98987,797.03077,367.04906,793.2891,371.03474Z" transform="translate(-165.00003 -189.93073)"/><path fill="#3f3d56" d="M1004.98163,709.57417h-738.294a1.19069,1.19069,0,0,1,0-2.38137h738.294a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-165.00003 -189.93073)"/><path fill="#fff" d="M634,600.43073H504a6.46539,6.46539,0,0,1-6.5-6.41531V303.846a6.46539,6.46539,0,0,1,6.5-6.41531H634a6.46539,6.46539,0,0,1,6.5,6.41531V594.01542A6.46539,6.46539,0,0,1,634,600.43073Z" transform="translate(-165.00003 -189.93073)"/><rect width="143" height="2" x="332.5" y="201.39" fill="#ccc"/><rect width="143" height="2" x="333" y="315.5" fill="#ccc"/><rect width="2" height="304" x="377.5" y="107.5" fill="#ccc"/><rect width="2" height="304" x="427.5" y="107.5" fill="#ccc"/></svg>`],
  ["frontend/react/web-base/src/components/Common/CustomIcons.tsx.hbs", `import { FC } from 'react';

export const FacebookIcon: FC = () => {
  return (
    <span>
      <svg
        className="w-5 h-5"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Facebook</title>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </span>
  );
};

export const InstagramIcon: FC = () => {
  return (
    <span>
      <svg
        className="w-5 h-5"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Instagram</title>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </span>
  );
};

export const TwitterIcon: FC = () => {
  return (
    <span>
      <svg
        className="w-5 h-5"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Twitter</title>
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    </span>
  );
};

export const LinkedInIcon: FC = () => {
  return (
    <span>
      <svg
        className="w-5 h-5"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>LinkedIn</title>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </span>
  );
};

export const GoogleIcon: FC = () => {
  return (
    <span>
      <svg
        className="h-5 w-5 shrink-0"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Google</title>
        <path
          d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
          fill="#4285F4"
        />
        <path
          d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
          fill="#34A853"
        />
        <path
          d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
          fill="#FBBC05"
        />
        <path
          d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
          fill="#EA4335"
        />
      </svg>
    </span>
  );
};

export const GitHubIcon: FC = () => {
  return (
    <span>
      <svg
        className="h-5 w-5 shrink-0"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </span>
  );
};
`],
  ["frontend/react/web-base/src/components/Common/Loader.tsx.hbs", `{{#if (includes frontend "next")}}'use client';
{{/if}}
import { FC } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader: FC = () => {
  return <ClipLoader color="#3498db" size={50} />;
};

export default Loader;
`],
  ["frontend/react/web-base/src/components/Common/ScrollToTop.tsx.hbs", `{{#if (includes frontend "next")}}'use client';
{{/if}}
import { FC, useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { cn } from '@/lib/utils';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    smoothscroll.polyfill();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6">
        <button
          type="button"
          onClick={scrollTop}
          className={cn(
            isVisible ? 'opacity-100' : 'opacity-0 cursor-default',
            'flex flex-col justify-center items-center rounded-lg bg-blue-500 p-2 text-white transition-all hover:bg-blue-600'
          )}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
          >
            <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ScrollToTop;
`],
  ["frontend/react/web-base/src/components/header.tsx.hbs", `{{#if (includes frontend "next")}}
"use client";
import Link from "next/link";
{{else if (includes frontend "react-router")}}
import { NavLink } from "react-router";
{{else if (or (includes frontend "tanstack-router") (includes frontend "tanstack-start"))}}
import { Link } from "@tanstack/react-router";
{{/if}}
{{#unless (includes frontend "tanstack-start")}}
import { ModeToggle } from "./mode-toggle";
{{/unless}}
{{#if (and (eq auth "better-auth") (ne backend "convex"))}}
import UserMenu from "./user-menu";
{{/if}}

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    {{#if (or (eq auth "better-auth") (eq auth "clerk"))}}
      { to: "/dashboard", label: "Dashboard" },
    {{/if}}
    {{#if (includes examples "todo")}}
    { to: "/todos", label: "Todos" },
    {{/if}}
    {{#if (includes examples "ai")}}
    { to: "/ai", label: "AI Chat" },
    {{/if}}
  ] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4 text-lg">
          {links.map(({ to, label }) => {
            {{#if (includes frontend "next")}}
            return (
              <Link key={to} href={to}>
                {label}
              </Link>
            );
            {{else if (includes frontend "react-router")}}
            return (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => isActive ? "font-bold" : ""}
                end
              >
                {label}
              </NavLink>
            );
            {{else if (or (includes frontend "tanstack-router") (includes frontend "tanstack-start"))}}
            return (
              <Link
                key={to}
                to={to}
              >
                {label}
              </Link>
            );
            {{else}}
            return null;
            {{/if}}
          })}
        </nav>
        <div className="flex items-center gap-2">
          {{#unless (includes frontend "tanstack-start")}}
          <ModeToggle />
          {{/unless}}
          {{#if (and (eq auth "better-auth") (ne backend "convex"))}}
          <UserMenu />
          {{/if}}
        </div>
      </div>
      <hr />
    </div>
  );
}
`],
  ["frontend/react/web-base/src/components/ui/button.tsx.hbs", `import { Button as ButtonPrimitive } from '@base-ui/react/button'
import {  cva } from 'class-variance-authority'
import type {VariantProps} from 'class-variance-authority';

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-none border border-transparent bg-clip-padding text-xs font-medium focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        destructive:
          'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        icon: 'size-8',
        'icon-xs': "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-7 rounded-none',
        'icon-lg': 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
`],
  ["frontend/react/web-base/src/components/ui/card.tsx.hbs", `import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        'ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-none py-4 text-xs/relaxed ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-2 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none group/card flex flex-col',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'gap-1 rounded-none px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'text-sm font-medium group-data-[size=sm]/card:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-xs/relaxed', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-4 group-data-[size=sm]/card:px-3', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'rounded-none border-t p-4 group-data-[size=sm]/card:p-3 flex items-center',
        className,
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
`],
  ["frontend/react/web-base/src/components/ui/checkbox.tsx.hbs", `import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'

import { CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-none border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-1 aria-invalid:ring-1 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="[&>svg]:size-3.5 grid place-content-center text-current transition-none"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
`],
  ["frontend/react/web-base/src/components/ui/dropdown-menu.tsx.hbs", `import * as React from 'react'
import { Menu as MenuPrimitive } from '@base-ui/react/menu'

import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  align = 'start',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 4,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-none shadow-md ring-1 duration-100 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none data-closed:overflow-hidden',
            className,
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'text-muted-foreground px-2 py-2 text-xs data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none px-2 py-2 text-xs [&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded-none px-2 py-2 text-xs [&_svg:not([class*='size-'])]:size-4 flex cursor-default items-center outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({
  align = 'start',
  alignOffset = -3,
  side = 'right',
  sideOffset = 0,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-none shadow-lg ring-1 duration-100 w-auto',
        className,
      )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenuPrimitive.CheckboxItem.Props) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded-none py-2 pr-8 pl-2 text-xs [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-border -mx-1 h-px', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
`],
  ["frontend/react/web-base/src/components/ui/input.tsx.hbs", `import * as React from 'react'
import { Input as InputPrimitive } from '@base-ui/react/input'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        'dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-none border bg-transparent px-2.5 py-1 text-xs transition-colors file:h-6 file:text-xs file:font-medium focus-visible:ring-1 aria-invalid:ring-1 md:text-xs file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
`],
  ["frontend/react/web-base/src/components/ui/label.tsx.hbs", `'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function Label({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="label"
      className={cn(
        'gap-2 text-xs leading-none group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
`],
  ["frontend/react/web-base/src/components/ui/skeleton.tsx.hbs", `import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted rounded-none animate-pulse", className)}
      {...props}
    />
  );
}

export { Skeleton };
`],
  ["frontend/react/web-base/src/components/ui/sonner.tsx.hbs", `import { useTheme } from 'next-themes'
import { Toaster as Sonner  } from 'sonner'
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import type {ToasterProps} from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons=\\{{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      toastOptions=\\{{
        classNames: {
          toast: 'cn-toast',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
`],
  ["frontend/react/web-base/src/data/siteMetadata.ts.hbs", `export const siteMetadata = {
  title: "BikinProject Next.js Typescript by Naufal Akbar Nugroho",
  author: "Naufal Akbar Nugroho",
  headerTitle: "BikinProject",
  headerMobTitle: "BikinProject",
  description:
    "Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi bagi semua orang!",
  language: "id-ID",
  theme: "system", // system, dark or light
  siteUrl: "http://localhost:3000", // e.g. https://yourwebsite.com
  siteRepo: "https://github.com/nuflakbrr/frontend-template",
  sitePublicRepo: "https://github.com/nuflakbrr/frontend-template",
  siteLogo: "/static/favicons/icon-512x512.png",
  image: "/static/images/profile-picture.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "naufalakbar378@gmail.com",
  instagram: "https://www.instagram.com/kbrnugroho",
  github: "https://www.github.com/nuflakbrr",
  x: "https://www.twitter.com/nuflakbrr",
  linkedin: "https://www.linkedin.com/in/nuflakbrr/",
  facebook: "https://www.facebook.com",
  youtube: "https://www.youtube.com",
  locale: "id-ID",
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the \`next.config.js\` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId:
        {{#if (includes frontend "next")}}process.env.NEXT_UMAMI_ID{{else}}import.meta.env.UMAMI_ID{{/if}}, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in \`next.config.js\` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
};
`],
  ["frontend/react/web-base/src/lib/formatCurrency.ts.hbs", `export const formatCurrency = (num: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(Number(num));
};
`],
  ["frontend/react/web-base/src/lib/formatLocalTime.ts.hbs", `export const formatLocalTime = (time: string | number | Date) => {
  const date = new Date(time);
  return \`\${date.getDate()}/\${Number(date.getMonth()) + 1}/\${date.getFullYear()}\`;
};
`],
  ["frontend/react/web-base/src/lib/utils.ts.hbs", `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`],
  ["frontend/solid/_gitignore", `node_modules
.DS_Store
dist
dist-ssr
*.local
.env
.env.*

.wrangler
.alchemy
.dev.vars*`],
  ["frontend/solid/index.html", `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content="#000000" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`],
  ["frontend/solid/package.json.hbs", `{
  "name": "web",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "serve": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.13",
    "@tanstack/router-plugin": "^1.131.44",
    "@tanstack/solid-router": "^1.131.44",
    "lucide-solid": "^0.544.0",
    "solid-js": "^1.9.9",
    "tailwindcss": "^4.1.13"
  },
  "devDependencies": {
    "vite": "^7.1.5",
    "vite-plugin-solid": "^2.11.8"
  }
}
`],
  ["frontend/solid/public/robots.txt", `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
`],
  ["frontend/solid/src/components/header.tsx.hbs", `import { Link } from "@tanstack/solid-router";
{{#if (eq auth "better-auth")}}
import UserMenu from "./user-menu";
{{/if}}
import { For } from "solid-js";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    {{#if (eq auth "better-auth")}}
    { to: "/dashboard", label: "Dashboard" },
    {{/if}}
    {{#if (includes examples "todo")}}
    { to: "/todos", label: "Todos" },
    {{/if}}
    {{#if (includes examples "ai")}}
    { to: "/ai", label: "AI Chat" },
    {{/if}}
  ];

  return (
    <div>
      <div class="flex flex-row items-center justify-between px-2 py-1">
        <nav class="flex gap-4 text-lg">
          <For each={links}>
            {(link) => <Link to={link.to}>{link.label}</Link>}
          </For>
        </nav>
        <div class="flex items-center gap-2">
          {{#if (eq auth "better-auth")}}
          <UserMenu />
          {{/if}}
        </div>
      </div>
      <hr />
    </div>
  );
}
`],
  ["frontend/solid/src/components/loader.tsx", `import { Loader2 } from "lucide-solid";

export default function Loader() {
  return (
    <div class="flex h-full items-center justify-center pt-8">
      <Loader2 class="animate-spin" />
    </div>
  );
}
`],
  ["frontend/solid/src/main.tsx.hbs", `import { RouterProvider, createRouter } from "@tanstack/solid-router";
import { render } from "solid-js/web";
import { routeTree } from "./routeTree.gen";
import "./styles.css";
{{#if (eq api "orpc")}}
import { QueryClientProvider } from "@tanstack/solid-query";
import { orpc, queryClient } from "./utils/orpc";
{{/if}}

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
  {{#if (eq api "orpc")}}
  context: { orpc, queryClient },
  {{/if}}
});

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    {{#if (eq api "orpc")}}
    <QueryClientProvider client={queryClient}>
    {{/if}}
      <RouterProvider router={router} />
    {{#if (eq api "orpc")}}
    </QueryClientProvider>
    {{/if}}
  );
}

const rootElement = document.getElementById("app");
if (rootElement) {
  render(() => <App />, rootElement);
}
`],
  ["frontend/solid/src/routes/__root.tsx.hbs", `import Header from "@/components/header";
import { Outlet, createRootRouteWithContext } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
{{#if (eq api "orpc")}}
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import type { QueryClient } from "@tanstack/solid-query";
import type { orpc } from "../utils/orpc";

export interface RouterContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}
{{else}}
export interface RouterContext {}
{{/if}}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div class="grid grid-rows-[auto_1fr] h-svh">
        <Header />
        <Outlet />
      </div>
      {{#if (eq api "orpc")}}
      <SolidQueryDevtools />
      {{/if}}
      <TanStackRouterDevtools />
    </>
  );
}
`],
  ["frontend/solid/src/routes/index.tsx.hbs", `import { createFileRoute } from "@tanstack/solid-router";
{{#if (eq api "orpc")}}
import { useQuery } from "@tanstack/solid-query";
import { orpc } from "../utils/orpc";
import { Match, Switch } from "solid-js";
{{else}}
{{/if}}

export const Route = createFileRoute("/")({
  component: App,
});

export const TITLE_TEXT = \`
██████╗ ██╗██╗  ██╗██╗███╗   ██╗
██╔══██╗██║██║ ██╔╝██║████╗  ██║
██████╔╝██║█████╔╝ ██║██╔██╗ ██║
██╔══██╗██║██╔═██╗ ██║██║╚██╗██║
██████╔╝██║██║  ██╗██║██║ ╚████║
╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝
\`;

function App() {
  {{#if (eq api "orpc")}}
  const healthCheck = useQuery(() => orpc.healthCheck.queryOptions());
  {{/if}}

  return (
    <div class="container mx-auto max-w-3xl px-4 py-2">
      <pre class="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
      <div class="grid gap-6">
        {{#if (eq api "orpc")}}
        <section class="rounded-lg border p-4">
          <h2 class="mb-2 font-medium">API Status</h2>
          <Switch>
            <Match when={healthCheck.isPending}>
              <div class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full bg-gray-500 animate-pulse" />{" "}
                <span class="text-sm text-muted-foreground">Checking...</span>
              </div>
            </Match>
            <Match when={healthCheck.isError}>
              <div class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full bg-red-500" />
                <span class="text-sm text-muted-foreground">Disconnected</span>
              </div>
            </Match>
            <Match when={healthCheck.isSuccess}>
              <div class="flex items-center gap-2">
                <div
                  class={\`h-2 w-2 rounded-full \${healthCheck.data ? "bg-green-500" : "bg-red-500"}\`}
                />
                <span class="text-sm text-muted-foreground">
                  {healthCheck.data
                    ? "Connected"
                    : "Disconnected"}
                </span>
              </div>
            </Match>
          </Switch>
        </section>
        {{/if}}
      </div>
    </div>
  );
}
`],
  ["frontend/solid/src/styles.css", `@import "tailwindcss";

body {
  @apply bg-neutral-950 text-neutral-100;
}
`],
  ["frontend/solid/tsconfig.json.hbs", `{
  "include": ["**/*.ts", "**/*.tsx"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,

    "rootDirs": ["."],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
`],
  ["frontend/solid/vite.config.ts.hbs", `import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import solidPlugin from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    tanstackRouter({ target: "solid", autoCodeSplitting: true }),
    solidPlugin(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
});`],
  ["frontend/svelte/_gitignore", `node_modules

# Output
.output
.vercel
.netlify
.wrangler
.alchemy
/.svelte-kit
/build

# OS
.DS_Store
Thumbs.db

# Env
.env
.env.*
!.env.example
!.env.test

# Vite
vite.config.js.timestamp-*
vite.config.ts.timestamp-*
`],
  ["frontend/svelte/_npmrc", `engine-strict=true
`],
  ["frontend/svelte/package.json.hbs", `{
	"name": "web",
	"private": true,
	"version": "0.0.1",
	"type": "module",
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch"
	},
	"devDependencies": {
		"@sveltejs/adapter-auto": "^6.1.0",
		"@sveltejs/kit": "^2.31.1",
		"@sveltejs/vite-plugin-svelte": "^6.1.2",
		"@tailwindcss/vite": "^4.1.12",
		"svelte": "^5.38.1",
		"svelte-check": "^4.3.1",
		"tailwindcss": "^4.1.12",
		"vite": "^7.1.2"
	},
	"dependencies": {}
}
`],
  ["frontend/svelte/src/app.css", `@import "tailwindcss";

body {
  @apply bg-neutral-950 text-neutral-100;
}
`],
  ["frontend/svelte/src/app.d.ts", `// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
`],
  ["frontend/svelte/src/app.html", `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
`],
  ["frontend/svelte/src/components/Header.svelte.hbs", `<script lang="ts">

    {{#if (eq auth "better-auth")}}
	import UserMenu from './UserMenu.svelte';
    {{/if}}
    const links = [
        { to: "/", label: "Home" },
        {{#if (eq auth "better-auth")}}
        { to: "/dashboard", label: "Dashboard" },
        {{/if}}
        {{#if (includes examples "todo")}}
        { to: "/todos", label: "Todos" },
        {{/if}}
        {{#if (includes examples "ai")}}
        { to: "/ai", label: "AI Chat" },
        {{/if}}
    ];

</script>

<div>
	<div class="flex flex-row items-center justify-between px-4 py-2 md:px-6">
		<nav class="flex gap-4 text-lg">
			{#each links as link (link.to)}
				<a
					href={link.to}
					class="hover:text-neutral-400 transition-colors"
				>
					{link.label}
				</a>
			{/each}
		</nav>
		<div class="flex items-center gap-2">
		    {{#if (eq auth "better-auth")}}
            <UserMenu />
             {{/if}}
		</div>
	</div>
	<hr class="border-neutral-800" />
</div>
`],
  ["frontend/svelte/src/lib/index.ts", `// place files you want to import through the \`$lib\` alias in this folder.
export {};
`],
  ["frontend/svelte/src/routes/+layout.svelte.hbs", `{{#if (eq backend "convex")}}
<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';
    import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';

	const { children } = $props();
	setupConvex(PUBLIC_CONVEX_URL);
</script>

<div class="grid h-svh grid-rows-[auto_1fr]">
	<Header />
	<main class="overflow-y-auto">
		{@render children()}
	</main>
</div>
{{else}}
  {{#if (eq api "orpc")}}
<script lang="ts">
    import { QueryClientProvider } from '@tanstack/svelte-query';
    import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
	import '../app.css';
    import { queryClient } from '$lib/orpc';
    import Header from '../components/Header.svelte';

	const { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
    <div class="grid h-svh grid-rows-[auto_1fr]">
		<Header />
		<main class="overflow-y-auto">
			{@render children()}
		</main>
    </div>
    <SvelteQueryDevtools />
</QueryClientProvider>
  {{else}}
<script lang="ts">
	import '../app.css';
    import Header from '../components/Header.svelte';

	const { children } = $props();
</script>

<div class="grid h-svh grid-rows-[auto_1fr]">
	<Header />
	<main class="overflow-y-auto">
		{@render children()}
	</main>
</div>
  {{/if}}
{{/if}}
`],
  ["frontend/svelte/src/routes/+page.svelte.hbs", `{{#if (eq backend "convex")}}
<script lang="ts">
import { useQuery } from 'convex-svelte';
import { api } from "@{{projectName}}/backend/convex/_generated/api";

const healthCheck = useQuery(api.healthCheck.get, {});

export const TITLE_TEXT = \`
██████╗ ██╗██╗  ██╗██╗███╗   ██╗
██╔══██╗██║██║ ██╔╝██║████╗  ██║
██████╔╝██║█████╔╝ ██║██╔██╗ ██║
██╔══██╗██║██╔═██╗ ██║██║╚██╗██║
██████╔╝██║██║  ██╗██║██║ ╚████║
╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝
\`;
</script>

<div class="container mx-auto max-w-3xl px-4 py-2">
	<pre class="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
	<div class="grid gap-6">
		<section class="rounded-lg border p-4">
			<h2 class="mb-2 font-medium">API Status</h2>
			<div class="flex items-center gap-2">
				<div
					class={\`h-2 w-2 rounded-full \${healthCheck.data ? "bg-green-500" : "bg-red-500"}\`}
				></div>
				<span class="text-muted-foreground text-sm">
					{healthCheck.isLoading
						? "Checking..."
						: healthCheck.data
							? "Connected"
							: "Disconnected"}
				</span>
			</div>
		</section>
	</div>
</div>
{{else}}
<script lang="ts">
{{#if (eq api "orpc")}}
import { orpc } from "$lib/orpc";
import { createQuery } from "@tanstack/svelte-query";
const healthCheck = createQuery(orpc.healthCheck.queryOptions());
{{/if}}

export const TITLE_TEXT = \`
██████╗ ██╗██╗  ██╗██╗███╗   ██╗
██╔══██╗██║██║ ██╔╝██║████╗  ██║
██████╔╝██║█████╔╝ ██║██╔██╗ ██║
██╔══██╗██║██╔═██╗ ██║██║╚██╗██║
██████╔╝██║██║  ██╗██║██║ ╚████║
╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝
\`;
</script>

<div class="container mx-auto max-w-3xl px-4 py-2">
	<pre class="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
	<div class="grid gap-6">
	    {{#if (eq api "orpc")}}
		<section class="rounded-lg border p-4">
			<h2 class="mb-2 font-medium">API Status</h2>
			<div class="flex items-center gap-2">
				<div
					class={\`h-2 w-2 rounded-full \${$healthCheck.data ? "bg-green-500" : "bg-red-500"}\`}
				></div>
				<span class="text-muted-foreground text-sm">
					{$healthCheck.isLoading
						? "Checking..."
						: $healthCheck.data
							? "Connected"
							: "Disconnected"}
				</span>
			</div>
		</section>
	    {{/if}}
	</div>
</div>
{{/if}}
`],
  ["frontend/svelte/static/favicon.png", `[Binary file]`],
  ["frontend/svelte/svelte.config.js.hbs", `import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
`],
  ["frontend/svelte/tsconfig.json.hbs", `{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
	// Path aliases are handled by https://svelte.dev/docs/kit/configuration#alias
	// except $lib which is handled by https://svelte.dev/docs/kit/configuration#files
	//
	// If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
	// from the referenced tsconfig.json - TypeScript does not merge them in
}
`],
  ["frontend/svelte/vite.config.ts.hbs", `import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
});
`],
  ["frontend/vue/_gitattributes", `* text=auto eol=lf
`],
  ["frontend/vue/_gitignore", `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
.DS_Store
dist
dist-ssr
coverage
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

*.tsbuildinfo

.eslintcache

# Cypress
/cypress/videos/
/cypress/screenshots/

# Vitest
__screenshots__/

# Vite
*.timestamp-*-*.mjs

test-results/
playwright-report/

# env
.env
.env.local
.env.test
.env.staging
.env.production

# lock file
package-lock.json
yarn.lock
pnpm-lock.yaml
bun.lock
`],
  ["frontend/vue/.editorconfig.hbs", `[*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue,css,scss,sass,less,styl}]
charset = utf-8
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
end_of_line = lf
max_line_length = 100
`],
  ["frontend/vue/.oxlintrc.json.hbs", `{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["eslint", "typescript", "unicorn", "oxc", "vue"],
  "env": {
    "browser": true
  },
  "categories": {
    "correctness": "error"
  }
}
`],
  ["frontend/vue/.prettierrc.json.hbs", `{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "singleQuote": true,
  "printWidth": 100
}
`],
  ["frontend/vue/env.d.ts", `/// <reference types="vite/client" />
`],
  ["frontend/vue/eslint.config.ts.hbs", `import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

// To allow more languages other than \`ts\` in \`.vue\` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
)
`],
  ["frontend/vue/index.html.hbs", `<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet">
  <link href="/src/index.css" rel="stylesheet">
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>`],
  ["frontend/vue/package.json.hbs", `{
  "name": "vue-template",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "pnpm generate:seo &&vite",
    "build": "pnpm generate:seo && run-p type-check \\"build-only {@}\\" --",
    "preview": "pnpm generate:seo && vite preview",
    "build-only": "pnpm generate:seo && vite build",
    "type-check": "vue-tsc --build",
    "lint": "run-s lint:*",
    "lint:oxlint": "oxlint . --fix",
    "lint:eslint": "eslint . --fix --cache",
    "format": "prettier --write --experimental-cli src/",
    "generate:seo": "tsx scripts/generate-seo.ts"
  },
  "dependencies": {
    "@unhead/vue": "^2.1.12",
    "@vueuse/core": "^14.2.1",
    "axios": "^1.13.6",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-vue-next": "^0.577.0",
    "moment": "^2.30.1",
    "smoothscroll-polyfill": "^0.4.4",
    "tailwind-merge": "^3.5.0",
    "vue": "^3.5.29",
    "vue-router": "^5.0.3"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.5",
    "@eslint/js": "^10.0.1",
    "@tsconfig/node24": "^24.0.4",
    "@types/node": "^24.11.0",
    "@types/smoothscroll-polyfill": "^0.3.4",
    "@vitejs/plugin-vue": "^6.0.4",
    "@vitejs/plugin-vue-jsx": "^5.1.4",
    "@vue/eslint-config-typescript": "^14.7.0",
    "@vue/tsconfig": "^0.8.1",
    "autoprefixer": "^10.4.27",
    "eslint": "^10.0.2",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-oxlint": "~1.50.0",
    "eslint-plugin-prettier": "^5.5.5",
    "eslint-plugin-vue": "~10.8.0",
    "globals": "^17.4.0",
    "jiti": "^2.6.1",
    "npm-run-all2": "^8.0.4",
    "oxlint": "~1.50.0",
    "postcss": "^8.5.8",
    "prettier": "3.8.1",
    "tailwindcss": "^3.4.19",
    "tailwindcss-animate": "^1.0.7",
    "tsx": "^4.21.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.57.0",
    "unplugin-vue-router": "^0.19.2",
    "vite": "^7.3.1",
    "vite-plugin-vue-devtools": "^8.0.6",
    "vite-tsconfig-paths": "^6.1.1",
    "vue-tsc": "^3.2.5"
  },
  "engines": {
    "node": "^20.19.0 || >=22.12.0"
  }
}
`],
  ["frontend/vue/postcss.config.js.hbs", `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`],
  ["frontend/vue/public/favicon.ico", `[Binary file]`],
  ["frontend/vue/public/robots.txt", `User-agent: *
Allow: /

Sitemap: https://nuflakbrr.github.io/bikinproject/sitemap.xml
Host: https://nuflakbrr.github.io/bikinproject`],
  ["frontend/vue/public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/[...path]</loc>
    <lastmod>2026-04-24T15:49:12.223Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/about</loc>
    <lastmod>2026-04-24T15:49:12.223Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/contact</loc>
    <lastmod>2026-04-24T15:49:12.223Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject</loc>
    <lastmod>2026-04-24T15:49:12.223Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/login</loc>
    <lastmod>2026-04-24T15:49:12.223Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://nuflakbrr.github.io/bikinproject/register</loc>
    <lastmod>2026-04-24T15:49:12.223Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`],
  ["frontend/vue/scripts/generate-seo.ts", `import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// We'll mimic the siteMetadata here to avoid complex TS import issues in a standalone script
// If the user changes siteMetadata, they should update it here or we can try to import it if tsx/ts-node setup allows
const siteMetadata = {
  title: 'BikinProject React Template by Naufal Akbar Nugroho',
  siteUrl: 'https://nuflakbrr.github.io/bikinproject', // Change this to your production URL
  socialBanner: '/static/images/twitter-card.png',
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PUBLIC_DIR = path.resolve(__dirname, '../public')

const ROUTES_DIR = path.resolve(__dirname, '../src/routes')

/**
 * Recursively get all routes from the routes directory.
 * Tailored for TanStack Router file-based routing.
 */
function getRoutes(dir: string, base: string = ''): string[] {
  let routes: string[] = []

  if (!fs.existsSync(dir)) return routes

  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const isDir = fs.statSync(fullPath).isDirectory()

    if (isDir) {
      if (item.startsWith('(') && item.endsWith(')')) {
        // Route groups like (auth), (root) - skip adding to the URL path
        routes = routes.concat(getRoutes(fullPath, base))
      } else if (!item.startsWith('_')) {
        // Regular directory - add to the URL path
        routes = routes.concat(getRoutes(fullPath, \`\${base}/\${item}\`))
      }
    } else {
      const ext = path.extname(item)
      if (ext === '.vue') {
        const name = path.basename(item, ext)

        // Skip layout files (_layout.tsx), root (__root.tsx), or splat ($)
        if (name.startsWith('_') || name === '$') continue

        if (name === 'index') {
          // index.tsx maps to the current base path
          routes.push(base)
        } else {
          // about.tsx maps to /about if in root, or /parent/about if in a dir
          routes.push(\`\${base}/\${name}\`)
        }
      }
    }
  }
  return routes
}

const urls = Array.from(new Set(getRoutes(ROUTES_DIR)))

function generateSitemap() {
  const sitemap = \`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  \${urls
    .map((url) => {
      return \`
  <url>
    <loc>\${siteMetadata.siteUrl}\${url}</loc>
    <lastmod>\${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>\${url === '' ? '1.0' : '0.8'}</priority>
  </url>\`
    })
    .join('')}
</urlset>\`

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap)
  console.log('✅ sitemap.xml generated in public/')
}

function generateRobots() {
  const robots = \`User-agent: *
Allow: /

Sitemap: \${siteMetadata.siteUrl}/sitemap.xml
Host: \${siteMetadata.siteUrl}\`

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robots)
  console.log('✅ robots.txt generated in public/')
}

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}

generateSitemap()
generateRobots()
`],
  ["frontend/vue/src/App.vue.hbs", `<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeProvider } from '@/providers/ThemeProvider'

useThemeProvider()
</script>

<template>
  <RouterView />
</template>
`],
  ["frontend/vue/src/app/(auth)/login.vue.hbs", `<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { GitHubIcon } from '@/components/Common/CustomIcons'
import MainLayout from '@/layouts/MainLayout.vue'
import { useSeo } from '@/hooks/useSeo'

useSeo({
  title: 'Login',
  description: 'Masuk ke akun BikinProject Anda.',
})
</script>

<template>
  <MainLayout>
    <section
      class="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div
        class="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden"
      >
        <div
          class="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <span class="text-xl">📦</span>
            <span class="font-mono font-bold text-zinc-900 dark:text-white">auth --login</span>
          </div>
          <div class="flex gap-1.5 opacity-30">
            <div class="w-3 h-3 rounded-full bg-zinc-400" />
            <div class="w-3 h-3 rounded-full bg-zinc-400" />
            <div class="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div class="p-8 space-y-8">
          <div class="text-center space-y-2">
            <h1 class="text-3xl font-black text-zinc-950 dark:text-white">Selamat Datang</h1>
            <p class="text-zinc-500 dark:text-zinc-400 font-medium">
              Masuk untuk mengelola project Anda.
            </p>
          </div>

          <form class="space-y-5">
            <div class="space-y-2">
              <label
                for="email"
                class="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                class="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="email@example.com"
                required
              />
            </div>

            <div class="space-y-2">
              <label
                for="password"
                class="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                class="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Masuk Ke Sistem
            </button>

            <div class="relative flex items-center justify-center">
              <span class="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span
                class="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest"
              >
                Atau
              </span>
            </div>

            <button
              class="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white"
            >
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p class="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Belum punya akun?
            <RouterLink
              to="/register"
              class="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Daftar Sekarang
            </RouterLink>
          </p>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
`],
  ["frontend/vue/src/app/(auth)/register.vue.hbs", `<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { GitHubIcon } from '@/components/Common/CustomIcons'
import MainLayout from '@/layouts/MainLayout.vue'
import { useSeo } from '@/hooks/useSeo'

useSeo({
  title: 'Register',
  description: 'Daftar akun baru di BikinProject.',
})
</script>

<template>
  <MainLayout>
    <section
      class="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <div
        class="w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden"
      >
        <div
          class="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 border-b-2 border-zinc-100 dark:border-zinc-800 flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <span class="text-xl">📦</span>
            <span class="font-mono font-bold text-zinc-900 dark:text-white"> auth --register </span>
          </div>
          <div class="flex gap-1.5 opacity-30">
            <div class="w-3 h-3 rounded-full bg-zinc-400" />
            <div class="w-3 h-3 rounded-full bg-zinc-400" />
            <div class="w-3 h-3 rounded-full bg-zinc-400" />
          </div>
        </div>

        <div class="p-8 space-y-8">
          <div class="text-center space-y-2">
            <h1 class="text-3xl font-black text-zinc-950 dark:text-white">Buat Akun Baru</h1>
            <p class="text-zinc-500 dark:text-zinc-400 font-medium">
              Bergabung dengan komunitas BikinProject.
            </p>
          </div>

          <form class="space-y-5">
            <div class="space-y-2">
              <label
                for="email"
                class="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.email
              </label>
              <input
                type="email"
                id="email"
                class="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="email@example.com"
                required
              />
            </div>

            <div class="space-y-2">
              <label
                for="password"
                class="block text-sm font-bold text-zinc-700 dark:text-zinc-300 font-mono"
              >
                $ user.password
              </label>
              <input
                type="password"
                id="password"
                class="w-full bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-all font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4"
            >
              Daftar Sekarang
            </button>

            <div class="relative flex items-center justify-center">
              <span class="absolute inset-x-0 h-px bg-zinc-100 dark:bg-zinc-800"></span>
              <span
                class="relative bg-white dark:bg-zinc-950 px-4 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest"
              >
                Atau
              </span>
            </div>

            <button
              class="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-bold text-zinc-900 dark:text-white"
            >
              <GitHubIcon />
              <span>GitHub Authentication</span>
            </button>
          </form>

          <p class="text-center text-zinc-500 dark:text-zinc-400 font-medium">
            Sudah punya akun?
            <RouterLink
              to="/login"
              class="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Masuk Saja
            </RouterLink>
          </p>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
`],
  ["frontend/vue/src/app/(root)/[...path].vue.hbs", `<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import ErrorState from '@/components/Common/ErrorState.vue'
import { useSeo } from '@/hooks/useSeo'

const route = useRoute()

const errorCode = computed(() => {
  const path = route.params.path as string[]
  // Detection logic: check if the first path segment is 'error' and has a second segment
  if (path && path[0] === 'error' && path[1]) {
    const code = parseInt(path[1])
    return isNaN(code) ? 404 : code
  }
  return 404
})

watchEffect(() => {
  useSeo({
    title: \`Error \${errorCode.value}\`,
    description: \`Terjadi kesalahan dengan kode \${errorCode.value}.\`,
  })
})

const errorMessage = computed(() => {
  const path = route.params.path as string[]
  if (path && path[0] === 'error' && path[1] && path[2]) {
    return path[2]
  }
  return undefined
})
</script>

<template>
  <MainLayout>
    <ErrorState
      :code="errorCode"
      :error="errorMessage ? { name: 'Error', message: errorMessage } : undefined"
    />
  </MainLayout>
</template>
`],
  ["frontend/vue/src/app/(root)/about.vue.hbs", `<script setup lang="ts">
import { siteMetadata } from '@/data/siteMetadata'
import MainLayout from '@/layouts/MainLayout.vue'
import { useSeo } from '@/hooks/useSeo'

useSeo({
  title: 'Tentang Kami',
  description: 'Kenali lebih jauh tentang BikinProject dan visi kami.',
})
</script>

<template>
  <MainLayout>
    <section
      class="flex items-center justify-center mx-auto min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300"
    >
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                class="h-64 md:h-[700px] relative group bg-zinc-100 dark:bg-zinc-900 overflow-hidden rounded-3xl shadow-2xl border-2 border-zinc-100 dark:border-zinc-800 transition-all duration-300"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Laptop"
                  class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
              </div>

              <div class="md:pt-8 space-y-6">
                <h1
                  class="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight"
                >
                  Tentang <span class="text-blue-600 dark:text-blue-500">BikinProject.</span>
                </h1>

                <p
                  class="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium"
                >
                  <span
                    class="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 p-1 px-3 rounded-xl font-mono font-bold border border-blue-100 dark:border-blue-800/50"
                  >
                    BikinProject </span
                  >adalah sebuah CLI-based starter project generator yang dirancang untuk
                  mempercepat proses inisialisasi aplikasi dengan standar industri. Proyek ini
                  mendukung berbagai framework populer seperti Next.js, React, dan Laravel.
                </p>

                <p
                  class="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium"
                >
                  Dibuatnya BikinProject berawal dari kebutuhan
                  <a
                    :href="siteMetadata.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold underline decoration-blue-500/30 underline-offset-4 transition duration-200"
                  >
                    Saya </a
                  >akan standarisasi struktur proyek saat memulai development baru. Alih-alih
                  melakukan setup manual yang repetitif, BikinProject mengotomatisasi segalanya
                  mulai dari pemilihan bahasa, styling framework, hingga struktur folder terbaik.
                </p>

                <div class="space-y-4">
                  <p
                    class="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed text-justify font-medium"
                  >
                    Hanya dengan satu perintah di terminal, Anda bisa langsung fokus membangun fitur
                    tanpa pusing dengan boilerplate:
                  </p>
                  <div
                    class="p-5 bg-zinc-950 rounded-2xl font-mono text-sm md:text-base text-emerald-400 border border-zinc-800 shadow-xl group transition-all duration-300 hover:border-emerald-500/30"
                  >
                    <div class="flex items-center gap-3">
                      <span class="text-zinc-600">$</span>
                      <span class="group-hover:text-emerald-300 transition-colors">
                        npx bikinproject@latest
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
`],
  ["frontend/vue/src/app/(root)/contact.vue.hbs", `<script setup lang="ts">
import { siteMetadata } from '@/data/siteMetadata'
import MainLayout from '@/layouts/MainLayout.vue'
import { useSeo } from '@/hooks/useSeo'

useSeo({
  title: 'Kontak',
  description: 'Hubungi tim BikinProject untuk informasi lebih lanjut.',
})
</script>

<template>
  <MainLayout>
    <section
      class="flex items-center justify-center min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300"
    >
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full px-4">
            <section class="body-font">
              <div class="container mx-auto flex items-center justify-center flex-col">
                <div
                  class="relative group lg:w-2/6 md:w-3/6 w-5/6 mb-10 overflow-hidden rounded-3xl shadow-2xl border-2 border-zinc-100 dark:border-zinc-800 transition-all duration-300"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/83068205?v=4"
                    loading="lazy"
                    alt="hero"
                    class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                </div>

                <div class="text-center lg:w-2/3 w-full space-y-4">
                  <h1
                    class="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight"
                  >
                    Naufal Akbar Nugroho
                  </h1>

                  <h2 class="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                    Fullstack Web Developer | Undergraduate Information Systems Student
                  </h2>

                  <p
                    class="max-w-xl mx-auto text-lg md:text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium"
                  >
                    Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi
                    bagi semua orang!
                  </p>

                  <div class="flex justify-center gap-4 pt-6">
                    <a
                      :href="siteMetadata.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex text-white bg-blue-600 hover:bg-blue-700 border-0 py-3 px-8 focus:outline-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      GitHub Saya
                    </a>

                    <a
                      :href="\`mailto:\${siteMetadata.email}\`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 py-3 px-8 focus:outline-none hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Hubungi Saya
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
`],
  ["frontend/vue/src/app/(root)/index.vue.hbs", `<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import Hero from '@/components/Pages/Home/Hero.vue'
import Features from '@/components/Pages/Home/Features.vue'
import Steps from '@/components/Pages/Home/Steps.vue'
import { useSeo } from '@/hooks/useSeo'

useSeo({
  title: 'Home',
  description: 'Simplify your project initialization with our premium Vue.js template.',
})
</script>

<template>
  <MainLayout>
    <div class="w-full">
      <Hero />
      <Features />
      <Steps />
    </div>
  </MainLayout>
</template>
`],
  ["frontend/vue/src/components/Common/CustomIcons.ts.hbs", `import { h, defineComponent } from 'vue';

const createIcon = (name: string, path: string, color: string = 'currentColor') => {
  return defineComponent({
    name: \`\${name}Icon\`,
    render() {
      return h('span', h('svg', {
        class: 'w-5 h-5',
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: color,
        xmlns: 'http://www.w3.org/2000/svg',
      }, [
        h('title', name),
        h('path', { d: path }),
      ]));
    },
  });
};

export const FacebookIcon = createIcon('Facebook', 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z');
export const InstagramIcon = createIcon('Instagram', 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z');
export const TwitterIcon = createIcon('Twitter', 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z');
export const LinkedInIcon = createIcon('LinkedIn', 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z');
export const GitHubIcon = createIcon('GitHub', 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12');

export const GoogleIcon = defineComponent({
  name: 'GoogleIcon',
  render() {
    return h('span', h('svg', {
      class: 'h-5 w-5 shrink-0',
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    }, [
      h('title', 'Google'),
      h('path', { d: 'M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z', fill: '#4285F4' }),
      h('path', { d: 'M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z', fill: '#34A853' }),
      h('path', { d: 'M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z', fill: '#FBBC05' }),
      h('path', { d: 'M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z', fill: '#EA4335' }),
    ]));
  },
});
`],
  ["frontend/vue/src/components/Common/ErrorState.vue.hbs", `<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { type ErrorMetadata, type ErrorStateProps, type ErrorTheme } from '@/interfaces/error'

const props = defineProps<ErrorStateProps>()

const getErrorContent = (statusCode: number) => {
  const is5xx = statusCode >= 500

  const metadataMap: Record<number, ErrorMetadata> = {
    401: {
      titlePrefix: 'Sesi Anda',
      titleSuffix: 'Berakhir',
      description:
        'Maaf, sesi Anda telah berakhir atau Anda belum login. Silakan login kembali untuk melanjutkan.',
      badge: 'Error 401: Unauthorized',
      theme: 'amber',
    },
    403: {
      titlePrefix: 'Akses',
      titleSuffix: 'Dibatasi',
      description:
        'Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator.',
      badge: 'Error 403: Forbidden',
      theme: 'amber',
    },
    404: {
      titlePrefix: 'Halaman Tidak',
      titleSuffix: 'Ditemukan',
      description:
        'Waduh! Sepertinya route yang Anda cari tidak ada atau sudah pindah ke tempat lain.',
      badge: 'Error 404: Not Found',
      theme: 'rose',
    },
    500: {
      titlePrefix: 'Terjadi Kesalahan',
      titleSuffix: 'Internal',
      description: 'Ups! Server kami sedang mengalami gangguan sejenak. Silakan coba lagi nanti.',
      badge: 'Error 500: Server Error',
      theme: 'amber',
    },
    503: {
      titlePrefix: 'Layanan Tidak',
      titleSuffix: 'Tersedia',
      description: 'Saat ini layanan sedang dalam pemeliharaan. Mohon tunggu beberapa saat lagi.',
      badge: 'Error 503: Service Unavailable',
      theme: 'emerald',
    },
  }

  const defaultContent: ErrorMetadata = is5xx
    ? {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Server',
        description:
          'Server mengalami kendala yang tidak terduga. Mohon maaf atas ketidaknyamanan ini.',
        badge: \`Error \${statusCode}: Server Exception\`,
        theme: 'amber',
      }
    : {
        titlePrefix: 'Terjadi Kesalahan',
        titleSuffix: 'Klien',
        description: 'Permintaan Anda tidak dapat diproses oleh sistem kami.',
        badge: \`Error \${statusCode}: Client Error\`,
        theme: 'rose',
      }

  const content = metadataMap[statusCode] ?? defaultContent

  const themes: Record<ErrorMetadata['theme'], ErrorTheme> = {
    amber: {
      badgeColor:
        'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400',
      pingColor: 'bg-amber-400',
      dotColor: 'bg-amber-600 dark:bg-amber-500',
      gradient: 'from-amber-600 to-yellow-400 dark:from-amber-400 dark:to-yellow-400',
      glowStart: 'bg-amber-600/10',
      glowEnd: 'bg-yellow-600/10',
      terminalIcon: 'bg-amber-500/40',
      borderType: 'text-amber-600 dark:text-amber-400',
      errorColor: 'text-amber-600 dark:text-amber-400',
    },
    rose: {
      badgeColor:
        'bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-400',
      pingColor: 'bg-rose-400',
      dotColor: 'bg-rose-600 dark:bg-rose-500',
      gradient: 'from-rose-600 to-orange-400 dark:from-rose-400 dark:to-orange-400',
      glowStart: 'bg-rose-600/10',
      glowEnd: 'bg-orange-600/10',
      terminalIcon: 'bg-rose-500/40',
      borderType: 'text-rose-600 dark:text-rose-400',
      errorColor: 'text-rose-600 dark:text-rose-400',
    },
    emerald: {
      badgeColor:
        'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400',
      pingColor: 'bg-emerald-400',
      dotColor: 'bg-emerald-600 dark:bg-emerald-500',
      gradient: 'from-emerald-600 to-teal-400 dark:from-emerald-400 dark:to-teal-400',
      glowStart: 'bg-emerald-600/10',
      glowEnd: 'bg-teal-600/10',
      terminalIcon: 'bg-emerald-500/40',
      borderType: 'text-emerald-600 dark:text-emerald-400',
      errorColor: 'text-emerald-600 dark:text-emerald-400',
    },
  }

  return { ...content, ...themes[content.theme] }
}

const meta = computed(() => getErrorContent(props.code))
</script>

<template>
  <section
    class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20"
  >
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div
        :class="[
          'absolute top-[-10%] left-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full',
          meta.glowStart,
        ]"
      />
      <div
        :class="[
          'absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full',
          meta.glowEnd,
        ]"
      />
    </div>

    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2 space-y-8 text-left">
          <div
            :class="[
              'inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold shadow-sm',
              meta.badgeColor,
            ]"
          >
            <span class="relative flex h-2 w-2">
              <span
                :class="[
                  'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                  meta.pingColor,
                ]"
              ></span>
              <span :class="['relative inline-flex rounded-full h-2 w-2', meta.dotColor]"></span>
            </span>
            {{ meta.badge }}
          </div>

          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight"
          >
            {{ meta.titlePrefix }} <br />
            <span
              :class="[
                'inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r',
                meta.gradient,
              ]"
            >
              {{ meta.titleSuffix }}
            </span>
          </h1>

          <p
            class="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium"
          >
            {{ props.error?.message ? props.error.message.replace(/-/g, ' ') : meta.description }}
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <RouterLink
              to="/"
              class="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Kembali ke Beranda
            </RouterLink>
          </div>
        </div>

        <div class="lg:w-1/2 w-full animate-float">
          <div
            class="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            <div
              class="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800"
            >
              <div class="flex gap-1.5">
                <div :class="['w-3.5 h-3.5 rounded-full', meta.terminalIcon]" />
                <div class="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                <div class="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
              </div>
              <div class="mx-auto text-xs font-mono text-zinc-500 font-medium">
                bash — system-error-{{ props.code }}
              </div>
            </div>
            <div
              class="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[350px]"
            >
              <div class="space-y-2">
                <p class="text-zinc-400">┌ checking system status...</p>
                <p class="flex gap-3">
                  <span :class="meta.borderType">│</span>
                  <span class="text-zinc-800 dark:text-zinc-200">
                    ✖ Fatal Error: {{ meta.badge }}
                  </span>
                </p>
                <p class="text-zinc-400">│</p>
                <p class="flex gap-3">
                  <span :class="meta.borderType">│</span>
                  <span class="text-zinc-500"> [stacktrace] </span>
                </p>
                <template v-if="props.error">
                  <p class="flex gap-3 text-xs">
                    <span :class="meta.borderType">│</span>
                    <span class="text-rose-500 dark:text-rose-400">
                      Error: {{ props.error.name }} - {{ props.error.message }}
                    </span>
                  </p>
                </template>
                <template v-else>
                  <p class="flex gap-3 text-xs">
                    <span :class="meta.borderType">│</span>
                    <span class="text-zinc-500">
                      at SystemHandler.resolve (internal/core.js:{{ props.code }})
                    </span>
                  </p>
                  <p class="flex gap-3 text-xs">
                    <span :class="meta.borderType">│</span>
                    <span class="text-zinc-500">
                      at RequestPipeline.execute (internal/router.js:123)
                    </span>
                  </p>
                </template>
                <p class="text-zinc-400">│</p>
                <p class="text-zinc-400 text-xs text-center">────────────────────────</p>
                <p :class="['font-bold text-center', meta.errorColor]">
                  ⚠️ ERROR_CODE: {{ props.code }}
                </p>
                <p class="text-zinc-400 text-xs text-center">────────────────────────</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`],
  ["frontend/vue/src/components/Common/Loader.vue.hbs", `<template>
  <div class="loader-container">
    <div class="clip-loader"></div>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.clip-loader {
  width: 50px;
  height: 50px;
  border: 5px solid #3498db;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
`],
  ["frontend/vue/src/components/Common/ScrollToTop.vue.hbs", `<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import smoothscroll from 'smoothscroll-polyfill'
import { cn } from '@/lib/utils'

const isVisible = ref(false)

const toggleVisibility = () => {
  if (window.pageYOffset > 300) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

const scrollTop = () => {
  smoothscroll.polyfill()
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
  <div class="fixed bottom-6 right-6">
    <button
      type="button"
      @click="scrollTop"
      :class="cn(
        isVisible ? 'opacity-100' : 'opacity-0 cursor-default',
        'flex flex-col justify-center items-center rounded-lg bg-blue-500 p-2 text-white transition-all hover:bg-blue-600'
      )"
    >
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        fill="currentColor"
      >
        <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
      </svg>
    </button>
  </div>
</template>
`],
  ["frontend/vue/src/components/Common/ThemeToggle.vue.hbs", `<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/providers/ThemeProvider'

const { theme, setTheme, resolvedTheme } = useTheme()

const isDark = computed(() => {
  return theme.value === 'dark' || (theme.value === 'system' && resolvedTheme.value === 'dark')
})

const toggleTheme = () => {
  setTheme(isDark.value ? 'light' : 'dark')
}
</script>

<template>
  <button
    aria-label="Toggle Dark Mode"
    @click="toggleTheme"
    class="ml-3 focus:outline-none transition-transform hover:scale-110 active:scale-95"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="h-6 w-6 text-zinc-900 hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400 transition-colors"
    >
      <template v-if="isDark">
        <path
          fill-rule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clip-rule="evenodd"
        />
      </template>
      <template v-else>
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </template>
    </svg>
  </button>
</template>
`],
  ["frontend/vue/src/components/Mixins/Footer.vue.hbs", `<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { InstagramIcon, LinkedInIcon, TwitterIcon, GitHubIcon } from '../Common/CustomIcons'

const year = new Date().getFullYear()

const footerLinks = [
  {
    title: 'Project',
    links: [
      { name: 'Fitur', href: '#features' },
      { name: 'Cara Kerja', href: '#steps' },
      { name: 'Harga', href: '/pricing' },
      { name: 'Showcase', href: '/showcase' },
    ],
  },
  {
    title: 'Perusahaan',
    links: [
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Karir', href: '/career' },
      { name: 'Blog', href: '/blog' },
      { name: 'Kontak', href: '/contact' },
    ],
  },
  {
    title: 'Dukungan',
    links: [
      { name: 'Bantuan', href: '/help' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Keamanan', href: '/security' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Ketentuan', href: '/terms' },
      { name: 'Privasi', href: '/privacy' },
      { name: 'Lisensi', href: '/license' },
    ],
  },
]

const socials = [
  { name: 'GitHub', icon: GitHubIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
]
</script>

<template>
  <footer class="w-full bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900">
    <div class="container mx-auto px-4">
      <!-- Top Section: Brand & Newsletter -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-zinc-900">
        <div class="lg:col-span-12 xl:col-span-5 space-y-8 text-center lg:text-left">
          <RouterLink to="/" class="inline-flex items-center gap-3 text-white font-black text-3xl font-primary">
            📦️ BikinProject
          </RouterLink>
          <p class="text-zinc-500 leading-relaxed font-semibold font-secondary text-lg max-w-xl mx-auto lg:mx-0">
            CLI-based package starter generator yang dirancang untuk mempercepat workflow
            pengembangan aplikasi Anda dengan standar industri.
          </p>
          <div class="flex justify-center lg:justify-start gap-5 pt-2">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              class="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-zinc-800 hover:scale-110 active:scale-95 shadow-lg group"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div class="lg:col-span-12 xl:col-span-7 mt-8 xl:mt-0">
          <div class="bg-zinc-900/40 rounded-[2.5rem] p-10 border border-zinc-800/50 space-y-6 backdrop-blur-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
            
            <h3 class="text-2xl font-black text-white font-primary italic">Dapatkan Update Terbaru</h3>
            <p class="text-zinc-400 font-medium font-secondary">Jadilah yang pertama tahu tentang fitur dan promo terbaru dari kami.</p>
            <form class="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
              <input
                type="email"
                placeholder="name@email.com"
                class="flex-1 px-6 py-4 rounded-2xl bg-zinc-950 border-2 border-zinc-800 focus:outline-none focus:border-blue-500 transition-all font-mono text-white placeholder:text-zinc-600"
              />
              <button
                type="submit"
                class="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Langganan
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Middle Section: Links -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 py-24">
        <div v-for="group in footerLinks" :key="group.title" class="space-y-6">
          <h4 class="text-white font-bold uppercase tracking-wider text-sm">
            {{ group.title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in group.links" :key="link.name">
              <RouterLink
                :to="link.href"
                class="hover:text-blue-500 hover:translate-x-1 inline-block transition-all duration-300"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section: Copyright -->
      <div class="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm tracking-wide">
        <p>© {{ year }} BikinProject. Seluruh hak cipta dilindungi undang-undang.</p>
      </div>
    </div>
  </footer>
</template>
`],
  ["frontend/vue/src/components/Mixins/Navbar/constant/navLinks.ts.hbs", `export const navlinks = [
  { title: 'Beranda', path: '/' },
  { title: 'Fitur', path: '#features' },
  { title: 'Cara Kerja', path: '#steps' },
  { title: 'Tentang', path: '/about' },
  { title: 'Kontak', path: '/contact' },
];
`],
  ["frontend/vue/src/components/Mixins/Navbar/index.vue.hbs", `<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { cn } from '@/lib/utils'
import { navlinks } from './constant/navLinks'
import ThemeToggle from '@/components/Common/ThemeToggle.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const route = useRoute()
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('lg')

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header
    :class="
      cn(
        'fixed top-0 left-0 w-full flex items-center z-[50] transition-all duration-300',
        isScrolled || (isMobile && isOpen) ? 'navbarFixed' : 'bg-transparent',
      )
    "
  >
    <div class="container mx-auto">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 font-primary font-bold text-xl lg:text-2xl py-6 text-zinc-900 dark:text-white"
            aria-label="logo"
          >
            📦️ BikinProject
          </RouterLink>
        </div>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            :class="
              cn('right-4 block absolute lg:hidden outline-none', isOpen && 'hamburgerActive')
            "
            @click="toggleMenu"
          >
            <span
              :class="
                cn(
                  'hamburgerLine',
                  'bg-black dark:bg-white origin-top-left transition duration-300 ease-in-out',
                )
              "
            ></span>
            <span
              :class="
                cn('hamburgerLine', 'bg-black dark:bg-white transition duration-300 ease-in-out')
              "
            ></span>
            <span
              :class="
                cn(
                  'hamburgerLine',
                  'bg-black dark:bg-white origin-bottom-left transition duration-300 ease-in-out',
                )
              "
            ></span>
          </button>

          <nav
            id="navMenu"
            :class="
              cn(
                'absolute py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-[calc(100%+0.5rem)] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none transition-all duration-300',
                !isOpen && 'hidden',
                isMobile && 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg',
              )
            "
          >
            <ul class="block lg:flex lg:items-center">
              <li v-for="(link, i) in navlinks" :key="i" class="group">
                <RouterLink
                  :to="link.path"
                  :class="
                    cn('navLink', 'mx-8 lg:mx-4 flex', isActive(link.path) && 'navLinkActive')
                  "
                >
                  {{ link.title }}
                </RouterLink>
              </li>
              <li class="ml-8 lg:ml-6 flex items-center gap-6 py-4 lg:py-0">
                <RouterLink
                  to="/login"
                  class="text-zinc-500 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  Masuk
                </RouterLink>
                <RouterLink
                  to="/register"
                  class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Daftar
                </RouterLink>
              </li>

              <li class="ml-8 lg:ml-4 flex items-center">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbarFixed {
  @apply fixed z-[9999] bg-transparent shadow-md backdrop-blur-md;
}

.hamburgerLine {
  @apply w-[30px] h-[2px] my-2 block;
}

.hamburgerActive > span:nth-child(1) {
  @apply rotate-45;
}

.hamburgerActive > span:nth-child(2) {
  @apply scale-0;
}

.hamburgerActive > span:nth-child(3) {
  @apply -rotate-45;
}

.navLink {
  @apply relative py-2 text-zinc-600 dark:text-zinc-400 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400;
}

.navLink::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300;
}

.navLink:hover::after,
.navLinkActive::after {
  @apply w-full;
}

.navLinkActive {
  @apply text-blue-600 dark:text-blue-400;
}
</style>
`],
  ["frontend/vue/src/components/Pages/Home/Features.vue.hbs", `<script setup lang="ts">
const features = [
  {
    title: 'Zero Config',
    description:
      'Lupakan setup yang rumit. Mulai project Anda dalam hitungan detik dengan konfigurasi yang sudah dioptimalkan.',
    icon: '⚙️',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Interactive CLI',
    description:
      'Antarmuka baris perintah yang interaktif dan intuitif, memudahkan Anda memilih opsi project.',
    icon: '💻',
    color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'Multi-framework',
    description:
      'Mendukung berbagai framework populer seperti Next.js, React, Laravel, dan akan terus bertambah.',
    icon: '📚',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  },
  {
    title: 'Standardisasi Kode',
    description:
      'Setiap project dihasilkan dengan struktur folder dan standar kode terbaik yang konsisten.',
    icon: '🛠️',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'Developer Experience',
    description:
      'Dibuat dengan fokus utama pada kenyamanan developer untuk produktivitas maksimal.',
    icon: '✨',
    color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
  {
    title: 'Open Source',
    description:
      'Didukung oleh komunitas dan bebas untuk dikustomisasi sesuai kebutuhan spesifik Anda.',
    icon: '🌐',
    color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  },
]
</script>

<template>
  <section id="features" class="py-24 bg-zinc-50 dark:bg-zinc-900">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white">
          Fitur Unggulan Kami
        </h2>
        <p class="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
          Segala yang Anda butuhkan untuk membangun project modern dalam satu platform yang
          terintegrasi.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-8 bg-white dark:bg-zinc-950 rounded-3xl border-2 border-zinc-100 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
        >
          <div
            :class="\`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 \${feature.color} border border-transparent group-hover:border-current transition-all duration-300 group-hover:scale-110 shadow-sm\`"
          >
            {{ feature.icon }}
          </div>
          <h3 class="text-xl font-bold text-zinc-950 dark:text-white mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
`],
  ["frontend/vue/src/components/Pages/Home/Hero.vue.hbs", `<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Copy } from 'lucide-vue-next'

const copyToClipboard = () => {
  navigator.clipboard.writeText('npx bikinproject@latest')
}
</script>

<template>
  <section
    class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-32 pb-20"
  >
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div
        class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] rounded-full"
      />
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 dark:bg-cyan-500/10 blur-[120px] rounded-full"
      />
    </div>

    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Left Side: Content -->
        <div class="lg:w-1/2 space-y-8 text-left">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-semibold shadow-sm"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500"
              ></span>
            </span>
            CLI-Based Project Generator
          </div>

          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight"
          >
            Bikin Project Jadi <br />
            <span
              class="inline-block py-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-400 dark:from-blue-400 dark:to-cyan-400"
            >
              Lebih Sat-Set & Terstruktur
            </span>
          </h1>

          <p
            class="text-lg md:text-xl text-zinc-700 dark:text-zinc-400 max-w-xl leading-relaxed font-medium"
          >
            Generator starter project yang didesain untuk kenyamanan developer. Lupakan setup
            manual, cukup satu perintah dan project Anda siap tempur.
          </p>

          <div
            class="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 font-mono text-sm md:text-base flex items-center justify-between group"
          >
            <span class="text-zinc-800 dark:text-zinc-200">
              <span class="text-blue-600 dark:text-blue-400">$</span> npx bikinproject@latest
            </span>
            <button
              @click="copyToClipboard"
              class="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-blue-600"
              title="Copy to clipboard"
            >
              <Copy :size="20" />
            </button>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <RouterLink
              to="/register"
              class="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Coba Sekarang
            </RouterLink>
            <a
              href="#features"
              class="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300"
            >
              Lihat Fitur
            </a>
          </div>
        </div>

        <!-- Right Side: Terminal Mock-up -->
        <div class="lg:w-1/2 w-full animate-float">
          <div
            class="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl"
          >
            <div
              class="bg-zinc-100 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b-2 border-zinc-200 dark:border-zinc-800"
            >
              <div class="flex gap-1.5">
                <div class="w-3.5 h-3.5 rounded-full bg-rose-500/40" />
                <div class="w-3.5 h-3.5 rounded-full bg-amber-500/40" />
                <div class="w-3.5 h-3.5 rounded-full bg-emerald-500/40" />
              </div>
              <div class="mx-auto text-xs font-mono text-zinc-500 font-medium">
                bash — create-bikinproject-app
              </div>
            </div>
            <div
              class="bg-white dark:bg-zinc-950 p-6 font-mono text-sm leading-relaxed overflow-x-auto h-[400px]"
            >
              <div class="space-y-2">
                <p class="text-zinc-400">┌ create-bikinproject-app</p>
                <p class="flex gap-3">
                  <span class="text-cyan-600 dark:text-cyan-400">│</span>
                  <span class="text-zinc-800 dark:text-zinc-200">
                    ◇ Where should we create your project?
                  </span>
                </p>
                <p class="flex gap-3">
                  <span class="text-cyan-600 dark:text-cyan-400">│</span>
                  <span class="text-cyan-600 dark:text-cyan-400 font-bold underline">
                    ./your-project
                  </span>
                </p>
                <p class="text-zinc-400">│</p>
                <p class="flex gap-3">
                  <span class="text-cyan-600 dark:text-cyan-400">│</span>
                  <span class="text-zinc-800 dark:text-zinc-200">◇ Pick a project type</span>
                </p>
                <p class="flex gap-3">
                  <span class="text-cyan-600 dark:text-cyan-400">│</span>
                  <span class="text-cyan-600 dark:text-cyan-400 font-bold">
                    ● Next.js App Router (Tailwind + TypeScript)
                  </span>
                </p>
                <div class="flex gap-3">
                  <span class="text-cyan-600 dark:text-cyan-400">│</span>
                  <span class="text-zinc-500">○ React.js (Tailwind + JavaScript)</span>
                </div>
                <p class="text-zinc-400">│</p>
                <p class="flex gap-3">
                  <span class="text-cyan-600 dark:text-cyan-400">│</span>
                  <span class="text-emerald-600 dark:text-emerald-400">
                    ⏳ Creating project...
                  </span>
                </p>
                <p class="flex gap-3">
                  <span class="text-cyan-600 dark:text-cyan-400">│</span>
                  <span class="text-emerald-600 dark:text-emerald-400">
                    ✅ Project created successfully!
                  </span>
                </p>
                <p class="text-zinc-400">│</p>
                <p class="text-zinc-400 text-xs">────────────────────────╮</p>
                <p class="text-blue-600 dark:text-blue-400 font-bold">🎉 Project ready to use!</p>
                <p class="text-zinc-400 text-xs">────────────────────────╯</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`],
  ["frontend/vue/src/components/Pages/Home/Steps.vue.hbs", `<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Jalankan Command',
    description:
      'Buka terminal favorit Anda dan jalankan "npx bikinproject@latest". Tidak perlu instalasi global yang memberatkan sistem.',
  },
  {
    number: '02',
    title: 'Pilih Konfigurasi',
    description:
      'Pilih framework (Next.js, React, Laravel), bahasa (TS/JS), dan CSS framework melalui antarmuka CLI yang interaktif.',
  },
  {
    number: '03',
    title: 'Project Siap!',
    description:
      'BikinProject akan men-generate starter project lengkap dengan best practices, siap untuk Anda kembangkan lebih lanjut.',
  },
]
</script>

<template>
  <section id="steps" class="py-24 bg-white dark:bg-zinc-950">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2 space-y-8">
          <h2
            class="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight"
          >
            Langkah Sederhana <br />
            Untuk Project Terpercaya
          </h2>
          <p class="text-lg text-zinc-700 dark:text-zinc-400 font-medium tracking-tight">
            Kami menyederhanakan proses kompleks menjadi langkah-langkah yang mudah dipahami,
            memastikan Anda selalu terlibat dalam setiap progres.
          </p>
          <div class="pt-4">
            <button
              class="px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-zinc-500/10"
            >
              Mulai Konsultasi
            </button>
          </div>
        </div>

        <div class="lg:w-1/2 w-full space-y-8">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex items-start gap-6 p-6 rounded-3xl border-2 border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 group"
          >
            <div
              class="text-4xl font-black text-blue-600/20 dark:text-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300 shrink-0"
            >
              {{ step.number }}
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-zinc-950 dark:text-white">{{ step.title }}</h3>
              <p class="text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium text-justify">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`],
  ["frontend/vue/src/components/README.md", `# Arsitektur Komponen

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

### Common

Folder \`Common\` terletak pada \`/src/components/Common/\`. Folder ini berisi komponen-komponen atomik atau elemen UI dasar yang bersifat reusable dan independen.
Contoh: Tombol (\`Button\`), Input, Modal, Icon kustom, dll.

### Mixins

Folder \`Mixins\` terletak pada \`/src/components/Mixins/\`. Folder ini berisi komponen-komponen hasil gabungan atau komposisi dari beberapa komponen \`Common\` untuk membentuk fitur yang lebih kompleks.
Contoh: Navbar (gabungan dari Logo, Links, dan Theme Toggle), Footer, Sidebar, dll.

## Struktur Folder Lainnya

- **app/**: Berisi halaman (pages) dan layout utama menggunakan Next.js App Router.
- **hooks/**: Berisi custom logic React hooks yang dapat digunakan kembali di berbagai komponen.
- **lib/**: Berisi fungsi utilitas dan konfigurasi library pihak ketiga.
- **data/**: Berisi data statis, konstanta, dan metadata situs.
`],
  ["frontend/vue/src/data/siteMetadata.ts.hbs", `export const siteMetadata = {
  title: 'BikinProject Vue Template by Naufal Akbar Nugroho',
  author: 'Naufal Akbar Nugroho',
  headerTitle: 'BikinProject',
  headerMobTitle: 'BikinProject',
  description:
    'Saya bersemangat memberikan kontribusi untuk memberikan pengetahuan teknologi bagi semua orang!',
  language: 'id-ID',
  theme: 'system', // system, dark or light
  siteUrl: 'http://localhost:3000', // e.g. https://yourwebsite.com
  siteRepo: 'https://github.com/nuflakbrr/frontend-template',
  sitePublicRepo: 'https://github.com/nuflakbrr/frontend-template',
  siteLogo: '/static/favicons/icon-512x512.png',
  image: '/static/images/profile-picture.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'naufalakbar378@gmail.com',
  instagram: 'https://www.instagram.com/kbrnugroho',
  github: 'https://www.github.com/nuflakbrr',
  x: 'https://www.twitter.com/nuflakbrr',
  linkedin: 'https://www.linkedin.com/in/nuflakbrr/',
  facebook: 'https://www.facebook.com',
  youtube: 'https://www.youtube.com',
  locale: 'id-ID',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the \`next.config.js\` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: import.meta.env.VITE_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in \`next.config.js\` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
};
`],
  ["frontend/vue/src/hooks/useAxios.ts.hbs", `import axios, { type AxiosInstance } from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export const createNewClient: () => AxiosInstance = () => {
  const BASE_API = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/';

  return axios.create({
    baseURL: BASE_API,
    headers: {
      Accept: 'application/json',
    },
    httpsAgent,
  });
};

export const client: AxiosInstance = createNewClient();

type HookType = (accessToken?: string) => AxiosInstance;

export const useAxios: HookType = (accessToken) => {
  client.interceptors.request.use((config) => {
    const newConfig = { ...config };

    if (accessToken) {
      newConfig.headers.Authorization = \`Bearer \${accessToken}\`;
    }

    return newConfig;
  });

  return client;
};

export const { isAxiosError } = axios;
`],
  ["frontend/vue/src/hooks/useClipboard.ts.hbs", `const useClipboard = () => {
  const copy = async (txt: string) => {
    try {
      await navigator.clipboard.writeText(txt);
      alert('Copied to clipboard!'); // replace this line with your toast notification
    } catch (err) {
      console.error(err);
      alert('Failed to copy to clipboard!'); // replace this line with your toast notification
    }
  };

  return { copy };
};

export default useClipboard;
`],
  ["frontend/vue/src/hooks/useDebounce.ts.hbs", `import { ref, type Ref } from 'vue';

export const useDebounce = <T>(initialValue: T, delay = 300): [Ref<T>, (value: T) => void] => {
  const debouncedValue = ref(initialValue) as Ref<T>;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const setDebouncedHandler = (newValue: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);
  };

  return [debouncedValue, setDebouncedHandler];
};

export default useDebounce;
`],
  ["frontend/vue/src/hooks/useHasMounted.ts.hbs", `import { ref, onMounted } from 'vue';

export function useHasMounted() {
  const hasMounted = ref(false);

  onMounted(() => {
    hasMounted.value = true;
  });

  return hasMounted;
}

export default useHasMounted;
`],
  ["frontend/vue/src/hooks/useMobileResponsive.ts.hbs", `import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

/**
 * Hook to detect if the current screen size is mobile/tablet (below 'lg' breakpoint).
 * @returns Ref<boolean>
 */
export const useMobileResponsive = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  return breakpoints.smaller('lg');
};

export default useMobileResponsive;
`],
  ["frontend/vue/src/hooks/useScreenSize.ts.hbs", `import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

const useScreenSize = () => {
  const { width } = useWindowSize();

  const screenSize = computed(() => {
    const w = width.value;

    if (w <= 374) {
      return 'Mobile XS';
    } else if (w >= 375 && w <= 424) {
      return 'Mobile M';
    } else if (w >= 425 && w <= 767) {
      return 'Mobile L';
    } else if (w >= 768 && w <= 1023) {
      return 'Tablet';
    } else if (w >= 1024 && w <= 1439) {
      return 'Laptop';
    } else if (w >= 1440 && w <= 2559) {
      return 'Laptop LG';
    } else if (w >= 2560) {
      return 'Laptop XL';
    }

    return undefined;
  });

  return screenSize;
};

export default useScreenSize;
`],
  ["frontend/vue/src/hooks/useSeo.ts.hbs", `import { useHead, useSeoMeta } from '@unhead/vue'
import { siteMetadata } from '@/data/siteMetadata'

interface SeoOptions {
  title?: string
  description?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  canonical?: string
}

export const useSeo = (options: SeoOptions = {}) => {
  const {
    title,
    description = siteMetadata.description,
    ogType = 'website',
    ogImage = siteMetadata.socialBanner,
    twitterCard = 'summary_large_image',
    canonical,
  } = options

  const fullTitle = title ? \`\${title} | \${siteMetadata.headerTitle}\` : siteMetadata.title

  useHead({
    title: fullTitle,
    link: [
      {
        rel: 'canonical',
        href: canonical || siteMetadata.siteUrl,
      },
    ],
  })

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType,
    ogUrl: canonical || siteMetadata.siteUrl,
    ogImage,
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterCard,
    twitterImage: ogImage,
  })
}
`],
  ["frontend/vue/src/hooks/useSort.ts.hbs", `import { ref, type Ref } from 'vue';
import { type SortDirection } from '@/interfaces/hooks/useSort';

export type SortHookReturn = {
  sortBy: Ref<string>;
  direction: Ref<SortDirection>;
  handleSort: (field: string) => void;
};

export function useSort(): SortHookReturn {
  const direction = ref<SortDirection>({ field: '', direction: '' });
  const sortBy = ref<string>('');

  const handleSort = (field: string): void => {
    if (!field) return;

    let newDirection = '';

    if (direction.value.field !== field || direction.value.direction === '') {
      newDirection = 'asc';
    } else if (direction.value.direction === 'asc') {
      newDirection = 'desc';
    } else if (direction.value.direction === 'desc') {
      newDirection = '';
    }

    direction.value = { field, direction: newDirection };
    const sortParam = newDirection === 'asc' ? field : \`-\${field}\`;

    if (newDirection === '') {
      deleteSort();
    } else {
      handleChangeSort(sortParam);
    }
  };

  const deleteSort = (): void => {
    sortBy.value = '';
  };

  const handleChangeSort = (field: string): void => {
    sortBy.value = field;
  };

  return {
    sortBy,
    direction,
    handleSort,
  };
}

export default useSort;
`],
  ["frontend/vue/src/index.css.hbs", `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth !important;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

html {
  scroll-behavior: smooth !important;
}
`],
  ["frontend/vue/src/interfaces/error.ts.hbs", `export interface ErrorStateProps {
  code: number
  error?: Error
}

export interface ErrorMetadata {
  titlePrefix: string
  titleSuffix: string
  description: string
  badge: string
  theme: 'rose' | 'amber' | 'emerald'
}

export interface ErrorTheme {
  badgeColor: string
  pingColor: string
  dotColor: string
  gradient: string
  glowStart: string
  glowEnd: string
  terminalIcon: string
  borderType: string
  errorColor: string
}`],
  ["frontend/vue/src/interfaces/hooks/useSort.ts.hbs", `import { type Ref } from 'vue';

export interface SortDirection {
  field: string;
  direction: string;
}

export type SortHookReturn = {
  sortBy: Ref<string>;
  direction: Ref<SortDirection>;
  handleSort: (field: string) => void;
};`],
  ["frontend/vue/src/interfaces/providers/ThemeProvider.ts.hbs", `export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}`],
  ["frontend/vue/src/interfaces/seo.ts.hbs", `export interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;

  [key: string]: string | number | boolean | undefined;
}
`],
  ["frontend/vue/src/layouts/MainLayout.vue.hbs", `<script setup lang="ts">
import Navbar from '@/components/Mixins/Navbar/index.vue'
import Footer from '@/components/Mixins/Footer.vue'
import ScrollToTop from '@/components/Common/ScrollToTop.vue'
import { useSeo } from '@/hooks/useSeo'

useSeo()
</script>

<template>
  <Navbar />
  <main class="min-h-screen">
    <slot />
  </main>
  <ScrollToTop />
  <Footer />
</template>
`],
  ["frontend/vue/src/lib/formatCurrency.ts.hbs", `export const formatCurrency = (num: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(Number(num));
};
`],
  ["frontend/vue/src/lib/formatLocalTime.ts.hbs", `export const formatLocalTime = (time: string | number | Date) => {
  const date = new Date(time);
  return \`\${date.getDate()}/\${Number(date.getMonth()) + 1}/\${date.getFullYear()}\`;
};
`],
  ["frontend/vue/src/lib/utils.ts.hbs", `import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`],
  ["frontend/vue/src/main.ts.hbs", `import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import './index.css'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const head = createHead()

createApp(App).use(router).use(head as any).mount('#app')
`],
  ["frontend/vue/src/providers/ThemeProvider.ts.hbs", `import { provide, inject, ref, watchEffect, readonly, type InjectionKey, type Ref } from 'vue';
import { useColorMode, useLocalStorage } from '@vueuse/core';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Ref<Theme>;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Ref<'light' | 'dark'>;
}

export const ThemeSymbol: InjectionKey<ThemeContextType> = Symbol('ThemeContext');

export const useThemeProvider = (defaultTheme: Theme = 'system', storageKey: string = 'theme-preference') => {
  const theme = useLocalStorage<Theme>(storageKey, defaultTheme);
  const colorMode = useColorMode({
    selector: 'html',
    attribute: 'class',
    initialValue: defaultTheme,
    storageKey: storageKey,
  });

  const resolvedTheme = ref<'light' | 'dark'>(colorMode.value as 'light' | 'dark');

  watchEffect(() => {
    resolvedTheme.value = colorMode.value as 'light' | 'dark';
  });

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
    colorMode.value = newTheme;
  };

  const context: ThemeContextType = {
    theme: theme,
    setTheme,
    resolvedTheme: readonly(resolvedTheme),
  };

  provide(ThemeSymbol, context);

  return context;
};

export const useTheme = () => {
  const context = inject(ThemeSymbol);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
`],
  ["frontend/vue/src/vite-env.d.ts", `/// <reference types="vite/client" />
`],
  ["frontend/vue/tailwind.config.ts.hbs", `import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{vue,js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{vue,js,ts,jsx,tsx,mdx}",
		"./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: [
				'Plus Jakarta Sans',
				'system-ui',
				'-apple-system',
				'sans-serif'
			]
		},
		extend: ({
			boxShadow: {
				md: '0px 2px 4px -1px rgba(175, 182, 201, 0.2);',
				lg: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
				'dark-md': 'rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.02) 0px 12px 24px -4px',
				sm: '0 6px 24.2px -10px rgba(41, 52, 61, .22)',
				'btn-shadow': 'box-shadow: rgba(0, 0, 0, .05) 0 9px 17.5px',
				tw: 'rgba(175, 182, 201, 0.2) 0px 2px 4px -1px',
				btnshdw: '0 17px 20px -8px rgba(77, 91, 236, .231372549)',
				elevation1: '0px 12px 30px -2px rgba(58,75,116,0.14);',
				elevation2: '0px 24px 24px -12px rgba(0,0,0,0.05);',
				elevation3: '0px 24px 24px -12px rgba(99,91,255,0.15);',
				elevation4: '0px 12px 12px -6px rgba(0,0,0,0.15);'
			},
			borderRadius: {
				sm: "6px",
				md: "9px",
				lg: "24px",
				tw: "12px",
				bb: "20px",
			},
			container: {
				center: true,
				padding: '20px'
			},
			letterSpacing: {
				tightest: '-.075em',
				tighter: '-.05em',
				tight: '-.025em',
				normal: '0',
				wide: '.025em',
				wider: '.05em',
				widest: '1.5px',
				'-2': '-0.02em',
				'6': '0.06em'
			},
			gap: {
				'30': '30px'
			},
			padding: {
				'30': '30px'
			},
			margin: {
				'30': '30px'
			},
			fontSize: {
				'15': '15px',
				'17': '17px',
				'13': '13px',
				'22': '22px',
				'28': '28px',
				'34': '34px',
				'40': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
				'44': '44px',
				'50': '50px',
				'56': ['56px', { lineHeight: '120%', letterSpacing: '-0.02em' }],
				'64': '64px',
				// Hero/Title Text
				'hero-h1': ['56px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h2': ['48px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h3': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h4': ['32px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h5': ['24px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'hero-h6': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				// Heading Text
				'heading-h1': ['40px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h2': ['32px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h3': ['24px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h4': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h5': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				'heading-h6': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '700' }],
				// Body Text
				'body-xl': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-xl-regular': ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-l': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-l-regular': ['18px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-m': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-m-regular': ['16px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-s': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }],
				'body-s-regular': ['14px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				'body-xs': ['12px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-xs-regular': ['12px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }],
				// Caption Text
				'caption-l': ['14px', { lineHeight: '120%', letterSpacing: '0.06em', fontWeight: '500' }],
				'caption-s': ['12px', { lineHeight: '120%', letterSpacing: '0.06em', fontWeight: '500' }],
			},
			colors: {
				black: '#2A3547',
				cyan: {
					'500': 'var(--color-primary)',
					'600': 'var(--color-primary)',
					'700': 'var(--color-primary)'
				},
				primary: ({ opacityValue, opacityVariable }: { opacityValue?: string; opacityVariable?: string }) => {
					if (opacityValue !== undefined) {
						return \`rgba(var(--color-primary-rgb), \${opacityValue})\`;
					}
					if (opacityVariable !== undefined) {
						return \`rgba(var(--color-primary-rgb), var(\${opacityVariable}, 1))\`;
					}
					return \`rgb(var(--color-primary-rgb))\`;
				},
				secondary: 'var(--color-secondary)',
				info: 'var(--color-info)',
				success: 'var(--color-success)',
				warning: 'var(--color-warning)',
				// error: 'var(--color-error)',
				error: ({ opacityValue, opacityVariable }: { opacityValue?: string; opacityVariable?: string }) => {
					if (opacityValue !== undefined) {
						return \`rgba(var(--color-error-rgb), \${opacityValue})\`;
					}
					if (opacityVariable !== undefined) {
						return \`rgba(var(--color-error-rgb), var(\${opacityVariable}, 1))\`;
					}
					return \`rgb(var(--color-error-rgb))\`;
				},
				lightprimary: 'var(--color-lightprimary)',
				lightsecondary: 'var(--color-lightsecondary)',
				lightsuccess: 'var( --color-lightsuccess)',
				lighterror: 'var(--color-lighterror)',
				lightinfo: 'var(--color-lightinfo)',
				lightwarning: 'var(--color-lightwarning)',
				border: 'var(--color-border)',
				bordergray: 'var(--color-bordergray)',
				lightgray: 'var( --color-lightgray)',
				muted: 'var(--color-muted)',
				lighthover: 'var(--color-lighthover)',
				surface: 'var(--color-surface-ld)',
				sky: 'var(--color-sky)',
				bodytext: 'var(--color-bodytext)',
				dark: 'var(--color-dark)',
				link: 'var(--color-link)',
				darklink: 'var(--color-darklink)',
				darkborder: 'var(--color-darkborder)',
				darkgray: 'var(--color-darkgray)',
				primaryemphasis: 'var(--color-primary-emphasis)',
				secondaryemphasis: 'var(--color-secondary-emphasis)',
				warningemphasis: 'var(--color-warning-emphasis)',
				erroremphasis: 'var(--color-error-emphasis)',
				successemphasis: 'var(--color-success-emphasis)',
				infoemphasis: 'var(--color-info-emphasis)',
				darkmuted: 'var( --color-darkmuted)'
			}
		} as any)
	},
	plugins: [
		require("tailwindcss-animate")
	],
};
export default config;
`],
  ["frontend/vue/tsconfig.app.json.hbs", `{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "preserve",
    "jsxImportSource": "vue",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "types": ["node"]
  }
}
`],
  ["frontend/vue/tsconfig.json.hbs", `{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ]
}
`],
  ["frontend/vue/tsconfig.node.json.hbs", `// TSConfig for modules that run in Node.js environment via either transpilation or type-stripping.
{
  "extends": "@tsconfig/node24/tsconfig.json",
  "include": [
    "vite.config.*",
    "vitest.config.*",
    "cypress.config.*",
    "nightwatch.conf.*",
    "playwright.config.*",
    "eslint.config.*"
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "vite-plugin-vue-devtools": ["./node_modules/vite-plugin-vue-devtools/dist/vite.d.ts"]
    },
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "types": ["node"]
  }
}
`],
  ["frontend/vue/typed-router.d.ts", `/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection ES6UnusedImports
// Generated by unplugin-vue-router. !! DO NOT MODIFY THIS FILE !!
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-resolver' {
  export type ParamParserCustom = never
}

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/(auth)/login': RouteRecordInfo<
      '/(auth)/login',
      '/login',
      Record<never, never>,
      Record<never, never>,
      | never
    >,
    '/(auth)/register': RouteRecordInfo<
      '/(auth)/register',
      '/register',
      Record<never, never>,
      Record<never, never>,
      | never
    >,
    '/(root)/': RouteRecordInfo<
      '/(root)/',
      '/',
      Record<never, never>,
      Record<never, never>,
      | never
    >,
    '/(root)/[...path]': RouteRecordInfo<
      '/(root)/[...path]',
      '/:path(.*)',
      { path: ParamValue<true> },
      { path: ParamValue<false> },
      | never
    >,
    '/(root)/about': RouteRecordInfo<
      '/(root)/about',
      '/about',
      Record<never, never>,
      Record<never, never>,
      | never
    >,
    '/(root)/contact': RouteRecordInfo<
      '/(root)/contact',
      '/contact',
      Record<never, never>,
      Record<never, never>,
      | never
    >,
  }

  /**
   * Route file to route info map by unplugin-vue-router.
   * Used by the \\\`sfc-typed-router\\\` Volar plugin to automatically type \\\`useRoute()\\\`.
   *
   * Each key is a file path relative to the project root with 2 properties:
   * - routes: union of route names of the possible routes when in this page (passed to useRoute<...>())
   * - views: names of nested views (can be passed to <RouterView name="...">)
   *
   * @internal
   */
  export interface _RouteFileInfoMap {
    'src/app/(auth)/login.vue': {
      routes:
        | '/(auth)/login'
      views:
        | never
    }
    'src/app/(auth)/register.vue': {
      routes:
        | '/(auth)/register'
      views:
        | never
    }
    'src/app/(root)/index.vue': {
      routes:
        | '/(root)/'
      views:
        | never
    }
    'src/app/(root)/[...path].vue': {
      routes:
        | '/(root)/[...path]'
      views:
        | never
    }
    'src/app/(root)/about.vue': {
      routes:
        | '/(root)/about'
      views:
        | never
    }
    'src/app/(root)/contact.vue': {
      routes:
        | '/(root)/contact'
      views:
        | never
    }
  }

  /**
   * Get a union of possible route names in a certain route component file.
   * Used by the \\\`sfc-typed-router\\\` Volar plugin to automatically type \\\`useRoute()\\\`.
   *
   * @internal
   */
  export type _RouteNamesForFilePath<FilePath extends string> =
    _RouteFileInfoMap extends Record<FilePath, infer Info>
      ? Info['routes']
      : keyof RouteNamedMap
}
`],
  ["frontend/vue/vite.config.ts.hbs", `import { fileURLToPath, URL } from 'node:url'
import tsConfigPaths from 'vite-tsconfig-paths'

import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    VueRouter({
      routesFolder: 'src/app',
    }),
    tsConfigPaths(),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
`]
]);

export const TEMPLATE_COUNT = 496;
