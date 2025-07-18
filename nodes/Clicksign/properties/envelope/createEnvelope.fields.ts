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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
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
        resource: ['api-envelope'],
        operation: ['create-envelope'],
      },
    },
  },
];
