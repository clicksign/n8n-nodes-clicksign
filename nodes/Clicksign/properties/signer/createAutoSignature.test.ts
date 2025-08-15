import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');
jest.mock('./shared/formatters', () => ({
  formatDocumentation: jest.fn((doc) => `formatted_${doc}`),
  formatBirthday: jest.fn((date) => `formatted_${date}`),
}));

import { createAutoSignature } from './createAutoSignature.execute';
import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';
import { formatBirthday, formatDocumentation } from './shared/formatters';

describe('createAutoSignature: signer', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'name':
            return 'John Doe';
          case 'email':
            return 'john.doe@example.com';
          case 'apiEmail':
            return 'api@example.com';
          case 'adminEmail':
            return 'admin@example.com';
          case 'documentation':
            return '12345678901';
          case 'birthday':
            return '1990-01-01';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      auto_signature: { id: 'as123' },
    });
  });

  it('should get all parameters and call formatters before building the request body', async () => {
    const mockDocumentation = '123.456.789-01';
    const mockBirthday = '1990-01-01';

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'name':
            return 'Jane Doe';
          case 'email':
            return 'jane.doe@example.com';
          case 'apiEmail':
            return 'api.jane@example.com';
          case 'adminEmail':
            return 'admin.jane@example.com';
          case 'documentation':
            return mockDocumentation;
          case 'birthday':
            return mockBirthday;
          default:
            return undefined;
        }
      },
    );

    await createAutoSignature(mockExecuteFunctions);

    [
      'name',
      'email',
      'apiEmail',
      'adminEmail',
      'documentation',
      'birthday',
    ].forEach((prop) => {
      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        prop,
      );
    });
    expect(formatDocumentation).toHaveBeenCalledWith(mockDocumentation);
    expect(formatBirthday).toHaveBeenCalledWith(mockBirthday);

    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'auto_signature_terms',
        attributes: {
          signer: {
            documentation: `formatted_${mockDocumentation}`,
            birthday: `formatted_${mockBirthday}`,
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
          },
          admin_email: 'admin.jane@example.com',
          api_email: 'api.jane@example.com',
        },
      },
    };

    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/auto_signature/terms',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao criar assinatura automática',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { success: true, auto_signature: { id: 'as456' } };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await createAutoSignature(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during auto signature creation');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(createAutoSignature(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
