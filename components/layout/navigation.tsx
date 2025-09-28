'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import type { NavigationLink } from '@/lib/i18n/dictionaries';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navigation({
  links,
  cta,
  logo
}: {
  links: NavigationLink[];
  cta: string;
  logo: { primary: string; secondary: string };
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((state) => !state);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" prefetch={false}>
          <span className="h-8 w-2 bg-wood" aria-hidden />
          <span>
            <span className="block text-2xl tracking-widest text-primary">{logo.primary}</span>
            <span className="mt-1 block text-xs tracking-[0.3em] text-gray-500">
              {logo.secondary}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-primary',
                isActive(link.href) && 'text-primary'
              )}
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="px-6 py-2 text-sm uppercase tracking-[0.2em]">
            <Link href="/contact" prefetch={false}>
              {cta}
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/40 bg-white md:hidden">
          <div className="space-y-2 px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm uppercase tracking-[0.2em] text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary',
                  isActive(link.href) && 'text-primary'
                )}
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full" asChild>
              <Link href="/contact" prefetch={false}>
                {cta}
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
