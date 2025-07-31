import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';
import { clicksignRequest } from '../utils/clicksignRequest';

export async function deleteEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IRequestOptions = {
    method: 'DELETE',
    uri: `/envelopes/${envelopeId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao excluir envelope');
}
