import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { createFolder } from './create.execute';
import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

describe('createFolder', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'name':
            return 'New Folder';
          case 'folderId':
            return undefined;
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      folder: { id: 'fld123' },
    });
  });

  it('should create a top-level folder when folderId is not provided', async () => {
    await createFolder(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'name',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'folderId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'folders',
        attributes: {
          name: 'New Folder',
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/folders',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao criar pasta',
    );
  });

  it('should create a sub-folder when folderId is provided', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'name') return 'Sub Folder';
        if (name === 'folderId') return 'parentFolderId456';
        return undefined;
      },
    );

    await createFolder(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'name',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'folderId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'folders',
        attributes: {
          name: 'Sub Folder',
        },
        relationships: {
          folder: {
            data: {
              id: 'parentFolderId456',
              type: 'folders',
            },
          },
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: '/folders',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao criar pasta',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'folder_created' };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await createFolder(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during folder creation');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(createFolder(mockExecuteFunctions)).rejects.toThrow(mockError);
  });
});
