import { Metadata } from 'next';
import Login from '@/screens/login/Login';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Page() {
  return <Login />;
}
