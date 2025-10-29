import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';
import { t } from '../../shared/translations';

export const addRubricFields: INodeProperties[] = [
  ...addRequirementFields('addRubric'),
  {
    displayName: t('requirement.fields.addRubric.pages.displayName'),
    name: 'pages',
    type: 'string',
    default: '',
    required: true,
    description: t('requirement.fields.addRubric.pages.description'),
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
];
