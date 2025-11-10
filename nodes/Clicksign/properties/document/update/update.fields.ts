import { INodeProperties } from 'n8n-workflow';

export const updateDocumentFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that contains the document to update',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Document ID',
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the document to update',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: 'canceled',
    description:
      'Only possible to change status of running documents (in progress/activated)',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
    options: [
      {
        name: 'Canceled',
        value: 'canceled',
      },
      {
        name: 'Completed',
        value: 'closed',
      },
    ],
  },
  {
    displayName: 'Metadata',
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: 'JSON with metadata that is used in document webhooks returns',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
];
