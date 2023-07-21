/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  serverTimeout: 45000,
};

module.exports = nextConfig;
