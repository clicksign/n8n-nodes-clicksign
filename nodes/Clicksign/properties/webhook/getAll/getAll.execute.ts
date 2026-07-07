import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';

export async function getAllWebhooks(ef: IExecuteFunctions) {
  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/webhooks`,
  };

  return await clicksignRequest(ef, options, 'Error getting webhooks');
}
