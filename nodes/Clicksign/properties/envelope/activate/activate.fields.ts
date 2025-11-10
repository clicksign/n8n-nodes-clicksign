import { INodeProperties } from 'n8n-workflow';

export const activateEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope to activate',
    displayOptions: {
      show: {
        operation: ['activate'],
        resource: ['envelope'],
      },
    },
  },
];
