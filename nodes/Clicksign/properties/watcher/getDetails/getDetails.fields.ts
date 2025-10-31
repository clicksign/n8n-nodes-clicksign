import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getWatcherDetailsFields: INodeProperties[] = [
  {
    displayName: t('watcher.fields.getDetails.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('watcher.fields.getDetails.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: t('watcher.fields.getDetails.watcherId.displayName'),
    name: 'watcherId',
    type: 'string',
    required: true,
    default: '',
    description: t('watcher.fields.getDetails.watcherId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['watcher'],
      },
    },
  },
];
