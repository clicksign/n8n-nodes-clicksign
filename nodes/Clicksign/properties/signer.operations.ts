import { INodeProperties } from 'n8n-workflow';

import { createSignerOption } from './signer.option.createSigner';

export const signerOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: '',
  noDataExpression: true,
  options: [createSignerOption],
  displayOptions: {
    show: {
      resource: ['signer-api'],
    },
  },
};
