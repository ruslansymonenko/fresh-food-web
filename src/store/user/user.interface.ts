import { IUserAuthServerData } from '@/types/auth.interface';

export interface IInitialState {
  user: IUserAuthServerData | null;
  isLoading: boolean;
}
