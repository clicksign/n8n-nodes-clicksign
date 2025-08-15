import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { deleteTemplate } from './delete.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('delete: template', () => {
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

  it('should get templateId and call clicksignRequest with correct DELETE options', async () => {
    await deleteTemplate(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledTimes(1);
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'templateId',
    );
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IRequestOptions = {
      method: 'DELETE',
      uri: '/templates/mockTemplateId123',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao excluir modelo',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: { id: 'tplDetails1', name: 'Details' },
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await deleteTemplate(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching template details');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(deleteTemplate(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
