import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getSignerDetailsFields: INodeProperties[] = [
  {
    displayName: t('signer.fields.getDetails.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('signer.fields.getDetails.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.getDetails.signerId.displayName'),
    name: 'signerId',
    type: 'string',
    required: true,
    default: '',
    description: t('signer.fields.getDetails.signerId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['signer'],
      },
    },
  },
];
