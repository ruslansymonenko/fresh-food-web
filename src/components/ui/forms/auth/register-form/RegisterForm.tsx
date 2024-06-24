'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/types/auth.interface';
import Loader from '@/components/ui/loader/Loader';
import Field from '@/components/ui/field/Field';
import { emailRegex } from '@/components/ui/forms/auth/email.regex';
import Button from '@/components/ui/button/Button';
import AuthService from '@/services/auth.service';
import styles from './RegisterForm.module.scss';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

const RegisterForm: FC = () => {
  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<IAuthFormData> = async (data) => {
    setIsLoading(true);

    try {
      const serviceResponse = await AuthService.register(data);

      if (serviceResponse.status) {
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
      } else {
        toast.error('Registration error');
      }
    } catch (error) {
      toast.error('Registration error, please, try later');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.form_text}>
        <div>
          <h2 className="lg:text-5xl text-4xl font-extrabold lg:leading-[55px]">Registration</h2>
          <p className="text-sm mt-6">Fill form to create new account</p>
          <p className="text-sm mt-10">
            Already have an account{' '}
            <Link href="/auth/login" className="text-rose-600 font-semibold hover:underline ml-1">
              Login here
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
            <div className="mt-12">
              <Button onClick={handleSubmit(onSubmit)}>Register</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
