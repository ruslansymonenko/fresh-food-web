import { Metadata } from 'next';
import Presentation from '@/components/ui/presentation/Presentation';
import Catalogue from '@/components/ui/catalogue/Catalogue';
import { ProductService } from '@/services/produtc.service';
import { IProduct } from '@/types/product.interface';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Home Page description',
};

async function getProducts(): Promise<IProduct[] | null> {
  return await ProductService.getAll();
}

export default async function Home() {
  const data: IProduct[] | null = await getProducts();

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Presentation />
      <Catalogue products={data} isFull={false} />
    </div>
  );
}
