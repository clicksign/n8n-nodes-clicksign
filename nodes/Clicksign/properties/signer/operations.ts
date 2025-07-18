import { INodeProperties } from 'n8n-workflow';

export const signerOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'create-signer',
  noDataExpression: true,
  options: [
    {
      name: 'Create Signer',
      value: 'create-signer',
      action: 'Create a signer',
      description: 'Create a signer',
    },
  ],
  displayOptions: {
    show: {
      resource: ['api-signatarios'],
    },
  },
};
