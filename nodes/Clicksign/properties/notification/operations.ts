import { INodeProperties } from 'n8n-workflow';

export const notificationOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  default: 'notifyEnvelope',
  options: [
    {
      name: 'Notify Envelope',
      value: 'notifyEnvelope',
      action: 'Notify envelope',
      description: "Notifies the envelope's signers",
    },
    {
      name: 'Notify Signer',
      value: 'notifySigner',
      action: 'Notify signer',
      description: 'Notifies an envelope signer',
    },
  ],
  displayOptions: {
    show: {
      resource: ['notification'],
    },
  },
};
