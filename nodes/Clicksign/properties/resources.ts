import { INodeProperties } from 'n8n-workflow';
import { getResourceName } from './shared/translations';

export const resourceOptions: INodeProperties = {
  displayName: 'Recurso',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: getResourceName('document'),
      value: 'document',
    },
    {
      name: getResourceName('envelope'),
      value: 'envelope',
    },
    {
      name: getResourceName('event'),
      value: 'event',
    },
    {
      name: getResourceName('template'),
      value: 'template',
    },
    {
      name: getResourceName('notification'),
      value: 'notification',
    },
    {
      name: getResourceName('watcher'),
      value: 'watcher',
    },
    {
      name: getResourceName('folder'),
      value: 'folder',
    },
    {
      name: getResourceName('requirement'),
      value: 'requirement',
    },
    {
      name: getResourceName('signer'),
      value: 'signer',
    },
  ],
  default: 'envelope',
};
