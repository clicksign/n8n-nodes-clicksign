import { INodeProperties } from 'n8n-workflow';

export const envelopeOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Ativar',
      value: 'activate',
      description: 'Ativar envelope',
      action: 'Ativar envelope',
    },
    {
      name: 'Atualizar',
      value: 'update',
      description: 'Atualizar envelope',
      action: 'Atualizar envelope',
    },
    {
      name: 'Criar',
      value: 'create',
      description: 'Criar envelope',
      action: 'Criar envelope',
    },
    {
      name: 'Excluir',
      value: 'delete',
      description: 'Excluir envelope',
      action: 'Excluir envelope',
    },
    {
      name: 'Listar',
      value: 'getAll',
      description: 'Listar envelopes',
      action: 'Listar envelopes',
    },
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      description: 'Obter detalhes de um envelope',
      action: 'Obter detalhes do envelope',
    },
  ],
  default: 'getAll',
  displayOptions: {
    show: {
      resource: ['envelope'],
    },
  },
};
