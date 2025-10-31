import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');

import { getAllTemplates } from './getAll.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

describe('getAll: template', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: [],
    });
  });

  it('should call clicksignRequest with correct GET options for templates', async () => {
    await getAllTemplates(mockExecuteFunctions);

    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IHttpRequestOptions = {
      method: 'GET',
      url: '/templates',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      t('template.errors.getAll'),
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: [{ id: 'tpl1' }, { id: 'tpl2' }],
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getAllTemplates(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching templates');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getAllTemplates(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
