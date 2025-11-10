import { INodeProperties } from 'n8n-workflow';

export const notifyEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Envelope whose signers you want to notify',
    displayOptions: {
      show: {
        operation: ['notifyEnvelope'],
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
        operation: ['notifyEnvelope'],
        resource: ['notification'],
      },
    },
  },
];
