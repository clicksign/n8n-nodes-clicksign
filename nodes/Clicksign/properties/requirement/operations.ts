import { INodeProperties } from 'n8n-workflow';

export const requirementOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  default: 'addAuth',
  noDataExpression: true,
  options: [
    {
      name: 'Adicionar Autenticação',
      value: 'addAuth',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Adicionar requisito de autenticação',
      description: 'Adicionar requisito de autenticação',
    },
    {
      name: 'Adicionar Qualificação',
      value: 'addQualification',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Adicionar requisito de qualificação',
      description: 'Adicionar requisito de qualificação',
    },
    {
      name: 'Adicionar Rubrica',
      value: 'addRubric',
      action: 'Adicionar requisito de rubrica',
      description: 'Adicionar requisito de rubrica',
    },
    {
      name: 'Excluir',
      value: 'delete',
      action: 'Excluir requisito',
      description: 'Excluir requisito',
    },
    {
      // eslint-disable-next-line n8n-nodes-base/node-param-option-name-wrong-for-get-many
      name: 'Listar',
      value: 'getAll',
      action: 'Listar requisitos',
      description: 'Listar requisitos',
    },
    {
      name: 'Obter Detalhes',
      value: 'getDetails',
      action: 'Obter detalhes do requisito',
      description: 'Obter detalhes do requisito',
    },
    {
      name: 'Operações Em Massa',
      value: 'bulk',
      // eslint-disable-next-line n8n-nodes-base/node-param-operation-option-action-miscased
      action: 'Operações em massa',
    },
  ],
  displayOptions: {
    show: {
      resource: ['requirement'],
    },
  },
};
