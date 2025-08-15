import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';
import { clicksignRequest } from '../shared/clicksignRequest';

export async function notifySigner(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');
  const message = getNodeParameterTyped<string>(ef, 'message');

  const body = {
    data: {
      type: 'notifications',
      attributes: {
        message: message ? message : null,
      },
    },
  };
  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes/${envelopeId}/signers/${signerId}/notifications`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao enviar notificação para signatário',
  );
}
