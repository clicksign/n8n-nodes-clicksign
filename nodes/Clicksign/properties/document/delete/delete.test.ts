import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/clicksignRequest');
jest.mock('../../shared/getNodeParameterTyped');

import { deleteDocument } from './delete.execute';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

describe('deleteDocument', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'mockEnvelopeId123';
          case 'documentId':
            return 'documentToDelete456';
          default:
            return undefined;
        }
      },
    );

    (clicksignRequest as jest.Mock).mockResolvedValue({
      status: 'success',
      message: 'Document deleted successfully',
    });
  });

  it('should get envelopeId and documentId and call clicksignRequest with correct DELETE options', async () => {
    await deleteDocument(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'documentId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledTimes(2);
    expect(clicksignRequest).toHaveBeenCalledTimes(1);

    const expectedOptions: IRequestOptions = {
      method: 'DELETE',
      uri: '/envelopes/mockEnvelopeId123/documents/documentToDelete456',
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao excluir o documento',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = {
      status: 'success',
      message: 'Deletion confirmed',
    };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await deleteDocument(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during document deletion');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(deleteDocument(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
