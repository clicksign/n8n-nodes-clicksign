import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';
import { authOptions } from '../shared/auth.options';

export const addAuthFields: INodeProperties[] = [
  ...addRequirementFields('addAuth'),
  {
    displayName: 'Authentication Method',
    name: 'auth',
    type: 'options',
    default: 'email',
    description: 'Determines the desired Authentication for signing',
    options: authOptions,
    displayOptions: {
      show: {
        operation: ['addAuth'],
        resource: ['requirement'],
      },
    },
  },
];
