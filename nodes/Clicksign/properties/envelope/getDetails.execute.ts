import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

export async function getEnvelopeDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao obter detalhes do envelope',
  );
}
