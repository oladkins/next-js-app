import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';
import HeaderContent from '@/components/headerContent/HeaderContent';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href='/home' className={styles.logo}>
        Next App
      </Link>
      <HeaderContent />
    </nav>
  );
};

export default Navbar;
