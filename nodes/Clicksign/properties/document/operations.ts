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
      name: 'Criar Por Arquivo Base 64',
      value: 'createByBase64',
      action: 'Criar documento por arquivo base 64',
      description: 'Criar documento por arquivo base 64',
    },
    {
      name: 'Atualizar',
      value: 'update',
      action: 'Atualizar documento',
      description: 'Atualizar documento',
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
