import { createSlice } from "@reduxjs/toolkit";
const initialModalState = { isOpen: false };
const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setIsOpenHandler(state) {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { setIsOpenHandler } = modalSlice.actions;
export default modalSlice.reducer;
