import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const deleteEnvelopeFields: INodeProperties[] = [
  {
    displayName: t('envelope.fields.delete.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description: t('envelope.fields.delete.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['envelope'],
      },
    },
  },
];
