import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../utils/clicksignRequest');

import { getAllTemplates } from './getAll.execute';
import { clicksignRequest } from '../shared/clicksignRequest';

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

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/templates',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao listar modelos',
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
