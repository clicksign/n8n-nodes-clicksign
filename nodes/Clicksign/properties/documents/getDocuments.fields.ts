import { INodeProperties } from 'n8n-workflow';

export const getDocumentsFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    displayOptions: {
      show: {
        resource: ['api-documentos'],
        operation: ['get-documents'],
      },
    },
  },
];
