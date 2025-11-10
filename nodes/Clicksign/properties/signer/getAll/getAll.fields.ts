import { INodeProperties } from 'n8n-workflow';

export const getAllSignersFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope for which you want to list the signers',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['signer'],
      },
    },
  },
];
