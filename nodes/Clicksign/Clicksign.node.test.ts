import { Clicksign } from './Clicksign.node';
import { envelopeOperations as envelopeOp } from './properties/envelope/operations';
import { createEnvelopeFields } from './properties/envelope/create.fields';
import { getDocumentsFields } from './properties/document/getAll.fields';

const envelopeFields = [...createEnvelopeFields, ...getDocumentsFields];
const envelopeOperations = [envelopeOp];

describe('Clicksign Node', () => {
  let clicksignNode: Clicksign;

  beforeEach(() => {
    clicksignNode = new Clicksign();
  });

  describe('Node Description', () => {
    it('should have correct basic properties', () => {
      const description = clicksignNode.description;

      expect(description.displayName).toBe('Clicksign');
      expect(description.name).toBe('clicksign');
      expect(description.group).toEqual(['transform']);
      expect(description.version).toBe(1);
      expect(description.subtitle).toBe(
        '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
      );
      expect(description.description).toBe('Interact with Clicksign API');
    });

    it('should have correct defaults', () => {
      const description = clicksignNode.description;

      expect(description.defaults).toEqual({
        name: 'Clicksign',
      });
    });

    it('should have correct inputs and outputs', () => {
      const description = clicksignNode.description;

      expect(description.inputs).toEqual(['main']);
      expect(description.outputs).toEqual(['main']);
    });

    it('should have correct credentials configuration', () => {
      const description = clicksignNode.description;

      expect(description.credentials).toEqual([
        {
          name: 'clicksignApi',
          required: true,
        },
      ]);
    });

    it('should have correct request defaults', () => {
      const description = clicksignNode.description;

      expect(description.requestDefaults).toEqual({
        baseURL:
          '=https://{{$credentials.clicksignEnvironment}}.clicksign.com/api/v3',
        url: '',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          Authorization: '={{$credentials.clicksignAccessToken}}',
        },
      });
    });

    it('should include all operations and fields', () => {
      const description = clicksignNode.description;
      const properties = description.properties;

      const resourceProperty = properties.find(
        (prop) => prop.name === 'resource',
      );
      expect(resourceProperty).toBeDefined();
      expect(resourceProperty?.type).toBe('options');
      expect(resourceProperty?.options).toEqual([
        {
          name: 'Envelope',
          value: 'envelope',
        },
        {
          name: 'Signatário',
          value: 'signer',
        },
        {
          name: 'Documento',
          value: 'document',
        },
        {
          name: 'Requisito',
          value: 'requirement',
        },
      ]);
      expect(resourceProperty?.default).toBe('envelope');

      expect(properties).toEqual(expect.arrayContaining(envelopeOperations));
      expect(properties).toEqual(expect.arrayContaining(envelopeFields));
    });
  });

  describe('Operations Configuration', () => {
    describe('List All Envelopes', () => {
      it('should have listAll operation', () => {
        const operationProperty = envelopeOperations.find(
          (op) => op.name === 'operation',
        );
        const listAllOption = operationProperty?.options?.find(
          (opt) => (opt as any).value === 'getAll',
        ) as any;

        expect(listAllOption).toBeDefined();
      });
    });

    describe('List Documents in an Envelope', () => {
      it('should have envelopeDocuments operation', () => {
        const operationProperty = envelopeOperations.find(
          (op) => op.name === 'operation',
        );
        const envelopeDocumentsOption = operationProperty?.options?.find(
          (opt) => (opt as any).value === 'getAll',
        ) as any;

        expect(envelopeDocumentsOption).toBeDefined();
      });
    });

    describe('Create Envelope', () => {
      it('should have createEnvelope operation with correct display options', () => {
        const operationProperty = envelopeOperations.find(
          (op) => op.name === 'operation',
        );
        const createEnvelopeOption = operationProperty?.options?.find(
          (opt) => (opt as any).value === 'create',
        ) as any;

        expect(createEnvelopeOption).toBeDefined();
      });
    });
  });

  describe('Fields Configuration', () => {
    describe('List Documents in an Envelope', () => {
      it('should have envelopeId field for envelopeDocuments operation', () => {
        const envelopeIdField = envelopeFields.find(
          (field) => field.name === 'envelopeId',
        );

        expect(envelopeIdField).toBeDefined();
        expect(envelopeIdField?.displayName).toBe('Envelope ID');
        expect(envelopeIdField?.type).toBe('string');
        expect(envelopeIdField?.required).toBe(true);
        expect(envelopeIdField?.default).toBe('');

        expect(envelopeIdField?.displayOptions).toBeDefined();
        expect(envelopeIdField?.displayOptions?.show?.resource).toEqual([
          'document',
        ]);
        expect(envelopeIdField?.displayOptions?.show?.operation).toEqual([
          'getAll',
        ]);
      });
    });

    describe('Create Envelope', () => {
      it('should have envelopeName field for createEnvelope operation', () => {
        const envelopeNameField = envelopeFields.find(
          (field) => field.name === 'envelopeName',
        );

        expect(envelopeNameField).toBeDefined();
        expect(envelopeNameField?.type).toBe('string');
        expect(envelopeNameField?.required).toBe(true);

        expect(envelopeNameField?.displayOptions).toBeDefined();
        expect(envelopeNameField?.displayOptions?.show?.resource).toEqual([
          'envelope',
        ]);
        expect(envelopeNameField?.displayOptions?.show?.operation).toEqual([
          'create',
        ]);
      });

      it('should have locale field with correct options', () => {
        const localeField = envelopeFields.find(
          (field) => field.name === 'locale',
        );

        expect(localeField).toBeDefined();
        expect(localeField?.type).toBe('options');
        expect(localeField?.default).toBe('pt-BR');

        expect(localeField?.options).toBeDefined();
        expect(localeField?.options).toEqual([
          { name: 'Pt-BR', value: 'pt-BR' },
          { name: 'En-US', value: 'en-US' },
        ]);
      });

      it('should have autoClose field with correct configuration', () => {
        const autoCloseField = envelopeFields.find(
          (field) => field.name === 'autoClose',
        );

        expect(autoCloseField).toBeDefined();
        expect(autoCloseField?.type).toBe('boolean');
        expect(autoCloseField?.default).toBe(true);
      });

      it('should have remindInterval field with correct configuration', () => {
        const remindIntervalField = envelopeFields.find(
          (field) => field.name === 'remindInterval',
        );

        expect(remindIntervalField).toBeDefined();
        expect(remindIntervalField?.type).toBe('number');
        expect(remindIntervalField?.default).toBe(3);

        expect(remindIntervalField?.typeOptions).toBeDefined();
        expect(remindIntervalField?.typeOptions?.integerOnly).toBe(true);
      });

      it('should have blockAfterRefusal field with correct configuration', () => {
        const blockAfterRefusalField = envelopeFields.find(
          (field) => field.name === 'blockAfterRefusal',
        );

        expect(blockAfterRefusalField).toBeDefined();
        expect(blockAfterRefusalField?.type).toBe('boolean');
        expect(blockAfterRefusalField?.default).toBe(false);
      });

      it('should have deadlineAt field with correct configuration', () => {
        const deadlineAtField = envelopeFields.find(
          (field) => field.name === 'deadlineAt',
        );

        expect(deadlineAtField).toBeDefined();
        expect(deadlineAtField?.type).toBe('dateTime');
        expect(deadlineAtField?.default).toBe(null);
      });

      it('should have defaultSubject field with correct configuration', () => {
        const defaultSubjectField = envelopeFields.find(
          (field) => field.name === 'defaultSubject',
        );

        expect(defaultSubjectField).toBeDefined();
        expect(defaultSubjectField?.type).toBe('string');
        expect(defaultSubjectField?.default).toBe('');
      });

      it('should have defaultMessage field with correct configuration', () => {
        const defaultMessageField = envelopeFields.find(
          (field) => field.name === 'defaultMessage',
        );

        expect(defaultMessageField).toBeDefined();
        expect(defaultMessageField?.type).toBe('string');
        expect(defaultMessageField?.default).toBe('');
      });
    });
  });

  describe('Node Structure', () => {
    it('should implement INodeType interface', () => {
      expect(clicksignNode).toHaveProperty('description');
      expect(typeof clicksignNode.description).toBe('object');
    });

    it('should have all required properties in description', () => {
      const description = clicksignNode.description;

      expect(description).toHaveProperty('displayName');
      expect(description).toHaveProperty('name');
      expect(description).toHaveProperty('group');
      expect(description).toHaveProperty('version');
      expect(description).toHaveProperty('subtitle');
      expect(description).toHaveProperty('description');
      expect(description).toHaveProperty('defaults');
      expect(description).toHaveProperty('inputs');
      expect(description).toHaveProperty('outputs');
      expect(description).toHaveProperty('credentials');
      expect(description).toHaveProperty('requestDefaults');
      expect(description).toHaveProperty('properties');
    });
  });
});
