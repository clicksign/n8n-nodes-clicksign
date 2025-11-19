import { INodeProperties } from 'n8n-workflow';

export const createEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope Name',
    name: 'envelopeName',
    type: 'string',
    required: true,
    default: 'Meu envelope',
    description: 'Name of the envelope',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'options',
    required: true,
    default: 'pt-BR',
    description: 'Locale used in emails, signature page and document log',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
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
    displayName: 'Automatically Close After All Signers Sign',
    name: 'autoClose',
    type: 'boolean',
    default: true,
    description:
      'If true, the envelope will be closed automatically after all signers have signed',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Remind Interval',
    name: 'remindInterval',
    type: 'number',
    required: true,
    default: 3,
    description:
      'Determines if the document will have automatic reminders enabled (1,2,3,7,14)',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
    typeOptions: {
      integerOnly: true,
    },
  },
  {
    displayName: 'Block After Refusal By Signer',
    name: 'blockAfterRefusal',
    type: 'boolean',
    default: false,
    description:
      'Determines if the signature process will be paused or not after a signer has refused',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Deadline At',
    name: 'deadlineAt',
    type: 'dateTime',
    default: null,
    description:
      'Deadline for the envelope and its documents (RFC 3339 format)',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Default Subject',
    name: 'defaultSubject',
    type: 'string',
    default: '',
    description:
      'Define the subject of the email that will be sent to signers in the signature request',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Default Message',
    name: 'defaultMessage',
    type: 'string',
    default: '',
    description: 'Define the default message that will be sent to signers',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Folder ID',
    name: 'folderId',
    type: 'string',
    default: '',
    description: 'ID of the source folder',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
];
