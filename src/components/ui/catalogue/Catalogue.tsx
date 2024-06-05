'use client';

import { FC, useEffect, useState } from 'react';
import { IProduct } from '@/types/product.interface';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductItem from '@/components/ui/catalogue/product-item/ProductItem';
import styles from '@/components/ui/catalogue/Catalogue.module.scss';

interface ICatalogueProps {
  isFull?: boolean;
  products: IProduct[] | null;
}

const Catalogue: FC<ICatalogueProps> = ({ isFull = true, products }) => {
  const [latestProducts, setLatestProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    if (products) {
      const productsToSet: IProduct[] = isFull ? products : products.slice(0, 4);
      setLatestProducts(productsToSet);
    }
  }, [products]);

  return (
    <div className={styles.catalogue}>
      <div className={styles.catalogue_container}>
        <div className={styles.catalogue_top}>
          <h2 className={styles.catalogue_text}>Our products</h2>
          {!isFull && (
            <Link href="/catalogue" className={styles.catalogue_link}>
              See All
              <span>
                <ArrowRight />
              </span>
            </Link>
          )}
        </div>

        <div className={styles.catalogue_items}>
          {latestProducts
            ? latestProducts.map((product) => <ProductItem product={product} key={product.id} />)
            : 'Products not found'}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
