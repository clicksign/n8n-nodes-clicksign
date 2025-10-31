import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const deleteSignerFields: INodeProperties[] = [
  {
    displayName: t('signer.fields.delete.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('signer.fields.delete.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.delete.signerId.displayName'),
    name: 'signerId',
    type: 'string',
    required: true,
    default: '',
    description: t('signer.fields.delete.signerId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['signer'],
      },
    },
  },
];
