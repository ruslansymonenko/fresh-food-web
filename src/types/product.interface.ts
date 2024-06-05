import { ICategory } from '@/types/category.interface';

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAtt: string;
  description: string;
  image: string;
  price: number;
  category: ICategory;
}
