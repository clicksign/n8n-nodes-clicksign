import { INodeProperties } from 'n8n-workflow';

export const deleteEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description: 'ID do Envelope que deseja excluir',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['envelope'],
      },
    },
  },
];
