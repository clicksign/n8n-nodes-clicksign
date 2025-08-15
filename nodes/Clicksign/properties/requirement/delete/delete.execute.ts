import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function deleteRequirement(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const requirementId = getNodeParameterTyped<string>(ef, 'requirementId');

  const options: IRequestOptions = {
    method: 'DELETE',
    uri: `/envelopes/${envelopeId}/requirements/${requirementId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao excluir requisito');
}
