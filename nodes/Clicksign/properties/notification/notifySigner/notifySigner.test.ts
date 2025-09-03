import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { notifySigner } from './notifySigner.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('notifySigner: notification', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'mockEnvelopeId123';
          case 'signerId':
            return 'mockSignerId456';
          case 'message':
            return 'Default notification message';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      notification: { id: '12345' },
    });
  });

  it('should send a notification with a message when message is provided', async () => {
    await notifySigner(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'signerId',
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
          message: 'Default notification message',
        },
      },
    };

    const expectedOptions: IHttpRequestOptions = {
      method: 'POST',
      body: expectedBody,
      url: '/envelopes/mockEnvelopeId123/signers/mockSignerId456/notifications',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao enviar notificação para signatário',
    );
  });

  it('should send a notification with an empty body when message is an empty string', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'message') return '';
        if (name === 'envelopeId') return 'envEmptyMsg';
        if (name === 'signerId') return 'signerEmptyMsg';
        return undefined;
      },
    );

    await notifySigner(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'message',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'notifications',
        attributes: {
          message: null,
        },
      },
    };
    const expectedOptions: IHttpRequestOptions = {
      method: 'POST',
      body: expectedBody,
      url: '/envelopes/envEmptyMsg/signers/signerEmptyMsg/notifications',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao enviar notificação para signatário',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      result: 'notification_sent_ok',
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await notifySigner(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during signer notification');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(notifySigner(mockExecuteFunctions)).rejects.toThrow(mockError);
  });
});
