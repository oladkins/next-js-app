'use client';
import React from 'react';

import styles from './HeaderContent.module.css';
import ToggleTheme from '@/components/ToggleTheme/ToggleTheme';
import { links } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderContent = () => {
  const pathname = usePathname();

  return (
    <div className={styles.links}>
      <ToggleTheme />
      {links.map((link) => (
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
