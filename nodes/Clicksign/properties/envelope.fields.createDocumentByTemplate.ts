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
        resource: ['envelopes'],
        operation: ['createDocumentByTemplate'],
      },
    },
  },
  {
    displayName: 'File Name (.docx)',
    name: 'fileName',
    type: 'string',
    required: true,
    default: '',
    description: 'The name of the document to be created',
    displayOptions: {
      show: {
        resource: ['envelopes'],
        operation: ['createDocumentByTemplate'],
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
        resource: ['envelopes'],
        operation: ['createDocumentByTemplate'],
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
        resource: ['envelopes'],
        operation: ['createDocumentByTemplate'],
      },
    },
  },
];
