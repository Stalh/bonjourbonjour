import { redirect } from 'next/navigation';

import { ContactSection } from '@/components/sections/contact-section';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function ContactPage({
  params
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    redirect('/');
  }

  const dictionary = await getDictionary(locale);
  return <ContactSection dictionary={dictionary.contact} locale={locale} />;
}
