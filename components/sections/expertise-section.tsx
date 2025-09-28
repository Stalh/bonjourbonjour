import { Building, FileText, TrendingUp, Umbrella } from 'lucide-react';

import type { Dictionary } from '@/lib/i18n/dictionaries';

const icons = [TrendingUp, Building, FileText, Umbrella];

export function ExpertiseSection({ dictionary }: { dictionary: Dictionary['expertise'] }) {
  return (
    <div className="bg-white py-20">
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

        <div className="grid gap-8 lg:grid-cols-2">
          {dictionary.areas.map((area, index) => {
            const Icon = icons[index] ?? TrendingUp;
            return (
              <div
                key={area.title}
                className="group h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition hover:border-accent/30 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition group-hover:bg-accent/20">
                    <Icon className="h-8 w-8 text-accent" />
                  </span>
                  <h3 className="text-2xl text-primary group-hover:text-accent">{area.title}</h3>
                </div>
                <p className="text-gray-600">{area.description}</p>
                <div className="mt-6">
                  <h4 className="font-medium text-primary">{dictionary.featuresLabel}</h4>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    {area.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-2xl bg-primary p-12 text-white">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dictionary.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-medium">{stat.value}</div>
                <p className="mt-2 text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-secondary/40 p-12 text-center">
          <h2 className="text-3xl font-light text-primary">
            {dictionary.cta.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-lg text-gray-600">{dictionary.cta.description}</p>
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
