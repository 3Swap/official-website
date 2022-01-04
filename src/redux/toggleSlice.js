import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'Modal',
  initialState: {
    showModal: false,
    showWalletModal: false
  },
  reducers: {
    openModal: state => {
      state.showModal = true;
    },
    closeModal: state => {
      state.showModal = false;
    },
    openConnectWalletModal: state => {
      state.showWalletModal = true;
    },
    closeConnectWalletModal: state => {
      state.showWalletModal = false;
    }
  }
});
export const { openModal, closeModal, openConnectWalletModal, closeConnectWalletModal } = toggleSlice.actions;
export default toggleSlice.reducer;
