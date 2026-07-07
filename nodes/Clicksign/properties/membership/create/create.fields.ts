import { INodeProperties } from 'n8n-workflow';
import { membershipRoleOptions } from '../shared/role.options';

export const createMembershipFields: INodeProperties[] = [
  {
    displayName: 'User ID',
    name: 'userId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the user that will become a member of the account',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['membership'],
      },
    },
  },
  {
    displayName: 'Role',
    name: 'role',
    type: 'options',
    default: 'global',
    description: "Defines the user's access level",
    options: membershipRoleOptions,
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['membership'],
      },
    },
  },
  {
    displayName: 'Consumption Accessible',
    name: 'consumptionAccessible',
    type: 'boolean',
    default: false,
    description: 'Whether the user has access to the billing page',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['membership'],
      },
    },
  },
  {
    displayName: 'Tracking Accessible',
    name: 'trackingAccessible',
    type: 'boolean',
    default: false,
    description: 'Whether the user has access to the sent emails page',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['membership'],
      },
    },
  },
  {
    displayName: 'Folder Management Accessible',
    name: 'folderManagementAccessible',
    type: 'boolean',
    default: true,
    description: 'Whether the user has access to folder management',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['membership'],
      },
    },
  },
];
