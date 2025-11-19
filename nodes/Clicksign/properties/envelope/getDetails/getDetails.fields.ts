import { INodeProperties } from 'n8n-workflow';

export const getDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope to get details',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['envelope'],
      },
    },
  },
];
