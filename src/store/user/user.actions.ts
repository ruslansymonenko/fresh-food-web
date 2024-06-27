// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AuthService } from '@/services/auth.service';
// import { IServiceResponse } from '@/types/service.intrfecace';
// import { IAuthFormData, IUserAuthServerData } from '@/types/auth.interface';
//
// export const register = createAsyncThunk('auth/register', async (data: IAuthFormData, thunkApi) => {
//   const authService = new AuthService();
//
//   try {
//     const response: IServiceResponse<IUserAuthServerData | null> = await authService.register(data);
//     return response;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error);
//   }
// });
//
// export const login = createAsyncThunk('auth/login', async (data: IAuthFormData, thunkApi) => {
//   const authService = new AuthService();
//
//   try {
//     const response: IServiceResponse<IUserAuthServerData | null> = await authService.login(data);
//     return response;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error);
//   }
// });
//
// export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
//   const authService = new AuthService();
//
//   try {
//     const response: IServiceResponse<null> = await authService.logout();
//     return response;
//   } catch (error) {
//     return thunkApi.rejectWithValue(error);
//   }
// });
//
// export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, thunkApi) => {
//   const authService = new AuthService();
//
//   try {
//     const response: IServiceResponse<IUserAuthServerData | null> = await authService.getToken();
//     return response;
//   } catch (error) {
//     if (error) {
//       thunkApi.dispatch(logout());
//     }
//     return thunkApi.rejectWithValue(error);
//   }
// });
