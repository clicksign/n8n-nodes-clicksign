import { INodeProperties } from 'n8n-workflow';

export const createFolderFields: INodeProperties[] = [
  {
    displayName: 'Nome',
    name: 'name',
    type: 'string',
    required: true,
    default: '',
    description: 'Nome da Pasta a ser criada',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['folder'],
      },
    },
  },
  {
    displayName: 'Pasta ID',
    name: 'folderId',
    type: 'string',
    default: '',
    description: 'ID da pasta de origem',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['folder'],
      },
    },
  },
];
