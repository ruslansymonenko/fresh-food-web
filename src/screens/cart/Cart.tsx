'use client';

import { FC } from 'react';

import styles from './Cart.module.scss';
import CartItem from '@/components/ui/cart-item/CartItem';
import CartOrder from '@/components/ui/cart-order/CartOrder';
import { useCart } from '@/hooks/useCart';

const Cart: FC = () => {
  const { cartItems } = useCart();
  console.log(cartItems);

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.cart_container}>
        <div className={styles.cart_items}>
          {cartItems.length ? (
            <>
              {cartItems.map((cartItem) => (
                <>
                  <CartItem item={cartItem} />
                  <hr className="border-gray-300" />
                </>
              ))}
            </>
          ) : (
            <div className="font-bold text-primary text-2xl">Cart is empty</div>
          )}
        </div>

        <CartOrder />
      </div>
    </div>
  );
};

export default Cart;
