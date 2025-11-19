import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

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

  const options: IHttpRequestOptions = {
    method: 'PATCH',
    body,
    url: `/envelopes/${envelopeId}/documents/${documentId}`,
  };

  return await clicksignRequest(ef, options, 'Error updating document');
}
