import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import { footerLinksPaths } from '@/constants';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section>2023 My Next App. All rights reserved</section>
      <section className={styles.social}>
        {footerLinksPaths.map(({ src, url }) => (
          <Image key={src} src={src} alt={url} width={25} height={25} className={styles.icon} />
        ))}
      </section>
    </footer>
  );
};

export default Footer;
