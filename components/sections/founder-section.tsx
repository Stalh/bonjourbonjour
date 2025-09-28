import { ArrowLeft, Award, Building, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';

import type { Dictionary } from '@/lib/i18n/dictionaries';

export function FounderSection({
  dictionary
}: {
  dictionary: Dictionary['founder'];
}) {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gray-500 transition hover:text-primary"
        >
          <ArrowLeft className="h-5 w-5" />
          Retour
        </Link>

        <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {dictionary.hero.eyebrow}
              </p>
              <h1 className="mt-6 text-5xl font-light text-primary">
                {dictionary.hero.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <p className="text-xl text-gray-600">{dictionary.hero.summary}</p>
            <div className="space-y-4 text-gray-600">
              {dictionary.hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Users className="mx-auto mb-4 h-16 w-16 opacity-50" />
                <span className="text-sm uppercase tracking-[0.3em]">Portrait professionnel</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 bg-gray-50/60 py-16">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {dictionary.experience.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl text-primary">
                {dictionary.experience.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <div className="space-y-10">
              {dictionary.experience.entries.map((entry, index) => {
                const icons = [Building, Award, Users, GraduationCap];
                const Icon = icons[index] ?? Building;
                return (
                  <div key={entry.title} className="flex gap-6">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-wood/10 text-wood">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl text-primary">{entry.title}</h3>
                        <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                          {entry.period}
                        </span>
                      </div>
                      <p className="text-wood">{entry.company}</p>
                      <p className="mt-2 text-gray-600">{entry.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {dictionary.philosophy.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl text-primary">
                {dictionary.philosophy.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <div className="space-y-6 text-gray-600">
              {dictionary.philosophy.quotes.map((quote) => (
                <blockquote key={quote} className="border-l-4 border-wood pl-6 text-lg italic text-primary">
                  {quote}
                </blockquote>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl text-primary">{dictionary.philosophy.certifications.title}</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {dictionary.philosophy.certifications.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="text-sm text-gray-500">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary/5 p-8">
              <h3 className="text-xl text-primary">{dictionary.philosophy.engagement.title}</h3>
              <p className="mt-3 text-gray-600">
                {dictionary.philosophy.engagement.description}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-2xl bg-primary p-12 text-center text-white">
          <h2 className="text-3xl font-light">
            {dictionary.cta.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-lg text-gray-300">{dictionary.cta.description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg text-white transition hover:bg-accent/90"
          >
            {dictionary.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
}
