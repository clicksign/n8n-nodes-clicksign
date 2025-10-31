import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { notifyEnvelope } from './notifyEnvelope.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

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
    const expectedOptions: IHttpRequestOptions = {
      method: 'POST',
      body: expectedBody,
      url: '/envelopes/mockEnvelopeId123/notifications',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      t('notification.errors.notifyEnvelope'),
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
