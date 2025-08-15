import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { getWatcherDetails } from './getDetails.execute';
import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

describe('getDetails: watcher', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'mockEnvelopeId123';
          case 'watcherId':
            return 'mockWatcherId456';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: { id: 'mockWatcherId456', email: 'watcher@test.com' },
    });
  });

  it('should get envelopeId and watcherId and call clicksignRequest with correct GET options', async () => {
    await getWatcherDetails(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'watcherId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledTimes(2);
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/envelopes/mockEnvelopeId123/signature_watchers/mockWatcherId456',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao listar observadores',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: { id: 'watcherDetails1', email: 'details@test.com' },
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getWatcherDetails(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching watcher details');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getWatcherDetails(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
