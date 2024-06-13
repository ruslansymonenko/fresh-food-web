import { Metadata } from 'next';
import Categories from '@/components/ui/categories/Categories';
import { CategoryService } from '@/services/category.service';
import { ICategory } from '@/types/category.interface';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Categories',
};

async function getCategories(): Promise<ICategory[] | null> {
  return await CategoryService.getAll();
}

export default async function CategoriesPage() {
  const data: ICategory[] | null = await getCategories();
  console.log(data);

  return (
    <div>
      <Categories categories={data} />
    </div>
  );
}
