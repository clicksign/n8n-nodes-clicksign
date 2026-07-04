import { INodeProperties } from 'n8n-workflow';
import { webhookEventOptions } from '../shared/events.options';

export const createWebhookFields: INodeProperties[] = [
  {
    displayName: 'Endpoint',
    name: 'endpoint',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'https://example.com/webhook',
    description: 'Endpoint that will receive the events',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['webhook'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: 'active',
    description: 'Status of the webhook',
    options: [
      { name: 'Active', value: 'active' },
      { name: 'Inactive', value: 'inactive' },
    ],
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['webhook'],
      },
    },
  },
  {
    displayName: 'Events',
    name: 'events',
    type: 'multiOptions',
    default: [],
    description: 'Events that this endpoint should be notified about',
    options: webhookEventOptions,
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['webhook'],
      },
    },
  },
];
