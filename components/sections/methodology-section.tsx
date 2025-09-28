import { Monitor, Search, Target } from 'lucide-react';

import type { Dictionary } from '@/lib/i18n/dictionaries';

const icons = [Search, Target, Monitor];

export function MethodologySection({ dictionary }: { dictionary: Dictionary['methodology'] }) {
  return (
    <div className="bg-gray-50/40 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
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

        <div className="relative">
          <div className="hidden h-full w-px -translate-x-1/2 transform bg-gray-200 lg:absolute lg:left-1/2 lg:block" />
          <div className="space-y-16 lg:space-y-24">
            {dictionary.steps.map((step, index) => {
              const Icon = icons[index] ?? Search;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center"
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                      <div className="mb-6 flex items-center gap-4">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                          <Icon className="h-8 w-8 text-accent" />
                        </span>
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-accent">
                            {dictionary.stepLabel} {index + 1}
                          </p>
                          <h3 className="text-2xl text-primary">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                      <ul className="mt-6 space-y-3 text-gray-600">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-secondary/40 p-12 text-center">
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
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-lg text-white transition-colors hover:bg-accent/90"
          >
            {dictionary.cta.button}
          </a>
        </div>
      </div>
    </div>
  );
}
