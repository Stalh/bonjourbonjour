import { redirect } from 'next/navigation';

import { MethodologySection } from '@/components/sections/methodology-section';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function MethodologyPage({
  params
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    redirect('/');
  }

  const dictionary = await getDictionary(locale);
  return <MethodologySection dictionary={dictionary.methodology} />;
}
