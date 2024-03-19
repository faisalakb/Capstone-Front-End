import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/houseSlice';
import registerReducer from '../features/user/registrationSlice';
import loginUserReducer from '../features/user/loginUserSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
    loginUser: loginUserReducer,
  },
});

export default store;
