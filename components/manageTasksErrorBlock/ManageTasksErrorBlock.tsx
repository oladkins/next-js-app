import React from 'react';
import Button from '@/components/button/Button';
import styles from './ManageTasksErrorBlock.module.css';

const ManageTasksErrorBlock = () => {
  return (
    <div className={styles.errorBlock}>
      <p className={styles.notFound}>Something went wrong...</p>
      <p className={styles.notFound}>There is no tasks now!</p>
      <Button
        text='Try to reload page'
        onClick={() => window.location.reload()}
        className={styles.button}
      />
    </div>
  );
};

export default ManageTasksErrorBlock;