import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/request';
import { getNodeParameterTyped } from '../utils/getNodeTyped';

function formatDocumentation(doc: string): string {
  const digits = doc.replace(/\D/g, '');

  if (digits.length === 11) {
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  return doc;
}

export async function createSigner(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const name = getNodeParameterTyped<string>(ef, 'name');
  const email = getNodeParameterTyped<string>(ef, 'email');
  const phoneNumber = getNodeParameterTyped<string>(ef, 'phoneNumber');
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

  if (hasDocumentation) {
    const documentationRaw = getNodeParameterTyped<string>(ef, 'documentation');
    const birthdayRaw = getNodeParameterTyped<string>(ef, 'birthday');

    cpf = documentationRaw ? formatDocumentation(documentationRaw) : null;
    birthday = birthdayRaw ? birthdayRaw.split('T')[0] : null;
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
