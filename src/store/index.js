import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
// import applyForave from './applyForLeave';

const store = configureStore({
  reducer: { modalData:modal},
});

export default store;