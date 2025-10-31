import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

export async function notifySigner(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');
  const message = getNodeParameterTyped<string>(ef, 'message');

  const body = {
    data: {
      type: 'notifications',
      attributes: {
        message: message ? message : null,
      },
    },
  };
  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/envelopes/${envelopeId}/signers/${signerId}/notifications`,
  };

  return await clicksignRequest(
    ef,
    options,
    t('notification.errors.notifySigner'),
  );
}
