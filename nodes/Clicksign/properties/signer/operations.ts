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
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Criar signatário',
      description: 'Criar signatário',
    },
    {
      name: 'Criar Assinatura Automática',
      value: 'createAutoSignature',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Criar assinatura automática',
    },
    {
      name: 'Excluir',
      value: 'delete',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Excluir signatário',
      description: 'Excluir signatário do envelope',
    },
    {
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Listar Signatários',
      description: 'Listar signatários',
    },
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
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
