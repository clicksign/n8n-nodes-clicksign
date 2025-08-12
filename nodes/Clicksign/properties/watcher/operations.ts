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
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      action: 'Obter detalhes do observador',
      description: 'Obter detalhes do observador',
    },
    {
      name: 'Excluir',
      value: 'delete',
      action: 'Excluir observador',
      description: 'Excluir observador',
    },
  ],
  displayOptions: {
    show: {
      resource: ['watcher'],
    },
  },
};
