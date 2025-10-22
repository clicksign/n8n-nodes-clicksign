import { INodeProperties } from 'n8n-workflow';
import { getOperationName, getActionText, getDescription } from '../shared/translations';

export const documentsOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: getOperationName('update'),
      value: 'update',
      action: getActionText('document', 'update'),
      description: getDescription('document', 'update'),
    },
    {
      name: getOperationName('createByBase64'),
      value: 'createByBase64',
      action: getActionText('document', 'createByBase64'),
      description: getDescription('document', 'createByBase64'),
    },
    {
      name: getOperationName('createByTemplate'),
      value: 'createByTemplate',
      action: getActionText('document', 'createByTemplate'),
      description: getDescription('document', 'createByTemplate'),
    },
    {
      name: getOperationName('delete'),
      value: 'delete',
      action: getActionText('document', 'delete'),
      description: getDescription('document', 'delete'),
    },
    {
      name: getOperationName('getAll'),
      value: 'getAll',
      description: getDescription('document', 'getAll'),
      action: getActionText('document', 'getAll'),
    },
    {
      name: getOperationName('getDetails'),
      value: 'getDetails',
      description: getDescription('document', 'getDetails'),
      action: getActionText('document', 'getDetails'),
    },
  ],
  default: 'getAll',
  displayOptions: {
    show: {
      resource: ['document'],
    },
  },
};
