import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';

export async function deleteEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IRequestOptions = {
    method: 'DELETE',
    uri: `/envelopes/${envelopeId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao excluir envelope');
}
