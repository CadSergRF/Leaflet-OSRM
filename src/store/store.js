import { configureStore, combineReducers } from '@reduxjs/toolkit'
import routesReducer from '../reducers/listOfRoutes.slice'
import currentRouteReducer from '../reducers/currentRoute.slice'

const rootReducer = combineReducers({
  routes: routesReducer,
  currentRoute: currentRouteReducer
})

export const store = configureStore({
  reducer: rootReducer,
})