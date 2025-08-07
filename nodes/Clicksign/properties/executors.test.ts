import { resourceOperationsFunctions } from './executors';

describe('executors', () => {
  it('should contain expected resources', () => {
    expect(Object.keys(resourceOperationsFunctions)).toEqual(
      expect.arrayContaining([
        'envelope',
        'document',
        'signer',
        'requirement',
        'notification',
        'template',
        'folder',
      ]),
    );
    expect(Object.keys(resourceOperationsFunctions).length).toEqual(7);
  });

  it('should map all expected operations to defined functions', () => {
    for (const resourceKey in resourceOperationsFunctions) {
      const resource = resourceOperationsFunctions[resourceKey];

      for (const operationKey in resource) {
        const operationFunction = resource[operationKey];

        expect(operationFunction).toBeDefined();
        expect(typeof operationFunction).toBe('function');
      }
    }
  });

  it('should not contain unexpected resources or operations', () => {
    const expectedResources = [
      'envelope',
      'document',
      'signer',
      'requirement',
      'notification',
      'template',
      'folder',
    ];
    expect(Object.keys(resourceOperationsFunctions)).toEqual(
      expect.arrayContaining(expectedResources),
    );
    expect(Object.keys(resourceOperationsFunctions).length).toBe(
      expectedResources.length,
    );

    expect(Object.keys(resourceOperationsFunctions.envelope)).toEqual(
      expect.arrayContaining([
        'create',
        'getAll',
        'activate',
        'getDetails',
        'update',
        'delete',
      ]),
    );
    expect(Object.keys(resourceOperationsFunctions.envelope).length).toBe(6);

    expect(Object.keys(resourceOperationsFunctions.document)).toEqual(
      expect.arrayContaining([
        'getAll',
        'createByTemplate',
        'createByBase64',
        'update',
        'getDetails',
        'delete',
      ]),
    );
    expect(Object.keys(resourceOperationsFunctions.document).length).toBe(6);

    expect(Object.keys(resourceOperationsFunctions.signer)).toEqual(
      expect.arrayContaining(['create', 'getAll', 'getDetails', 'delete']),
    );
    expect(Object.keys(resourceOperationsFunctions.signer).length).toBe(4);

    expect(Object.keys(resourceOperationsFunctions.requirement)).toEqual(
      expect.arrayContaining([
        'addAuth',
        'addQualification',
        'addRubric',
        'getAll',
        'getDetails',
        'delete',
      ]),
    );
    expect(Object.keys(resourceOperationsFunctions.requirement).length).toBe(6);

    expect(Object.keys(resourceOperationsFunctions.notification)).toEqual(
      expect.arrayContaining(['notifyEnvelope', 'notifySigner']),
    );
    expect(Object.keys(resourceOperationsFunctions.notification).length).toBe(
      2,
    );

    expect(Object.keys(resourceOperationsFunctions.template)).toEqual(
      expect.arrayContaining([
        'create',
        'getAll',
        'update',
        'getDetails',
        'delete',
      ]),
    );
    expect(Object.keys(resourceOperationsFunctions.template).length).toBe(5);

    expect(Object.keys(resourceOperationsFunctions.folder)).toEqual(
      expect.arrayContaining(['create', 'getAll', 'getDetails']),
    );
    expect(Object.keys(resourceOperationsFunctions.folder).length).toBe(3);
  });
});
