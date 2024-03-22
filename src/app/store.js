import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/houseSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})