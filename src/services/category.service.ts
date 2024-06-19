import { ICategory } from '@/types/category.interface';
import { axiosClassic } from '@/api/interceptors';
import { IServiceResponse } from '@/types/service.intrfecace';

interface ICategoryService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  getAll(): Promise<IServiceResponse<ICategory[] | null>>;
  getById(categoryId: string): Promise<IServiceResponse<ICategory | null>>;
  getBySlug(categorySlug: string): Promise<IServiceResponse<ICategory | null>>;
}

export enum CategoryRoutes {
  GET_ALL = '/categories/get-all',
  GET_BY_ID = '/categories/by-id',
  GET_BY_SLUG = '/categories/by-slug',
}

export class CategoryService implements ICategoryService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  public async getAll(): Promise<IServiceResponse<ICategory[] | null>> {
    try {
      const { data } = await axiosClassic.get<ICategory[]>(CategoryRoutes.GET_ALL);

      if (data) {
        return this.sendStatus<ICategory[]>(true, 'Categories received', data);
      } else {
        return this.sendStatus<null>(true, 'Categories received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Categories not received', null);
    }
  }

  public async getById(categoryId: string): Promise<IServiceResponse<ICategory | null>> {
    try {
      const { data } = await axiosClassic.get<ICategory>(
        `${CategoryRoutes.GET_BY_ID}/${categoryId}`,
      );

      if (data) {
        return this.sendStatus<ICategory>(true, 'Categories received', data);
      } else {
        return this.sendStatus<null>(true, 'Categories received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Categories not received', null);
    }
  }

  public async getBySlug(categorySlug: string): Promise<IServiceResponse<ICategory | null>> {
    try {
      const { data } = await axiosClassic.get<ICategory>(
        `${CategoryRoutes.GET_BY_SLUG}/${categorySlug}`,
      );

      if (data) {
        return this.sendStatus<ICategory>(true, 'Categories received', data);
      } else {
        return this.sendStatus<null>(true, 'Categories received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Categories not received', null);
    }
  }
}

export default new CategoryService();
