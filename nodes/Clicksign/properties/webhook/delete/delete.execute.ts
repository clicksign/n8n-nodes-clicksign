import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function deleteWebhook(ef: IExecuteFunctions) {
  const webhookId = getNodeParameterTyped<string>(ef, 'webhookId');

  const options: IHttpRequestOptions = {
    method: 'DELETE',
    url: `/webhooks/${webhookId}`,
  };

  return await clicksignRequest(ef, options, 'Error deleting webhook');
}
