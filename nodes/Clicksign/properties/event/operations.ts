import { INodeProperties } from 'n8n-workflow';

export const eventOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Eventos Do Envelope',
      value: 'fromEnvelope',
      action: 'Eventos do envelope',
      description: 'Listar eventos dos documentos do envelope',
    },
  ],
  default: 'fromEnvelope',
  displayOptions: {
    show: {
      resource: ['event'],
    },
  },
};
