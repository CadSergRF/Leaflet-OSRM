import { configureStore } from '@reduxjs/toolkit'
import routesReducer from '../reducers/listOfRoutes.slice'

export const store = configureStore({
  reducer: {
    routes: routesReducer,
  },
})