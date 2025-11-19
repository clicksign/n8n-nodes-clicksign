import { INodeProperties } from 'n8n-workflow';

export const createDocumentByBase64: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that contains the document to create',
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Filename (With Extension)',
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'arquivo.pdf',
    description: 'Name of the file to create with extension',
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'File Base64',
    name: 'fileBase64',
    type: 'string',
    required: true,
    default: '',
    description: 'Base64 of the file to create',
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Metadata',
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: 'JSON with metadata that is used in document webhooks returns',
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
];
