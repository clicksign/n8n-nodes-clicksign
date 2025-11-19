import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { updateEnvelope } from './update.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { formatLocalISODate } from '../shared/formatLocalISODate';

describe('updateEnvelope', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return '12345';
          case 'envelopeName':
            return 'Updated Envelope Name';
          case 'locale':
            return 'en-US';
          case 'autoClose':
            return true;
          case 'remindInterval':
            return 48;
          case 'blockAfterRefusal':
            return false;
          case 'deadlineAt':
            return undefined;
          case 'defaultSubject':
            return 'New Subject';
          case 'defaultMessage':
            return 'New Message Content';
          case 'folderId':
            return undefined;
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      envelope: { id: '12345', status: 'updated' },
    });
  });

  it('should update envelope details without folderId or deadlineAt', async () => {
    await updateEnvelope(mockExecuteFunctions);

    [
      'envelopeName',
      'locale',
      'autoClose',
      'remindInterval',
      'blockAfterRefusal',
      'deadlineAt',
      'defaultSubject',
      'defaultMessage',
    ].forEach((prop) => {
      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        prop,
      );
    });
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'envelopes',
        id: '12345',
        attributes: {
          name: 'Updated Envelope Name',
          locale: 'en-US',
          auto_close: true,
          remind_interval: 48,
          block_after_refusal: false,
          deadline_at: undefined,
          default_subject: 'New Subject',
          default_message: 'New Message Content',
        },
      },
    };
    const expectedOptions: IHttpRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      url: '/envelopes/12345',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error updating envelope',
    );
  });

  it('should update envelope with folderId when provided', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'folderId') return 'parentFolderId123';
        if (name === 'envelopeId') return '12345';
        if (name === 'deadlineAt') return undefined;
        return 'dummy_value';
      },
    );

    await updateEnvelope(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'folderId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'envelopes',
        id: '12345',
        attributes: {
          name: 'dummy_value',
          locale: 'dummy_value',
          auto_close: 'dummy_value',
          remind_interval: 'dummy_value',
          block_after_refusal: 'dummy_value',
          deadline_at: undefined,
          default_subject: 'dummy_value',
          default_message: 'dummy_value',
        },
        relationships: {
          folder: {
            data: {
              id: 'parentFolderId123',
              type: 'folders',
            },
          },
        },
      },
    };

    const expectedOptions: IHttpRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      url: '/envelopes/12345',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error updating envelope',
    );
  });

  it('should update envelope with formatted deadlineAt when provided', async () => {
    const specificLocalDate = new Date(2025, 9, 20, 14, 30, 0);
    const expectedExactFormattedDate = formatLocalISODate(specificLocalDate);

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'deadlineAt') return specificLocalDate.toISOString();
        if (name === 'envelopeId') return 'envWithDeadline';
        if (name === 'folderId') return '';
        return 'dummy_value';
      },
    );

    await updateEnvelope(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'deadlineAt',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'envelopes',
        id: 'envWithDeadline',
        attributes: {
          name: 'dummy_value',
          locale: 'dummy_value',
          auto_close: 'dummy_value',
          remind_interval: 'dummy_value',
          block_after_refusal: 'dummy_value',
          deadline_at: expectedExactFormattedDate,
          default_subject: 'dummy_value',
          default_message: 'dummy_value',
        },
      },
    };
    const expectedOptions: IHttpRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      url: '/envelopes/envWithDeadline',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error updating envelope',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      result: 'envelope_updated_result',
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await updateEnvelope(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during envelope update');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(updateEnvelope(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
