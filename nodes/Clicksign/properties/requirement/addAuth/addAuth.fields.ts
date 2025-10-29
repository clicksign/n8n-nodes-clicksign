import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';
import { authOptions } from '../shared/auth.options';
import { t } from '../../shared/translations';

export const addAuthFields: INodeProperties[] = [
  ...addRequirementFields('addAuth'),
  {
    displayName: t('requirement.fields.addAuth.auth.displayName'),
    name: 'auth',
    type: 'options',
    default: 'email',
    description: t('requirement.fields.addAuth.auth.description'),
    options: authOptions,
    displayOptions: {
      show: {
        operation: ['addAuth'],
        resource: ['requirement'],
      },
    },
  },
];
