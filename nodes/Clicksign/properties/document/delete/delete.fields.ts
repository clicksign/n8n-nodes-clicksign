import { INodeProperties } from 'n8n-workflow';

export const deleteDocumentFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that contains the document to delete',
    displayOptions: {
      show: {
        operation: ['delete'],
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
    description: 'ID of the document to delete',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['document'],
      },
    },
  },
];
