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
  ],
  default: 'notifyEnvelope',
  displayOptions: {
    show: {
      resource: ['notification'],
    },
  },
};
