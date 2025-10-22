import { Clicksign } from './Clicksign.node';
import { NodeApiError } from 'n8n-workflow';

jest.mock('./properties/shared/getNodeParameterTyped', () => ({
  getNodeParameterTyped: jest.fn(),
}));

jest.mock('./properties/executors', () => ({
  resourceOperationsFunctions: {
    envelope: {
      create: jest.fn(),
      getAll: jest.fn(),
    },
    requirement: {
      addAuth: jest.fn(),
    },
  },
}));

import { getNodeParameterTyped } from './properties/shared/getNodeParameterTyped';
import { resourceOperationsFunctions } from './properties/executors';

function mockOptionImplementation(
  mock: any,
  resource: string,
  operation: string,
) {
  (mock as jest.Mock).mockImplementation((_this: any, paramName: string) => {
    if (paramName === 'resource') return resource;
    if (paramName === 'operation') return operation;
    return undefined;
  });
}

describe('Clicksign Node', () => {
  let clicksignNode: Clicksign;
  let mockExecuteFunctions: any;

  beforeEach(() => {
    clicksignNode = new Clicksign();

    mockExecuteFunctions = {
      getNode: jest.fn(() => ({ name: 'Test Clicksign Node' })),
      helpers: {
        returnJsonArray: jest.fn((data) => [data]),
      },
    };

    jest.clearAllMocks();
  });

  it.each([
    [
      'envelope',
      'create',
      { success: true, id: 'doc123' },
      resourceOperationsFunctions.envelope.create,
    ],
    [
      'requirement',
      'addAuth',
      { requirementId: '123456', auth: 'email' },
      resourceOperationsFunctions.requirement.addAuth,
    ],
  ])(
    'should successfully execute %s %s operation',
    async (resource, operation, expectedData, mockFunction) => {
      mockOptionImplementation(getNodeParameterTyped, resource, operation);
      (mockFunction as jest.Mock).mockResolvedValueOnce(expectedData);

      const result = await clicksignNode.execute.call(mockExecuteFunctions);

      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        'resource',
      );
      expect(getNodeParameterTyped).toHaveBeenCalledWith(
        mockExecuteFunctions,
        'operation',
      );
      expect(mockFunction).toHaveBeenCalledTimes(1);
      expect(mockFunction).toHaveBeenCalledWith(mockExecuteFunctions);
      expect(mockExecuteFunctions.helpers.returnJsonArray).toHaveBeenCalledWith(
        expectedData,
      );
      expect(result).toEqual([[expectedData]]);
    },
  );

  it('should throw NodeApiError if resource is not supported', async () => {
    mockOptionImplementation(
      getNodeParameterTyped,
      'notResource',
      'anyOperation',
    );

    await expect(
      clicksignNode.execute.call(mockExecuteFunctions),
    ).rejects.toThrow(TypeError);
    await expect(
      clicksignNode.execute.call(mockExecuteFunctions),
    ).rejects.toThrow(
      "Cannot read properties of undefined (reading 'anyOperation')",
    );
  });

  it('should throw NodeApiError if operation is not supported for a valid resource', async () => {
    mockOptionImplementation(
      getNodeParameterTyped,
      'envelope',
      'unsupportedOperation',
    );

    let thrownError: any;

    try {
      await clicksignNode.execute.call(mockExecuteFunctions);
    } catch (error) {
      thrownError = error;
    }

    expect(thrownError).toBeInstanceOf(NodeApiError);
    expect(thrownError.message).toBe('Unsupported operation');
    expect(thrownError.description).toBe(
      'The function "unsupportedOperation" for resource "envelope" is not supported!',
    );

    expect(resourceOperationsFunctions.envelope.create).not.toHaveBeenCalled();
    expect(
      resourceOperationsFunctions.requirement.addAuth,
    ).not.toHaveBeenCalled();
    expect(resourceOperationsFunctions.envelope.getAll).not.toHaveBeenCalled();
    expect(mockExecuteFunctions.helpers.returnJsonArray).not.toHaveBeenCalled();
  });

  it('should handle errors thrown by the resource operation function', async () => {
    mockOptionImplementation(getNodeParameterTyped, 'envelope', 'getAll');

    const errorMessage = 'Failed to fetch envelope from API';

    (
      resourceOperationsFunctions.envelope.getAll as jest.Mock
    ).mockRejectedValueOnce(new Error(errorMessage));

    await expect(
      clicksignNode.execute.call(mockExecuteFunctions),
    ).rejects.toThrow(errorMessage);

    expect(resourceOperationsFunctions.envelope.getAll).toHaveBeenCalledTimes(
      1,
    );
    expect(mockExecuteFunctions.helpers.returnJsonArray).not.toHaveBeenCalled();
  });
});
