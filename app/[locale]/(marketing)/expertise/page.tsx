import { redirect } from 'next/navigation';

import { ExpertiseSection } from '@/components/sections/expertise-section';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function ExpertisePage({
  params
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    redirect('/');
  }

  const dictionary = await getDictionary(locale);
  return <ExpertiseSection dictionary={dictionary.expertise} />;
}
