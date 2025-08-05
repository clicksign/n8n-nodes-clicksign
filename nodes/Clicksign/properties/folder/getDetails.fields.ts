import { INodeProperties } from 'n8n-workflow';

export const getDetailsFolderFields: INodeProperties[] = [
  {
    displayName: 'Pasta ID',
    name: 'folderId',
    type: 'string',
    default: '',
    required: true,
    description: 'ID da pasta que deseja ver suas subpastas',
    displayOptions: {
      show: {
        resource: ['folder'],
        operation: ['getDetails'],
      },
    },
  },
];
