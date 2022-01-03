import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
    loading: false,
    error: false
  },
  reducers: {
    fetchUserDetailsStart: state => {
      state.loading = true;
    },
    fetchUserDetailsComplete: state => {
      state.loading = false;
    },
    fetchUserDetailsFail: state => {
      state.loading = false;
    }
  }
});
export const { fetchUserDetailsStart, fetchUserDetailsComplete, fetchUserDetailsFail } = userSlice.actions;
export default userSlice.reducer;
