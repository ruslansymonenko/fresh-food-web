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

export type TypeDataFilters = {
  sort?: EnumProductSort;
  searchTerm?: string;
  page?: string | number;
  perPage: string | number;
};

export enum EnumProductSort {
  HIGH_PRICE = 'high_price',
  LOW_PRICE = 'low_price',
  NEWEST = 'newest',
  OLDEST = 'oldest',
}
