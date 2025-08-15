import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { getAllEnvelopes } from './getAll.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('getAll: envelope', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        return '';
      },
    );
    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      data: [],
    });
  });

  it('should call clicksignRequest with correct GET options', async () => {
    await getAllEnvelopes(mockExecuteFunctions);

    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/envelopes',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter envelopes',
    );
  });

  it.each(['status', 'name', 'created', 'modified', 'deadline'])(
    'should include %s parameter when provided',
    async (filter) => {
      (getNodeParameterTyped as jest.Mock).mockImplementation(
        (ef: IExecuteFunctions, name: string) => {
          if (name === filter) return 'filter';
          return undefined;
        },
      );

      await getAllEnvelopes(mockExecuteFunctions);

      const expectedOptions: IRequestOptions = {
        method: 'GET',
        uri: `/envelopes?filter[${filter === 'deadline' ? 'deadline_at' : filter}]=filter`,
      };
      expect(clicksignRequest).toHaveBeenCalledWith(
        mockExecuteFunctions,
        expectedOptions,
        'Erro ao obter envelopes',
      );
    },
  );

  it('should combine multiple filters correctly', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'status') return 'closed';
        if (name === 'name') return 'Another Doc';
        return undefined;
      },
    );

    await getAllEnvelopes(mockExecuteFunctions);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/envelopes?filter[status]=closed&filter[name]=Another Doc',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter envelopes',
    );
  });

  it('should combine filters and sort correctly', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'status') return 'active';
        if (name === 'sort') return 'name';
        return undefined;
      },
    );

    await getAllEnvelopes(mockExecuteFunctions);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/envelopes?filter[status]=active&sort=name',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter envelopes',
    );
  });

  it('should handle all filters and sort together', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'status':
            return 'draft';
          case 'name':
            return 'Project Alpha';
          case 'created':
            return '2024-01-01';
          case 'modified':
            return '2024-06-30';
          case 'deadline':
            return '2025-12-31';
          case 'sort':
            return '-name';
          default:
            return undefined;
        }
      },
    );

    await getAllEnvelopes(mockExecuteFunctions);

    const expectedOptions: IRequestOptions = {
      method: 'GET',
      uri: '/envelopes?filter[status]=draft&filter[name]=Project Alpha&filter[created]=2024-01-01&filter[modified]=2024-06-30&filter[deadline_at]=2025-12-31&sort=-name',
    };
    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao obter envelopes',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      data: [{ id: 'env1' }, { id: 'env2' }],
    };

    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await getAllEnvelopes(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during fetching envelopes');

    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(getAllEnvelopes(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
