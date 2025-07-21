import { INodeProperties } from 'n8n-workflow';

export const activateEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que deseja ativar',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['activate'],
      },
    },
  },
];
