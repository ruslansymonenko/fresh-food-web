import { FC } from 'react';
import CategoryItem from '@/components/ui/category-item/CategoryItem';
import { ICategory } from '@/types/category.interface';

import styles from './Categories.module.scss';

interface ICategoriesProps {
  categories: ICategory[] | null;
}

const Categories: FC<ICategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.title}>Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories
          ? categories.map((category) => <CategoryItem category={category} key={category.id} />)
          : 'Categories was not found'}
      </div>
    </div>
  );
};

export default Categories;
