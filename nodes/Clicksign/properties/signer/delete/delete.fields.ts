import { INodeProperties } from 'n8n-workflow';

export const deleteSignerFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Envelope that has the signer',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Signer ID',
    name: 'signerId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the Signer you want to delete',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['signer'],
      },
    },
  },
];
