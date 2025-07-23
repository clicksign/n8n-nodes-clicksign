import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function notifyEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const message = getNodeParameterTyped<string>(ef, 'message');

  const body = {
    data: {
      type: 'notifications',
      attributes: {
        message,
      },
    },
  };

  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes/${envelopeId}/notifications`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao notificar signatários do envelope',
  );
}
