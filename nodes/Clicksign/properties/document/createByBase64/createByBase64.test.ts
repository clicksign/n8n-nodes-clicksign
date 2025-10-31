import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { createDocumentByBase64 } from './createByBase64.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

describe('createByBase64 : document', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'env123_base64';
          case 'filename':
            return 'document_from_base64.pdf';
          case 'fileBase64':
            return 'JVBERi0xLjQKJ...';
          case 'metadata':
            return '{"category": "invoice", "client_id": 123}';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      document: { id: 'doc789_base64' },
    });
  });

  it('should get parameters, parse metadata, and call clicksignRequest with correct payload', async () => {
    const mockMetadata = '{"status": "final", "department": "sales"}';

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'env-main-base64';
          case 'filename':
            return 'my_report.docx';
          case 'fileBase64':
            return 'SGVsbG8sIHdvcmxkIQ==';
          case 'metadata':
            return mockMetadata;
          default:
            return undefined;
        }
      },
    );

    await createDocumentByBase64(mockExecuteFunctions);

    ['envelopeId', 'filename', 'fileBase64', 'metadata'].forEach((prop) => {
      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        prop,
      );
    });
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'documents',
        attributes: {
          filename: 'my_report.docx',
          content_base64: 'SGVsbG8sIHdvcmxkIQ==',
          metadata: JSON.parse(mockMetadata),
        },
      },
    };
    const expectedOptions: IHttpRequestOptions = {
      method: 'POST',
      body: expectedBody,
      url: '/envelopes/env-main-base64/documents',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      t('document.errors.createByBase64'),
    );
  });

  it('should propagate SyntaxError if metadata is invalid JSON', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'metadata') return '{invalid_meta:';
        if (name === 'envelopeId') return 'env-err-meta';
        if (name === 'filename') return 'doc-err-meta';
        if (name === 'fileBase64') return 'dummy';
        return undefined;
      },
    );

    await expect(createDocumentByBase64(mockExecuteFunctions)).rejects.toThrow(
      SyntaxError,
    );
    expect(clicksignRequest).not.toHaveBeenCalled();
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      result: 'document_base64_created',
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await createDocumentByBase64(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during document creation by base64');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(createDocumentByBase64(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
