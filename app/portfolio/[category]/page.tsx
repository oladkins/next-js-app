import React from 'react';
import styles from './page.module.css';
import CategoryItem from '@/components/categoryItem/CategoryItem';
import { CategoryType } from '@/types';
import { getCategory } from '@/hooks/useGetCategory';

const Category = ({ params }: { params: { category: CategoryType } }) => {
  const data = getCategory(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(({ id, title, image, desc }) => (
        <CategoryItem key={id} id={id} title={title} image={image} desc={desc} />
      ))}
    </div>
  );
};

export default Category;
