import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getAllUsers(ef: IExecuteFunctions) {
  const filterEmail = getNodeParameterTyped<string>(ef, 'filterEmail');

  const query = filterEmail
    ? `?filter[email]=${encodeURIComponent(filterEmail)}`
    : '';

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/users${query}`,
  };

  return await clicksignRequest(ef, options, 'Error getting users');
}
