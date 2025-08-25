import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    userName: '',
    contact: '',
  },
  reducers: {
    setInfo: (state, action) => {
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.contact = action.payload.contact;
    },

    resetInfo: state => {
      state.email = '';
      state.contact = '';
      state.userName = '';
    },
  },
});

export const { setInfo, resetInfo } = userSlice.actions;
export default userSlice.reducer;
