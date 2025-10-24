import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const createDocumentByBase64: INodeProperties[] = [
  {
    displayName: t('document.fields.createByBase64.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.createByBase64.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.createByBase64.filename.displayName'),
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'arquivo.pdf',
    description: t('document.fields.createByBase64.filename.description'),
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.createByBase64.fileBase64.displayName'),
    name: 'fileBase64',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.createByBase64.fileBase64.description'),
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.createByBase64.metadata.displayName'),
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: t('document.fields.createByBase64.metadata.description'),
    displayOptions: {
      show: {
        operation: ['createByBase64'],
        resource: ['document'],
      },
    },
  },
];
