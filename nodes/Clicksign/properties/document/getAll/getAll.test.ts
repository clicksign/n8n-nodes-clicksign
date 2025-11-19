import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { getAllDocuments } from './getAll.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('getAll: document', () => {
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
    await getAllDocuments(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'GET',
      url: '/envelopes/mockEnvelopeId123/documents',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Error getting documents',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: [{ id: 'doc1' }, { id: 'doc2' }],
    };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getAllDocuments(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching documents');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getAllDocuments(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
