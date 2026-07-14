import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getAllWhatsappAcceptance(ef: IExecuteFunctions) {
  const filterStatus = getNodeParameterTyped<string>(ef, 'filterStatus');
  const includeMessages = getNodeParameterTyped<boolean>(
    ef,
    'includeMessages',
  );

  const queryParams: string[] = [];
  if (filterStatus) {
    queryParams.push(`filter[status]=${encodeURIComponent(filterStatus)}`);
  }
  if (includeMessages) {
    queryParams.push('include=messages');
  }
  const query = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/acceptance_term/whatsapps${query}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error getting whatsapp acceptance terms',
  );
}
