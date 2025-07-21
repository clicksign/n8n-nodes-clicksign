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
  ],
  displayOptions: {
    show: {
      resource: ['requirement'],
    },
  },
};
