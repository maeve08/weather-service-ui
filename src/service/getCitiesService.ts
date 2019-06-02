import axios from 'axios';
import {config} from '../config';

export async function retrieveCities(): Promise<object> {
  let configuration;

  configuration = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const apiUrl = `${config.api.url}`;

  const getCitiesEndpoint =
    apiUrl + `/temperature/city`;
  return axios
    .get(getCitiesEndpoint, configuration)
    .then(
      response => handleSuccess(response),
      ({ response }) => handleError(response)
    );
}

function handleSuccess(
  // tslint:disable-next-line:no-any
  response: any
) {
  return response.data;
}

// tslint:disable-next-line:no-any
export function handleError(response: any) {
  const output = {
    errors: [],
    isFromServer: true,
    status: ''
  };

  output.errors.push({
    code: response.status,
    detail: response.statusText
  });

  return output;
}
