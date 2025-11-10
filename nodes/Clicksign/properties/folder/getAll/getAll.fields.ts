import { INodeProperties } from 'n8n-workflow';

export const getAllFoldersFields: INodeProperties[] = [
  {
    displayName: 'Only Root Folders',
    name: 'inRoot',
    type: 'boolean',
    default: true,
    description:
      'Inform if you want to list only folders in the root of your folder structure',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['folder'],
      },
    },
  },
];
