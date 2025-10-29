import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const folderOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      name: t('folder.operations.create.name'),
      value: t('folder.operations.create.value'),
      action: t('folder.operations.create.action'),
      description: t('folder.operations.create.description'),
    },
    {
      name: t('folder.operations.getAll.name'),
      value: t('folder.operations.getAll.value'),
      action: t('folder.operations.getAll.action'),
      description: t('folder.operations.getAll.description'),
    },
    {
      name: t('folder.operations.getDetails.name'),
      value: t('folder.operations.getDetails.value'),
      action: t('folder.operations.getDetails.action'),
      description: t('folder.operations.getDetails.description'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['folder'],
    },
  },
};
