import { INodeProperties } from 'n8n-workflow';

export const getAllWatchersFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do envelope ao qual deseja listar os observadores',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['watcher'],
      },
    },
  },
];
