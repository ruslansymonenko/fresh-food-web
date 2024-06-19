import { IAuthFormData, IUserAuthServerData } from '@/types/auth.interface';
import { axiosClassic, axiosWithAuth } from '@/api/interceptors';
import { AuthTokenService } from '@/services/auth-token.service';
import { IServiceResponse } from '@/types/service.intrfecace';

interface IAuthService {
  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T>;
  login(data: IAuthFormData): Promise<IServiceResponse<IUserAuthServerData | null>>;
  register(data: IAuthFormData): Promise<IServiceResponse<IUserAuthServerData | null>>;
  getToken(): Promise<IUserAuthServerData | null>;
  getUserFromStorage(): IUserAuthServerData | null;
  removeUserFromStorage(): void;
  saveToStorage(data: IUserAuthServerData): void;
  logout(): Promise<IServiceResponse<null>>;
}

export enum AuthRoutes {
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  GET_TOKEN = '/auth/access-token',
  LOGOUT = '/auth/logout',
}

export class AuthService implements IAuthService {
  private authTokenService: AuthTokenService;

  constructor() {
    this.authTokenService = new AuthTokenService();
  }

  sendStatus<T>(status: boolean, message: string, data: T): IServiceResponse<T> {
    return {
      status: status,
      message: message,
      data: data,
    };
  }

  async login(data: IAuthFormData): Promise<IServiceResponse<IUserAuthServerData | null>> {
    try {
      const response = await axiosClassic.post<IUserAuthServerData>(AuthRoutes.LOGIN, {
        email: data.email,
        password: data.password,
      });

      if (response.data.accessToken) {
        this.saveToStorage(response.data);
      }

      if (response.data) {
        return this.sendStatus<IUserAuthServerData>(true, 'Successfully login', response.data);
      } else {
        return this.sendStatus<null>(false, 'Authorization error', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(false, 'Authorization error, please try later', null);
    }
  }

  async register(userData: IAuthFormData): Promise<IServiceResponse<IUserAuthServerData | null>> {
    try {
      const response = await axiosClassic.post<IUserAuthServerData>(AuthRoutes.REGISTER, {
        email: userData.email,
        password: userData.password,
      });

      if (response.data.accessToken) {
        this.saveToStorage(response.data);
        return this.sendStatus<IUserAuthServerData>(true, 'Successfully registered', response.data);
      } else {
        return this.sendStatus<null>(true, 'Authorization error', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(true, 'Authorization error, please try later', null);
    }
  }

  async getToken(): Promise<IUserAuthServerData | null> {
    try {
      const response = await axiosClassic.post<IUserAuthServerData>(AuthRoutes.GET_TOKEN);

      if (response.data.accessToken) {
        this.saveToStorage(response.data);
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getUserFromStorage() {
    const currentUser: string | null = localStorage.getItem('user');

    if (currentUser) {
      return JSON.parse(currentUser);
    } else {
      return null;
    }
  }

  saveToStorage(data: IUserAuthServerData) {
    this.authTokenService.saveTokenStorage(data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
  }

  removeUserFromStorage() {
    localStorage.removeItem('user');
  }

  async logout() {
    try {
      const response = await axiosWithAuth.post(AuthRoutes.LOGOUT);

      this.authTokenService.removeTokenStorage();
      this.removeUserFromStorage();

      if (response.data) {
        return this.sendStatus<null>(true, 'Successfully logged out', null);
      } else {
        return this.sendStatus<null>(false, 'Some error', null);
      }
    } catch (error) {
      console.log(error);
      return this.sendStatus<null>(false, 'Some error', null);
    }
  }
}

export default new AuthService();
