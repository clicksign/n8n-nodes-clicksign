import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { activateEnvelope } from './activate.execute';
import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

describe('activate: envelope', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'envelopeId') return 'mockEnvelopeId123';
        return undefined;
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      status: 'success',
      activated: true,
    });
  });

  it('should get envelopeId and call clicksignRequest with correct PATCH payload', async () => {
    await activateEnvelope(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'envelopes',
        id: 'mockEnvelopeId123',
        attributes: {
          status: 'running',
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      uri: '/envelopes/mockEnvelopeId123',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao ativar envelope',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'envelope_activated' };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await activateEnvelope(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during envelope activation');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(activateEnvelope(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
