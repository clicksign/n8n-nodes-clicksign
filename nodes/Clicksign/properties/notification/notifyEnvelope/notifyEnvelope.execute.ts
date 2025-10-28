import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

export async function notifyEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const message = getNodeParameterTyped<string>(ef, 'message');

  const body = {
    data: {
      type: 'notifications',
      attributes: {
        message,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/envelopes/${envelopeId}/notifications`,
  };

  return await clicksignRequest(
    ef,
    options,
    t('notification.errors.notifyEnvelope'),
  );
}
