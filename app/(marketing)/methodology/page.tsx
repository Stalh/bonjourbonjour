import { MethodologySection } from '@/components/sections/methodology-section';
import { defaultLocale } from '@/lib/i18n/config';
import { getDictionarySync } from '@/lib/i18n/dictionaries';

export default function MethodologyPage() {
  const dictionary = getDictionarySync(defaultLocale);
  return <MethodologySection dictionary={dictionary.methodology} />;
}
