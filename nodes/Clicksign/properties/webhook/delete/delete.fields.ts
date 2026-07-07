import { INodeProperties } from 'n8n-workflow';

export const deleteWebhookFields: INodeProperties[] = [
  {
    displayName: 'Webhook ID',
    name: 'webhookId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the webhook to be deleted',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['webhook'],
      },
    },
  },
];
