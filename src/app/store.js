import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/houseSlice';
import registerReducer from '../features/user/registrationSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
  },
});

export default store;
