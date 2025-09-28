import { redirect } from 'next/navigation';

import { TeamSection } from '@/components/sections/team-section';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function TeamPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    redirect('/');
  }

  const dictionary = await getDictionary(locale);
  return <TeamSection dictionary={dictionary.team} />;
}
