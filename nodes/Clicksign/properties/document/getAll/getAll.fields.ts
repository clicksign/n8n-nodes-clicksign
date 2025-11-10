import { INodeProperties } from 'n8n-workflow';

export const getDocumentsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that contains the documents to list',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['document'],
      },
    },
  },
];
