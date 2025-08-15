import { INodeProperties } from 'n8n-workflow';

export const deleteWatcherFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui o observador',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Observador ID',
    name: 'watcherId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Observador que deseja excluir',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['watcher'],
      },
    },
  },
];
