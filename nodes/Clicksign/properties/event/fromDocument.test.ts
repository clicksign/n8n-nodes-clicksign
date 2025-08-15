import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { eventsFromDocument } from './fromDocument.execute';
import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

describe('fromEnvelope: event', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'mockEnvelopeId123';
          case 'documentId':
            return 'mockDocumentId123';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      eventId: '12345',
    });
  });

  it('should get parameters and call clicksignRequest with correct GET request', async () => {
    await eventsFromDocument(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'documentId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/envelopes/mockEnvelopeId123/documents/mockDocumentId123/events',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter eventos do documento',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'notification_sent' };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await eventsFromDocument(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during notification');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(eventsFromDocument(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
