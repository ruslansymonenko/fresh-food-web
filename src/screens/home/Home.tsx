import { FC } from 'react';
import Presentation from '@/components/ui/presentation/Presentation';
import ProductsShowcase from '@/components/ui/product-showcase/ProductsShowcase';
import Features from '@/components/ui/shop-features/ShopFeatures';
import About from '@/components/ui/about/About';
import Subscribe from '@/components/ui/subscribe/Subscribe';
import Suggestion from '@/components/ui/suggestion/Suggestion';
import { IProduct } from '@/types/product.interface';
import { IServiceResponse } from '@/types/service.intrfecace';
import ProductService from '@/services/product.service';

async function getProducts(): Promise<IProduct[] | null> {
  const serviceResponse: IServiceResponse<IProduct[] | null> = await ProductService.getAll();
  return serviceResponse.data;
}

const Home: FC = async () => {
  const data: IProduct[] | null = await getProducts();

  return (
    <div>
      <Presentation />
      <ProductsShowcase products={data} />
      <Features />
      <About />
      <Subscribe />
      <Suggestion />
    </div>
  );
};

export default Home;
