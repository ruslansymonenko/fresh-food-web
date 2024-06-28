'use client';

import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react';
import { HandleTokensProvider } from '@/app/providers/auth-provider/HandleTokens';

interface IProvidersProps {
  children: ReactNode;
}

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SessionProvider>
              <HandleTokensProvider>{children}</HandleTokensProvider>
            </SessionProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  );
};
