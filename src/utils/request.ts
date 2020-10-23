import qs from 'query-string';

const baseUrl: string = "https://messagecampus-d5ad.restdb.io/rest"

export function request(
  endpoint: string,
  body: any | undefined,
  method: 'GET' | 'POST',
): Promise<any> {

  let url: string = baseUrl + endpoint;

  const headers = {
    'x-apikey': '5f8d96f42ed90b599de89317',
    'accept': 'application/json',
    'content-type': 'application/json'
  }

  if(method === 'GET') {
    const params: string = qs.stringify(body);
    url = `${url}?${params}`;
  } else {
    body = JSON.stringify(body);
  }

  return fetch(url, {
    method,
    headers,
    body: method === 'GET' ? undefined : body,
  })
  .then(data => data.json())
  .then(response => response);
}