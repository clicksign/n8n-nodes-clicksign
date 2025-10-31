import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getDetailsFolderFields: INodeProperties[] = [
  {
    displayName: t('folder.fields.getDetails.folderId.displayName'),
    name: 'folderId',
    type: 'string',
    default: '',
    required: true,
    description: t('folder.fields.getDetails.folderId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['folder'],
      },
    },
  },
];
