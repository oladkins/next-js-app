import React from 'react';
import LinkButton from '@/components/linkButton/LinkButton';
import Image from 'next/image';
import styles from './CategoryItem.module.css';

type CategoryItemType = {
  id: number;
  title: string;
  desc: string;
  image: string;
};
const CategoryItem = ({ id, title, desc, image }: CategoryItemType) => {
  return (
    <div className={styles.item} key={id}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <LinkButton text='See More' url='#' />
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} width={600} height={500} src={image} alt={title} />
      </div>
    </div>
  );
};

export default CategoryItem;
