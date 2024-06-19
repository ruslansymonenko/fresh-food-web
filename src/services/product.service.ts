import { IProduct } from '@/types/product.interface';
import { axiosClassic } from '@/api/interceptors';

interface IProductService {
  getAll(): Promise<IProduct[] | null>;
}

export enum ProductsRoutes {
  GET_ALL = '/products/all',
}

export class ProductService implements IProductService {
  async getAll(): Promise<IProduct[] | null> {
    try {
      const { data } = await axiosClassic.get(ProductsRoutes.GET_ALL);

      if (data.products) {
        return data.products;
      }

      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new ProductService();
