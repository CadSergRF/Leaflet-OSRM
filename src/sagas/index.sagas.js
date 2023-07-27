import { all } from "redux-saga/effects"
import { routeWatcher } from './route.saga'

export function* rootWatcher() {
  yield all([
    routeWatcher(),
  ])
}