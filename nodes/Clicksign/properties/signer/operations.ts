import { INodeProperties } from 'n8n-workflow';

export const signerOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Criar',
      value: 'create',

      action: 'Criar signatário',
      description: 'Criar signatário',
    },
    {
      name: 'Criar Assinatura Automática',
      value: 'createAutoSignature',
      action: 'Criar assinatura automática',
    },
    {
      name: 'Excluir',
      value: 'delete',

      action: 'Excluir signatário',
      description: 'Excluir signatário do envelope',
    },
    {
      name: 'Listar',
      value: 'getAll',

      action: 'Listar Signatários',
      description: 'Listar signatários',
    },
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      action: 'Obter detalhes do signatário',
      description: 'Obter detalhes de um signatário de um envelope',
    },
  ],
  displayOptions: {
    show: {
      resource: ['signer'],
    },
  },
};
