import { createSlice } from '@reduxjs/toolkit';

export const providersSlice = createSlice({
  name: 'providers',
  initialState: {
    web3provider: 'NETWORK'
  },
  reducers: {
    networkProvider: state => {
      state.web3provider = 'NETWORK';
    },
    injectedProvider: state => {
      state.web3provider = 'INJECTED';
    }
  }
});

export const { networkProvider, injectedProvider } = providersSlice.actions;
export default providersSlice.reducer;
