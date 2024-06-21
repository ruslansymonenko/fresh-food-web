import { Metadata } from 'next';
import Home from '@/screens/home/Home';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Fresh Food Home Page',
};

export default async function Page() {
  return <Home />;
}
