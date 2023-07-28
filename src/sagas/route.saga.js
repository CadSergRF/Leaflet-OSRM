import { call, put, takeEvery } from 'redux-saga/effects';
import * as routeApi from '../api/route.api';
import { addCurrentRoute } from '../reducers/currentRoute.slice';

function* fetchRouteWorker(action) {
  const data = action.payload;
  const resOSRM = yield call(routeApi.getRoute, { data });
  const polylineCoordinates = yield resOSRM.routes[0].geometry.coordinates;
  yield put(addCurrentRoute(polylineCoordinates));
}

export function* routeWatcher() {
  yield takeEvery('currentRoute/addCurrentPoints', fetchRouteWorker);
}