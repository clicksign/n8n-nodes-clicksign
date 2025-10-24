import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getDocumentsFields: INodeProperties[] = [
  {
    displayName: t('document.fields.getAll.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.getAll.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['document'],
      },
    },
  },
];
