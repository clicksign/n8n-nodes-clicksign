import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getDocumentDetailsFields: INodeProperties[] = [
  {
    displayName: t('document.fields.getDetails.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.getDetails.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.getDetails.documentId.displayName'),
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.getDetails.documentId.description'),
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['document'],
      },
    },
  },
];
