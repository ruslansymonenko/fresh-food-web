'use client';

import { FC } from 'react';
import Button from '@/components/ui/button/Button';
import { ShoppingCart, BaggageClaim } from 'lucide-react';
import { IProduct } from '@/types/product.interface';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { ICartItem } from '@/types/cart.interface';
import { toast } from 'react-toastify';

interface IAddToCartButtonProps {
  product: IProduct;
}

const AddToCartButton: FC<IAddToCartButtonProps> = ({ product }) => {
  const { addToCart, deleteFromCart } = useActions();
  const { cartItems } = useCart();

  const isProductInCart: ICartItem | undefined = cartItems.find(
    (cartItem) => cartItem.product.id === product.id,
  );

  const handleCart = (element: ICartItem | undefined, productItem: IProduct) => {
    if (element) {
      deleteFromCart({ id: element.id });
      toast.warn('Removed from cart');
    } else {
      addToCart({ product, quantity: 1, price: product.price });
      toast.success('Added to cart');
    }
  };

  return (
    <>
      {isProductInCart ? (
        <Button onClick={() => handleCart(isProductInCart, product)} btnType={'secondary'}>
          <BaggageClaim />
        </Button>
      ) : (
        <Button onClick={() => handleCart(isProductInCart, product)}>
          <ShoppingCart />
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
