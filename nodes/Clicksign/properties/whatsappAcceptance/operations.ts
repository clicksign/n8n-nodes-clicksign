import { INodeProperties } from 'n8n-workflow';

export const whatsappAcceptanceOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'getAll',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create whatsapp acceptance term',
      description: 'Create a WhatsApp acceptance term',
    },
    {
      name: 'List All',
      value: 'getAll',
      action: 'List all whatsapp acceptance terms',
      description: 'List many WhatsApp acceptance terms',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get details of a whatsapp acceptance term',
      description: 'Get details of a WhatsApp acceptance term',
    },
    {
      name: 'Update',
      value: 'update',
      action: 'Update whatsapp acceptance term',
      description: 'Cancel a WhatsApp acceptance term',
    },
  ],
  displayOptions: {
    show: {
      resource: ['whatsappAcceptance'],
    },
  },
};
