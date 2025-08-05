import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { getFolderDetails } from './getDetails.execute';
import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

describe('getDetails: folder', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'folderId') return 'mockFolderId123';
        return undefined;
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: { id: 'mockFolderId123', name: 'Detailed Folder' },
    });
  });

  it('should get folderId and call clicksignRequest with correct GET options', async () => {
    await getFolderDetails(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'folderId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/folders/mockFolderId123',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter detalhes da pasta',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: { id: 'fldDetails1', name: 'My Details' },
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getFolderDetails(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching folder details');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getFolderDetails(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
