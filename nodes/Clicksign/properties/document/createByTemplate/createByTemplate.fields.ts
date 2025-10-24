import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const createDocumentByTemplateFields: INodeProperties[] = [
  {
    displayName: t('document.fields.createByTemplate.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.createByTemplate.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.createByTemplate.filename.displayName'),
    name: 'filename',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'arquivo',
    description: t('document.fields.createByTemplate.filename.description'),
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.createByTemplate.templateId.displayName'),
    name: 'templateId',
    type: 'string',
    required: true,
    default: '',
    description: t('document.fields.createByTemplate.templateId.description'),
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.createByTemplate.templateData.displayName'),
    name: 'templateData',
    type: 'json',
    default: '{}',
    description: t('document.fields.createByTemplate.templateData.description'),
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
  {
    displayName: t('document.fields.createByTemplate.metadata.displayName'),
    name: 'metadata',
    type: 'json',
    default: '{}',
    description: t('document.fields.createByTemplate.metadata.description'),
    displayOptions: {
      show: {
        operation: ['createByTemplate'],
        resource: ['document'],
      },
    },
  },
];
