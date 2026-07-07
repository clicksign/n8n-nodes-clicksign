import { INodeProperties } from 'n8n-workflow';

export const userOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'getAll',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create user',
      description: 'Create user',
    },
    {
      name: 'List All',
      value: 'getAll',
      action: 'List all users',
      description: 'List many users',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get details of a user',
      description: 'Get details of a user',
    },
  ],
  displayOptions: {
    show: {
      resource: ['user'],
    },
  },
};
