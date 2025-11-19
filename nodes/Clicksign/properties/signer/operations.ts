import { INodeProperties } from 'n8n-workflow';

export const signerOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create signer',
      description: 'Create signer',
    },
    {
      name: 'Create Auto Signature',
      value: 'createAutoSignature',
      action: 'Create automatic signature',
      description: 'Create automatic signature',
    },
    {
      name: 'Delete',
      value: 'delete',
      action: 'Delete signer',
      description: 'Delete signer from the envelope',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get signer details',
      description: 'Get details of a signer for an envelope',
    },
    {
      name: 'List',
      value: 'getAll',
      action: 'List Signers',
      description: 'List signers',
    },
  ],
  displayOptions: {
    show: {
      resource: ['signer'],
    },
  },
};
