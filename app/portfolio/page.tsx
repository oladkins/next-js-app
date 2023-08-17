import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { portfolioLinks } from '@/constants';

const Portfolio = () => {
  const prefix = '/portfolio/';
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        {portfolioLinks.map(({ url, name }) => (
          <Link href={prefix + url} className={styles.item} key={name}>
            <span className={styles.title}>{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
