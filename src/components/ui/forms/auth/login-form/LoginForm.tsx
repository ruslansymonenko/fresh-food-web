'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/types/auth.interface';
import Loader from '@/components/ui/loader/Loader';
import Button from '@/components/ui/button/Button';
import styles from './LoginFrom.module.scss';
import Field from '@/components/ui/field/Field';
import { emailRegex } from '@/components/ui/forms/auth/email.regex';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const LoginForm: FC = ({}) => {
  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<IAuthFormData> = async (data) => {
    setIsLoading(true);

    try {
      const authResult = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
        redirect: false,
      });
      if (authResult && authResult.ok) {
        reset();
        router.push('/');
      } else {
        toast.error('Authorization error');
      }
    } catch (error) {
      toast.error('Authorization error, please, try later');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.left_text}>
        <div>
          <h2 className={styles.text_title}>Login</h2>
          <p className="text-sm mt-6">Enter to your account</p>
          <p className="text-sm mt-10">
            Do not have an account{' '}
            <Link href="/auth/register" className={styles.text_link}>
              Register here
            </Link>
          </p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <form className="bg-white md:max-w-lg md:ml-auto w-full">
            <Field<IAuthFormData>
              control={control}
              name={'email'}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: emailRegex,
                  message: 'Please, enter a valid email addres',
                },
              }}
              placeholder="Enter email"
            />
            <Field<IAuthFormData>
              control={control}
              name={'password'}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password length should be more than 6 characters',
                },
              }}
              placeholder="Enter password"
              type="password"
            />
            <Button onClick={handleSubmit(onSubmit)}>Login</Button>
            {/*<div className="mt-12">*/}
            {/*  <Link href={'/api/auth/signin'}>Login</Link>*/}
            {/*</div>*/}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
