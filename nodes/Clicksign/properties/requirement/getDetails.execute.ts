import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function getRequirementDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const requirementId = getNodeParameterTyped<string>(ef, 'requirementId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes/${envelopeId}/requirements/${requirementId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao obter detalhes do requisito',
  );
}
