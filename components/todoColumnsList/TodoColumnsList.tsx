import React from 'react';
import styles from '@/app/dashboard/todo/page.module.css';
import dynamic from 'next/dynamic';
import { ColumnType, PostType } from '@/types';

type TodoColumnsListType = {
  columnsOrder: string[];
  state: { columns: ColumnType[] | [] };
  postsData?: PostType[];
};

const Column = dynamic(() => import('@/components/column/Column'), { ssr: false });

export const TodoColumnsList = ({ columnsOrder, state, postsData }: TodoColumnsListType) => (
  <div className={styles.columnsWrapper}>
    {columnsOrder?.map((columnId) => {
      if (state.columns.length) {
        const column = state?.columns?.find((el) => el?.id === columnId);
        const posts = column?.postIds
          ?.map((postId) => (postsData ? postsData[postId - 1] : []))
          .filter((el) => el);

        return <Column key={column?._id} column={column} posts={posts} />;
      }
    })}
  </div>
);
