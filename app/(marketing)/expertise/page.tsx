import { ExpertiseSection } from '@/components/sections/expertise-section';
import { defaultLocale } from '@/lib/i18n/config';
import { getDictionarySync } from '@/lib/i18n/dictionaries';

export default function ExpertisePage() {
  const dictionary = getDictionarySync(defaultLocale);
  return <ExpertiseSection dictionary={dictionary.expertise} />;
}
