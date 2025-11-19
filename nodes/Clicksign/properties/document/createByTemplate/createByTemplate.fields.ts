import { INodeProperties } from 'n8n-workflow';

export const createDocumentByTemplateFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that contains the document to create',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Filename (.docx)',
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'arquivo',
    description: 'Name of the file to create with extension .docx',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Template ID',
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the template to use for the creation',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Template Data',
    name: 'templateData',
    type: 'json',
    default: '{}',
    description:
      'JSON with key and value of the values that will fill the template',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Metadata',
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: 'JSON with metadata that is used in document webhooks returns',
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
];
