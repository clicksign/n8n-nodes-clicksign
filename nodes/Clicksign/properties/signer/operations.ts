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
  ],
  displayOptions: {
    show: {
      resource: ['signer'],
    },
  },
};
