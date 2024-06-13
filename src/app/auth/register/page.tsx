import { Metadata } from 'next';
import RegisterForm from '@/components/ui/forms/auth/register-form/RegisterForm';

export const metadata: Metadata = {
  title: 'Register',
};

export default function Page() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
