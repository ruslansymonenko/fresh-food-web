import { useQuery } from 'react-query';
import { ProductService } from '@/services/product.service';
import { IProduct } from '@/types/product.interface';

export const useGetProducts = () => {
  const productService: ProductService = new ProductService();

  const response = useQuery(['get products'], async () => {
    const { data } = await productService.getAll();
    return data;
  });

  return response;
};
