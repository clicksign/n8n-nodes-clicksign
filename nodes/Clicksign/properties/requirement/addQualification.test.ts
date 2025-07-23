import { IExecuteFunctions } from 'n8n-workflow';

jest.mock('../utils/getNodeParameterTyped');
jest.mock('./shared/addRequirement.execute');

import { addQualificationRequirement } from './addQualification.execute';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';
import { addRequirement } from './shared/addRequirement.execute';

describe('addQualification: requirement', () => {
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
          default:
            return undefined;
        }
      },
    );

    (addRequirement as jest.Mock).mockResolvedValue({
      status: 'success',
      id: '12345',
    });
  });

  it('should get parameters and call addRequirement with correct payload for qualification', async () => {
    await addQualificationRequirement(mockExecuteFunctions);

    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'envelopeId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'documentId',
    );
    expect(getNodeParameterTyped).toHaveBeenCalledWith(
      mockExecuteFunctions,
      'signerId',
    );
    expect(addRequirement).toHaveBeenCalledTimes(1);
    expect(addRequirement).toHaveBeenCalledWith(mockExecuteFunctions, {
      attributes: {
        action: 'agree',
        role: 'sign',
      },
      documentId: 'mockDocumentId',
      envelopeId: 'mockEnvelopeId',
      signerId: 'mockSignerId',
      errorMessage: 'Erro ao adicionar requisito de qualificação',
    });
  });

  it('should return the result from addRequirement', async () => {
    const mockAddRequirementResponse = {
      status: 'success',
      result: 'qualification_added',
    };

    (addRequirement as jest.Mock).mockResolvedValue(mockAddRequirementResponse);

    const result = await addQualificationRequirement(mockExecuteFunctions);

    expect(result).toEqual(mockAddRequirementResponse);
  });

  it('should propagate errors from addRequirement', async () => {
    const mockError = new Error(
      'API error when adding qualification requirement',
    );

    (addRequirement as jest.Mock).mockRejectedValue(mockError);

    await expect(
      addQualificationRequirement(mockExecuteFunctions),
    ).rejects.toThrow(mockError);
  });
});
