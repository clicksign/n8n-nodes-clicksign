import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function eventsFromDocument(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');
  const filterName = getNodeParameterTyped<string>(ef, 'filterName');

  const query = filterName
    ? `?filter[name]=${encodeURIComponent(filterName)}`
    : '';

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/envelopes/${envelopeId}/documents/${documentId}/events${query}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error getting events from a document',
  );
}
