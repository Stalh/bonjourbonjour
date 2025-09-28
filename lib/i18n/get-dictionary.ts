import 'server-only';

import type { Locale } from './config';
import { getDictionarySync } from './dictionaries';

export async function getDictionary(locale: Locale) {
  return getDictionarySync(locale);
}
