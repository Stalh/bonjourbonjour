'use client';

import { createContext, useContext } from 'react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const DictionaryContext = createContext<Dictionary | null>(null);

export function DictionaryProvider({
  dictionary,
  children
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(DictionaryContext);

  if (!context) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }

  return context;
}
