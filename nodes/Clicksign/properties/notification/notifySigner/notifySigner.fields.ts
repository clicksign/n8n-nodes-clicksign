import { INodeProperties } from 'n8n-workflow';

export const notifySignerFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Envelope that has the signer',
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
  {
    displayName: 'Signer ID',
    name: 'signerId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Signer you want to notify',
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
  {
    displayName: 'Message',
    name: 'message',
    type: 'string',
    default: '',
    description: 'Custom message that will be sent in the notification',
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
];
