import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';
import { PostType } from '@/types';
import { Metadata } from 'next';
import { getPostById } from '@/hooks/useGetPostById';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getPostById(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogId: ({ params }: { params: any }) => Promise<JSX.Element> = async ({ params }) => {
  const { id } = params;
  const data: PostType = await getPostById(id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.author}>
            <Image src={data.img} alt='' width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>{data.username}</span>
          </div>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.desc}>{data.desc}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
