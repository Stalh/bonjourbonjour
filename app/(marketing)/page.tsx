import { HomeSection } from '@/components/sections/home-section';
import { defaultLocale } from '@/lib/i18n/config';
import { getDictionarySync } from '@/lib/i18n/dictionaries';

export default function Page() {
  const dictionary = getDictionarySync(defaultLocale);
  return <HomeSection dictionary={dictionary.home} />;
}
