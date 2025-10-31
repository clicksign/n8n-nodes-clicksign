import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

export async function getAllRequirements(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/envelopes/${envelopeId}/requirements`,
  };

  return await clicksignRequest(ef, options, t('requirement.errors.getAll'));
}
