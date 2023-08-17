import React, { FC, ReactNode } from 'react';
import styles from './LinkButton.module.css';
import Link from 'next/link';

type LinkButtonType = {
  text: string;
  url: string;
  className?: string;
  containerClassName?: string;
};

const LinkButton: FC<LinkButtonType> = ({ text, url, className, containerClassName }) => (
  <Link href={url} className={containerClassName}>
    <button className={className || styles.container}>{text}</button>
  </Link>
);

export default LinkButton;
