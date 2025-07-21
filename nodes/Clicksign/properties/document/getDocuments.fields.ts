import { INodeProperties } from 'n8n-workflow';

export const getDocumentsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do envelope ao qual será adicionado o signatário',
    displayOptions: {
      show: {
        resource: ['document'],
        operation: ['getAll'],
      },
    },
  },
];
