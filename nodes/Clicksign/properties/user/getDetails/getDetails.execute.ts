import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getUserDetails(ef: IExecuteFunctions) {
  const userId = getNodeParameterTyped<string>(ef, 'userId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/users/${userId}`,
  };

  return await clicksignRequest(ef, options, 'Error getting details of a user');
}
