import { INodeProperties } from 'n8n-workflow';

export const deleteWatcherFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Envelope that has the watcher',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Watcher ID',
    name: 'watcherId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Watcher to be deleted',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['watcher'],
      },
    },
  },
];
