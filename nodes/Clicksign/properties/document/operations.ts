import { INodeProperties } from 'n8n-workflow';

export const documentsOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Criar Por Modelo',
      value: 'createByTemplate',
      action: 'Criar documento por modelo',
      description: 'Criar documento por modelo',
    },
    {
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      description: 'Listar documentos',
      action: 'Listar documentos',
    },
  ],
  default: 'getAll',
  displayOptions: {
    show: {
      resource: ['document'],
    },
  },
};
