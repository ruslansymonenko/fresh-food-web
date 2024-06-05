'use client';

import { FC, useState } from 'react';
import { IProduct } from '@/types/product.interface';
import Image from 'next/image';
import Link from 'next/link';
import { convertPrice } from '@/utils/convertPrice';
import { API_PATHS } from '@/consts/apiPaths';

import styles from './ProductItem.module.scss';

import dummyImage from '../../../../../public/icons/app-icons/food.svg';

interface IProductItemProps {
  product: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className={`group ${styles.product_item}`}>
      <div className={styles.image_container}>
        <Image
          src={`${API_PATHS.SERVER}${product.image}`}
          alt={product.name}
          className={styles.image}
          width={300}
          height={300}
          // onError={() => setIsImageLoaded(true)}
        />
      </div>

      <div className={styles.data}>
        <div>
          <h3 className={styles.link_container}>
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
            <Link href={`/category/${product.category.slug}`} className={styles.category_link}>
              {product.category.name}
            </Link>
          </h3>
        </div>
        <p className={styles.price}>{convertPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
