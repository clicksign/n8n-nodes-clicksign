import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

export async function getSignerDetails(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/envelopes/${envelopeId}/signers/${signerId}`,
  };

  return await clicksignRequest(ef, options, t('signer.errors.getDetails'));
}
