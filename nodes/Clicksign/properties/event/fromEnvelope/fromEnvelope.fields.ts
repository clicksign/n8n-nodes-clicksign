import { INodeProperties } from 'n8n-workflow';

export const fromEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that you want to list the document events',
    displayOptions: {
      show: {
        operation: ['fromEnvelope'],
        resource: ['event'],
      },
    },
  },
];
