import {
  INodeProperties,
  INodePropertyCollection,
  INodePropertyOptions,
} from 'n8n-workflow';

export const createSignerOption:
  | INodePropertyCollection
  | INodeProperties
  | INodePropertyOptions = {
  name: 'Create Signer',
  value: 'create-signer',
  action: 'Create a signer',
  description: 'Create a signer',
};
