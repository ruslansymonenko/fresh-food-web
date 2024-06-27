'use client';

import { FC } from 'react';

import styles from './CartOrder.module.scss';
import { useCart } from '@/hooks/useCart';

const CartOrder: FC = () => {
  const { cartItems } = useCart();

  const totalSum = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className={styles.order}>
      <h3 className={styles.order_title}>Order Summary</h3>

      <form className={styles.order_form}>
        <div>
          <h3 className={styles.form_title}>Enter Details</h3>
          <div className={styles.form_inputs_container}>
            <div className={styles.form_input_container}>
              <input type="text" placeholder="Full Name" className={styles.form_input} />
            </div>

            <div className={styles.form_inputs_container}>
              <input type="email" placeholder="Email" className={styles.form_input} />
            </div>

            <div className={styles.form_inputs_container}>
              <input type="number" placeholder="Phone No." className={styles.form_input} />
            </div>
          </div>
        </div>
      </form>

      <ul className={styles.form_list}>
        <li className={styles.form_list_item}>
          Subtotal <span className="ml-auto font-bold">{totalSum} $</span>
        </li>
        <li className={styles.form_list_item}>
          Shipping <span className="ml-auto font-bold">$2.00</span>
        </li>
        <li className={styles.form_list_item}>
          Tax <span className="ml-auto font-bold">$4.00</span>
        </li>
        <hr className="border-gray-300" />
        <li className="flex flex-wrap gap-4 text-sm font-bold">
          Total <span className="ml-auto">{totalSum + 6} $</span>
        </li>
      </ul>

      <div className={styles.form_buttons}>
        <button type="button" className={styles.form_button}>
          Checkout
        </button>
        <button type="button" className={styles.form_button}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartOrder;
