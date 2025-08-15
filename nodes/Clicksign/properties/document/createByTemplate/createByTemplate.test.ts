import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { createDocumentByTemplate } from './createByTemplate.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

function mockImplementation(
  mock: any,
  attributes: Record<string, unknown> = {},
) {
  (mock as jest.Mock).mockImplementation(
    (ef: IExecuteFunctions, name: string) => {
      switch (name) {
        case 'envelopeId':
          return attributes.envelopeId ?? '12345';
        case 'filename':
          return attributes.filename ?? 'my-file';
        case 'templateId':
          return attributes.templateId ?? '12345';
        case 'templateData':
          return attributes.templateData ?? '{}';
        case 'metadata':
          return attributes.metadata ?? '{}';
        default:
          return undefined;
      }
    },
  );
}

describe('createByTemplate: document', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    mockImplementation(getNodeParameterTyped);

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      document: { id: 'doc456' },
    });
  });

  it('should append .docx to filename if it does not end with it', async () => {
    mockImplementation(getNodeParameterTyped, {
      filename: 'my_awesome_doc',
    });

    await createDocumentByTemplate(mockExecuteFunctions);

    const callArgs = (clicksignRequest as jest.Mock).mock.calls[0][1];

    expect(callArgs.body.data.attributes.filename).toBe('my_awesome_doc.docx');
  });

  it('should not append .docx to filename if it already ends with it', async () => {
    mockImplementation(getNodeParameterTyped, {
      filename: 'file.docx',
    });

    await createDocumentByTemplate(mockExecuteFunctions);

    const callArgs = (clicksignRequest as jest.Mock).mock.calls[0][1];

    expect(callArgs.body.data.attributes.filename).toBe('file.docx');
  });

  it('should get parameters, format data, and call clicksignRequest with correct payload', async () => {
    const mockTemplateData = '{"title": "Agreement", "version": 2}';
    const mockMetadata = '{"project": "n8n", "status": "draft"}';

    mockImplementation(getNodeParameterTyped, {
      filename: 'file',
      templateData: mockTemplateData,
      metadata: mockMetadata,
    });

    await createDocumentByTemplate(mockExecuteFunctions);

    [
      'envelopeId',
      'filename',
      'templateId',
      'templateData',
      'metadata',
    ].forEach((prop) => {
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
          filename: 'file.docx',
          template: {
            key: '12345',
            data: JSON.parse(mockTemplateData),
          },
          metadata: JSON.parse(mockMetadata),
        },
      },
    };

    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/envelopes/12345/documents',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao criar documento por modelo',
    );
  });

  it('should propagate SyntaxError if templateData is invalid JSON', async () => {
    mockImplementation(getNodeParameterTyped, {
      templateData: '{"invalid_json":',
    });

    await expect(
      createDocumentByTemplate(mockExecuteFunctions),
    ).rejects.toThrow(SyntaxError);
    expect(clicksignRequest).not.toHaveBeenCalled();
  });

  it('should propagate SyntaxError if metadata is invalid JSON', async () => {
    mockImplementation(getNodeParameterTyped, {
      metadata: '{"invalid_json":',
    });

    await expect(
      createDocumentByTemplate(mockExecuteFunctions),
    ).rejects.toThrow(SyntaxError);
    expect(clicksignRequest).not.toHaveBeenCalled();
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'document_created' };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await createDocumentByTemplate(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error(
      'API error during document creation by template',
    );

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(
      createDocumentByTemplate(mockExecuteFunctions),
    ).rejects.toThrow(mockError);
  });
});
