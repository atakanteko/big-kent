import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import AppProvider from '@/context/app-provider';
import { ConfigProvider, Layout } from 'antd';
import AppHeader from '@/components/layout/header/app-header';
import AppContent from '@/components/layout/content/app-content';
import AppFooter from '@/components/layout/footer/app-footer';
import '@/styles/dist/css/kent.min.css';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'de'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider>
            <ConfigProvider
              theme={{
                token: {},
                components: {},
              }}
            >
              <Layout>
                <AppHeader />
                <AppContent>{children}</AppContent>
                <AppFooter />
              </Layout>
            </ConfigProvider>
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
