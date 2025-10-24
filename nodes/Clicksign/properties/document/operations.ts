import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const documentsOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      value: 'update',
      name: t('document.operations.update.name'),
      action: t('document.operations.update.action'),
      description: t('document.operations.update.description'),
    },
    {
      value: 'createByBase64',
      name: t('document.operations.createByBase64.name'),
      action: t('document.operations.createByBase64.action'),
      description: t('document.operations.createByBase64.description'),
    },
    {
      value: 'createByTemplate',
      name: t('document.operations.createByTemplate.name'),
      action: t('document.operations.createByTemplate.action'),
      description: t('document.operations.createByTemplate.description'),
    },
    {
      value: 'delete',
      name: t('document.operations.delete.name'),
      action: t('document.operations.delete.action'),
      description: t('document.operations.delete.description'),
    },
    {
      value: 'getAll',
      name: t('document.operations.getAll.name'),
      action: t('document.operations.getAll.action'),
      description: t('document.operations.getAll.description'),
    },
    {
      value: 'getDetails',
      name: t('document.operations.getDetails.name'),
      action: t('document.operations.getDetails.action'),
      description: t('document.operations.getDetails.description'),
    },
  ],
  // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
  default: 'getAll',
  displayOptions: {
    show: {
      resource: ['document'],
    },
  },
};
