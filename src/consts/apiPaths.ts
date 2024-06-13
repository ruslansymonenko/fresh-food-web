export const server_url: string = process.env.SERVER_URL
  ? process.env.SERVER_URL
  : 'http://localhost:4200';

export const CLIENT_PATH: string = 'http://localhost:3000';

interface IApiPaths {
  SERVER: string;
  PRODUCTS_GET_ALL: string;
  CATEGORIES_GET_ALL: string;
  LOGIN: string;
  REGISTER: string;
  GET_TOKEN: string;
}

export const API_PATHS: IApiPaths = {
  SERVER: server_url,
  PRODUCTS_GET_ALL: `${server_url}/api/products/get-all`,
  CATEGORIES_GET_ALL: `${server_url}/api/categories/get-all`,
  LOGIN: `${server_url}/api/auth/login`,
  REGISTER: `${server_url}/api/auth/register`,
  GET_TOKEN: `${server_url}/api/auth/access-token`,
};
