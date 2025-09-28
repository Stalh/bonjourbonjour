import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { defaultLocale, locales } from '@/lib/i18n/config';

function getLocale(request: NextRequest) {
  const preferred = request.headers.get('accept-language');
  if (!preferred) return defaultLocale;
  const languages = preferred.split(',').map((lang) => lang.split(';')[0]);
  for (const language of languages) {
    const base = language.split('-')[0];
    if (locales.includes(base as (typeof locales)[number])) {
      return base as (typeof locales)[number];
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  ) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|.*\..*).*)']
};
