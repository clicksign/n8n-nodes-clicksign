import { INodeProperties } from 'n8n-workflow';

export const watcherOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Criar',
      value: 'create',
      action: 'Criar observador',
      description: 'Criar observador',
    },
  ],
  displayOptions: {
    show: {
      resource: ['watcher'],
    },
  },
};
