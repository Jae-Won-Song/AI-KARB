import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  id: string;
  name: string;
  phoneNumber: string;
  empNo: string;
  email: string;
  authority: string;
  accessToken: string;
}

interface AuthState {
  user: UserInfo | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.user = action.payload;
      const { id, name, phoneNumber, empNo, email, authority, accessToken } = action.payload;
      localStorage.setItem('id', id);
      localStorage.setItem('name', name);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('empNo', empNo);
      localStorage.setItem('email', email);
      localStorage.setItem('authority', authority);
      localStorage.setItem('accessToken', accessToken);
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('id');
      localStorage.removeItem('name');
      localStorage.removeItem('phoneNumber');
      localStorage.removeItem('empNo');
      localStorage.removeItem('email');
      localStorage.removeItem('authority');
      localStorage.removeItem('accessToken');
    },
    loadUserFromLocalStorage: (state) => {
      const id = localStorage.getItem('id');
      const name = localStorage.getItem('name');
      const phoneNumber = localStorage.getItem('phoneNumber');
      const empNo = localStorage.getItem('empNo');
      const email = localStorage.getItem('email');
      const authority = localStorage.getItem('authority');
      const accessToken = localStorage.getItem('accessToken');

      if (id && name && phoneNumber && empNo && email && authority && accessToken) {
        state.user = { id, name, phoneNumber, empNo, email, authority, accessToken };
      }
    },
  },
});

export const { login, logout, loadUserFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;
