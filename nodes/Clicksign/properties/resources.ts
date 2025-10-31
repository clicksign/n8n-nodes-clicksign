import { INodeProperties } from 'n8n-workflow';
import { t } from '../properties/shared/translations';

export const resourceOptions: INodeProperties = {
  displayName: t('resources.displayName'),
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  default: 'envelope',
  options: [
    {
      name: t('resources.document'),
      value: 'document',
    },
    {
      name: t('resources.envelope'),
      value: 'envelope',
    },
    {
      name: t('resources.event'),
      value: 'event',
    },
    {
      name: t('resources.template'),
      value: 'template',
    },
    {
      name: t('resources.notification'),
      value: 'notification',
    },
    {
      name: t('resources.watcher'),
      value: 'watcher',
    },
    {
      name: t('resources.folder'),
      value: 'folder',
    },
    {
      name: t('resources.requirement'),
      value: 'requirement',
    },
    {
      name: t('resources.signer'),
      value: 'signer',
    },
  ],
};
