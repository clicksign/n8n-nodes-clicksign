import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const notifyEnvelopeFields: INodeProperties[] = [
  {
    displayName: t('notification.fields.notifyEnvelope.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('notification.fields.notifyEnvelope.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['notifyEnvelope'],
        resource: ['notification'],
      },
    },
  },
  {
    displayName: t('notification.fields.notifyEnvelope.message.displayName'),
    name: 'message',
    type: 'string',
    default: '',
    description: t('notification.fields.notifyEnvelope.message.description'),
    displayOptions: {
      show: {
        operation: ['notifyEnvelope'],
        resource: ['notification'],
      },
    },
  },
];
