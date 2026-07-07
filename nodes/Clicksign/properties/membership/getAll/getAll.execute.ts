import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getAllMemberships(ef: IExecuteFunctions) {
  const filterUserId = getNodeParameterTyped<string>(ef, 'filterUserId');

  const query = filterUserId
    ? `?filter[user.id]=${encodeURIComponent(filterUserId)}`
    : '';

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/memberships${query}`,
  };

  return await clicksignRequest(ef, options, 'Error getting memberships');
}
