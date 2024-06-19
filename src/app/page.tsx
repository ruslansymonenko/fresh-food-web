import { Metadata } from 'next';
import Presentation from '@/components/ui/presentation/Presentation';
import ProductsShowcase from '@/components/ui/product-showcase/ProductsShowcase';
import ProductService from '@/services/product.service';
import { IProduct } from '@/types/product.interface';
import Subscribe from '@/components/ui/subscribe/Subscribe';
import Features from '@/components/ui/shop-features/ShopFeatures';
import About from '@/components/ui/about/About';

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
      <ProductsShowcase products={data} />
      <Features />
      <About />
      <Subscribe />
    </div>
  );
}
