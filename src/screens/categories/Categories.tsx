import { FC } from 'react';
import CategoryItem from '@/components/ui/category-item/CategoryItem';
import { ICategory } from '@/types/category.interface';

interface ICategoriesProps {
  categories: ICategory[] | null;
}

const Categories: FC<ICategoriesProps> = ({ categories }) => {
  return (
    <div className="font-[sans-serif] px-4 py-4 mx-auto lg:max-w-7xl sm:max-w-full min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories
          ? categories.map((category) => <CategoryItem category={category} key={category.id} />)
          : 'Categories was not found'}
      </div>
    </div>
  );
};

export default Categories;
