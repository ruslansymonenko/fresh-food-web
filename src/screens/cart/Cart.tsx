'use client';

import { FC } from 'react';

import styles from './Cart.module.scss';

const Cart: FC = () => {
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Shopping Cart</h1>
      <div className={styles.cart_container}>
        <div className={styles.cart_items}>
          <div className={styles.cart_item}>
            <div className={styles.cart_item_data}>
              <div className={styles.cart_item_image_container}>
                <img
                  src="https://readymadeui.com/images/product14.webp"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-800">Velvet Sneaker</h3>
                <p className="text-xs font-semibold text-gray-500 mt-0.5">Size: MD</p>

                <button
                  type="button"
                  className="mt-4 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 fill-current inline"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  REMOVE
                </button>
              </div>
            </div>

            <div className={styles.cart_item_controllers}>
              <h4 className={styles.cart_item_price}>$20.00</h4>

              <button type="button" className={styles.cart_item_amount_btn}>
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

                <span className={styles.cart_item_amount}>2</span>
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

          <hr className="border-gray-300" />
        </div>

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
              Subtotal <span className="ml-auto font-bold">$200.00</span>
            </li>
            <li className={styles.form_list_item}>
              Shipping <span className="ml-auto font-bold">$2.00</span>
            </li>
            <li className={styles.form_list_item}>
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">$206.00</span>
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
      </div>
    </div>
  );
};

export default Cart;
