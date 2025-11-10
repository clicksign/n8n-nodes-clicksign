import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';

export const addRubricFields: INodeProperties[] = [
  ...addRequirementFields('addRubric'),
  {
    displayName: 'Pages',
    name: 'pages',
    type: 'string',
    default: '',
    required: true,
    description:
      "Inform the pages that will receive the signatory's initials, separated by a comma",
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
];
