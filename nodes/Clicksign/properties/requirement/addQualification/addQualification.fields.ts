import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';
import { qualificationsOptions } from '../shared/qualification.options';

export const addQualificationFields: INodeProperties[] = [
  ...addRequirementFields('addQualification'),
  {
    displayName: 'Sign As',
    name: 'role',
    type: 'options',
    default: 'sign',
    description:
      'Determines the desired Qualification to accept the signatures',
    options: qualificationsOptions,
    displayOptions: {
      show: {
        operation: ['addQualification'],
        resource: ['requirement'],
      },
    },
  },
];
