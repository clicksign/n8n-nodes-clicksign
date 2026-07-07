import { INodeProperties } from 'n8n-workflow';

export const deleteMembershipFields: INodeProperties[] = [
  {
    displayName: 'Membership ID',
    name: 'membershipId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the membership to be deleted',
    displayOptions: {
      show: {
        operation: ['delete'],
        resource: ['membership'],
      },
    },
  },
];
