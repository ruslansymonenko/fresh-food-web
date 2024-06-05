'use client';

import { SessionProvider } from 'next-auth/react';
import React, { FC } from 'react';

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers: FC<IProvidersProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
