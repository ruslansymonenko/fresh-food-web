import { Metadata } from 'next';
import { IProduct } from '@/types/product.interface';
import ProductService from '@/services/product.service';
import Catalogue from '@/screens/catalogue/Catalogue';
import { IServiceResponse } from '@/types/service.intrfecace';

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Fresh Food catalogue',
};

async function getProducts(): Promise<IProduct[] | null> {
  const serviceResponse: IServiceResponse<IProduct[] | null> = await ProductService.getAll();
  return serviceResponse.data;
}

export default async function CataloguePage() {
  const data: IProduct[] | null = await getProducts();

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Catalogue products={data} />
    </div>
  );
}
