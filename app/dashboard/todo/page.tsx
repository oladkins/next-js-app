'use client';
import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styles from './page.module.css';
import Spinner from '@/components/spinner/Spinner';
import { TodoColumnsList } from '@/components/todoColumnsList/TodoColumnsList';
import { ColumnType, PostType } from '@/types';
import useSWR, { Fetcher } from 'swr';

export default function Todo() {
  const [columnsOrder, setColumnsOrder] = useState<string[] | []>([]);

  const [state, setState] = useState<{ columns: ColumnType[] | [] }>({
    columns: [],
  });

  const columnsFetcher: Fetcher<
    {
      columns: ColumnType[];
    }[],
    string
  > = (...args) => fetch(...args).then((res) => res.json());
  const { data: columnsData, isLoading: isColumnsLoading } = useSWR(
    `/api/columns?username=admin`,
    columnsFetcher,
    {
      onError: (err) => console.log(err),
      onSuccess: (res) => {
        setState({ columns: res[0].columns || [] });
      },
    },
  );

  const postsFetcher: Fetcher<PostType[], string> = (...args) =>
    fetch(...args).then((res) => res.json());
  const { data: postsData, isLoading: isPostsLoading } = useSWR(
    `/api/posts?username=admin`,
    postsFetcher,
  );

  useEffect(() => {
    if (columnsData) {
      setState({ columns: columnsData[0]?.columns });
      setColumnsOrder(columnsData[0]?.columns.map((el) => el.id));
    }
  }, [columnsData]);

  const reorderColumnList = (startIndex: number, endIndex: number, sourceCol?: ColumnType) => {
    if (sourceCol) {
      const newPostIds = Array.from(sourceCol.postIds);
      const [removed] = newPostIds.splice(startIndex, 1);
      newPostIds.splice(endIndex, 0, removed);

      return {
        ...sourceCol,
        postIds: newPostIds,
      };
    }
  };

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const sourceCol = state.columns.find((el) => el._id === source.droppableId);
    const destinationCol = state.columns.find((el) => el._id === destination.droppableId);

    if (sourceCol?.id === destinationCol?.id) {
      const newColumn = reorderColumnList( source.index, destination.index, sourceCol);
      const newState = {
        columns: state.columns.map((el) => (el._id === sourceCol?._id ? newColumn : el)),
      };
      setState(newState as { columns: [] | ColumnType[]; });
      return;
    }

    const startPostIds = sourceCol && Array.from(sourceCol.postIds);

    const removed: number[] = startPostIds?.length ? startPostIds?.splice(source.index, 1) : [];
    const newStartCol = {
      ...sourceCol,
      postIds: startPostIds,
    };

    const endPostIds = destinationCol && destinationCol.postIds ? Array.from(destinationCol.postIds) : [];

    // @ts-ignore
    endPostIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      postIds: endPostIds,
    };

    const newState = {
      columns: state.columns.map((col) => {
        if (col.id === newStartCol.id) {
          return { ...col, postIds: newStartCol.postIds };
        } else if (col.id === newEndCol.id) {
          return { ...col, postIds: newEndCol.postIds };
        } else return col;
      }),
    };

    // @ts-ignore
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <div className={styles.headerTitle}>Manage your tasks</div>
        </div>

        {isColumnsLoading || isPostsLoading ? (
          <Spinner />
        ) : (
          <TodoColumnsList columnsOrder={columnsOrder} state={state} postsData={postsData} />
        )}
      </div>
    </DragDropContext>
  );
}
