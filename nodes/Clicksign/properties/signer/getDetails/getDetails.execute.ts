import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';

export async function getSignerDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}/signers/${signerId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao obter detalhes do signatário',
  );
}
