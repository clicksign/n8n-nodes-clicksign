import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

function formatDocumentation(doc: string): string {
  const digits = doc.replace(/\D/g, '');

  if (digits.length === 11) {
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  return doc;
}

function formatPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

function formatBirthday(birthday: string): string {
  let date = new Date(birthday);

  if (isNaN(date.getTime())) {
    const digits = birthday.split('/');

    if (digits.length === 3) {
      const day = parseInt(digits[0]);
      const month = parseInt(digits[1]) - 1;
      const year = parseInt(digits[2]);

      date = new Date(year, month, day);

      if (isNaN(date.getTime())) {
        return birthday;
      }
    } else {
      return birthday;
    }
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
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

  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes/${envelopeId}/signers`,
  };

  return await clicksignRequest(ef, options, 'Erro ao criar o signatário');
}
