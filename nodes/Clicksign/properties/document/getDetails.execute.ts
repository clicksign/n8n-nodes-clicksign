import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

export async function getDocumentDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}/documents/${documentId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao obter detalhes do documento',
  );
}
