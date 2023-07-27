import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import routesReducer from '../reducers/listOfRoutes.slice'
import currentRouteReducer from '../reducers/currentRoute.slice'
import { rootWatcher } from '../sagas/index.sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  routes: routesReducer,
  currentRoute: currentRouteReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootWatcher)