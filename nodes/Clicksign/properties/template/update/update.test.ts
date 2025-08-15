import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { updateTemplate } from './update.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('update: template', () => {
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
      template: { id: 'mockTemplateId123' },
    });
  });

  it('should update template with all provided fields', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'templateId':
            return 'mockTemplateId123';
          case 'name':
            return 'Updated Template Name';
          case 'color':
            return '#00FF00';
          default:
            return undefined;
        }
      },
    );

    await updateTemplate(mockExecuteFunctions);

    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'templates',
        id: 'mockTemplateId123',
        attributes: {
          name: 'Updated Template Name',
          color: '#00FF00',
        },
      },
    };
    const expectedOptions: IRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      uri: '/templates/mockTemplateId123',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao atualizar modelo',
    );
  });

  it('should update template with only the name field provided', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'templateId') return 'mockTemplateId123';
        if (name === 'name') return 'Only Name Updated';
        if (name === 'color') return undefined;
        return undefined;
      },
    );

    await updateTemplate(mockExecuteFunctions);
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'templates',
        id: 'mockTemplateId123',
        attributes: {
          name: 'Only Name Updated',
        },
      },
    };

    const expectedOptions: IRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      uri: '/templates/mockTemplateId123',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao atualizar modelo',
    );
  });

  it('should not include optional fields if they are not provided', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'templateId') return 'mockTemplateId123';
        if (name === 'name') return undefined;
        if (name === 'color') return undefined;
        return undefined;
      },
    );

    await updateTemplate(mockExecuteFunctions);
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedBody = {
      data: {
        type: 'templates',
        id: 'mockTemplateId123',
        attributes: {},
      },
    };

    const expectedOptions: IRequestOptions = {
      method: 'PATCH',
      body: expectedBody,
      uri: '/templates/mockTemplateId123',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao atualizar modelo',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'template_updated' };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await updateTemplate(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during template update');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(updateTemplate(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
