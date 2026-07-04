import { INodeProperties } from 'n8n-workflow';

export const membershipOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'getAll',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create membership',
      description: 'Create membership',
    },
    {
      name: 'List All',
      value: 'getAll',
      action: 'List all memberships',
      description: 'List many memberships',
    },
    {
      name: 'Update',
      value: 'update',
      action: 'Update membership',
      description: 'Update membership',
    },
    {
      name: 'Delete',
      value: 'delete',
      action: 'Delete membership',
      description: 'Delete membership',
    },
  ],
  displayOptions: {
    show: {
      resource: ['membership'],
    },
  },
};
