import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');
jest.mock('../utils/getNodeParameterTyped');

import { deleteWatcher } from './delete.execute';
import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

describe('delete: watcher', () => {
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
            return 'watcherToDelete456';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      status: 'success',
      message: 'Watcher deleted successfully',
    });
  });

  it('should get envelopeId and watcherId and call clicksignRequest with correct DELETE options', async () => {
    await deleteWatcher(mockExecuteFunctions);

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
      method: 'DELETE',
      uri: '/envelopes/mockEnvelopeId123/signature_watchers/watcherToDelete456',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao excluir observador',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      message: 'Watcher deletion confirmed',
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await deleteWatcher(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during watcher deletion');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(deleteWatcher(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
