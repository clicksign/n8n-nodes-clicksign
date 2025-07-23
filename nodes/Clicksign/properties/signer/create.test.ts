import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { createSigner } from './create.execute';
import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

function mockImplementation(mock: any, data: Record<string, unknown> = {}) {
  (mock as jest.Mock).mockImplementation(
    (ef: IExecuteFunctions, name: string) => {
      switch (name) {
        case 'envelopeId':
          return data.envelopeId ?? '12345';
        case 'name':
          return data.name ?? 'Silva silva';
        case 'email':
          return data.email ?? 'silva@example.com';
        case 'phoneNumber':
          return data.phoneNumber ?? '5511987654321';
        case 'hasDocumentation':
          return data.hasDocumentation ?? false;
        case 'group':
          return data.group ?? 1;
        case 'refusable':
          return data.refusable ?? false;
        case 'locationRequired':
          return data.locationRequired ?? false;
        case 'communicateEvents':
          return {
            events: data.communicateEvents ?? {
              signature_request: 'email',
              signature_reminder: 'email',
              document_signed: 'email',
            },
          };
        case 'documentation':
          return data.documentation ?? null;
        case 'birthday':
          return data.birthday ?? null;
        default:
          return undefined;
      }
    },
  );
}

describe('create: signer', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      signer: { id: '12345' },
    });
    mockImplementation(getNodeParameterTyped);
  });

  it('should correctly build request body and call clicksignRequest', async () => {
    await createSigner(mockExecuteFunctions);

    [
      'envelopeId',
      'name',
      'email',
      'phoneNumber',
      'hasDocumentation',
      'group',
      'refusable',
      'locationRequired',
      'communicateEvents',
    ].forEach((prop) => {
      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        prop,
      );
    });
    ['documentation', 'birthday'].forEach((prop) => {
      expect(getNodeParameterTyped).not.toHaveBeenCalledWith(
        mockExecuteFunctions,
        prop,
      );
    });
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'signers',
        attributes: {
          name: 'Silva silva',
          email: 'silva@example.com',
          phone_number: '5511987654321',
          has_documentation: false,
          documentation: null,
          birthday: null,
          group: 1,
          refusable: false,
          location_required_enabled: false,
          communicate_events: {
            signature_request: 'email',
            signature_reminder: 'email',
            document_signed: 'email',
          },
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/envelopes/12345/signers',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao criar o signatário',
    );
  });

  it('should correctly build request body with a formatted CPF', async () => {
    mockImplementation(getNodeParameterTyped, {
      name: 'Fulano De Tal',
      email: 'fulano@example.com',
      phoneNumber: '5531912345678',
      hasDocumentation: true,
      documentation: '12345678901',
      birthday: '1990-05-15',
      group: 3,
      refusable: false,
      locationRequired: false,
      communicateEvents: { signature_request: 'email' },
    });

    await createSigner(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'documentation',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'birthday',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'signers',
        attributes: {
          name: 'Fulano De Tal',
          email: 'fulano@example.com',
          phone_number: '5531912345678',
          has_documentation: true,
          documentation: '123.456.789-01',
          birthday: '1990-05-15',
          group: 3,
          refusable: false,
          location_required_enabled: false,
          communicate_events: { signature_request: 'email' },
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/envelopes/12345/signers',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao criar o signatário',
    );
  });

  it('should handle null/empty documentation or birthday when hasDocumentation is true', async () => {
    mockImplementation(getNodeParameterTyped, {
      name: 'Test Null Docs',
      email: 'test@null.com',
      phoneNumber: '11111111111',
      hasDocumentation: true,
      documentation: null,
      birthday: null,
      group: 1,
      refusable: false,
      locationRequired: false,
      communicateEvents: {
        signature_request: 'email',
        signature_reminder: 'email',
        document_signed: 'email',
      },
    });

    await createSigner(mockExecuteFunctions);

    const expectedBody = {
      data: {
        type: 'signers',
        attributes: {
          name: 'Test Null Docs',
          email: 'test@null.com',
          phone_number: '11111111111',
          has_documentation: true,
          documentation: null,
          birthday: null,
          group: 1,
          refusable: false,
          location_required_enabled: false,
          communicate_events: {
            signature_request: 'email',
            signature_reminder: 'email',
            document_signed: 'email',
          },
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/envelopes/12345/signers',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao criar o signatário',
    );
    expect(expectedBody.data.attributes.documentation).toBeNull();
    expect(expectedBody.data.attributes.birthday).toBeNull();
  });

  it('should return the result of clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: { signerId: '12345' },
    };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await createSigner(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API Error: Failed to create signer');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(createSigner(mockExecuteFunctions)).rejects.toThrow(mockError);
  });
});
