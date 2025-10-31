import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

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
    t('requirement.errors.getDetails'),
  );
}
