import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { DictionaryProvider } from '@/components/providers/dictionary-provider';
import { SonnerProvider } from '@/components/providers/sonner-provider';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;
  if (!locales.includes(locale)) {
    notFound();
  }
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navigation
          links={dictionary.navigation.links}
          cta={dictionary.navigation.cta}
          logo={dictionary.navigation.logo}
          locale={locale}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <SonnerProvider />
    </DictionaryProvider>
  );
}
