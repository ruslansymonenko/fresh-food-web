// import { addToCart, deleteFromCart, changeQuantity } from '@/store/cart/cart.slice';
import { cartSlice } from '@/store/cart/cart.slice';

export const rootActions = {
  // addToCart,
  // deleteFromCart,
  // changeQuantity,
  ...cartSlice.actions,
};
