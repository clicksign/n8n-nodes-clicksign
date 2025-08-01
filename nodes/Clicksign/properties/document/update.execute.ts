import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function updateDocument(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');
  const status = getNodeParameterTyped<string>(ef, 'status');
  const metadata = getNodeParameterTyped<string>(ef, 'metadata');

  const body = {
    data: {
      type: 'documents',
      id: documentId,
      attributes: {
        status,
        metadata: JSON.parse(metadata),
      },
    },
  };

  const options: IRequestOptions = {
    method: 'PATCH',
    body,
    uri: `/envelopes/${envelopeId}/documents/${documentId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao atualizar documento');
}
