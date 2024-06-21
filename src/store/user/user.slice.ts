import { IInitialState } from '@/store/user/user.interface';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuth, login, logout, register } from '@/store/user/user.actions';
import { getLocalStorage } from '@/utils/local-storage';

const initialState: IInitialState = {
  user: getLocalStorage('user'),
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
