import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function createWatcher(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const email = getNodeParameterTyped<string>(ef, 'email');
  const kind = getNodeParameterTyped<string>(ef, 'kind');
  const attachDocuments = getNodeParameterTyped<string>(ef, 'attachDocuments');

  const body = {
    data: {
      type: 'signature_watchers',
      attributes: {
        email,
        kind,
        attach_documents_enabled: attachDocuments,
      },
    },
  };
  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes/${envelopeId}/signature_watchers`,
  };

  return await clicksignRequest(ef, options, 'Erro ao criar observador');
}
