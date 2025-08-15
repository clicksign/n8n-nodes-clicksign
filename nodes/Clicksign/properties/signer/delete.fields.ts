import { INodeProperties } from 'n8n-workflow';

export const deleteSignerFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que possui o signatário',
    displayOptions: {
      show: {
        operation: ['delete'],
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
    description: 'ID do Signatário que deseja excluir',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['signer'],
      },
    },
  },
];
