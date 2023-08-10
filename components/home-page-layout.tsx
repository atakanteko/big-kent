import { Layout } from 'antd';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function HomePageLayout({ children }: Props) {
  return <div className="hero-section-layout">{children}</div>;
}
