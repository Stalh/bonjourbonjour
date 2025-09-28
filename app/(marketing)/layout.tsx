import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { DictionaryProvider } from '@/components/providers/dictionary-provider';
import { SonnerProvider } from '@/components/providers/sonner-provider';
import { defaultLocale } from '@/lib/i18n/config';
import { getDictionarySync } from '@/lib/i18n/dictionaries';

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const dictionary = getDictionarySync(defaultLocale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navigation
          links={dictionary.navigation.links}
          cta={dictionary.navigation.cta}
          logo={dictionary.navigation.logo}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <SonnerProvider />
    </DictionaryProvider>
  );
}
