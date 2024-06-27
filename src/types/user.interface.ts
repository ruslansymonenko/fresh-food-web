import { IProduct } from '@/types/product.interface';

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  favorites: IProduct[];
}
