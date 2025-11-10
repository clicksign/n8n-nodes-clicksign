import { IExecuteFunctions } from 'n8n-workflow';

jest.mock('../../shared/getNodeParameterTyped');
jest.mock('../shared/addRequirement/addRequirement.execute');

import { addRubricRequirement } from './addRubric.execute';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { addRequirement } from '../shared/addRequirement/addRequirement.execute';

describe('addRubric: requirement', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();

    mockExecuteFunctions = {} as IExecuteFunctions;

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        switch (name) {
          case 'envelopeId':
            return 'mockEnvelopeId';
          case 'documentId':
            return 'mockDocumentId';
          case 'signerId':
            return 'mockSignerId';
          case 'pages':
            return '1,2,3';
          default:
            return undefined;
        }
      },
    );

    (addRequirement as jest.Mock).mockResolvedValue({
      status: 'success',
      id: 'rubricReq123',
    });
  });

  it('should get parameters and call addRequirement with correct payload for rubrication', async () => {
    await addRubricRequirement(mockExecuteFunctions);

    ['envelopeId', 'documentId', 'signerId', 'pages'].forEach((prop) => {
      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        prop,
      );
    });
    expect(addRequirement).toHaveBeenCalledTimes(1);
    expect(addRequirement).toHaveBeenCalledWith(mockExecuteFunctions, {
      attributes: {
        action: 'rubricate',
        pages: '1,2,3',
      },
      documentId: 'mockDocumentId',
      envelopeId: 'mockEnvelopeId',
      signerId: 'mockSignerId',
      errorMessage: 'Error adding rubric requirement',
    });
  });

  it('should handle empty pages string correctly', async () => {
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'pages') return '';
        return 'dummy';
      },
    );

    await addRubricRequirement(mockExecuteFunctions);

    expect(addRequirement).toHaveBeenCalledWith(mockExecuteFunctions, {
      attributes: {
        action: 'rubricate',
        pages: '',
      },
      documentId: 'dummy',
      envelopeId: 'dummy',
      signerId: 'dummy',
      errorMessage: 'Error adding rubric requirement',
    });
  });

  it('should return the result from addRequirement', async () => {
    const mockAddRequirementResponse = {
      status: 'success',
      result: 'rubric_added',
    };
    (addRequirement as jest.Mock).mockResolvedValue(mockAddRequirementResponse);

    const result = await addRubricRequirement(mockExecuteFunctions);

    expect(result).toEqual(mockAddRequirementResponse);
  });

  it('should propagate errors from addRequirement', async () => {
    const mockError = new Error('API error when adding rubric requirement');
    (addRequirement as jest.Mock).mockRejectedValue(mockError);

    await expect(addRubricRequirement(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
