import { INodeProperties } from 'n8n-workflow';

export const createDocumentByTemplateFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    displayOptions: {
      show: {
        resource: ['api-documentos'],
        operation: ['create-document-by-template'],
      },
    },
  },
  {
    displayName: 'File Name (.docx)',
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    description: 'The name of the document to be created',
    displayOptions: {
      show: {
        resource: ['api-documentos'],
        operation: ['create-document-by-template'],
      },
    },
  },
  {
    displayName: 'Template ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'The ID of the template to create the document from',
    displayOptions: {
      show: {
        resource: ['api-documentos'],
        operation: ['create-document-by-template'],
      },
    },
  },
  {
    displayName: 'Template Data',
    name: 'templateData',
    type: 'json',
    default: '{}',
    description: 'JSON object containing additional data for the template',
    displayOptions: {
      show: {
        resource: ['api-documentos'],
        operation: ['create-document-by-template'],
      },
    },
  },
  {
    displayName: 'Metadata',
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: 'JSON object containing metadata for the document',
    displayOptions: {
      show: {
        resource: ['api-documentos'],
        operation: ['create-document-by-template'],
      },
    },
  },
];
