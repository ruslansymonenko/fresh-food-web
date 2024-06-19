import { FC } from 'react';
import { ICategory } from '@/types/category.interface';
import Image from 'next/image';
import { API_PATHS } from '@/consts/apiPaths';
import Link from 'next/link';

interface ICategoryItemProps {
  category: ICategory;
}

const CategoryItem: FC<ICategoryItemProps> = ({ category }) => {
  return (
    <Link
      href={'/'}
      className="bg-white shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative"
    >
      <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <Image src={`${category.image}`} alt={category.name} width={640} height={360} />
      </div>

      <div className="p-6 bg-white">
        <h3 className="text-lg font-bold text-rose-600">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryItem;
