import { makeRequest } from "./instance.api";
import { fetchURLfromArray } from "../helpers/fetchURLfromArray.helper";

export function getRoute(points) {

  const routePoins = fetchURLfromArray(points.data)

  const urlReqPoints = '/route/v1/driving/' +
    routePoins +
    '?' +
    'alternatives=false' +
    '&steps=false' +
    '&geometries=geojson' +
    '&overview=simplified' +
    '&overview=simplified' +
    '&annotations=false' +
    '&generate_hints=false' +
    '&skip_waypoints=true'

  console.log(urlReqPoints)

  return makeRequest(urlReqPoints, 'GET', undefined);
}