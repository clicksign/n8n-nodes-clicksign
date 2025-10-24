import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const envelopeOperations: INodeProperties = {
  displayName: 'Operação',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: t('envelope.operations.activate.name'),
      value: t('envelope.operations.activate.value'),
      description: t('envelope.operations.activate.description'),
      action: t('envelope.operations.activate.action'),
    },
    {
      name: t('envelope.operations.update.name'),
      value: t('envelope.operations.update.value'),
      description: t('envelope.operations.update.description'),
      action: t('envelope.operations.update.action'),
    },
    {
      name: t('envelope.operations.create.name'),
      value: t('envelope.operations.create.value'),
      description: t('envelope.operations.create.description'),
      action: t('envelope.operations.create.action'),
    },
    {
      name: t('envelope.operations.delete.name'),
      value: t('envelope.operations.delete.value'),
      description: t('envelope.operations.delete.description'),
      action: t('envelope.operations.delete.action'),
    },
    {
      name: t('envelope.operations.getAll.name'),
      value: t('envelope.operations.getAll.value'),
      description: t('envelope.operations.getAll.description'),
      action: t('envelope.operations.getAll.action'),
    },
    {
      name: t('envelope.operations.getDetails.name'),
      value: t('envelope.operations.getDetails.value'),
      description: t('envelope.operations.getDetails.description'),
      action: t('envelope.operations.getDetails.action'),
    },
  ],
  default: 'getAll',
  displayOptions: {
    show: {
      resource: ['envelope'],
    },
  },
};
