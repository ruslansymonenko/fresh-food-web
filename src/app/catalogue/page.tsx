import { Metadata } from 'next';
import { IProduct } from '@/types/product.interface';
import { ProductService } from '@/services/product.service';
import Catalogue from '@/components/ui/catalogue/Catalogue';

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Fresh Food catalogue',
};

async function getProducts(): Promise<IProduct[] | null> {
  return await ProductService.getAll();
}

export default async function CataloguePage() {
  const data: IProduct[] | null = await getProducts();

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Catalogue products={data} />
    </div>
  );
}
