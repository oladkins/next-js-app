import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import { headerLinksPaths } from '@/constants';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 My Next App. All rights reserved</div>
      <div className={styles.social}>
        {headerLinksPaths.map(({ src, url }) => (
          <Image key={src} src={src} alt={url} width={25} height={25} className={styles.icon} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
