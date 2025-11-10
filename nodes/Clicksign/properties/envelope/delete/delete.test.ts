import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { deleteEnvelope } from './delete.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('delete: envelope', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'envelopeId') return '12345';
        return undefined;
      },
    );
    (clicksignRequest as jest.Mock).mockResolvedValue({
      status: 'success',
      message: 'Envelope deleted successfully',
    });
  });

  it('should get envelopeId and call clicksignRequest with correct DELETE options', async () => {
    await deleteEnvelope(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'DELETE',
      url: '/envelopes/12345',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error deleting envelope',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      message: 'Deletion confirmed',
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await deleteEnvelope(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during envelope deletion');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(deleteEnvelope(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
