import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../../utils/clicksignRequest');

import { addRequirement } from './addRequirement.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';

describe('addRequirement', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      requirementId: '12345',
    });
  });

  it('should correctly build request body and call clicksignRequest with valid payload', async () => {
    const payload = {
      envelopeId: 'envelope-123',
      documentId: 'document-abc',
      signerId: 'signer-xyz',
      attributes: {
        type: 'auth_pin',
        code: '1234',
        message: 'message',
      },
      errorMessage: 'Erro ao adicionar requisito',
    };

    await addRequirement(mockExecuteFunctions, payload);

    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
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

    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: `/envelopes/${payload.envelopeId}/requirements`,
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      payload.errorMessage,
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const payload = {
      envelopeId: 'env-test',
      documentId: 'doc-test',
      signerId: 'signer-test',
      attributes: { type: 'simple_auth' },
      errorMessage: 'Erro de teste',
    };
    const mockApiResponse = {
      status: 'success',
      data: { id: 'testRequirement' },
    };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await addRequirement(mockExecuteFunctions, payload);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const payload = {
      envelopeId: 'env-error',
      documentId: 'doc-error',
      signerId: 'signer-error',
      attributes: { type: 'failed_auth' },
      errorMessage: 'Erro ao falhar requisito',
    };
    const mockError = new Error('API returned an error for requirement');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(addRequirement(mockExecuteFunctions, payload)).rejects.toThrow(
      mockError,
    );
  });
});
