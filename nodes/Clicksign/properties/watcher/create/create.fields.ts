import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const createWatcherFields: INodeProperties[] = [
  {
    displayName: t('watcher.fields.create.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('watcher.fields.create.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: t('watcher.fields.create.email.displayName'),
    name: 'email',
    type: 'string',
    placeholder: 'name@email.com',
    required: true,
    default: '',
    description: t('watcher.fields.create.email.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: t('watcher.fields.create.kind.displayName'),
    name: 'kind',
    type: 'options',
    required: true,
    // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
    default: 'all_steps',
    description: t('watcher.fields.create.kind.description'),
    options: [
      {
        name: t('watcher.fields.create.kind.all_steps'),
        value: 'all_steps',
      },
      {
        name: t('watcher.fields.create.kind.on_finished'),
        value: 'on_finished',
      },
    ],
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: t('watcher.fields.create.attachDocuments.displayName'),
    name: 'attachDocuments',
    type: 'boolean',
    required: true,
    default: false,
    description: t('watcher.fields.create.attachDocuments.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
];
