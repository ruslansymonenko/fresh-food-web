import Cookies from 'js-cookie';

import { EnumTokens } from '@/types/auth.interface';

export interface IAuthTokenService {
  getAccessToken(): string | null;
  saveTokenStorage(accessToken: string): void;
  removeTokenStorage(): void;
}

export class AuthTokenService implements IAuthTokenService {
  getAccessToken = (): string | null => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
    return accessToken || null;
  };

  saveTokenStorage = (accessToken: string): void => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
      domain: 'localhost',
      sameSite: 'strict',
      expires: 1,
    });
  };

  removeTokenStorage = (): void => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN);
  };
}
