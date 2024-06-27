import { Metadata } from 'next';
import Home from '@/screens/home/Home';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Page() {
  return <Home />;
}
