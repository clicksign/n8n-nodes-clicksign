import { INodeProperties } from 'n8n-workflow';
import { t } from '../shared/translations';

export const requirementOperations: INodeProperties = {
  displayName: t('operation'),
  name: 'operation',
  type: 'options',
  default: 'addAuth',
  noDataExpression: true,
  options: [
    {
      value: 'addAuth',
      name: t('requirement.operations.addAuth.name'),
      action: t('requirement.operations.addAuth.action'),
      description: t('requirement.operations.addAuth.description'),
    },
    {
      value: 'addQualification',
      name: t('requirement.operations.addQualification.name'),
      action: t('requirement.operations.addQualification.action'),
      description: t('requirement.operations.addQualification.description'),
    },
    {
      value: 'addRubric',
      name: t('requirement.operations.addRubric.name'),
      action: t('requirement.operations.addRubric.action'),
      description: t('requirement.operations.addRubric.description'),
    },
    {
      value: 'delete',
      name: t('requirement.operations.delete.name'),
      action: t('requirement.operations.delete.action'),
      description: t('requirement.operations.delete.description'),
    },
    {
      value: 'getAll',
      name: t('requirement.operations.getAll.name'),
      action: t('requirement.operations.getAll.action'),
      description: t('requirement.operations.getAll.description'),
    },
    {
      value: 'getDetails',
      name: t('requirement.operations.getDetails.name'),
      action: t('requirement.operations.getDetails.action'),
      description: t('requirement.operations.getDetails.description'),
    },
    {
      value: 'bulk',
      name: t('requirement.operations.bulk.name'),
      action: t('requirement.operations.bulk.action'),
      description: t('requirement.operations.bulk.description'),
    },
  ],
  displayOptions: {
    show: {
      resource: ['requirement'],
    },
  },
};
