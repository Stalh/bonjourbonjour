import { redirect } from 'next/navigation';

import { HomeSection } from '@/components/sections/home-section';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    redirect('/');
  }

  const dictionary = await getDictionary(locale);
  return <HomeSection dictionary={dictionary.home} locale={locale} />;
}
