import {
  INodeProperties,
  INodePropertyCollection,
  INodePropertyOptions,
} from 'n8n-workflow';

export const envelopeDocumentsOption:
  | INodePropertyCollection
  | INodeProperties
  | INodePropertyOptions = {
  name: 'List Documents in an Envelope',
  value: 'envelopeDocuments',
  description: 'List documents',
  action: 'List documents',
  displayOptions: {
    show: {
      resource: ['envelopes'],
      operation: ['envelopeDocuments'],
    },
  },
};
