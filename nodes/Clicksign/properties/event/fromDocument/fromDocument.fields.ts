import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const fromDocumentFields: INodeProperties[] = [
  {
    displayName: t('event.fields.fromDocument.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('event.fields.fromDocument.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['fromDocument'],
        resource: ['event'],
      },
    },
  },
  {
    displayName: t('event.fields.fromDocument.documentId.displayName'),
    name: 'documentId',
    type: 'string',
    required: true,
    default: '',
    description: t('event.fields.fromDocument.documentId.description'),
    displayOptions: {
      show: {
        operation: ['fromDocument'],
        resource: ['event'],
      },
    },
  },
];
