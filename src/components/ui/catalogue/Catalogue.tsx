import { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import ProductCard from '@/components/ui/product-card/ProductCard';

interface ICatagoueProps {
  products: IProduct[] | null;
}

const Catalogue: FC<ICatagoueProps> = ({ products }) => {
  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          ? products.map((product) => <ProductCard product={product} key={product.id} />)
          : 'Products was not' + ' found'}
      </div>
    </div>
  );
};

export default Catalogue;
