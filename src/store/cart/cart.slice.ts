import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddToCartPayload, IChangeQuantityPayload, IInitialState } from './cart.interface';

const initialState: IInitialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const isExist = state.cartItems.some((item) => item.product.id === action.payload.product.id);

      if (!isExist) {
        state.cartItems.push({ ...action.payload, id: state.cartItems.length });
      }
    },
    deleteFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;

      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        if (type === 'plus') {
          item.quantity++;
        } else if (type === 'minus') {
          item.quantity--;
        }

        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== id);
        }
      }
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, deleteFromCart, changeQuantity, resetCart } = cartSlice.actions;
