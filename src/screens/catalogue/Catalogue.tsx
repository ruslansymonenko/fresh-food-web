import { FC } from 'react';
import { IProduct } from '@/types/product.interface';
import ProductCard from '@/components/ui/product-card/ProductCard';

import styles from './Catalogue.module.scss';

interface ICatagoueProps {
  products: IProduct[] | null;
}

const Catalogue: FC<ICatagoueProps> = ({ products }) => {
  return (
    <div className={styles.catalogue}>
      <h2 className={styles.title}>Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          ? products.map((product) => <ProductCard product={product} key={product.id} />)
          : 'Products was not' + ' found'}
      </div>
    </div>
  );
};

export default Catalogue;
