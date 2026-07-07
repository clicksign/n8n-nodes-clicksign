import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function createDocumentByDuplicate(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const filename = getNodeParameterTyped<string>(ef, 'filename');
  const duplicateDocumentId = getNodeParameterTyped<string>(
    ef,
    'duplicateDocumentId',
  );

  const body = {
    data: {
      type: 'documents',
      attributes: {
        filename,
        duplicate: {
          key: duplicateDocumentId,
        },
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/envelopes/${envelopeId}/documents`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error creating document by duplicate',
  );
}
