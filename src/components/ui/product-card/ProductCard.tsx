'use client';

import { FC } from 'react';
import Image from 'next/image';
import { IProduct } from '@/types/product.interface';
import { convertPrice } from '@/utils/convertPrice';
import { useSession } from 'next-auth/react';
import AddToCartButton from '@/components/ui/add-to-cart-button/AddToCartButton';
import FavoriteButton from '@/components/ui/favorite-button/FavoriteButton';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const session = useSession();
  let shortDescription = '';

  if (product.description.length >= 80) {
    shortDescription = `${product.description.slice(0, 80)} . . .`;
  } else {
    shortDescription = product.description;
  }

  return (
    <div id="card" className={styles.card}>
      {session.data ? <FavoriteButton productId={product.id} /> : ''}
      <div className={styles.product_image_container}>
        <Image
          src={`${product.images[0]}`}
          alt={product.name}
          width={640}
          height={360}
          layout="responsive"
        />
      </div>

      <div className={styles.product_data}>
        <div>
          <h3 className={styles.product_name}>{product.name}</h3>
          <h4 className={styles.product_price}>{convertPrice(product.price)}</h4>
          <p className={styles.product_description}>{shortDescription}</p>
        </div>

        <div id="stars" className={styles.rating}>
          <svg
            className="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-4 fill-[#facc15]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-4 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
          <svg
            className="w-4 fill-[#CED5D8]"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
