import { ContactSection } from '@/components/sections/contact-section';
import { defaultLocale } from '@/lib/i18n/config';
import { getDictionarySync } from '@/lib/i18n/dictionaries';

export default function ContactPage() {
  const dictionary = getDictionarySync(defaultLocale);
  return <ContactSection dictionary={dictionary.contact} />;
}
