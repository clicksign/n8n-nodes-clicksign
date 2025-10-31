import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getAllWatchersFields: INodeProperties[] = [
  {
    displayName: t('watcher.fields.getAll.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('watcher.fields.getAll.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['watcher'],
      },
    },
  },
];
