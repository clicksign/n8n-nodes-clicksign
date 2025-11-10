import { INodeProperties } from 'n8n-workflow';

export const folderOperations: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: 'Create',
      value: 'create',
      action: 'Create folder',
      description: 'Create folder',
    },
    {
      name: 'List All',
      value: 'getAll',
      action: 'List all folders',
      description: 'List many folders',
    },
    {
      name: 'Get Details',
      value: 'getDetails',
      action: 'Get details of a folder',
      description: 'Get details of a folder',
    },
  ],
  displayOptions: {
    show: {
      resource: ['folder'],
    },
  },
};
