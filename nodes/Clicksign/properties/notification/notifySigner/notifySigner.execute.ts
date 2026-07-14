import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { buildEmailCustomization } from '../shared/emailCustomization.execute';

export async function notifySigner(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');
  const message = getNodeParameterTyped<string>(ef, 'message');
  const emailCustomization = buildEmailCustomization(ef);

  const body = {
    data: {
      type: 'notifications',
      attributes: {
        message: message ? message : null,
        email_customization: emailCustomization,
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
    'Error sending notification to signer',
  );
}
