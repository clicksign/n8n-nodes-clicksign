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
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      action: 'Listar pastas',
      description: 'Listar pastas',
    },
  ],
  displayOptions: {
    show: {
      resource: ['folder'],
    },
  },
};
