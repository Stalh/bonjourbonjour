import { redirect } from 'next/navigation';

import { FounderSection } from '@/components/sections/founder-section';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function FounderPage({
  params
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    redirect('/');
  }

  const dictionary = await getDictionary(locale);
  return <FounderSection dictionary={dictionary.founder} locale={locale} />;
}
