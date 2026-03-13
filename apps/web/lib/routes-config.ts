// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

const v1_0_x_ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "Installation", href: "/installation" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Available Frameworks",
    href: "/available-frameworks",
    items: [
      {
        title: "Next.js",
        href: "/nextjs",
        items: [
          { title: "Typescipt", href: "/typescript" },
          { title: "Javascript", href: "/javascript" },
        ],
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    noLink: true,
    items: [{ title: "Contribution Guide", href: "/contribution-guide" }],
  },
];

const v1_1_x_ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "Installation", href: "/installation" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Available Frameworks",
    href: "/available-frameworks",
    items: [
      {
        title: "Next.js",
        href: "/nextjs",
        items: [
          { title: "Typescipt", href: "/typescript" },
          { title: "Javascript", href: "/javascript" },
        ],
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    noLink: true,
    items: [{ title: "Contribution Guide", href: "/contribution-guide" }],
  },
];

const v1_2_x_ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "Installation", href: "/installation" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Available Frameworks",
    href: "/available-frameworks",
    items: [
      {
        title: "React.js",
        href: "/reactjs",
        items: [{ title: "Typescipt", href: "/typescript" }],
      },
      {
        title: "Next.js",
        href: "/nextjs",
        items: [
          { title: "Typescipt", href: "/typescript" },
          { title: "Javascript", href: "/javascript" },
        ],
      },
      {
        title: "Laravel",
        href: "/laravel",
        noLink: true,
        items: [
          {
            title: "Laravel Breeze API + Next.js",
            href: "/laranext",
            items: [{ title: "Typescipt", href: "/typescript" }],
          },
        ],
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    noLink: true,
    items: [{ title: "Contribution Guide", href: "/contribution-guide" }],
  },
];

const v1_3_x_ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "Installation", href: "/installation" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Available Frameworks",
    href: "/available-frameworks",
    items: [
      {
        title: "React.js",
        href: "/reactjs",
        items: [
          { title: "Typescipt", href: "/typescript" },
          { title: "Javascipt", href: "/javascript" },
        ],
      },
      {
        title: "Next.js",
        href: "/nextjs",
        items: [
          { title: "Typescipt", href: "/typescript" },
          { title: "Javascript", href: "/javascript" },
        ],
      },
      {
        title: "Laravel",
        href: "/laravel",
        noLink: true,
        items: [
          {
            title: "Laravel Breeze API + Next.js",
            href: "/laranext",
            items: [{ title: "Typescipt", href: "/typescript" }],
          },
        ],
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    noLink: true,
    items: [{ title: "Contribution Guide", href: "/contribution-guide" }],
  },
];

const v1_4_x_ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "Installation", href: "/installation" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Available Frameworks",
    href: "/available-frameworks",
    items: [
      {
        title: "React.js",
        href: "/reactjs",
        items: [
          { title: "Typescipt", href: "/typescript" },
          { title: "Javascript", href: "/javascript" },
        ],
      },
      {
        title: "Next.js",
        href: "/nextjs",
        items: [
          { title: "Typescipt", href: "/typescript" },
          { title: "Javascript", href: "/javascript" },
        ],
      },
      {
        title: "Laravel",
        href: "/laravel",
        noLink: true,
        items: [
          {
            title: "Laravel Breeze API + Next.js",
            href: "/laranext",
            items: [{ title: "Typescipt", href: "/typescript" }],
          },
          { title: "Laravel + Filament", href: "/filament" },
        ],
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    noLink: true,
    items: [{ title: "Contribution Guide", href: "/contribution-guide" }],
  },
];

const v2_1_5_ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "Installation", href: "/installation" },
      { title: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Available Frameworks",
    href: "/available-frameworks",
    items: [
      {
        title: "React.js",
        href: "/reactjs",
        items: [
          { title: "Tanstack Router", href: "/tanstack-router" },
          { title: "Tanstack Start", href: "/tanstack-start" },
          { title: "Next.js", href: "/nextjs" },
        ],
      },
      {
        title: "Vue.js",
        href: "/vuejs",
        items: [
          { title: "Vue Router", href: "/vue-router" },
          { title: "Nuxt", href: "/nuxtjs" },
        ],
      },
      {
        title: "Svelte",
        href: "/svelte",
        items: [
          { title: "Svelte", href: "/svelte" },
          { title: "SvelteKit", href: "/sveltekit" },
        ],
      },
      {
        title: "Astro",
        href: "/astro",
      },
      {
        title: "Solid.js",
        href: "/solidjs",
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    noLink: true,
    items: [{ title: "Contribution Guide", href: "/contribution-guide" }],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export function getRoutesFlatten(v: Version) {
  const routes = getRoutesForVersion(v);
  return routes.map((it) => getRecurrsiveAllLinks(it)).flat();
}

export function getRoutesForVersion(v: Version) {
  // Add accordingly
  switch (v) {
    case "v1.0.x":
      return v1_0_x_ROUTES;
    case "v1.1.x":
      return v1_1_x_ROUTES;
    case "v1.2.x":
      return v1_2_x_ROUTES;
    case "v1.3.x":
      return v1_3_x_ROUTES;
    case "v1.4.x":
      return v1_4_x_ROUTES;
    case "v2.1.5":
      return v2_1_5_ROUTES;
  }
}

export function getPreviousNext(path: string, v: Version) {
  path = path.split("/").slice(1).join("/");
  const routes = getRoutesFlatten(v);
  const index = routes.findIndex(({ href }) => href == `/${path}`);
  return {
    prev: routes[index - 1],
    next: routes[index + 1],
  };
}

export const availableVersions = [
  "v2.1.5",
  "v1.4.x",
  "v1.3.x",
  "v1.2.x",
  "v1.1.x",
  "v1.0.x",
] as const;
export type Version = (typeof availableVersions)[number];
