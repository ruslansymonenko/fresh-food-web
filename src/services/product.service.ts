import { IProduct, IProductsServerResponse, TypeDataFilters } from '@/types/product.interface';
import { axiosClassic } from '@/utils/api/interceptors';
import { IServiceResponse } from '@/types/service.intrfecace';

interface IProductService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  getAll(queryData?: TypeDataFilters): Promise<IServiceResponse<IProduct[] | null>>;
  getById(productSlug: string): Promise<IServiceResponse<IProduct | null>>;
  getByCategory(categoryId: string): Promise<IServiceResponse<IProduct | null>>;
  getBySlug(productSlug: string): Promise<IServiceResponse<IProduct | null>>;
  getSimilar(productId: string): Promise<IServiceResponse<IProduct | null>>;
}

export enum ProductRoutes {
  GET_ALL = '/products/all',
  GET_BY_CATEGORY = '/products/by-category',
  GET_BY_ID = '/products/by-id',
  GET_BY_SLUG = '/products/by-slug',
  GET_SIMILAR = '/products/get-similar',
}

export class ProductService implements IProductService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  public async getAll(queryData?: TypeDataFilters): Promise<IServiceResponse<IProduct[] | null>> {
    try {
      const { data } = await axiosClassic.get<IProductsServerResponse>(ProductRoutes.GET_ALL, {
        params: queryData,
      });

      if (data.products) {
        return this.sendStatus<IProduct[]>(true, 'Products received', data.products);
      } else {
        return this.sendStatus<null>(false, 'Products not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(false, 'Products not received', null);
    }
  }

  public async getById(productId: string): Promise<IServiceResponse<IProduct | null>> {
    try {
      const { data } = await axiosClassic.get<IProduct>(`${ProductRoutes.GET_BY_ID}/${productId}`);

      if (data) {
        return this.sendStatus<IProduct>(true, 'Products received', data);
      } else {
        return this.sendStatus<null>(false, 'Products not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(false, 'Products not received', null);
    }
  }

  public async getByCategory(categoryId: string): Promise<IServiceResponse<IProduct | null>> {
    try {
      const { data } = await axiosClassic.get<IProduct>(
        `${ProductRoutes.GET_BY_CATEGORY}/${categoryId}`,
      );

      if (data) {
        return this.sendStatus<IProduct>(true, 'Products received', data);
      } else {
        return this.sendStatus<null>(false, 'Products not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(false, 'Products not received', null);
    }
  }

  public async getBySlug(productSlug: string): Promise<IServiceResponse<IProduct | null>> {
    try {
      const { data } = await axiosClassic.get<IProduct>(
        `${ProductRoutes.GET_BY_SLUG}/${productSlug}`,
      );

      if (data) {
        return this.sendStatus<IProduct>(true, 'Products received', data);
      } else {
        return this.sendStatus<null>(false, 'Products not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(false, 'Products not received', null);
    }
  }

  public async getSimilar(productId: string): Promise<IServiceResponse<IProduct | null>> {
    try {
      const { data } = await axiosClassic.get<IProduct>(
        `${ProductRoutes.GET_SIMILAR}/${productId}`,
      );

      if (data) {
        return this.sendStatus<IProduct>(true, 'Products received', data);
      } else {
        return this.sendStatus<null>(false, 'Products not received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(false, 'Products not received', null);
    }
  }
}

export default new ProductService();
