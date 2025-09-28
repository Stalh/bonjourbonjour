'use client';

import { Calendar, Check, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Dictionary } from '@/lib/i18n/dictionaries';

export function ContactSection({ dictionary }: { dictionary: Dictionary['contact'] }) {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const slots = useMemo(() => ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'], []);
  const dates = useMemo(
    () => [
      'Lundi 2 Décembre',
      'Mardi 3 Décembre',
      'Mercredi 4 Décembre',
      'Jeudi 5 Décembre',
      'Vendredi 6 Décembre'
    ],
    []
  );

  if (submitted) {
    return (
      <div className="bg-gray-50/50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-8 text-4xl text-primary">
            {dictionary.form.confirmation.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg text-gray-600">{dictionary.form.confirmation.description}</p>

          <div className="mt-12 space-y-4 text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              {dictionary.form.confirmation.nextStepsTitle}
            </p>
            <div className="space-y-4">
              {dictionary.form.confirmation.steps.map((step) => (
                <div key={step.title} className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="font-medium text-primary">{step.title}</p>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Button asChild className="mt-12 bg-primary px-8 py-3 text-white hover:bg-wood">
            <a href="/">{dictionary.form.confirmation.backHome}</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {dictionary.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl text-primary">
                {dictionary.hero.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 text-xl text-gray-600">{dictionary.hero.description}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-wood" />
                <div>
                  <p className="font-medium text-primary">{dictionary.info.duration.title}</p>
                  <p className="text-sm text-gray-600">{dictionary.info.duration.description}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-wood" />
                <div>
                  <p className="font-medium text-primary">{dictionary.info.location.title}</p>
                  <p className="text-sm text-gray-600">{dictionary.info.location.description}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-wood" />
                <div>
                  <p className="font-medium text-primary">{dictionary.info.confidentiality.title}</p>
                  <p className="text-sm text-gray-600">{dictionary.info.confidentiality.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-wood" />
                <span>{dictionary.info.details.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-wood" />
                <span>{dictionary.info.details.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-wood" />
                <span>{dictionary.info.details.address}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-50/60 p-8">
            <form
              className="space-y-8"
              onSubmit={(event) => {
                event.preventDefault();
                if (!selectedDate || !selectedTime) return;
                setSubmitted(true);
              }}
            >
              <div className="space-y-4">
                <h3 className="text-xl text-primary">{dictionary.form.personalTitle}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-gray-600">
                      {dictionary.form.fields.firstName}
                    </label>
                    <Input required className="bg-white" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-gray-600">
                      {dictionary.form.fields.lastName}
                    </label>
                    <Input required className="bg-white" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-gray-600">
                    {dictionary.form.fields.email}
                  </label>
                  <Input type="email" required className="bg-white" />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-gray-600">
                    {dictionary.form.fields.phone}
                  </label>
                  <Input className="bg-white" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl text-primary">{dictionary.form.availabilityTitle}</h3>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-600">
                    {dictionary.form.dateLabel}
                  </p>
                  <div className="grid gap-3">
                    {dates.map((date) => (
                      <button
                        type="button"
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`rounded-lg border px-4 py-3 text-left transition ${
                          selectedDate === date
                            ? 'border-wood bg-wood/10 text-primary'
                            : 'border-gray-200 text-gray-700 hover:border-wood/40'
                        }`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate ? (
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-600">
                      {dictionary.form.timeLabel}
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {slots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`rounded-lg border px-4 py-3 text-center transition ${
                            selectedTime === slot
                              ? 'border-wood bg-wood/10 text-primary'
                              : 'border-gray-200 text-gray-700 hover:border-wood/40'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-gray-600">
                  {dictionary.form.fields.wealthObjectives}
                </label>
                <Textarea
                  rows={4}
                  placeholder={dictionary.form.fields.objectivePlaceholder}
                  className="bg-white"
                />
              </div>

              <Button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-primary py-4 text-white hover:bg-wood disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Calendar className="mr-2 h-5 w-5" />
                {dictionary.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
