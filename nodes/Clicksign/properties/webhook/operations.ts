import { INodeProperties } from 'n8n-workflow';

export const webhookOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'getAll',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create webhook',
      description: 'Create webhook',
    },
    {
      name: 'Delete',
      value: 'delete',
      action: 'Delete webhook',
      description: 'Delete webhook',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get details of a webhook',
      description: 'Get details of a webhook',
    },
    {
      name: 'List All',
      value: 'getAll',
      action: 'List all webhooks',
      description: 'List many webhooks',
    },
    {
      name: 'Update',
      value: 'update',
      action: 'Update webhook',
      description: 'Update webhook',
    },
  ],
  displayOptions: {
    show: {
      resource: ['webhook'],
    },
  },
};
