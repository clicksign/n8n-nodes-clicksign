import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const updateDocumentFields: INodeProperties[] = [
  {
    displayName: t('document.fields.update.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.update.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.update.documentId.displayName'),
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.update.documentId.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.update.status.displayName'),
    name: 'status',
    type: 'options',
    default: 'canceled',
    description: t('document.fields.update.status.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
    options: [
      {
        name: t('document.fields.update.status.options.canceled'),
        value: 'canceled',
      },
      {
        name: t('document.fields.update.status.options.closed'),
        value: 'closed',
      },
    ],
  },
  {
    displayName: 'Metadata',
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: t('document.fields.update.metadata.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['document'],
      },
    },
  },
];
