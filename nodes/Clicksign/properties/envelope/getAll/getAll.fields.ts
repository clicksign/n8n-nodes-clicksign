import { INodeProperties } from 'n8n-workflow';

export const getAllFields: INodeProperties[] = [
  {
    displayName: 'Filter Status',
    name: 'status',
    type: 'string',
    default: '',
    description:
      'Inform a status if you want to filter: draft, running, closed, canceled',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Filter Name',
    name: 'name',
    type: 'string',
    default: '',
    description: 'Inform the full name of the envelope to consult',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Filter Creation Date',
    name: 'created',
    type: 'string',
    default: '',
    description:
      'Inform the creation date intervals in the specification format (ISO 8601 and separated by comma)',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Filter Modification Date',
    name: 'modified',
    type: 'string',
    default: '',
    description:
      'Inform the modification date intervals in the specification format (ISO 8601 and separated by comma)',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Filter Deadline',
    name: 'deadline',
    type: 'string',
    default: '',
    description:
      'Inform the deadline intervals in the specification format (ISO 8601 and separated by comma)',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Sort',
    name: 'sort',
    type: 'string',
    default: '',
    description:
      'Sort by envelope property (ex: name to sort by name in ascending order and -name to sort by name in descending order)',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
];
