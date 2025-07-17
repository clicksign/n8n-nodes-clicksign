import { INodeProperties } from 'n8n-workflow';

export const resourceOptions: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Envelope',
      value: 'envelopes',
    },
    {
      name: 'Signer',
      value: 'signer-api',
    },
  ],
  default: 'envelopes',
};
