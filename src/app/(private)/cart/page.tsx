import Cart from '@/screens/cart/Cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart',
};

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen mb-10">
      <Cart />
    </div>
  );
}
