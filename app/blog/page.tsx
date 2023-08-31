'use client';
import React from 'react';
import styles from './page.module.css';
import { PostType } from '@/types';
import useSWR, { Fetcher } from 'swr';
import BlogItem from '@/components/blogItem/BlogItem';
import Spinner from '@/components/spinner/Spinner';

const Blog = () => {
  const fetcher: Fetcher<PostType[]> = (arg: string) => fetch(arg).then((res) => res.json());
  const { data, isLoading } = useSWR(`/api/posts`, fetcher);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
        <BlogItem
          _id={item._id}
          title={item.title}
          img={item.img}
          content={item.content}
          key={item._id}
        />
      ))}
    </div>
  );
};
export default Blog;
