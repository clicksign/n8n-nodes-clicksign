import { INodeProperties } from 'n8n-workflow';

export const watcherOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  default: 'getAll',
  noDataExpression: true,
  options: [
    {
      name: 'Criar',
      value: 'create',
      action: 'Criar observador',
      description: 'Criar observador',
    },
    {
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      action: 'Listar observador',
      description: 'Listar observador',
    },
  ],
  displayOptions: {
    show: {
      resource: ['watcher'],
    },
  },
};
