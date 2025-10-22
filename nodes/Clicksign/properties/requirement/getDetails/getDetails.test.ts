import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { getRequirementDetails } from './getDetails.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('getDetails: requirement', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {
      helpers: {
        httpRequestWithAuthentication: jest.fn(),
      },
    } as unknown as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'mockEnvelopeId123';
          case 'requirementId':
            return 'mockRequirementId456';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: { id: 'mockRequirementId456', type: 'auth' },
    });
  });

  it('should get envelopeId and requirementId and call clicksignRequest with correct GET options', async () => {
    await getRequirementDetails(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'requirementId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledTimes(2);
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'GET',
      url: '/envelopes/mockEnvelopeId123/requirements/mockRequirementId456',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter detalhes do requisito',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: { id: 'reqDetails1', action: 'provide_evidence' },
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getRequirementDetails(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error(
      'API error during fetching requirement details',
    );
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getRequirementDetails(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
