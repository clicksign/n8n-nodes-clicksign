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
    {
      name: 'Ativar',
      value: 'activate',
      description: 'Ativar envelope',
      action: 'Ativar envelope',
    },
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      description: 'Obter detalhes de um envelope',
      action: 'Obter detalhes',
    },
  ],
  default: 'getAll',
  displayOptions: {
    show: {
      resource: ['envelope'],
    },
  },
};
