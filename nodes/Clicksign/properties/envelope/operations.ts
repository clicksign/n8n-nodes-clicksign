import { INodeProperties } from 'n8n-workflow';

export const envelopeOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Create Envelope',
      value: 'create-envelope',
      description: 'Create a new envelope',
      action: 'Create envelope',
    },
    {
      name: 'List Envelopes',
      value: 'get-all-envelopes',
      description: 'List all envelopes',
      action: 'List all envelopes',
    },
  ],
  default: 'get-all-envelopes',
  displayOptions: {
    show: {
      resource: ['api-envelope'],
    },
  },
};
