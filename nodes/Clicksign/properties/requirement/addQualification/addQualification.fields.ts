import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';
import { qualificationsOptions } from '../shared/qualification.options';
import { t } from '../../shared/translations';

export const addQualificationFields: INodeProperties[] = [
  ...addRequirementFields('addQualification'),
  {
    displayName: t('requirement.fields.addQualification.role.displayName'),
    name: 'role',
    type: 'options',
    default: 'sign',
    description: t('requirement.fields.addQualification.role.description'),
    options: qualificationsOptions,
    displayOptions: {
      show: {
        operation: ['addQualification'],
        resource: ['requirement'],
      },
    },
  },
];
