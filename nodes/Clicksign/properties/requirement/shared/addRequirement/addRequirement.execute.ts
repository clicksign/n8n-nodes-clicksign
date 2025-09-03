import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../../shared/clicksignRequest';

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

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/envelopes/${payload.envelopeId}/requirements`,
  };

  return await clicksignRequest(ef, options, payload.errorMessage);
}
