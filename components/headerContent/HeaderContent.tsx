'use client';
import React from 'react';

import styles from './HeaderContent.module.css';
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme';
import { headerItems } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderContent = () => {
  const pathname = usePathname();

  return (
    <div className={styles.links}>
      <ToggleTheme />
      {headerItems.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={
            pathname.includes(link.title.toLowerCase()) || (link.url === '/' && pathname === '/')
              ? styles.activeLink
              : styles.link
          }
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderContent;
