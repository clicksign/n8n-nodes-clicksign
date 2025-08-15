import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from './shared/addRequirement.fields';
import { authOptions } from './shared/auth.options';

export const addAuthFields: INodeProperties[] = [
  ...addRequirementFields('addAuth'),
  {
    displayName: 'Método De Autenticação',
    name: 'auth',
    type: 'options',
    default: 'email',
    description: 'Determina a Autenticação desejada para assinar',
    displayOptions: {
      show: {
        operation: ['addAuth'],
        resource: ['requirement'],
      },
    },
    options: authOptions,
  },
];
