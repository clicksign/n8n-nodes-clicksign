import { INodeProperties } from 'n8n-workflow';

export const updateEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope to update',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'envelopeName',
    type: 'string',
    default: '',
    description: 'Name of the envelope',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'options',
    default: 'pt-BR',
    description: 'Locale used in emails, signature page and document log',
    displayOptions: {
      show: {
        operation: ['update'],
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
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Remind Interval',
    name: 'remindInterval',
    type: 'number',
    default: null,
    description:
      'Determines if the document will have automatic reminders enabled (1,2,3,7,14)',
    displayOptions: {
      show: {
        operation: ['update'],
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
        operation: ['update'],
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
        operation: ['update'],
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
        operation: ['update'],
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
        operation: ['update'],
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
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
];
