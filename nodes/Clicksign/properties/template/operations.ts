import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const templateOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  default: 'create',
  noDataExpression: true,
  options: [
    {
      value: 'update',
      name: t('template.operations.update.name'),
      action: t('template.operations.update.action'),
      description: t('template.operations.update.description'),
    },
    {
      value: 'create',
      name: t('template.operations.create.name'),
      action: t('template.operations.create.action'),
      description: t('template.operations.create.description'),
    },
    {
      value: 'delete',
      name: t('template.operations.delete.name'),
      action: t('template.operations.delete.action'),
      description: t('template.operations.delete.description'),
    },
    {
      value: 'getAll',
      name: t('template.operations.getAll.name'),
      action: t('template.operations.getAll.action'),
      description: t('template.operations.getAll.description'),
    },
    {
      value: 'getDetails',
      name: t('template.operations.getDetails.name'),
      action: t('template.operations.getDetails.action'),
      description: t('template.operations.getDetails.description'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['template'],
    },
  },
};
