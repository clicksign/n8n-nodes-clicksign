import { INodeProperties } from 'n8n-workflow';

export const getWatcherDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui o observador',
    displayOptions: {
      show: {
        operation: ['getDetails'],
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
    description: 'ID do Observador que deseja visualizar',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['watcher'],
      },
    },
  },
];
