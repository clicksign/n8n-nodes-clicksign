import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from '../shared/addRequirement/addRequirement.fields';

export const addRubricFields: INodeProperties[] = [
  ...addRequirementFields('addRubric'),
  {
    displayName: 'Pages',
    name: 'pages',
    type: 'string',
    default: '',
    description:
      "Inform the pages that will receive the signatory's initials, separated by a comma. Use \"all\" for every page. Either Pages or Rubric Field must be informed.",
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: 'Kind',
    name: 'kind',
    type: 'options',
    default: 'initials',
    description: 'Determines the type of the rubric',
    options: [
      { name: 'Initials', value: 'initials' },
      { name: 'Manuscript', value: 'manuscript' },
    ],
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: 'Rubric Field',
    name: 'rubricField',
    type: 'string',
    default: '',
    description:
      'Positioned signature tag that will be linked to the signer. Either Pages or Rubric Field must be informed.',
    displayOptions: {
      show: {
        operation: ['addRubric'],
        resource: ['requirement'],
      },
    },
  },
];
