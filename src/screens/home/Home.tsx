import { FC } from 'react';
import Presentation from '@/components/ui/presentation/Presentation';
import ProductsShowcase from '@/components/ui/product-showcase/ProductsShowcase';
import Features from '@/components/ui/shop-features/ShopFeatures';
import About from '@/components/ui/about/About';
import Subscribe from '@/components/ui/subscribe/Subscribe';

const Home: FC = async () => {
  const data = null;

  return (
    <div>
      <Presentation />
      <ProductsShowcase products={data} />
      <Features />
      <About />
      <Subscribe />
    </div>
  );
};

export default Home;
