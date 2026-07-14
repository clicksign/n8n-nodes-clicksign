import { INodeProperties } from 'n8n-workflow';

export const createUserFields: INodeProperties[] = [
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'John Doe',
    description: "The user's name",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['user'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    required: true,
    default: '',
    placeholder: 'john@email.com',
    description:
      "The user's email. Its domain must match the requesting account's domain.",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['user'],
      },
    },
  },
  {
    displayName: 'Phone Number',
    name: 'phoneNumber',
    type: 'string',
    required: true,
    default: '',
    placeholder: '11966666666',
    description: "The user's phone number",
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['user'],
      },
    },
  },
];
