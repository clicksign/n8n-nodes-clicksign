import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function createDocumentByBase64(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const filename = getNodeParameterTyped<string>(ef, 'filename');
  const fileBase64 = getNodeParameterTyped<string>(ef, 'fileBase64');
  const metadata = getNodeParameterTyped<string>(ef, 'metadata');

  const body = {
    data: {
      type: 'documents',
      attributes: {
        filename,
        content_base64: fileBase64,
        metadata: JSON.parse(metadata),
      },
    },
  };

  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes/${envelopeId}/documents`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao criar documento por base 64',
  );
}
