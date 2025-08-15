import { INodeProperties } from 'n8n-workflow';

export const fromEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description:
      'ID do envelope ao qual deseja listar os eventos dos documentos',
    displayOptions: {
      show: {
        operation: ['fromEnvelope'],
        resource: ['event'],
      },
    },
  },
];
