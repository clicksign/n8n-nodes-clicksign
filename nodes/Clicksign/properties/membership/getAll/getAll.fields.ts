import { INodeProperties } from 'n8n-workflow';

export const getAllMembershipsFields: INodeProperties[] = [
  {
    displayName: 'Filter by User ID',
    name: 'filterUserId',
    type: 'string',
    default: '',
    description: 'Filter memberships by the ID of the user',
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['membership'],
      },
    },
  },
];
