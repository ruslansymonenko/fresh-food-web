import axios from 'axios';
import { API_PATHS } from '@/consts/apiPaths';
import { ICategory } from '@/types/category.interface';

interface ICategoryService {
  getAll(): Promise<ICategory[] | null>;
}

export const CategoryService: ICategoryService = {
  async getAll(): Promise<ICategory[] | null> {
    try {
      const { data } = await axios<ICategory[]>({
        url: API_PATHS.CATEGORIES_GET_ALL,
        method: 'GET',
      });

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
