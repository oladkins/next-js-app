import React from 'react';
import styles from './BlogItem.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { PostType } from '@/types';

const BlogItem = ({ _id, img, title, content }: Omit<PostType, 'username' | 'desc'>) => {
  return (
    <Link href={`blog/${_id}`} className={styles.container} key={_id}>
      <div className={styles.imageContainer}>
        <Image src={img} alt='' width={400} height={250} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{content}</p>
      </div>
    </Link>
  );
};

export default BlogItem;
