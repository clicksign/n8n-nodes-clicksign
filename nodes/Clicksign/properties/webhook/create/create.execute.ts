import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function createWebhook(ef: IExecuteFunctions) {
  const endpoint = getNodeParameterTyped<string>(ef, 'endpoint');
  const status = getNodeParameterTyped<string>(ef, 'status');
  const events = getNodeParameterTyped<string[]>(ef, 'events');

  const body = {
    data: {
      type: 'webhooks',
      attributes: {
        endpoint,
        status,
        events,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/webhooks`,
  };

  return await clicksignRequest(ef, options, 'Error creating webhook');
}
