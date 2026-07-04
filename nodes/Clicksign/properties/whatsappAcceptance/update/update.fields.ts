import { INodeProperties } from 'n8n-workflow';

export const updateWhatsappAcceptanceFields: INodeProperties[] = [
  {
    displayName: 'Acceptance Term ID',
    name: 'acceptanceTermId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the WhatsApp acceptance term to update',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    required: true,
    default: 'canceled',
    description: 'Status to set on the acceptance term',
    options: [{ name: 'Canceled', value: 'canceled' }],
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
];
