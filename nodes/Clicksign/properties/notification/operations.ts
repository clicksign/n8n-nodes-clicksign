import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const notificationOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  default: 'notifyEnvelope',
  options: [
    {
      value: 'notifyEnvelope',
      name: t('notification.operations.notifyEnvelope.name'),
      action: t('notification.operations.notifyEnvelope.action'),
      description: t('notification.operations.notifyEnvelope.description'),
    },
    {
      value: 'notifySigner',
      name: t('notification.operations.notifySigner.name'),
      action: t('notification.operations.notifySigner.action'),
      description: t('notification.operations.notifySigner.description'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['notification'],
    },
  },
};
