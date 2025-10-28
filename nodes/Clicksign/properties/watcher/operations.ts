import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const watcherOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
  default: 'getAll',
  noDataExpression: true,
  options: [
    {
      value: 'create',
      name: t('watcher.operations.create.name'),
      action: t('watcher.operations.create.action'),
      description: t('watcher.operations.create.description'),
    },
    {
      value: 'getAll',
      name: t('watcher.operations.getAll.name'),
      action: t('watcher.operations.getAll.action'),
      description: t('watcher.operations.getAll.description'),
    },
    {
      value: 'getDetails',
      name: t('watcher.operations.getDetails.name'),
      action: t('watcher.operations.getDetails.action'),
      description: t('watcher.operations.getDetails.description'),
    },
    {
      value: 'delete',
      name: t('watcher.operations.delete.name'),
      action: t('watcher.operations.delete.action'),
      description: t('watcher.operations.delete.description'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['watcher'],
    },
  },
};
