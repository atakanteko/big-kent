'use client';

import { useTranslations } from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <div>
      <p className="max-w-[590px]">title={t('title')}</p>
    </div>
  );
}
