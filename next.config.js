/** @type {import('next').NextConfig} */
const defaultConfig = {
  i18n: {
    locales: [`en`, `ko`],
    localeDetection: false,
    defaultLocale: `ko`,
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...defaultConfig,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
