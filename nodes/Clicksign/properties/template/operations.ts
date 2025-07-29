import { INodeProperties } from 'n8n-workflow';

export const templateOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Criar',
      value: 'create',
      action: 'Criar modelo',
      description: 'Criar modelo',
    },
  ],
  displayOptions: {
    show: {
      resource: ['template'],
    },
  },
};
