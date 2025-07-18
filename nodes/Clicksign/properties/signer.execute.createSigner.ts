import {
  IExecuteFunctions,
  IHttpRequestMethods,
  IRequestOptions,
} from 'n8n-workflow';

import { clicksignRequest } from './utils/request';

function formatCpf(cpfString: string): string {
  const cpf = cpfString.replace(/\D/g, '');

  if (cpf.length === 11) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  return cpfString;
}

export async function createSigner(executeFunctions: IExecuteFunctions) {
  const documentationRaw = executeFunctions.getNodeParameter(
    'documentation',
    0,
  ) as string;
  const birthdayRaw = executeFunctions.getNodeParameter(
    'birthday',
    0,
  ) as string;

  const formattedDocumentation = formatCpf(documentationRaw);
  const formattedBirthday = birthdayRaw ? birthdayRaw.split('T')[0] : null;

  const envelopeId = executeFunctions.getNodeParameter(
    'envelopeId',
    0,
  ) as string;
  const name = executeFunctions.getNodeParameter('name', 0) as string;
  const email = executeFunctions.getNodeParameter('email', 0) as string;
  const phoneNumber = executeFunctions.getNodeParameter(
    'phoneNumber',
    0,
  ) as string;
  const hasDocumentation = executeFunctions.getNodeParameter(
    'hasDocumentation',
    0,
  ) as boolean;
  const group = executeFunctions.getNodeParameter('group', 0) as string;
  const refusable = executeFunctions.getNodeParameter(
    'refusable',
    0,
  ) as boolean;
  const locationRequired = executeFunctions.getNodeParameter(
    'locationRequired',
    0,
  ) as boolean;
  const communicateEvents = executeFunctions.getNodeParameter(
    'communicateEvents',
    0,
  ) as Record<string, string>;

  const requestBody = {
    data: {
      type: 'signers',
      attributes: {
        name: name,
        email: email,
        phone_number: phoneNumber,
        has_documentation: hasDocumentation,
        documentation: formattedDocumentation,
        birthday: formattedBirthday,
        group: group,
        refusable: refusable,
        location_required_enabled: locationRequired,
        communicate_events: communicateEvents.events,
      },
    },
  };

  const options: IRequestOptions = {
    method: 'POST' as IHttpRequestMethods,
    body: requestBody,
    json: true,
    uri: `/envelopes/${envelopeId}/signers`,
  };

  return await clicksignRequest(
    executeFunctions,
    options,
    'Erro ao criar o signatário',
  );
}
