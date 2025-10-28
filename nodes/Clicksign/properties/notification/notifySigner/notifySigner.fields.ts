import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const notifySignerFields: INodeProperties[] = [
  {
    displayName: t('notification.fields.notifySigner.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('notification.fields.notifySigner.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
  {
    displayName: t('notification.fields.notifySigner.signerId.displayName'),
    name: 'signerId',
    type: 'string',
    required: true,
    default: '',
    description: t('notification.fields.notifySigner.signerId.description'),
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
  {
    displayName: t('notification.fields.notifySigner.message.displayName'),
    name: 'message',
    type: 'string',
    default: '',
    description: t('notification.fields.notifySigner.message.description'),
    displayOptions: {
      show: {
        operation: ['notifySigner'],
        resource: ['notification'],
      },
    },
  },
];
