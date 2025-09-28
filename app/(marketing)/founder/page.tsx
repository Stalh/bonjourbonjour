import { FounderSection } from '@/components/sections/founder-section';
import { defaultLocale } from '@/lib/i18n/config';
import { getDictionarySync } from '@/lib/i18n/dictionaries';

export default function FounderPage() {
  const dictionary = getDictionarySync(defaultLocale);
  return <FounderSection dictionary={dictionary.founder} />;
}
