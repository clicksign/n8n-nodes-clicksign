import { INodeProperties } from 'n8n-workflow';

export const fromDocumentFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that contains the document to get events',
    displayOptions: {
      show: {
        operation: ['fromDocument'],
        resource: ['event'],
      },
    },
  },
  {
    displayName: 'Document ID',
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the document to get events',
    displayOptions: {
      show: {
        operation: ['fromDocument'],
        resource: ['event'],
      },
    },
  },
];
