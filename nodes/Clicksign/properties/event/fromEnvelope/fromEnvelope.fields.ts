import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const fromEnvelopeFields: INodeProperties[] = [
  {
    displayName: t('event.fields.fromEnvelope.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('event.fields.fromEnvelope.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['fromEnvelope'],
        resource: ['event'],
      },
    },
  },
];
