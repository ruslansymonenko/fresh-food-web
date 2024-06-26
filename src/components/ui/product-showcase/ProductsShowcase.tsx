'use client';

import { FC, useEffect, useState } from 'react';
import { IProduct } from '@/types/product.interface';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductItem from '@/components/ui/product-showcase/product-item/ProductItem';
import styles from '@/components/ui/product-showcase/ProductShowcase.module.scss';
import { useGetProducts } from '@/hooks/useGetProducts';

const ProductsShowcase: FC = () => {
  const { data, isLoading, isError } = useGetProducts();
  const [latestProducts, setLatestProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    if (data) {
      const productsToSet: IProduct[] = data.slice(0, 4);
      setLatestProducts(productsToSet);
    }
  }, [data]);

  return (
    <div className={styles.catalogue}>
      <div className={styles.catalogue_container}>
        <div className={styles.catalogue_top}>
          <h2 className={styles.catalogue_text}>Our products</h2>
          <Link href="/catalogue" className={styles.catalogue_link}>
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
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

export default ProductsShowcase;
