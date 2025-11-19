import { INodeProperties } from 'n8n-workflow';

export const envelopeOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  default: 'getAll',
  options: [
    {
      name: 'Activate',
      value: 'activate',
      description: 'Activate envelope',
      action: 'Activate envelope',
    },

    {
      name: 'Create',
      value: 'create',
      description: 'Create envelope',
      action: 'Create envelope',
    },
    {
      name: 'Delete',
      value: 'delete',
      description: 'Delete envelope',
      action: 'Delete envelope',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      description: 'Get details of a envelope',
      action: 'Get details of a envelope',
    },
    {
      name: 'List All',
      value: 'getAll',
      description: 'List many envelopes',
      action: 'List all envelopes',
    },
    {
      name: 'Update',
      value: 'update',
      description: 'Update envelope',
      action: 'Update envelope',
    },
  ],
  displayOptions: {
    show: {
      resource: ['envelope'],
    },
  },
};
