import { INodeProperties } from 'n8n-workflow';

export const deleteEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description: 'ID of the envelope to delete',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['envelope'],
      },
    },
  },
];
