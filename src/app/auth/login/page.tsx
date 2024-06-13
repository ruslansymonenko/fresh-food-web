import { Metadata } from 'next';
import LoginForm from '@/components/ui/forms/auth/login-form/LoginForm';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Page() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
