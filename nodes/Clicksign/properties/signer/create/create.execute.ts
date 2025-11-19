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

  let cpf = null;
  let birthday = null;
  const phoneNumber = phoneNumberRaw ? formatPhoneNumber(phoneNumberRaw) : null;

  if (hasDocumentation) {
    const documentationRaw = getNodeParameterTyped<string>(ef, 'documentation');
    const birthdayRaw = getNodeParameterTyped<string>(ef, 'birthday');

    cpf = documentationRaw ? formatDocumentation(documentationRaw) : null;
    birthday = birthdayRaw ? formatBirthday(birthdayRaw) : null;
  }

  const body = {
    data: {
      type: 'signers',
      attributes: {
        name,
        email,
        phone_number: phoneNumber,
        has_documentation: hasDocumentation,
        documentation: cpf,
        birthday,
        group,
        refusable,
        location_required_enabled: locationRequired,
        communicate_events: communicateEvents.events,
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
