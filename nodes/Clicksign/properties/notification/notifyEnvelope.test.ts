import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { notifyEnvelope } from './notifyEnvelope.execute';
import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

describe('notifyEnvelope: notification', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'mockEnvelopeId123';
          case 'message':
            return 'Hello, signatories!';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      status: 'success',
      notificationId: '12345',
    });
  });

  it('should get parameters and call clicksignRequest with correct payload', async () => {
    await notifyEnvelope(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'message',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'notifications',
        attributes: {
          message: 'Hello, signatories!',
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/envelopes/mockEnvelopeId123/notifications',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao notificar signatários do envelope',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'notification_sent' };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await notifyEnvelope(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during notification');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(notifyEnvelope(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
