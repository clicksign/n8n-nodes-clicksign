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
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Listar Signatários',
      description: 'Listar signatários',
    },
  ],
  displayOptions: {
    show: {
      resource: ['signer'],
    },
  },
};
