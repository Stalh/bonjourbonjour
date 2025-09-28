import { createTranslator } from 'next-intl/server';

const locales = ['fr', 'en'];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  i18n: {
    locales,
    defaultLocale: 'fr'
  },
  redirects: async () => {
    const t = await createTranslator({ locale: 'fr', namespace: 'common' });
    void t; // placeholder to ensure next-intl tree-shaking retains namespace
    return [];
  }
};

export default nextConfig;
