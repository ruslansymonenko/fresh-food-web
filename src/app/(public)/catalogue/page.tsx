import { Metadata } from 'next';
import Catalogue from '@/screens/catalogue/Catalogue';

export const metadata: Metadata = {
  title: 'Catalogue',
  description: 'Fresh Food catalogue',
};

export default async function CataloguePage() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Catalogue />
    </div>
  );
}
