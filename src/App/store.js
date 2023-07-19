import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slice/appSlice'
import menuReducer from './slice/menuSlice'
import tabReducer from './slice/tabSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    menu: menuReducer,
    tab: tabReducer
  },
})