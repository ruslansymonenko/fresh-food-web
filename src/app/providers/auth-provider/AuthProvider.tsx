import { FC, PropsWithChildren } from 'react';
import { TypeComponentAuthFields } from '@/app/providers/auth-provider/auth-page.types';
import dynamic from 'next/dynamic';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyCustomer },
  children,
}) => {
  return <></>;
};
