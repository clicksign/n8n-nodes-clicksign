import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { createEnvelope } from './create.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { formatLocalISODate } from '../shared/formatLocalISODate';
import { t } from '../../shared/translations';

describe('create: envelope', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeName':
            return 'Test Envelope';
          case 'locale':
            return 'pt-BR';
          case 'autoClose':
            return true;
          case 'remindInterval':
            return 24;
          case 'blockAfterRefusal':
            return false;
          case 'deadlineAt':
            return undefined;
          case 'defaultSubject':
            return 'Documento para Assinatura';
          case 'defaultMessage':
            return 'Por favor, assine o documento.';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      envelope: { id: '12345' },
    });
  });

  it('should correctly build request body and call clicksignRequest without deadlineAt', async () => {
    await createEnvelope(mockExecuteFunctions);

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
        attributes: {
          name: 'Test Envelope',
          locale: 'pt-BR',
          auto_close: true,
          remind_interval: 24,
          block_after_refusal: false,
          deadline_at: undefined,
          default_subject: 'Documento para Assinatura',
          default_message: 'Por favor, assine o documento.',
        },
      },
    };
    const expectedOptions: IHttpRequestOptions = {
      method: 'POST',
      body: expectedBody,
      url: '/envelopes',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      t('envelope.errors.create'),
    );
  });

  it('should correctly format and include deadlineAt when provided', async () => {
    const mockDate = '2025-07-23T10:00:00Z';
    const expectedIsoDate = formatLocalISODate(new Date(mockDate));

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'deadlineAt') return mockDate;
        if (name === 'envelopeName') return 'Env With Deadline';
        if (name === 'locale') return 'en-US';
        if (name === 'autoClose') return false;
        if (name === 'remindInterval') return 12;
        if (name === 'blockAfterRefusal') return true;
        if (name === 'defaultSubject') return 'Subject for deadline';
        if (name === 'defaultMessage') return 'Message for deadline';
        return undefined;
      },
    );

    await createEnvelope(mockExecuteFunctions);

    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const callArgs = (clicksignRequest as jest.Mock).mock.calls[0][1];
    const receivedBody = callArgs.body;

    expect(receivedBody.data.attributes.deadline_at).toBe(expectedIsoDate);
    expect(receivedBody.data.attributes.name).toBe('Env With Deadline');
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'envelope_created' };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await createEnvelope(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during envelope creation');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(createEnvelope(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
