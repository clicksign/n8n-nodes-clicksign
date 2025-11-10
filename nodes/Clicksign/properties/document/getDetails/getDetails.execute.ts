import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getDocumentDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/envelopes/${envelopeId}/documents/${documentId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error getting details of a document',
  );
}
