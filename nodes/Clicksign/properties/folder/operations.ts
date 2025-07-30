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
  ],
  displayOptions: {
    show: {
      resource: ['folder'],
    },
  },
};
