import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { updateDocument } from './update.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

describe('update: document', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'metadata':
            return '{"customField": "value", "version": 2}';
          default:
            return 'dummy';
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      document: { id: 'docUpdateId456', status: 'signed' },
    });
  });

  it('should get parameters, parse metadata, and call clicksignRequest with correct PATCH payload', async () => {
    const mockMetadata =
      '{"project_phase": "completed", "review_date": "2025-07-31"}';

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'envelope-id';
          case 'documentId':
            return 'document-id';
          case 'status':
            return 'concluded';
          case 'metadata':
            return mockMetadata;
          default:
            return undefined;
        }
      },
    );

    await updateDocument(mockExecuteFunctions);

    ['envelopeId', 'documentId', 'status', 'metadata'].forEach((prop) => {
      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        prop,
      );
    });
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'documents',
        id: 'document-id',
        attributes: {
          status: 'concluded',
          metadata: JSON.parse(mockMetadata),
        },
      },
    };
    const expectedOptions: IHttpRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      url: '/envelopes/envelope-id/documents/document-id',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      t('document.errors.update'),
    );
  });

  it('should propagate SyntaxError if metadata is invalid JSON', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'metadata') return '{invalid_meta:';
        return 'dummy';
      },
    );

    await expect(updateDocument(mockExecuteFunctions)).rejects.toThrow(
      SyntaxError,
    );

    expect(clicksignRequest).not.toHaveBeenCalled();
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      result: 'document_updated_result',
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await updateDocument(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during document update');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(updateDocument(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
