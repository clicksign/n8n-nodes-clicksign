import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getAllFoldersFields: INodeProperties[] = [
  {
    displayName: t('folder.fields.getAll.inRoot.displayName'),
    name: 'inRoot',
    type: 'boolean',
    default: true,
    description: t('folder.fields.getAll.inRoot.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['folder'],
      },
    },
  },
];
