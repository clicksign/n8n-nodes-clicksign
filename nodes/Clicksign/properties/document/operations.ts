import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

const updateOperations = [
  {
    name: t('document.operations.update.name'),
    value: t('document.operations.update.value'),
    action: t('document.operations.update.action'),
    description: t('document.operations.update.description'),
  },
  {
    name: t('document.operations.createByBase64.name'),
    value: t('document.operations.createByBase64.value'),
    action: t('document.operations.createByBase64.action'),
    description: t('document.operations.createByBase64.description'),
  },
  {
    name: t('document.operations.createByTemplate.name'),
    value: t('document.operations.createByTemplate.value'),
    action: t('document.operations.createByTemplate.action'),
    description: t('document.operations.createByTemplate.description'),
  },
  {
    name: t('document.operations.delete.name'),
    value: t('document.operations.delete.value'),
    action: t('document.operations.delete.action'),
    description: t('document.operations.delete.description'),
  },
  {
    name: t('document.operations.getAll.name'),
    value: t('document.operations.getAll.value'),
    action: t('document.operations.getAll.action'),
    description: t('document.operations.getAll.description'),
  },
  {
    name: t('document.operations.getDetails.name'),
    value: t('document.operations.getDetails.value'),
    action: t('document.operations.getDetails.action'),
    description: t('document.operations.getDetails.description'),
  },
];

const defaultOperation = t('document.operations.getAll.value') || 'getAll';

export const documentsOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: updateOperations,
  default: defaultOperation,
  displayOptions: {
    show: {
      resource: ['document'],
    },
  },
};
