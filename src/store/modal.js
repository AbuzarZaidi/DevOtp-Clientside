import { createSlice } from "@reduxjs/toolkit";
const initialModalState = { isOpen: false,name:"" };
const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setIsOpenHandler(state,action) {
      state.isOpen = !state.isOpen;
      state.name = action.payload;
    },
    setNameHandler(state,action){
      state.name=action.payload;
    }
  },
});
export const { setIsOpenHandler,setNameHandler } = modalSlice.actions;
export default modalSlice.reducer;
