import { INodeProperties } from 'n8n-workflow';

export const getDetailsWhatsappAcceptanceFields: INodeProperties[] = [
  {
    displayName: 'Acceptance Term ID',
    name: 'acceptanceTermId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the WhatsApp acceptance term to get details of',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
  {
    displayName: 'Include Messages',
    name: 'includeMessages',
    type: 'boolean',
    default: false,
    description: 'Whether to include the related messages in the response',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
];
