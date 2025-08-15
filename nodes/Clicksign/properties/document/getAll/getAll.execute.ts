import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getAllDocuments(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}/documents`,
  };

  return await clicksignRequest(ef, options, 'Erro ao obter documentos');
}
