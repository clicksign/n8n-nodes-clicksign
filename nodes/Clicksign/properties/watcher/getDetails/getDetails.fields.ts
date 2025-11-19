import { INodeProperties } from 'n8n-workflow';

export const getWatcherDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Envelope that has the watcher',
    displayOptions: {
      show: {
        operation: ['getDetails'],
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
    description: 'ID of the Watcher to be viewed',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['watcher'],
      },
    },
  },
];
