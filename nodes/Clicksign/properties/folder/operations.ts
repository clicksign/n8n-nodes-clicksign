import { INodeProperties } from 'n8n-workflow';

export const folderOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Criar',
      value: 'create',
      action: 'Criar pasta',
      description: 'Criar pasta',
    },
    {
      name: 'Listar',
      value: 'getAll',
      action: 'Listar pastas',
      description: 'Listar pastas',
    },
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      action: 'Obter detalhes da pasta',
      description: 'Obter detalhes da pasta',
    },
  ],
  displayOptions: {
    show: {
      resource: ['folder'],
    },
  },
};
