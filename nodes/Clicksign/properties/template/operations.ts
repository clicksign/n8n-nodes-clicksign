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
    {
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      action: 'Listar modelos',
      description: 'Listar modelos',
    },
    {
      name: 'Atualizar',
      value: 'update',
      action: 'Atualizar modelo',
      description: 'Atualizar modelo',
    },
  ],
  displayOptions: {
    show: {
      resource: ['template'],
    },
  },
};
