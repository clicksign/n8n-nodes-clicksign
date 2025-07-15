import { INodeProperties } from 'n8n-workflow';

export const createEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope Name',
    name: 'envelopeName',
    description: 'The name of the envelope',
    type: 'string',
    required: true,
    default: 'My First Envelope',
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    description: 'The locale of the envelope',
    required: true,
    default: 'pt-BR',
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
    type: 'options',
    options: [
      {
        name: 'Pt-BR',
        value: 'pt-BR',
      },
      {
        name: 'En-US',
        value: 'en-US',
      },
    ],
  },
  {
    displayName: 'Auto Close',
    name: 'autoClose',
    description:
      'Whether the envelope should be closed automatically when all signers have signed',
    type: 'boolean',
    default: true,
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
  },
  {
    displayName: 'Remind Interval',
    name: 'remindInterval',
    description:
      'The interval in days to remind the signer to sign the envelope',
    type: 'number',
    required: true,
    default: 3,
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
    typeOptions: {
      integerOnly: true,
    },
  },
  {
    displayName: 'Block After Refusal',
    name: 'blockAfterRefusal',
    description:
      'Whether the envelope should be blocked after the signer refuses to sign',
    type: 'boolean',
    default: false,
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
  },
  {
    displayName: 'Deadline At',
    name: 'deadlineAt',
    description: 'The deadline for the envelope',
    type: 'dateTime',
    default: undefined,
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
  },
  {
    displayName: 'Default Subject',
    name: 'defaultSubject',
    description: 'The default subject of notification to be sent',
    type: 'string',
    default: undefined,
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
  },
  {
    displayName: 'Default Message',
    name: 'defaultMessage',
    description: 'The default message of notification to be sent',
    type: 'string',
    default: undefined,
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createEnvelope'],
      },
    },
  },
];
