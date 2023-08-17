import React from 'react';
import styles from './Post.module.css';
import Image from 'next/image';
import { PostType } from '@/types';
import Button from '@/components/button/Button';

type PostComponentType = {
  post: PostType;
  handleDelete: (id: string | number) => Promise<void>;
  index: number;
};

const Post = ({ post, handleDelete, index }: PostComponentType) => {
  const isCanBeDeleted = index + 1 > 3;
  return (
    <div className={styles.post} key={post._id}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt={post.title} width={200} height={100} />
      </div>
      <h2 className={styles.postTitle}>{post.title}</h2>
      {isCanBeDeleted ? (
        <Button
          text={'x'}
          onClick={() => handleDelete(post._id)}
          type={'button'}
          className={styles.button}
        />
      ) : null}
    </div>
  );
};

export default Post;
