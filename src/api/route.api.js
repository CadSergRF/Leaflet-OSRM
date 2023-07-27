import { makeRequest } from "./instance.api";

export function getRoute(points) {

  const urlReq = points;

  return makeRequest(urlReq, 'GET', undefined);
}