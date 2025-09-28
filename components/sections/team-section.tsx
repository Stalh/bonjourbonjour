import { Award, BookOpen, Globe, Shield } from 'lucide-react';

import type { Dictionary } from '@/lib/i18n/dictionaries';

const icons = [Award, BookOpen, Shield, Globe];

export function TeamSection({ dictionary }: { dictionary: Dictionary['team'] }) {
  return (
    <div className="bg-gray-50/40 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-light text-primary sm:text-5xl">
            {dictionary.hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg text-gray-600">{dictionary.hero.description}</p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-4xl text-primary">
              {dictionary.founder.name}
            </h2>
            <p className="text-accent">{dictionary.founder.role}</p>
            <div className="space-y-4 text-gray-600">
              {dictionary.founder.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {dictionary.founder.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {dictionary.achievements.map((achievement, index) => {
              const Icon = icons[index] ?? Award;
              return (
                <div
                  key={achievement.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-wood/10">
                    <Icon className="h-8 w-8 text-wood" />
                  </span>
                  <h3 className="text-xl text-primary">{achievement.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-white p-12 shadow-lg">
          <h2 className="text-3xl text-primary">{dictionary.valuesHeading}</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {dictionary.values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-2xl text-primary">{value.title}</h3>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-primary p-12 text-center text-white">
          <h2 className="text-3xl font-light">
            {dictionary.cta.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-lg text-gray-300">{dictionary.cta.description}</p>
          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg text-white transition hover:bg-accent/90"
          >
            {dictionary.cta.button}
          </a>
        </div>
      </div>
    </div>
  );
}
