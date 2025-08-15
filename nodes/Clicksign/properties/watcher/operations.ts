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
