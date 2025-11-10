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
  ],
  displayOptions: {
    show: {
      resource: ['event'],
    },
  },
};
