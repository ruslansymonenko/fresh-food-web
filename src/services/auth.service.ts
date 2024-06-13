import { IAuthFormData, IUserAuthServerData } from '@/types/auth.interface';
import { axiosClassic } from '@/api/interceptors';
import { AuthTokenService } from '@/services/auth-token.service';
import { ApiResponse, IApiResponseStatus } from '@/services/api-response.service';

interface IAuthService {
  login(data: IAuthFormData): Promise<IApiResponseStatus<IUserAuthServerData | null>>;
  register(data: IAuthFormData): Promise<IApiResponseStatus<IUserAuthServerData | null>>;
  getToken(): Promise<IUserAuthServerData | null>;
  logout(): void;
}

export enum AuthRoutes {
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  GET_TOKEN = '/auth/access-token',
  LOGOUT = '/auth/logout',
}

export class AuthService implements IAuthService {
  private authTokenService: AuthTokenService;
  private apiResponseService: ApiResponse;

  constructor() {
    this.authTokenService = new AuthTokenService();
    this.apiResponseService = new ApiResponse();
  }

  async login(data: IAuthFormData): Promise<IApiResponseStatus<IUserAuthServerData | null>> {
    try {
      const response = await axiosClassic.post<IUserAuthServerData>(AuthRoutes.LOGIN, {
        email: data.email,
        password: data.password,
      });

      if (response.data.accessToken) {
        this.authTokenService.saveTokenStorage(response.data.accessToken);
      }

      if (response.data) {
        return this.apiResponseService.sendStatus({
          status: true,
          message: 'Successfully login',
          data: response.data,
        });
      } else {
        return this.apiResponseService.sendStatus({
          status: false,
          message: 'Authorization error',
          data: null,
        });
      }
    } catch (error) {
      return this.apiResponseService.sendStatus({ status: false, message: `${error}`, data: null });
    }
  }

  async register(userData: IAuthFormData): Promise<IApiResponseStatus<IUserAuthServerData | null>> {
    try {
      const response = await axiosClassic.post(AuthRoutes.REGISTER, {
        email: userData.email,
        password: userData.password,
      });

      if (response.data.accessToken) {
        this.authTokenService.saveTokenStorage(response.data.accessToken);
      }

      if (response.data.accessToken) {
        return this.apiResponseService.sendStatus({
          status: true,
          message: 'Successfully registered',
          data: response.data,
        });
      } else {
        return this.apiResponseService.sendStatus({
          status: false,
          message: 'Authorization error',
          data: null,
        });
      }
    } catch (error) {
      return this.apiResponseService.sendStatus({ status: false, message: `${error}`, data: null });
    }
  }

  async getToken(): Promise<IUserAuthServerData | null> {
    try {
      const response = await axiosClassic.post<IUserAuthServerData>(AuthRoutes.GET_TOKEN);

      if (response.data.accessToken) {
        this.authTokenService.saveTokenStorage(response.data.accessToken);
      }

      if (response.data) {
        return response.data;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async logout() {
    const response = await axiosClassic.post(AuthRoutes.LOGOUT);

    if (response.data) this.authTokenService.removeTokenStorage();

    return response;
  }
}
