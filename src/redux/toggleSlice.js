import { createSlice } from '@reduxjs/toolkit';

export const toggleSlice = createSlice({
  name: 'Modal',
  initialState: {
    showModal: false
  },
  reducers: {
    openModal: state => {
      state.showModal = true;
    },
    closeModal: state => {
      state.showModal = false;
    }
  }
});
export const { openModal, closeModal } = toggleSlice.actions;
export default toggleSlice.reducer;
