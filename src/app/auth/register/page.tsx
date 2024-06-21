import { Metadata } from 'next';
import Register from '@/screens/register/Register';

export const metadata: Metadata = {
  title: 'Register',
};

export default function Page() {
  return <Register />;
}
