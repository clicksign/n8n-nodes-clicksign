import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';
import { clicksignRequest } from '../shared/clicksignRequest';

export async function getAllRequirements(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}/requirements`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao listar requisitos do envelope',
  );
}
