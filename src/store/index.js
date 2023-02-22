import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
import auth from './auth';
// import applyForave from './applyForLeave';

const store = configureStore({
  reducer: { modalData:modal,authData:auth},
});

export default store;