import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const activateEnvelopeFields: INodeProperties[] = [
  {
    displayName: t('envelope.fields.activate.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('envelope.fields.activate.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['activate'],
        resource: ['envelope'],
      },
    },
  },
];
