import { INodeProperties } from 'n8n-workflow';

export const getDetailsFolderFields: INodeProperties[] = [
  {
    displayName: 'Folder ID',
    name: 'folderId',
    type: 'string',
    default: '',
    required: true,
    description: 'ID of the folder to get details of its subfolders',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['folder'],
      },
    },
  },
];
