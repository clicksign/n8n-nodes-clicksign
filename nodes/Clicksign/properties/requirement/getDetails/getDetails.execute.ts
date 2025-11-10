import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getRequirementDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const requirementId = getNodeParameterTyped<string>(ef, 'requirementId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/envelopes/${envelopeId}/requirements/${requirementId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error getting requirement details',
  );
}
