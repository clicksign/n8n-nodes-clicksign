import { INodeProperties } from 'n8n-workflow';

export const createDocumentByDuplicateFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the envelope that will contain the duplicated document',
    displayOptions: {
      show: {
        operation: ['createByDuplicate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Filename (With Extension)',
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'arquivo.pdf',
    description: 'Name of the file to create with extension',
    displayOptions: {
      show: {
        operation: ['createByDuplicate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: 'Document ID to Duplicate',
    name: 'duplicateDocumentId',
    type: 'string',
    required: true,
    default: '',
    description: 'UUID key of the document that will be duplicated',
    displayOptions: {
      show: {
        operation: ['createByDuplicate'],
        resource: ['document'],
      },
    },
  },
];
