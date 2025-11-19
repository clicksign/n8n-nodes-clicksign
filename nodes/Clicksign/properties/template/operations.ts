import { INodeProperties } from 'n8n-workflow';

export const templateOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create template',
      description: 'Create template',
    },
    {
      name: 'Delete',
      value: 'delete',
      action: 'Delete template',
      description: 'Delete template',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get template details',
      description: 'Get details of a template',
    },
    {
      name: 'List',
      value: 'getAll',
      action: 'List templates',
      description: 'List templates',
    },
    {
      name: 'Update',
      value: 'update',
      action: 'Update template',
      description: 'Update template',
    },
  ],
  displayOptions: {
    show: {
      resource: ['template'],
    },
  },
};
