import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { getAllWatchers } from './getAll.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('getAll: watcher', () => {
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
      success: true,
      data: [],
    });
  });

  it('should get envelopeId and call clicksignRequest with correct GET options', async () => {
    await getAllWatchers(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'GET',
      url: '/envelopes/mockEnvelopeId123/signature_watchers',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error listing watchers',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: [{ id: 'watcher1' }, { id: 'watcher2' }],
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getAllWatchers(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching watchers');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getAllWatchers(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
