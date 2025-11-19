import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { createTemplate } from './create.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('create: template', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'name':
            return 'My Test Template';
          case 'base64':
            return 'JVBERi0xLjQKJ...';
          case 'color':
            return '#FF0000';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      template: { id: 'tpl123' },
    });
  });

  it('should get parameters and call clicksignRequest with correct payload', async () => {
    await createTemplate(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'name',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'base64',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'color',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'templates',
        attributes: {
          name: 'My Test Template',
          content_base64: 'JVBERi0xLjQKJ...',
          color: '#FF0000',
        },
      },
    };
    const expectedOptions: IHttpRequestOptions = {
      method: 'POST',
      body: expectedBody,
      url: '/templates',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error creating template',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'template_created' };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await createTemplate(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during template creation');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(createTemplate(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
