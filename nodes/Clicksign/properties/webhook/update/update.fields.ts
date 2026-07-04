import { INodeProperties } from 'n8n-workflow';
import { webhookEventOptions } from '../shared/events.options';

export const updateWebhookFields: INodeProperties[] = [
  {
    displayName: 'Webhook ID',
    name: 'webhookId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the webhook to update',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['webhook'],
      },
    },
  },
  {
    displayName: 'Endpoint',
    name: 'endpoint',
    type: 'string',
    default: '',
    placeholder: 'https://example.com/webhook',
    description: 'Endpoint that will receive the events',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['webhook'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: '',
    description: 'Status of the webhook',
    options: [
      { name: 'Do Not Change', value: '' },
      { name: 'Active', value: 'active' },
      { name: 'Inactive', value: 'inactive' },
    ],
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['webhook'],
      },
    },
  },
  {
    displayName: 'Events',
    name: 'events',
    type: 'multiOptions',
    default: [],
    description:
      'Events that this endpoint should be notified about. Leave empty to not change.',
    options: webhookEventOptions,
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['webhook'],
      },
    },
  },
];
