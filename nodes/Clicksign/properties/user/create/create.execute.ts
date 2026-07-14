import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function createUser(ef: IExecuteFunctions) {
  const name = getNodeParameterTyped<string>(ef, 'name');
  const email = getNodeParameterTyped<string>(ef, 'email');
  const phoneNumber = getNodeParameterTyped<string>(ef, 'phoneNumber');

  const body = {
    data: {
      type: 'users',
      attributes: {
        name,
        email,
        phone_number: phoneNumber,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/users`,
  };

  return await clicksignRequest(ef, options, 'Error creating user');
}
