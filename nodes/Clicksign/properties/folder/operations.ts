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
      value: 'create',
      name: t('folder.operations.create.name'),
      action: t('folder.operations.create.action'),
      description: t('folder.operations.create.description'),
    },
    {
      value: 'getAll',
      name: t('folder.operations.getAll.name'),
      action: t('folder.operations.getAll.action'),
      description: t('folder.operations.getAll.description'),
    },
    {
      value: 'getDetails',
      name: t('folder.operations.getDetails.name'),
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
