import React from 'react';
import styles from './Navbar.module.css';
import HeaderContent from '@/components/headerContent/HeaderContent';
import HeaderLogo from '@/components/headerLogo/HeaderLogo';

const Header = () => {
  return (
    <header className={styles.container}>
      <HeaderLogo />
      <HeaderContent />
    </header>
  );
};

export default Header;
