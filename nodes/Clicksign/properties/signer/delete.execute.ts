import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';
import { clicksignRequest } from '../utils/clicksignRequest';

export async function deleteSigner(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');

  const options: IRequestOptions = {
    method: 'DELETE',
    uri: `/envelopes/${envelopeId}/signers/${signerId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao excluir signatário');
}
