'use client';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onLocaleChange(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: locale });
    });
  }

  return (
    <label className="locale-switcher">
      <span onClick={() => onLocaleChange(locale === 'en' ? 'tr' : 'en')}>
        {t('locale', { locale: locale === 'en' ? 'tr' : 'en' })}
      </span>
    </label>
  );
}
