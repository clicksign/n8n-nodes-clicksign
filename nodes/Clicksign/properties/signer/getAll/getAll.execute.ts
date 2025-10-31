import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

export async function getAllSigners(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/envelopes/${envelopeId}/signers`,
  };

  return await clicksignRequest(ef, options, t('signer.errors.getAll'));
}
