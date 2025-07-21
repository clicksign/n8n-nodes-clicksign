import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function activateEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const body = {
    data: {
      type: 'envelopes',
      id: envelopeId,
      attributes: {
        status: 'running',
      },
    },
  };

  const options: IRequestOptions = {
    method: 'PATCH',
    body,
    uri: `/envelopes/${envelopeId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao ativar envelope');
}
