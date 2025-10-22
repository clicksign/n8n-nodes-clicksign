import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const deleteDocumentFields: INodeProperties[] = [
  {
    displayName: t('document.fields.delete.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.delete.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.delete.documentId.displayName'),
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.delete.documentId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['document'],
      },
    },
  },
];
