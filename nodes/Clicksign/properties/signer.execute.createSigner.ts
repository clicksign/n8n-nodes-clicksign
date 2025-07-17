import {
  IExecuteFunctions,
  IHttpRequestMethods,
  IRequestOptions,
  NodeOperationError,
} from 'n8n-workflow';

function formatCpf(cpfString: string): string {
  const cpf = cpfString.replace(/\D/g, '');

  if (cpf.length === 11) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  return cpfString;
}

export async function createSigner(ef: IExecuteFunctions) {
  try {
    const documentationRaw = ef.getNodeParameter('documentation', 0) as string;
    const birthdayRaw = ef.getNodeParameter('birthday', 0) as string;

    const formattedDocumentation = formatCpf(documentationRaw);
    const formattedBirthday = birthdayRaw ? birthdayRaw.split('T')[0] : null;

    const envelopeId = ef.getNodeParameter('envelopeId', 0) as string;
    const name = ef.getNodeParameter('name', 0) as string;
    const email = ef.getNodeParameter('email', 0) as string;
    const phoneNumber = ef.getNodeParameter('phoneNumber', 0) as string;
    const hasDocumentation = ef.getNodeParameter(
      'hasDocumentation',
      0,
    ) as boolean;
    const group = ef.getNodeParameter('group', 0) as string;
    const refusable = ef.getNodeParameter('refusable', 0) as boolean;
    const locationRequired = ef.getNodeParameter(
      'locationRequired',
      0,
    ) as boolean;
    const communicateEvents = ef.getNodeParameter(
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

    const credentials = await ef.getCredentials('clicksignApi');

    const serverEnv = credentials['clicksign_environment'];
    const accessToken = credentials['clicksign_access_token'];
    const options: IRequestOptions = {
      method: 'POST' as IHttpRequestMethods,
      body: requestBody,
      json: true,
    };

    const requestOptions: IRequestOptions = {
      ...options,
      headers: {
        Authorization: accessToken,
        ...(options.headers || {}),
      },
      uri: `https://${serverEnv}.clicksign.com/api/v3/envelopes/${envelopeId}/signers`,
    };

    const returnData = await ef.helpers.request(requestOptions);

    return {
      json: {
        success: true,
        data: returnData,
      },
    };
  } catch (error) {
    const errorData = {
      success: false,
      error: {
        message: error.message,
        details: 'Erro ao criar o signatário',
        code: error.code || 'UNKNOWN_ERROR',
        timestamp: new Date().toISOString(),
      },
    };

    if (!ef.continueOnFail()) {
      throw new NodeOperationError(ef.getNode(), error.message, {
        message: errorData.error.message,
        description: errorData.error.details,
      });
    }

    return {
      json: errorData,
      error: errorData,
    };
  }
}
