import { FC } from 'react';
import Presentation from '@/components/ui/presentation/Presentation';
import ProductsShowcase from '@/components/ui/product-showcase/ProductsShowcase';
import Features from '@/components/ui/shop-features/ShopFeatures';
import About from '@/components/ui/about/About';
import Subscribe from '@/components/ui/subscribe/Subscribe';
import Suggestion from '@/components/ui/suggestion/Suggestion';

const Home: FC = async () => {
  return (
    <div>
      <Presentation />
      <ProductsShowcase />
      <Features />
      <About />
      <Subscribe />
      <Suggestion />
    </div>
  );
};

export default Home;
