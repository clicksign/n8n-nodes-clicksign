import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { formatBirthday, formatDocumentation } from '../shared/formatters';

function formatPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

export async function createSigner(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const name = getNodeParameterTyped<string>(ef, 'name');
  const email = getNodeParameterTyped<string>(ef, 'email');
  const phoneNumberRaw = getNodeParameterTyped<string>(ef, 'phoneNumber');
  const hasDocumentation = getNodeParameterTyped<boolean>(
    ef,
    'hasDocumentation',
  );
  const group = getNodeParameterTyped<number>(ef, 'group');
  const refusable = getNodeParameterTyped<boolean>(ef, 'refusable');
  const locationRequired = getNodeParameterTyped<boolean>(
    ef,
    'locationRequired',
  );
  const communicateEvents = getNodeParameterTyped<Record<string, string>>(
    ef,
    'communicateEvents',
  );
  const signatureHost = getNodeParameterTyped<{
    host?: {
      name?: string;
      email?: string;
      signature_host_signature_request?: string;
    }[];
  }>(ef, 'signatureHost');

  let cpf = null;
  let birthday = null;
  const phoneNumber = phoneNumberRaw ? formatPhoneNumber(phoneNumberRaw) : null;

  if (hasDocumentation) {
    const documentationRaw = getNodeParameterTyped<string>(ef, 'documentation');
    const birthdayRaw = getNodeParameterTyped<string>(ef, 'birthday');

    cpf = documentationRaw ? formatDocumentation(documentationRaw) : null;
    birthday = birthdayRaw ? formatBirthday(birthdayRaw) : null;
  }

  const hostEntry = signatureHost?.host?.[0];
  const signatureHostObj =
    hostEntry && (hostEntry.name || hostEntry.email)
      ? {
          signature_host: {
            name: hostEntry.name,
            email: hostEntry.email,
            communicate_events: {
              signature_host_signature_request:
                hostEntry.signature_host_signature_request,
            },
          },
        }
      : {};

  const requiresPhone = Object.values(communicateEvents.events).some(
    (value) => value === 'whatsapp' || value === 'sms',
  );

  if (requiresPhone && !phoneNumber) {
    throw new Error(
      'Phone is required when any event notification uses WhatsApp or SMS.',
    );
  }

  const undefinedIfFalsy = (value: any) => (value ? value : undefined);

  const body = {
    data: {
      type: 'signers',
      attributes: {
        name: undefinedIfFalsy(name),
        email,
        phone_number: phoneNumber,
        has_documentation: hasDocumentation,
        documentation: cpf,
        birthday,
        group,
        refusable,
        location_required_enabled: locationRequired,
        communicate_events: communicateEvents.events,
        ...signatureHostObj,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/envelopes/${envelopeId}/signers`,
  };

  return await clicksignRequest(ef, options, 'Error creating the signer');
}
