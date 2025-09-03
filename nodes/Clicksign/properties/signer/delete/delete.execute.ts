import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';

export async function deleteSigner(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');

  const options: IHttpRequestOptions = {
    method: 'DELETE',
    url: `/envelopes/${envelopeId}/signers/${signerId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao excluir signatário');
}
