import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/request';
import { getNodeParameterTyped } from '../utils/getNodeTyped';

export async function getDocuments(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}/documents`,
  };

  return await clicksignRequest(ef, options, 'Erro ao obter documentos');
}
