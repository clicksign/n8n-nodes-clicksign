import { INodeProperties } from 'n8n-workflow';

export const getSignerDetailsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui o signatário',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Signatário ID',
    name: 'signerId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Signatário que deseja visualizar',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['signer'],
      },
    },
  },
];
