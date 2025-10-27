import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const envelopeOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  // eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
  default: 'getAll',
  options: [
    {
      value: 'activate',
      name: t('envelope.operations.activate.name'),
      description: t('envelope.operations.activate.description'),
      action: t('envelope.operations.activate.action'),
    },
    {
      value: 'update',
      name: t('envelope.operations.update.name'),
      description: t('envelope.operations.update.description'),
      action: t('envelope.operations.update.action'),
    },
    {
      value: 'create',
      name: t('envelope.operations.create.name'),
      description: t('envelope.operations.create.description'),
      action: t('envelope.operations.create.action'),
    },
    {
      value: 'delete',
      name: t('envelope.operations.delete.name'),
      description: t('envelope.operations.delete.description'),
      action: t('envelope.operations.delete.action'),
    },
    {
      value: 'getAll',
      name: t('envelope.operations.getAll.name'),
      description: t('envelope.operations.getAll.description'),
      action: t('envelope.operations.getAll.action'),
    },
    {
      value: 'getDetails',
      name: t('envelope.operations.getDetails.name'),
      description: t('envelope.operations.getDetails.description'),
      action: t('envelope.operations.getDetails.action'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['envelope'],
    },
  },
};
