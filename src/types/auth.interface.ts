import { IUser } from '@/types/user.interface';

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}

export interface ITokens {
  accessToken: string;
}

export type UserAuthResponseData = Pick<IUser, 'id' | 'email'>;

export interface IUserAuthServerData extends ITokens {
  user: UserAuthResponseData;
}

export interface IGetTokensData {
  refreshToken: string;
}

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}
