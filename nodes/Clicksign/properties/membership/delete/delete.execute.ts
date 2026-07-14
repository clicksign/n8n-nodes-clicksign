import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function deleteMembership(ef: IExecuteFunctions) {
  const membershipId = getNodeParameterTyped<string>(ef, 'membershipId');

  const options: IHttpRequestOptions = {
    method: 'DELETE',
    url: `/memberships/${membershipId}`,
  };

  return await clicksignRequest(ef, options, 'Error deleting membership');
}
