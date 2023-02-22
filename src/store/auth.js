import { createSlice } from "@reduxjs/toolkit";
const initialModalState = { isLogin:false,id:"",name:"",email:"",token:"" };
const authSlice = createSlice({
  name: "auth",
  initialState: initialModalState,
  reducers: {
    setLoginHandler(state,action){
      state.isLogin=true;
      state.id=action.payload.id;
      state.name=action.payload.name;
      state.email=action.payload.email;
      state.token=action.payload.token;
    },
    setLogoutHandler(state){
        state.isLogin=false;
        state.id="";
        state.name="";
        state.email="";
        state.token="";
    }
  },
});
export const {setLoginHandler,setLogoutHandler } = authSlice.actions;
export default authSlice.reducer;
