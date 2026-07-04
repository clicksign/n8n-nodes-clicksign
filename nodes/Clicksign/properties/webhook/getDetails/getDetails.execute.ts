import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getWebhookDetails(ef: IExecuteFunctions) {
  const webhookId = getNodeParameterTyped<string>(ef, 'webhookId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/webhooks/${webhookId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error getting details of a webhook',
  );
}
