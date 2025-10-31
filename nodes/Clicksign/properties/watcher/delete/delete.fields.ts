import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const deleteWatcherFields: INodeProperties[] = [
  {
    displayName: t('watcher.fields.delete.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('watcher.fields.delete.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: t('watcher.fields.delete.watcherId.displayName'),
    name: 'watcherId',
    type: 'string',
    required: true,
    default: '',
    description: t('watcher.fields.delete.watcherId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['watcher'],
      },
    },
  },
];
