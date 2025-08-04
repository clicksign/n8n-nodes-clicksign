import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';
import { clicksignRequest } from '../utils/clicksignRequest';

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
