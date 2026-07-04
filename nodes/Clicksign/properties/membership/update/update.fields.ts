import { INodeProperties } from 'n8n-workflow';
import { membershipRoleOptions } from '../shared/role.options';

export const updateMembershipFields: INodeProperties[] = [
  {
    displayName: 'Membership ID',
    name: 'membershipId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID of the membership to update',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['membership'],
      },
    },
  },
  {
    displayName: 'Role',
    name: 'role',
    type: 'options',
    default: '',
    description: "Defines the user's access level",
    options: [{ name: 'Do Not Change', value: '' }, ...membershipRoleOptions],
    displayOptions: {
      show: {
        operation: ['update'],
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
        operation: ['update'],
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
        operation: ['update'],
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
        operation: ['update'],
        resource: ['membership'],
      },
    },
  },
];
