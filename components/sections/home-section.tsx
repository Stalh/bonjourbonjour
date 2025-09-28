import Link from 'next/link';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/lib/i18n/dictionaries';

export function HomeSection({
  dictionary,
  locale
}: {
  dictionary: Dictionary['home'];
  locale: string;
}) {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary/50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-wood-light/5 to-wood/10" aria-hidden />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gray-500">
            {dictionary.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-light tracking-tight text-primary sm:text-5xl lg:text-7xl">
            {dictionary.hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg font-light text-gray-600 sm:text-xl lg:text-2xl">
            {dictionary.hero.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-accent px-8 py-4 text-lg text-white hover:bg-accent/90"
              asChild
            >
              <Link href={`/${locale}/contact`}>{dictionary.hero.primaryCta}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary px-8 py-4 text-lg text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href={`/${locale}/methodology`}>{dictionary.hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-3">
            {dictionary.stats.map((stat, index) => {
              const icons = [Shield, TrendingUp, Users];
              const Icon = icons[index] ?? Shield;
              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl text-primary">{stat.value}</div>
                  <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light text-primary sm:text-4xl">
              {dictionary.hero.emphasis}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {dictionary.values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-wood-light/20 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <h3 className="text-2xl text-primary">{value.title}</h3>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light sm:text-4xl">
            {dictionary.trust.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-lg text-gray-300">{dictionary.trust.description}</p>
          <Button
            size="lg"
            className="mt-8 bg-accent px-8 py-4 text-lg text-white hover:bg-accent/90"
            asChild
          >
            <Link href={`/${locale}/contact`}>
              {dictionary.trust.button}
              <ArrowRight className="ml-2 inline-block h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
