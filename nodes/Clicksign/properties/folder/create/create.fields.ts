import { INodeProperties } from 'n8n-workflow';

export const createFolderFields: INodeProperties[] = [
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    required: true,
    default: '',
    description: 'Name of the folder to create',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['folder'],
      },
    },
  },
  {
    displayName: 'Folder ID',
    name: 'folderId',
    type: 'string',
    default: '',
    description: 'ID of the source folder',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['folder'],
      },
    },
  },
];
