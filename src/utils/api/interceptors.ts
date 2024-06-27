import axios, { CreateAxiosDefaults } from 'axios';
import { API_PATHS } from '@/consts/apiPaths';
import { AuthService } from '@/services/auth.service';
import { AuthTokenService } from '@/services/auth-token.service';
import { errorCatch } from '@/utils/api/errorCatch';

const options: CreateAxiosDefaults = {
  baseURL: `${API_PATHS.SERVER}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const authTokenService = new AuthTokenService();
  const accessToken = authTokenService.getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    const authService = new AuthService();
    const authTokenService = new AuthTokenService();

    if (
      error?.response?.status === 401 ||
      errorCatch(error) === 'jwt expired' ||
      (errorCatch(error) === 'jwt must be provided' && error.config._isRetry)
    ) {
      originalRequest._isRetry = true;

      try {
        await authService.getToken();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
          authTokenService.removeTokenStorage();
        }
      }
    }
  },
);

export { axiosClassic, axiosWithAuth };
