import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';
import { qualificationsOptions } from '../shared/qualification.options';

export const addQualificationFields: INodeProperties[] = [
  ...addRequirementFields('addQualification'),
  {
    displayName: 'Assinar Como',
    name: 'role',
    type: 'options',
    default: 'sign',
    description:
      'Determina a Qualificação desejada para aceitar as assinaturas',
    displayOptions: {
      show: {
        operation: ['addQualification'],
        resource: ['requirement'],
      },
    },
    options: qualificationsOptions,
  },
];
