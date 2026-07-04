import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getWhatsappAcceptanceDetails(ef: IExecuteFunctions) {
  const acceptanceTermId = getNodeParameterTyped<string>(
    ef,
    'acceptanceTermId',
  );
  const includeMessages = getNodeParameterTyped<boolean>(
    ef,
    'includeMessages',
  );

  const query = includeMessages ? '?include=messages' : '';

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/acceptance_term/whatsapps/${acceptanceTermId}${query}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error getting details of a whatsapp acceptance term',
  );
}
