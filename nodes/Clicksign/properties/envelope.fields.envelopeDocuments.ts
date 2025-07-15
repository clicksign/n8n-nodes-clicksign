import { INodeProperties } from 'n8n-workflow';

export const envelopeDocumentsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['envelopeDocuments'],
      },
    },
    routing: {
      request: {
        method: 'GET',
        url: '=/envelopes/{{$parameter.envelopeId}}/documents',
      },
    },
  },
];
