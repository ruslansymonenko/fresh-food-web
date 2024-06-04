'use client'

import {FC, useEffect, useState} from 'react';
import {IProduct} from '@/types/product.interface';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import ProductItem from '@/components/ui/catalogue/product-item/ProductItem';

interface ICatalogueProps {
  isFull?: boolean,
  products: IProduct[] | null;
}

const Catalogue: FC<ICatalogueProps> = ({isFull = true, products}) => {
  const [latestProducts, setLatestProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    if  (products) {
      const productsToSet: IProduct[] = isFull ? products : products.slice(0, 4);
      setLatestProducts(productsToSet);
    }
  }, [products])


  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 sm:px-6 py-4 lg:max-w-7xl'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Our products</h2>
          {
            !isFull && (
              <Link href='/catalogue' className='text-rose-600 flex items-center gap-x-1'>
                See All
                <span>
                  <ArrowRight/>
                </span>
              </Link>
            )
          }
        </div>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 ml:gap-x8'>
          {
            latestProducts ? latestProducts.map(product => (
              <ProductItem product={product} key={product.id}/>
            )) : 'Products not found'
          }
        </div>
      </div>
    </div>
  );
};

export default Catalogue;