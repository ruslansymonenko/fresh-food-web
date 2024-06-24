import { Metadata } from 'next';
import Product from '@/screens/product/Product';

export const metadata: Metadata = {
  title: 'Product',
};

export default function Page() {
  return (
    <div>
      <Product />
    </div>
  );
}
