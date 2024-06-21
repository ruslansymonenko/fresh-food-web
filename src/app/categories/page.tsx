import { Metadata } from 'next';
import Categories from '@/screens/categories/Categories';
import CategoryService from '@/services/category.service';
import { ICategory } from '@/types/category.interface';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Categories',
};

async function getCategories(): Promise<ICategory[] | null> {
  const serviceResponse = await CategoryService.getAll();
  return serviceResponse.data;
}

export default async function CategoriesPage() {
  const data: ICategory[] | null = await getCategories();

  return (
    <div>
      <Categories categories={data} />
    </div>
  );
}
