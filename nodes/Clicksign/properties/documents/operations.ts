import { INodeProperties } from 'n8n-workflow';

export const documentsOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Create a Document by Template',
      value: 'create-document-by-template',
      action: 'Create a document by template',
    },
    {
      name: 'List Documents in an Envelope',
      value: 'get-documents',
      description: 'List documents',
      action: 'List documents',
    },
  ],
  default: 'get-documents',
  displayOptions: {
    show: {
      resource: ['api-documentos'],
    },
  },
};
