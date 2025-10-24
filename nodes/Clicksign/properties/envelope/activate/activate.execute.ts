import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

export async function activateEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const body = {
    data: {
      type: 'envelopes',
      id: envelopeId,
      attributes: {
        status: 'running',
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'PATCH',
    body,
    url: `/envelopes/${envelopeId}`,
  };

  return await clicksignRequest(ef, options, t('envelope.errors.activate'));
}
