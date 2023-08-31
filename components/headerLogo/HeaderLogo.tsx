import React from 'react';
import Link from 'next/link';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
  return (
    <Link href='/' className={styles.logo}>
      Own
    </Link>
  );
};

export default HeaderLogo;