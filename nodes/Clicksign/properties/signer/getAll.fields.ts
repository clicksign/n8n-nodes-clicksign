import { INodeProperties } from 'n8n-workflow';

export const getAllSignersFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do envelope ao qual deseja listar os signatários',
    displayOptions: {
      show: {
        resource: ['signer'],
        operation: ['getAll'],
      },
    },
  },
];
