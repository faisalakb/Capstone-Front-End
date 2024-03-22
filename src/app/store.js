import { configureStore } from '@reduxjs/toolkit';
import renderHousesReducer from '../features/house/getHousesSlice';
import { postHouse } from '../features/house/postHouseSlice';
import registerReducer from '../features/user/registrationSlice';
import loginUserReducer from '../features/user/loginUserSlice';

const store = configureStore({
  reducer: {
    register: registerReducer,
    loginUser: loginUserReducer,
    renderHouses: renderHousesReducer,
    postHouse,
  },
});

export default store;
