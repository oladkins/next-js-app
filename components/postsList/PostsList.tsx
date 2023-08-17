import React from 'react';
import { PostType } from '@/types';
import Post from '@/components/post/Post';
import styles from './PostsList.module.css';
import Spinner from '@/components/spinner/Spinner';
import {useDashboard} from "@/hooks/useDashboard";

const PostsList = () => {
  const { postsData, deletePost, isLoading, postsLoading } = useDashboard();

  return (
    <div className={styles.posts}>
      {isLoading || postsLoading ? (
        <Spinner />
      ) : (
        <>
          {postsData.length ? (
            postsData?.map((post: PostType, index: number) => (
              <Post key={post._id} post={post} handleDelete={deletePost} index={index} />
            ))
          ) : (
            <p>No posts yet</p>
          )}
        </>
      )}
    </div>
  );
};

export default PostsList;
