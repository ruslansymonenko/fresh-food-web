'use client';

import { FC } from 'react';
import styles from './CartItem.module.scss';
import { ICartItem } from '@/types/cart.interface';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { useActions } from '@/hooks/useActions';
import { toast } from 'react-toastify';

interface ICartItemProps {
  item: ICartItem;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { deleteFromCart, changeQuantity } = useActions();

  const handleDelete = () => {
    deleteFromCart({ id: item.id });
    toast.warn('Removed from cart');
  };

  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_item_data}>
        <div className={styles.cart_item_image_container}>
          <Image
            src={`${item.product.images[0]}`}
            className="w-full h-full object-contain"
            alt="img"
            width={640}
            height={360}
          />
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-800">{item.product.name}</h3>

          <button
            type="button"
            className="mt-4 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
            onClick={handleDelete}
          >
            <Trash />
            REMOVE
          </button>
        </div>
      </div>

      <div className={styles.cart_item_controllers}>
        <h4 className={styles.cart_item_price}>{item.price * item.quantity} $</h4>

        <div className={styles.cart_item_amount_btn}>
          <button onClick={() => changeQuantity({ id: item.id, type: 'minus' })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cart_item_amount_btn_img}
              viewBox="0 0 124 124"
            >
              <path
                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <span className={styles.cart_item_amount}>{item.quantity}</span>
          <button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cart_item_amount_btn_img}
              viewBox="0 0 42 42"
            >
              <path
                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
