import { INodeProperties } from 'n8n-workflow';

export const notificationOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Notificar Envelope',
      value: 'notifyEnvelope',
      action: 'Notificar envelope',
      description: 'Notifica os signatários do envelope',
    },
    {
      name: 'Notificar Signatário',
      value: 'notifySigner',
      action: 'Notificar signatário',
      description: 'Notifica um signatário do envelope',
    },
  ],
  default: 'notifyEnvelope',
  displayOptions: {
    show: {
      resource: ['notification'],
    },
  },
};
