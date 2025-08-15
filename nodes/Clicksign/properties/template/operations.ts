import { INodeProperties } from 'n8n-workflow';

export const templateOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Atualizar',
      value: 'update',
      action: 'Atualizar modelo',
      description: 'Atualizar modelo',
    },
    {
      name: 'Criar',
      value: 'create',
      action: 'Criar modelo',
      description: 'Criar modelo',
    },
    {
      name: 'Excluir',
      value: 'delete',
      action: 'Excluir modelo',
      description: 'Excluir modelo',
    },
    {
      name: 'Listar',
      value: 'getAll',
      action: 'Listar modelos',
      description: 'Listar modelos',
    },
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      action: 'Obter detalhes do modelo',
      description: 'Obter detalhes do modelo',
    },
  ],
  displayOptions: {
    show: {
      resource: ['template'],
    },
  },
};
