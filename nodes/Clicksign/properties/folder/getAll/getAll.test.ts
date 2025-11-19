import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { getAllFolders } from './getAll.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('getAll: folder', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'inRoot') return true;
        return undefined;
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: [],
    });
  });

  it('should get inRoot=true and call clicksignRequest with correct GET options', async () => {
    await getAllFolders(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'inRoot',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'GET',
      url: '/folders?filter[in_root]=true',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error getting folders',
    );
  });

  it('should get inRoot=false and call clicksignRequest with correct GET options', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'inRoot') return false;
        return undefined;
      },
    );

    await getAllFolders(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'inRoot',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'GET',
      url: '/folders?filter[in_root]=false',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error getting folders',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: [{ id: 'fld1' }, { id: 'fld2' }],
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getAllFolders(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching folders');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getAllFolders(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
