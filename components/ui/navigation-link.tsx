'use client';

import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function NavigationLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive}
      className={`link-item ${isActive ? 'active-link' : null}`}
      href={href}
      {...rest}
    />
  );
}
