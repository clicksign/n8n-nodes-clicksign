import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getDetailsFields: INodeProperties[] = [
  {
    displayName: t('envelope.fields.getDetails.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('envelope.fields.getDetails.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['envelope'],
      },
    },
  },
];
