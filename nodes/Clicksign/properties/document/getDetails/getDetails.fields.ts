import { INodeProperties } from 'n8n-workflow';

export const getDocumentDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that contains the document to get details',
    displayOptions: {
      show: {
        operation: ['getDetails'],
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
    description: 'ID of the document to get details',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['document'],
      },
    },
  },
];
