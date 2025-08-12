import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function getWatcherDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const watcherId = getNodeParameterTyped<string>(ef, 'watcherId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}/signature_watchers/${watcherId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao listar observadores');
}
