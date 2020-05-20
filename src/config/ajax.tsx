import { API_BASE_URL } from './api';

function ajax(endpoint:string, method:string, body:string) {
  return fetch(API_BASE_URL + endpoint, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body
  }).then(response => Promise.all([response.status, response.json()]));
}

export function request(endpoint:string, method:string, body:object) {
  return ajax(endpoint, method, JSON.stringify(body)).then(
    ([responseCode, json]) => {
      console.log('responseCode', responseCode);
      console.log('json', json);
      return responseCode;
    }
  );
}
