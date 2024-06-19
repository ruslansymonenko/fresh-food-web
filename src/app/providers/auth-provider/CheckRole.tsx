'use client';

import { FC, PropsWithChildren } from 'react';
import { TypeComponentAuthFields } from '@/app/providers/auth-provider/auth-page.types';
import { useCheckAuth } from '@/hooks/useCheckAuth';
import { useRouter } from 'next/router';

const CheckRoleProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyCustomer },
  children,
}) => {
  const { user } = useCheckAuth();

  const router = useRouter();

  if (user && isOnlyCustomer) {
    return <>{children}</>;
  }

  if (!user) {
    router.pathname !== '/auth' && router.replace('/auth');
    return null;
  }
};

export default CheckRoleProvider;
