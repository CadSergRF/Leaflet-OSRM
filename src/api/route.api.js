import { makeRequest } from "./instance.api";
import { fetchURLfromArray } from "../helpers/fetchURLfromArray.helper";

export function getRoute(points) {

  const routePoins = fetchURLfromArray(points.data)

  const urlReqPoints = '/route/v1/driving/' +
    routePoins +
    '?' +
    'steps=true' +
    '&geometries=geojson' +
    '&overview=full' +
    '&generate_hints=false' +
    '&skip_waypoints=true'

  return makeRequest(urlReqPoints, 'GET', undefined);
}