import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { getTemplateDetails } from './getDetails.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

describe('getDetails: template', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'templateId') return 'mockTemplateId123';
        return undefined;
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: { id: 'mockTemplateId123', name: 'My Template' },
    });
  });

  it('should get templateId and call clicksignRequest with correct GET options', async () => {
    await getTemplateDetails(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'templateId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'GET',
      url: '/templates/mockTemplateId123',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      t('template.errors.getDetails'),
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: { id: 'tplDetails1', name: 'Details' },
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getTemplateDetails(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching template details');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getTemplateDetails(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
