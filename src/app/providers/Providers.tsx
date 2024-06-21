'use client';

import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';

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
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
