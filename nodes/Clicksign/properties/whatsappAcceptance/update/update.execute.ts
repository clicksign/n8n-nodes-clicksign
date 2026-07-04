import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function updateWhatsappAcceptance(ef: IExecuteFunctions) {
  const acceptanceTermId = getNodeParameterTyped<string>(
    ef,
    'acceptanceTermId',
  );
  const status = getNodeParameterTyped<string>(ef, 'status');

  const body = {
    data: {
      id: acceptanceTermId,
      type: 'acceptance_term_whatsapps',
      attributes: {
        status,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'PATCH',
    body,
    url: `/acceptance_term/whatsapps/${acceptanceTermId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error updating whatsapp acceptance term',
  );
}
