import axios from 'axios';
import {IProduct} from '@/types/product.interface';
import {API_PATHS} from '@/consts/apiPaths';

interface IProductService {
  getAll(): Promise<IProduct[] | null>;
}

export const ProductService: IProductService = {
  async getAll(): Promise<IProduct[] | null> {
    try {
      const {data} = await axios<IProduct[]>({
        url: API_PATHS.PRODUCTS_GET_ALL,
        method: 'GET'
      })

      return data
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}