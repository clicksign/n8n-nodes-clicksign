import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');

import { getAllEnvelopes } from './getAll.execute';
import { clicksignRequest } from '../utils/clicksignRequest';

describe('getAll: envelope', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: [],
    });
  });

  it('should call clicksignRequest with correct GET options', async () => {
    await getAllEnvelopes(mockExecuteFunctions);

    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/envelopes',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter envelopes',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: [{ id: 'env1' }, { id: 'env2' }],
    };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getAllEnvelopes(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching envelopes');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getAllEnvelopes(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
