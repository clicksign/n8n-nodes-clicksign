import { INodeProperties } from 'n8n-workflow';

export const getDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que deseja visualizar',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['envelope'],
      },
    },
  },
];
