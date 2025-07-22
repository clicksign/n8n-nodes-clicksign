import { INodeProperties } from 'n8n-workflow';

export const notificationOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Notificar Todos',
      value: 'notifyAll',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Notificar signatários',
      description:
        'Notifica os signatários do envelope com uma mensagem personalizada',
    },
  ],
  default: 'notifyAll',
  displayOptions: {
    show: {
      resource: ['notification'],
    },
  },
};
