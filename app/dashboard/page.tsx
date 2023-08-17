'use client';

import styles from './page.module.css';
import LinkButton from '@/components/linkButton/LinkButton';
import { useDashboard } from '@/hooks/useDashboard';
import PostsList from '@/components/postsList/PostsList';
import NewPostForm from '@/components/newPostForm/NewPostForm';
import { FormEvent } from 'react';

const Dashboard = () => {
  const { addPost, isLoading } = useDashboard();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: e.target[0].value,
      desc: e.target[1].value,
      img: e.target[2].value,
      content: e.target[3].value,
      username: 'admin',
      createdAt: Date.now().toString(),
    };

    addPost(data);
  };

  return (
    <div className={styles.container}>
      <LinkButton
        text='Manage your tasks (Beta)'
        url='/dashboard/todo'
        containerClassName={styles.manageButton}
      />
      <div className={styles.postsContainer}>
        <PostsList />
        <NewPostForm handleSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Dashboard;
