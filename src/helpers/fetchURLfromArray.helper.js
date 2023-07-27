export const fetchURLfromArray = (arr) => {

  const routeString = arr.map(item => [item.geotag[1], item.geotag[0]]).join(';');

  return routeString;

}