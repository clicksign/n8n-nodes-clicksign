import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from './shared/addRequirement.fields';

export const addRubricFields: INodeProperties[] = [
  ...addRequirementFields('addRubric'),
  {
    displayName: 'Páginas',
    name: 'pages',
    type: 'string',
    default: '',
    required: true,
    description:
      'Informe as páginas que receberão as iniciais do signatário separadas por vírgula',
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
];
