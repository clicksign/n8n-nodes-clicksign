import { INodeProperties } from 'n8n-workflow';

export const getAllUsersFields: INodeProperties[] = [
  {
    displayName: 'Filter by Email',
    name: 'filterEmail',
    type: 'string',
    default: '',
    description: 'Filter users by email',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['user'],
      },
    },
  },
];
