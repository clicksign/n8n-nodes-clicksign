import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../utils/clicksignRequest';

type RequirementPayload = {
  envelopeId: string;
  documentId: string;
  signerId: string;
  attributes: Record<string, string>;
  errorMessage: string;
};

export async function addRequirement(
  ef: IExecuteFunctions,
  payload: RequirementPayload,
) {
  const body = {
    data: {
      type: 'requirements',
      attributes: payload.attributes,
      relationships: {
        document: {
          data: {
            type: 'documents',
            id: payload.documentId,
          },
        },
        signer: {
          data: {
            type: 'signers',
            id: payload.signerId,
          },
        },
      },
    },
  };

  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes/${payload.envelopeId}/requirements`,
  };

  return await clicksignRequest(ef, options, payload.errorMessage);
}
