import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const deleteRequirementFields: INodeProperties[] = [
  {
    displayName: t('requirement.fields.delete.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('requirement.fields.delete.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: t('requirement.fields.delete.requirementId.displayName'),
    name: 'requirementId',
    type: 'string',
    required: true,
    default: '',
    description: t('requirement.fields.delete.requirementId.description'),
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['requirement'],
      },
    },
  },
];
