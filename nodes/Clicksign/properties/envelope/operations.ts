import { INodeProperties } from 'n8n-workflow';

export const envelopeOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Criar',
      value: 'create',
      description: 'Criar envelope',
      action: 'Criar envelope',
    },
    {
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      description: 'Listar envelopes',
      action: 'Listar envelopes',
    },
  ],
  default: 'getAll',
  displayOptions: {
    show: {
      resource: ['envelope'],
    },
  },
};
