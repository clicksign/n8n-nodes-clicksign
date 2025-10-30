import { IExecuteFunctions } from 'n8n-workflow';

jest.mock('../../shared/getNodeParameterTyped');
jest.mock('../shared/addRequirement/addRequirement.execute');

import { addAuthRequirement } from './addAuth.execute';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { addRequirement } from '../shared/addRequirement/addRequirement.execute';
import { t } from '../../shared/translations';

describe('addAuth: requirement', () => {
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
          case 'auth':
            return 'email';
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

  it('should get parameters and call addRequirement with correct payload for authentication', async () => {
    await addAuthRequirement(mockExecuteFunctions);

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
        action: 'provide_evidence',
        auth: 'email',
      },
      documentId: 'mockDocumentId',
      envelopeId: 'mockEnvelopeId',
      signerId: 'mockSignerId',
      errorMessage: t('requirement.errors.addAuth'),
    });
  });

  it('should return the result from addRequirement', async () => {
    const mockAddRequirementResponse = {
      status: 'success',
      result: 'auth_added',
    };

    (addRequirement as jest.Mock).mockResolvedValue(mockAddRequirementResponse);

    const result = await addAuthRequirement(mockExecuteFunctions);

    expect(result).toEqual(mockAddRequirementResponse);
  });

  it('should propagate errors from addRequirement', async () => {
    const mockError = new Error('Erro na API ao adicionar requisito');

    (addRequirement as jest.Mock).mockRejectedValue(mockError);

    await expect(addAuthRequirement(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
