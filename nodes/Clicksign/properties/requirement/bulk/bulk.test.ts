import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

jest.mock('../../shared/getNodeParameterTyped');
jest.mock('../../shared/clicksignRequest');

import {
  bulkRequirements,
  formatAddOperation,
  formatRemoveOperation,
} from './bulk.execute';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';

describe('bulk: requirement', () => {
  let mockExecuteFunctions: IExecuteFunctions;

  beforeEach(() => {
    jest.clearAllMocks();
    mockExecuteFunctions = {} as IExecuteFunctions;
    (clicksignRequest as jest.Mock).mockResolvedValue({
      success: true,
      result: 'bulk_success',
    });
  });

  it('should process a mix of add and remove operations correctly', async () => {
    const mockEnvelopeId = 'envBulk123';
    const mockOperations = {
      fields: [
        {
          operation: 'add',
          requirement: {
            details: {
              requirementType: 'provide_evidence',
              auth: 'email',
              documentId: 'doc1',
              signerId: 'signer1',
            },
          },
        },
        {
          operation: 'remove',
          requirementId: 'req456',
        },
        {
          operation: 'add',
          requirement: {
            details: {
              requirementType: 'rubricate',
              pages: '1,2,3',
              documentId: 'doc2',
              signerId: 'signer2',
            },
          },
        },
      ],
    };

    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'envelopeId') return mockEnvelopeId;
        if (name === 'operations') return mockOperations;
        return undefined;
      },
    );

    await bulkRequirements(mockExecuteFunctions);

    const expectedAddOp1 = formatAddOperation(mockOperations.fields[0] as any);
    const expectedRemoveOp = formatRemoveOperation(
      mockOperations.fields[1] as any,
    );
    const expectedAddOp2 = formatAddOperation(mockOperations.fields[2] as any);

    const expectedBody = {
      'atomic:operations': [expectedAddOp1, expectedRemoveOp, expectedAddOp2],
    };

    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: `/envelopes/${mockEnvelopeId}/bulk_requirements`,
    };

    expect(clicksignRequest).toHaveBeenCalledTimes(1);
    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao realizar operações em massa de requisitos',
    );
  });

  it('should handle only add operations correctly', async () => {
    const mockEnvelopeId = 'envBulkAdd';
    const mockOperations = {
      fields: [
        {
          operation: 'add',
          requirement: {
            details: {
              requirementType: 'agree',
              documentId: 'doc3',
              signerId: 'signer3',
              role: 'sign',
            },
          },
        },
      ],
    };
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'envelopeId') return mockEnvelopeId;
        if (name === 'operations') return mockOperations;
        return undefined;
      },
    );

    await bulkRequirements(mockExecuteFunctions);

    const expectedBody = {
      'atomic:operations': [
        {
          op: 'add',
          data: {
            type: 'requirements',
            attributes: { action: 'agree', role: 'sign' },
            relationships: {
              document: { data: { type: 'documents', id: 'doc3' } },
              signer: { data: { type: 'signers', id: 'signer3' } },
            },
          },
        },
      ],
    };

    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: `/envelopes/${mockEnvelopeId}/bulk_requirements`,
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao realizar operações em massa de requisitos',
    );
  });

  it('should handle only remove operations correctly', async () => {
    const mockEnvelopeId = 'envBulkRemove';
    const mockOperations = {
      fields: [{ operation: 'remove', requirementId: 'req789' }],
    };
    (getNodeParameterTyped as jest.Mock).mockImplementation(
      (ef: IExecuteFunctions, name: string) => {
        if (name === 'envelopeId') return mockEnvelopeId;
        if (name === 'operations') return mockOperations;
        return undefined;
      },
    );

    await bulkRequirements(mockExecuteFunctions);

    const expectedBody = {
      'atomic:operations': [
        {
          op: 'remove',
          ref: { type: 'requirements', id: 'req789' },
        },
      ],
    };

    const expectedOptions: IRequestOptions = {
      method: 'POST',
      body: expectedBody,
      uri: `/envelopes/${mockEnvelopeId}/bulk_requirements`,
    };

    expect(clicksignRequest).toHaveBeenCalledWith(
      mockExecuteFunctions,
      expectedOptions,
      'Erro ao realizar operações em massa de requisitos',
    );
  });

  it('should return the result from clicksignRequest', async () => {
    const mockApiResponse = { status: 'success', result: 'bulk_op_ok' };
    (clicksignRequest as jest.Mock).mockResolvedValue(mockApiResponse);

    const result = await bulkRequirements(mockExecuteFunctions);

    expect(result).toEqual(mockApiResponse);
  });

  it('should propagate errors from clicksignRequest', async () => {
    const mockError = new Error('API error during bulk operations');
    (clicksignRequest as jest.Mock).mockRejectedValue(mockError);

    await expect(bulkRequirements(mockExecuteFunctions)).rejects.toThrow(
      mockError,
    );
  });
});
