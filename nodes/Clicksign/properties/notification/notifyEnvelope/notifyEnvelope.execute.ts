import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { buildEmailCustomization } from '../shared/emailCustomization.execute';

export async function notifyEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const message = getNodeParameterTyped<string>(ef, 'message');
  const emailCustomization = buildEmailCustomization(ef);

  const body = {
    data: {
      type: 'notifications',
      attributes: {
        message,
        email_customization: emailCustomization,
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
    'Error notifying envelope signers',
  );
}
