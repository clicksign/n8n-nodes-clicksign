import { INodeProperties } from 'n8n-workflow';

export const getAllWhatsappAcceptanceFields: INodeProperties[] = [
  {
    displayName: 'Filter by Status',
    name: 'filterStatus',
    type: 'options',
    default: '',
    description: 'Filter acceptance terms by status',
    options: [
      { name: 'Canceled', value: 'canceled' },
      { name: 'Completed', value: 'completed' },
      { name: 'Enqueued', value: 'enqueued' },
      { name: 'Error', value: 'error' },
      { name: 'Expired', value: 'expired' },
      { name: 'Not Set', value: '' },
      { name: 'Pending', value: 'pending' },
      { name: 'Refused', value: 'refused' },
      { name: 'Sent', value: 'sent' },
    ],
    displayOptions: {
      show: {
        operation: ['getAll'],
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
        operation: ['getAll'],
        resource: ['whatsappAcceptance'],
      },
    },
  },
];
