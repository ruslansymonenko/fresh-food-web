import Cart from '@/components/ui/cart/Cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart',
};

export default function Page() {
  return <Cart />;
}
