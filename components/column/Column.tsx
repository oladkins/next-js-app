import styles from './Column.module.css';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { ColumnType, PostType } from '@/types';

type ColumnComponentType = {
  column?: ColumnType;
  posts?: PostType[];
};

export function Column({ column, posts }: ColumnComponentType) {
  return (
    <div className={styles.columnWrapper}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{column?.title}</div>
      </div>

      <Droppable droppableId={column?._id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className={styles.columnContainer}
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {posts?.map((post, index) => {
              return (
                <Draggable key={post?._id} draggableId={`${post?._id}`} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      className={styles.column}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <p>{post?.title}</p>
                    </div>
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
