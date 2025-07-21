import { INodeProperties } from 'n8n-workflow';

export const getDocumentsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do envelope ao qual deseja listar os documentos',
    displayOptions: {
      show: {
        resource: ['document'],
        operation: ['getAll'],
      },
    },
  },
];
