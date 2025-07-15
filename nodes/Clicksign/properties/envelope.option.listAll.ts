import {
  INodeProperties,
  INodePropertyCollection,
  INodePropertyOptions,
} from 'n8n-workflow';

export const listAllOption:
  | INodePropertyCollection
  | INodeProperties
  | INodePropertyOptions = {
  name: 'List Envelopes',
  value: 'listAll',
  description: 'List all envelopes',
  action: 'List all envelopes',
  routing: {
    request: {
      method: 'GET',
      url: '/envelopes',
    },
  },
};
