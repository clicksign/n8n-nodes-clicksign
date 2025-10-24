import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getAllSignersFields: INodeProperties[] = [
  {
    displayName: t('signer.fields.getAll.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('signer.fields.getAll.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['signer'],
      },
    },
  },
];
