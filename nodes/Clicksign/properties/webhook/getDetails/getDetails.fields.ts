import { INodeProperties } from 'n8n-workflow';

export const getDetailsWebhookFields: INodeProperties[] = [
  {
    displayName: 'Webhook ID',
    name: 'webhookId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the webhook to get details of',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['webhook'],
      },
    },
  },
];
