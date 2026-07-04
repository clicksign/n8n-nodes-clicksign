import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { formatLocalISODate } from '../../envelope/shared/formatLocalISODate';

export async function createCustomEvent(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');
  const eventType = getNodeParameterTyped<string>(ef, 'eventType');

  const undefinedIfFalsy = (value: any) => (value ? value : undefined);

  let body: Record<string, unknown>;

  if (eventType === 'add_image') {
    const imageBase64 = getNodeParameterTyped<string>(ef, 'imageBase64');
    const imageOccurredAtRaw = getNodeParameterTyped<string>(
      ef,
      'imageOccurredAt',
    );
    const imageTitle = getNodeParameterTyped<string>(ef, 'imageTitle');

    const imageOccurredAt = imageOccurredAtRaw
      ? formatLocalISODate(new Date(imageOccurredAtRaw))
      : undefined;

    body = {
      data: {
        type: 'events',
        attributes: {
          name: 'add_image',
          content_base64: imageBase64,
          data: {
            occurred_at: imageOccurredAt,
            title: undefinedIfFalsy(imageTitle),
          },
        },
      },
    };
  } else {
    const tokenKind = getNodeParameterTyped<string>(ef, 'tokenKind');
    const occurredAtRaw = getNodeParameterTyped<string>(ef, 'occurredAt');
    const signerName = getNodeParameterTyped<string>(ef, 'signerName');
    const signerEmail = getNodeParameterTyped<string>(ef, 'signerEmail');
    const signerPhoneNumber = getNodeParameterTyped<string>(
      ef,
      'signerPhoneNumber',
    );

    const occurredAt = occurredAtRaw
      ? formatLocalISODate(new Date(occurredAtRaw))
      : undefined;

    body = {
      data: {
        type: 'events',
        attributes: {
          name: 'custom',
          data: {
            kind: tokenKind,
            occurred_at: occurredAt,
            signer_name: signerName,
            signer_email: undefinedIfFalsy(signerEmail),
            signer_phone_number: undefinedIfFalsy(signerPhoneNumber),
          },
        },
      },
    };
  }

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/envelopes/${envelopeId}/documents/${documentId}/events`,
  };

  return await clicksignRequest(ef, options, 'Error creating event');
}
