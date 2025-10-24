import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const signerOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
  default: 'create',
  noDataExpression: true,
  options: [
    {
      value: 'create',
      name: t('singer.operations.create.name'),
      action: t('singer.operations.create.action'),
      description: t('singer.operations.create.description'),
    },
    {
      value: 'createAutoSignature',
      name: t('singer.operations.createAutoSignature.name'),
      action: t('singer.operations.createAutoSignature.action'),
      description: t('singer.operations.createAutoSignature.description'),
    },
    {
      value: 'delete',
      name: t('singer.operations.delete.name'),
      action: t('singer.operations.delete.action'),
      description: t('singer.operations.delete.description'),
    },
    {
      value: 'getAll',
      name: t('singer.operations.getAll.name'),
      action: t('singer.operations.getAll.action'),
      description: t('singer.operations.getAll.description'),
    },
    {
      value: 'getDetails',
      name: t('singer.operations.getDetails.name'),
      action: t('singer.operations.getDetails.action'),
      description: t('singer.operations.getDetails.description'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['signer'],
    },
  },
};
