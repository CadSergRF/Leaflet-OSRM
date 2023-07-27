export const fetchURLfromArray = (arr) => {

  const routeString = arr.map(item => [item.geotag[0], item.geotag[1]]).join(';');

  return routeString;

}