import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const createFolderFields: INodeProperties[] = [
  {
    displayName: t('folder.fields.create.name.displayName'),
    name: 'name',
    type: 'string',
    required: true,
    default: '',
    description: t('folder.fields.create.name.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['folder'],
      },
    },
  },
  {
    displayName: t('folder.fields.create.folderId.displayName'),
    name: 'folderId',
    type: 'string',
    default: '',
    description: t('folder.fields.create.folderId.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['folder'],
      },
    },
  },
];
