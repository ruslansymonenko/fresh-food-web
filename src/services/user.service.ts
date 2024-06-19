import { IUser } from '@/types/user.interface';
import { axiosWithAuth } from '@/api/interceptors';
import { IServiceResponse } from '@/types/service.intrfecace';

interface IUserService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  getProfile(): Promise<IServiceResponse<IUser | null>>;
  getFavorites(): Promise<IServiceResponse<IUser | null>>;
}

export enum UserRoutes {
  GET_PROFILE = '/user/profile',
  GET_FAVORITES = '/user/favorites',
}

export class UserService implements IUserService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  public async getProfile(): Promise<IServiceResponse<IUser | null>> {
    try {
      const { data } = await axiosWithAuth.get<IUser>(UserRoutes.GET_PROFILE);

      if (data) {
        return this.sendStatus<IUser>(true, 'User received', data);
      } else {
        return this.sendStatus<null>(true, 'User received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'User not received', null);
    }
  }

  public async getFavorites(): Promise<IServiceResponse<IUser | null>> {
    try {
      const { data } = await axiosWithAuth.get<IUser>(UserRoutes.GET_FAVORITES);

      if (data) {
        return this.sendStatus<IUser>(true, 'User received', data);
      } else {
        return this.sendStatus<null>(true, 'User received', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'User not received', null);
    }
  }
}

export default new UserService();
