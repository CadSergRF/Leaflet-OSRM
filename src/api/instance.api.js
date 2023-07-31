const BASE_URL = 'https://router.project-osrm.org'

export const _responceProcessing = (res) => (res.ok)
  ? res.json()
  : res.json()
    .then((err) => Promise.reject(`${err.message}`));

export async function makeRequest(url, method, body) {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers };
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  const res = await fetch(`${BASE_URL}${url}`, config);
  return _responceProcessing(res);
}