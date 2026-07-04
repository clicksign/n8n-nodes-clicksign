import { INodeProperties } from 'n8n-workflow';

export const eventOperations: INodeProperties = {
  displayName: 'Operations',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  default: 'fromEnvelope',
  options: [
    {
      name: 'From Envelope',
      value: 'fromEnvelope',
      action: 'Get events from a envelope',
      description: 'Get events from a envelope',
    },
    {
      name: 'From Document',
      value: 'fromDocument',
      action: 'Events from document',
      description: 'Get events from a document',
    },
    {
      name: 'Create Custom Event',
      value: 'createCustom',
      action: 'Create a custom or image event',
      description: 'Create a custom token event or an image event for a document',
    },
  ],
  displayOptions: {
    show: {
      resource: ['event'],
    },
  },
};
