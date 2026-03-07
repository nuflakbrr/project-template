export const siteMetadata = {
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
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: import.meta.env.VITE_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
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
