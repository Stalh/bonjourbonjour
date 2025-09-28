'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { locales, type Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

function getPathnameWithoutLocale(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return '';
  }
  const [, ...rest] = segments;
  return `/${rest.join('/')}`;
}

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const basePath = getPathnameWithoutLocale(pathname || '/');

  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
      {locales.map((locale) => {
        const href = `/${locale}${basePath}`.replace(/\/$/, '') || `/${locale}`;
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={href || `/${locale}`}
            className={cn(
              'transition-colors hover:text-primary',
              isActive ? 'text-primary' : 'text-gray-400'
            )}
            prefetch={false}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
