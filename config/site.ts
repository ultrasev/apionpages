export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Template",
  description: "Template for your next project",
  companyName: "Template",
  supportEmail: "i@ultrasev.com",
  mainNav: [
    { title: "homepage", href: "/", multiLang: true },
    { title: "wormhole", href: "/wormhole", multiLang: true },
    { title: "share", href: "/share", multiLang: true },
  ],
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://template.ultrasev.com",
  links: {
    twitter: "https://twitter.com/slippertopia",
    github: "https://github.com/ultrasev",
    telegram: "https://t.me/slippertopia",
    youtube: "https://www.youtube.com/channel/UCt0Op8mQvqwjp18B8vNPjzg",
    email: "mailto:i@ultrasev.com",
  },
  ogImage: "https://image.ddot.cc/202406/preview-myicons.png",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/icons/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/icons/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/icons/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/icons/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/icons/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/icons/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/icons/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/icons/apple-icon-167x167.png", sizes: "167x167" },
      { url: "/icons/apple-icon-180x180.png", sizes: "180x180" },
    ],
    favicon: "/icons/favicon.ico",
  },
  twitterHandle: "@slippertopia",
};

export const getSiteURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    "http://localhost:3000";

  // Make sure to include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // 注：结尾的斜杠会被自动去除，正则时要考虑
  url = url.replace(/\/$/, "");
  return url;
};
