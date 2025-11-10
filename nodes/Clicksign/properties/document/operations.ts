import { INodeProperties } from 'n8n-workflow';

export const documentsOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  default: 'getAll',
  options: [
    {
      name: 'Create By Base64',
      value: 'createByBase64',
      action: 'Create document by base64',
      description: 'Create document by base64',
    },
    {
      name: 'Create By Template',
      value: 'createByTemplate',
      action: 'Create document by template',
      description: 'Create document by template',
    },
    {
      name: 'Delete',
      value: 'delete',
      action: 'Delete document',
      description: 'Delete document',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get details of a document',
      description: 'Get details of a document',
    },
    {
      name: 'List All',
      value: 'getAll',
      action: 'List all documents',
      description: 'List many documents',
    },

    {
      name: 'Update',
      value: 'update',
      action: 'Update document',
      description: 'Update document',
    },
  ],
  displayOptions: {
    show: {
      resource: ['document'],
    },
  },
};
