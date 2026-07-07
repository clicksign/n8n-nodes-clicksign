import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function updateWebhook(ef: IExecuteFunctions) {
  const webhookId = getNodeParameterTyped<string>(ef, 'webhookId');
  const endpoint = getNodeParameterTyped<string>(ef, 'endpoint');
  const status = getNodeParameterTyped<string>(ef, 'status');
  const events = getNodeParameterTyped<string[]>(ef, 'events');

  const undefinedIfFalsy = (value: any) => (value ? value : undefined);

  const body = {
    data: {
      type: 'webhooks',
      id: webhookId,
      attributes: {
        endpoint: undefinedIfFalsy(endpoint),
        status: undefinedIfFalsy(status),
        events: events && events.length > 0 ? events : undefined,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'PATCH',
    body,
    url: `/webhooks/${webhookId}`,
  };

  return await clicksignRequest(ef, options, 'Error updating webhook');
}
