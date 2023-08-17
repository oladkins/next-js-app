import { categoriesItems } from '@/constants';
import { notFound } from 'next/navigation';
import { CategoryType } from '@/types';

export const getCategory = (cat: CategoryType) => {
  const data = categoriesItems[cat];

  if (data) {
    return data;
  }
  return notFound();
};
