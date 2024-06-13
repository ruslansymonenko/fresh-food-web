'use client';

import { FC } from 'react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthFormData } from '@/types/auth.interface';
import Loader from '@/components/ui/loader/Loader';
import Field from '@/components/ui/field/Field';
import { emailRegex } from '@/components/ui/forms/auth/email.regex';
import Button from '@/components/ui/button/Button';

import styles from './RegisterForm.module.scss';

const RegisterForm: FC = () => {
  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    console.log(data);
  };

  const isLoading = false;

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
              <Button onClick={handleSubmit(onSubmit)}>Login</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
