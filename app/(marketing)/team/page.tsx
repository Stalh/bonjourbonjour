import { TeamSection } from '@/components/sections/team-section';
import { defaultLocale } from '@/lib/i18n/config';
import { getDictionarySync } from '@/lib/i18n/dictionaries';

export default function TeamPage() {
  const dictionary = getDictionarySync(defaultLocale);
  return <TeamSection dictionary={dictionary.team} />;
}
