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
      description:
        'Create user (Available only for accounts with SSO enabled)',
    },
    {
      name: 'List All',
      value: 'getAll',
      action: 'List all users',
      description:
        'List many users (Available only for accounts with SSO enabled)',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get details of a user',
      description:
        'Get details of a user (Available only for accounts with SSO enabled)',
    },
  ],
  displayOptions: {
    show: {
      resource: ['user'],
    },
  },
};
