import { INodeProperties } from 'n8n-workflow';

export const getDetailsUserFields: INodeProperties[] = [
  {
    displayName: 'User ID',
    name: 'userId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the user to get details of',
    displayOptions: {
      show: {
        operation: ['getDetails'],
        resource: ['user'],
      },
    },
  },
];
