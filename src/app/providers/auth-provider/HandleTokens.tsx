'use client';

import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { jwtDecode } from 'jwt-decode';
import { signOut } from 'next-auth/react';
import Cookies from 'js-cookie';
import { AuthTokenService } from '@/services/auth-token.service';

const TokenContext = createContext<string | null>(null);

interface JwtPayload {
  exp: number;
  [key: string]: any;
}

export const HandleTokensProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useSession();
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);

  const updateTokens = () => {
    const tokenService = new AuthTokenService();
    const refreshToken = tokenService.getRefreshToken();
    console.log(refreshToken);
  };

  useEffect(() => {
    if (data?.accessToken) {
      const decodedToken = jwtDecode<JwtPayload>(data.accessToken);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp < currentTime) {
        setIsTokenValid(false);
      } else {
        setIsTokenValid(true);
        updateTokens();
      }
    }
  }, [data?.accessToken]);

  return (
    <TokenContext.Provider value={data?.accessToken || null}>{children}</TokenContext.Provider>
  );
};
