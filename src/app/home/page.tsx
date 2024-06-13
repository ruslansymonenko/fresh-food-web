import { Metadata } from 'next';
import Presentation from '@/components/ui/presentation/Presentation';
import ProductsShowcase from '@/components/ui/product-showcase/ProductsShowcase';
import Features from '@/components/ui/shop-features/ShopFeatures';
import About from '@/components/ui/about/About';
import Subscribe from '@/components/ui/subscribe/Subscribe';
import { IProduct } from '@/types/product.interface';
import { ProductService } from '@/services/product.service';

export const metadata: Metadata = {
  title: 'Home',
};

async function getProducts(): Promise<IProduct[] | null> {
  return await ProductService.getAll();
}

export default async function Page() {
  const data: IProduct[] | null = await getProducts();

  return (
    <div>
      <Presentation />
      <ProductsShowcase products={data} />
      <Features />
      <About />
      <Subscribe />
    </div>
  );
}
