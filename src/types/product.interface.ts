import { ICategory } from '@/types/category.interface';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  images: string[];
  price: number;
  category: ICategory;
}

export interface IProductsServerResponse {
  products: IProduct[];
  length: number;
}
