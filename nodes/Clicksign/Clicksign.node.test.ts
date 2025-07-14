import { Clicksign } from './Clicksign.node';
import { clicksignOperations, clicksignFields } from './ClicksignDescription';

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
          '=https://{{$credentials.clicksign_environment}}.clicksign.com/api/v3',
        url: '',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          Authorization: '={{$credentials.clicksign_access_token}}',
        },
      });
    });

    it('should include all operations and fields', () => {
      const description = clicksignNode.description;
      const properties = description.properties;

      // Check that resource property exists
      const resourceProperty = properties.find(
        (prop) => prop.name === 'resource',
      );
      expect(resourceProperty).toBeDefined();
      expect(resourceProperty?.type).toBe('options');
      expect(resourceProperty?.options).toEqual([
        {
          name: 'Envelope',
          value: 'envelopes',
        },
      ]);
      expect(resourceProperty?.default).toBe('envelopes');

      // Check that all operations are included
      expect(properties).toEqual(expect.arrayContaining(clicksignOperations));
      expect(properties).toEqual(expect.arrayContaining(clicksignFields));
    });
  });

  describe('Operations Configuration', () => {
    describe('List All Envelopes', () => {
      it('should have listAll operation with correct routing', () => {
        const operationProperty = clicksignOperations.find(
          (op) => op.name === 'operation',
        );
        const listAllOption = operationProperty?.options?.find(
          (opt) => (opt as any).value === 'listAll',
        ) as any;

        expect(listAllOption).toBeDefined();
        expect(listAllOption?.name).toBe('List Envelopes');
        expect(listAllOption?.description).toBe('List all envelopes');
        expect(listAllOption?.action).toBe('List all envelopes');

        // Check routing configuration
        expect(listAllOption?.routing).toBeDefined();
        expect(listAllOption?.routing?.request).toBeDefined();
        expect(listAllOption?.routing?.request?.method).toBe('GET');
        expect(listAllOption?.routing?.request?.url).toBe('/envelopes');
      });
    });

    describe('List Documents in an Envelope', () => {
      it('should have envelopeDocuments operation with correct display options', () => {
        const operationProperty = clicksignOperations.find(
          (op) => op.name === 'operation',
        );
        const envelopeDocumentsOption = operationProperty?.options?.find(
          (opt) => (opt as any).value === 'envelopeDocuments',
        ) as any;

        expect(envelopeDocumentsOption).toBeDefined();
        expect(envelopeDocumentsOption?.name).toBe(
          'List Documents in an Envelope',
        );
        expect(envelopeDocumentsOption?.description).toBe('List documents');
        expect(envelopeDocumentsOption?.action).toBe('List documents');

        // Check display options
        expect(envelopeDocumentsOption?.displayOptions).toBeDefined();
        expect(envelopeDocumentsOption?.displayOptions?.show).toBeDefined();
        expect(envelopeDocumentsOption?.displayOptions?.show?.resource).toEqual(
          ['envelopes'],
        );
        expect(
          envelopeDocumentsOption?.displayOptions?.show?.operation,
        ).toEqual(['envelopeDocuments']);
      });
    });

    describe('Create Envelope', () => {
      it('should have createEnvelope operation with correct routing and display options', () => {
        const operationProperty = clicksignOperations.find(
          (op) => op.name === 'operation',
        );
        const createEnvelopeOption = operationProperty?.options?.find(
          (opt) => (opt as any).value === 'createEnvelope',
        ) as any;

        expect(createEnvelopeOption).toBeDefined();
        expect(createEnvelopeOption?.name).toBe('Create Envelope');
        expect(createEnvelopeOption?.description).toBe('Create a new envelope');
        expect(createEnvelopeOption?.action).toBe('Create envelope');

        // Check display options
        expect(createEnvelopeOption?.displayOptions).toBeDefined();
        expect(createEnvelopeOption?.displayOptions?.show).toBeDefined();
        expect(createEnvelopeOption?.displayOptions?.show?.resource).toEqual([
          'envelopes',
        ]);
        expect(createEnvelopeOption?.displayOptions?.show?.operation).toEqual([
          'createEnvelope',
        ]);

        // Check routing configuration
        expect(createEnvelopeOption?.routing).toBeDefined();
        expect(createEnvelopeOption?.routing?.request).toBeDefined();
        expect(createEnvelopeOption?.routing?.request?.method).toBe('POST');
        expect(createEnvelopeOption?.routing?.request?.url).toBe('/envelopes');
        expect(createEnvelopeOption?.routing?.request?.body).toBeDefined();
      });
    });
  });

  describe('Fields Configuration', () => {
    describe('List Documents in an Envelope', () => {
      it('should have envelopeId field for envelopeDocuments operation', () => {
        const envelopeIdField = clicksignFields.find(
          (field) => field.name === 'envelopeId',
        );

        expect(envelopeIdField).toBeDefined();
        expect(envelopeIdField?.displayName).toBe('Envelope ID');
        expect(envelopeIdField?.type).toBe('string');
        expect(envelopeIdField?.required).toBe(true);
        expect(envelopeIdField?.default).toBe('');

        // Check display options
        expect(envelopeIdField?.displayOptions).toBeDefined();
        expect(envelopeIdField?.displayOptions?.show?.resource).toEqual([
          'envelopes',
        ]);
        expect(envelopeIdField?.displayOptions?.show?.operation).toEqual([
          'envelopeDocuments',
        ]);

        // Check routing
        expect(envelopeIdField?.routing).toBeDefined();
        expect(envelopeIdField?.routing?.request?.url).toBe(
          '=/envelopes/{{$parameter.envelopeId}}/documents',
        );
      });
    });

    describe('Create Envelope', () => {
      it('should have envelopeName field for createEnvelope operation', () => {
        const envelopeNameField = clicksignFields.find(
          (field) => field.name === 'envelopeName',
        );

        expect(envelopeNameField).toBeDefined();
        expect(envelopeNameField?.displayName).toBe('Envelope Name');
        expect(envelopeNameField?.description).toBe('The name of the envelope');
        expect(envelopeNameField?.type).toBe('string');
        expect(envelopeNameField?.required).toBe(true);

        // Check display options
        expect(envelopeNameField?.displayOptions).toBeDefined();
        expect(envelopeNameField?.displayOptions?.show?.resource).toEqual([
          'envelopes',
        ]);
        expect(envelopeNameField?.displayOptions?.show?.operation).toEqual([
          'createEnvelope',
        ]);
      });

      it('should have locale field with correct options', () => {
        const localeField = clicksignFields.find(
          (field) => field.name === 'locale',
        );

        expect(localeField).toBeDefined();
        expect(localeField?.displayName).toBe('Locale');
        expect(localeField?.description).toBe('The locale of the envelope');
        expect(localeField?.type).toBe('options');
        expect(localeField?.default).toBe('pt-BR');

        // Check options
        expect(localeField?.options).toBeDefined();
        expect(localeField?.options).toEqual([
          { name: 'Pt-BR', value: 'pt-BR' },
          { name: 'En-US', value: 'en-US' },
        ]);
      });

      it('should have autoClose field with correct configuration', () => {
        const autoCloseField = clicksignFields.find(
          (field) => field.name === 'autoClose',
        );

        expect(autoCloseField).toBeDefined();
        expect(autoCloseField?.displayName).toBe('Auto Close');
        expect(autoCloseField?.description).toBe(
          'Whether the envelope should be closed automatically when all signers have signed',
        );
        expect(autoCloseField?.type).toBe('boolean');
        expect(autoCloseField?.default).toBe(true);
      });

      it('should have remindInterval field with correct configuration', () => {
        const remindIntervalField = clicksignFields.find(
          (field) => field.name === 'remindInterval',
        );

        expect(remindIntervalField).toBeDefined();
        expect(remindIntervalField?.displayName).toBe('Remind Interval');
        expect(remindIntervalField?.description).toBe(
          'The interval in days to remind the signer to sign the envelope',
        );
        expect(remindIntervalField?.type).toBe('number');
        expect(remindIntervalField?.default).toBe(3);

        // Check type options
        expect(remindIntervalField?.typeOptions).toBeDefined();
        expect(remindIntervalField?.typeOptions?.integerOnly).toBe(true);
      });

      it('should have blockAfterRefusal field with correct configuration', () => {
        const blockAfterRefusalField = clicksignFields.find(
          (field) => field.name === 'blockAfterRefusal',
        );

        expect(blockAfterRefusalField).toBeDefined();
        expect(blockAfterRefusalField?.displayName).toBe('Block After Refusal');
        expect(blockAfterRefusalField?.description).toBe(
          'Whether the envelope should be blocked after the signer refuses to sign',
        );
        expect(blockAfterRefusalField?.type).toBe('boolean');
        expect(blockAfterRefusalField?.default).toBe(false);
      });

      it('should have deadlineAt field with correct configuration', () => {
        const deadlineAtField = clicksignFields.find(
          (field) => field.name === 'deadlineAt',
        );

        expect(deadlineAtField).toBeDefined();
        expect(deadlineAtField?.displayName).toBe('Deadline At');
        expect(deadlineAtField?.description).toBe(
          'The deadline for the envelope',
        );
        expect(deadlineAtField?.type).toBe('dateTime');
        expect(deadlineAtField?.default).toBe(undefined);
      });

      it('should have defaultSubject field with correct configuration', () => {
        const defaultSubjectField = clicksignFields.find(
          (field) => field.name === 'defaultSubject',
        );

        expect(defaultSubjectField).toBeDefined();
        expect(defaultSubjectField?.displayName).toBe('Default Subject');
        expect(defaultSubjectField?.description).toBe(
          'The default subject of notification to be sent',
        );
        expect(defaultSubjectField?.type).toBe('string');
        expect(defaultSubjectField?.default).toBe(undefined);
      });

      it('should have defaultMessage field with correct configuration', () => {
        const defaultMessageField = clicksignFields.find(
          (field) => field.name === 'defaultMessage',
        );

        expect(defaultMessageField).toBeDefined();
        expect(defaultMessageField?.displayName).toBe('Default Message');
        expect(defaultMessageField?.description).toBe(
          'The default message of notification to be sent',
        );
        expect(defaultMessageField?.type).toBe('string');
        expect(defaultMessageField?.default).toBe(undefined);
      });
    });
  });

  describe('Routing Configuration', () => {
    it('should have correct body structure for createEnvelope operation', () => {
      const operationProperty = clicksignOperations.find(
        (op) => op.name === 'operation',
      );
      const createEnvelopeOption = operationProperty?.options?.find(
        (opt) => (opt as any).value === 'createEnvelope',
      ) as any;
      const body = createEnvelopeOption?.routing?.request?.body as any;

      expect(body).toBeDefined();
      expect(body?.data).toBeDefined();
      expect(body?.data?.type).toBe('envelopes');
      expect(body?.data?.attributes).toBeDefined();

      // Check attribute mappings
      const attributes = body?.data?.attributes;
      expect(attributes?.name).toBe('={{$parameter.envelopeName}}');
      expect(attributes?.locale).toBe('={{$parameter.locale}}');
      expect(attributes?.auto_close).toBe('={{$parameter.autoClose}}');
      expect(attributes?.remind_interval).toBe(
        '={{$parameter.remindInterval}}',
      );
      expect(attributes?.block_after_refusal).toBe(
        '={{$parameter.blockAfterRefusal}}',
      );
      expect(attributes?.deadline_at).toBe(
        '={{$parameter.deadlineAt ? DateTime.fromISO($parameter.deadlineAt).setZone($now.zoneName).toISO() : undefined}}',
      );
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
