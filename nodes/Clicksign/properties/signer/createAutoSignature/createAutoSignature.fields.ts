import { INodeProperties } from 'n8n-workflow';

export const createAutoSignatureFields: INodeProperties[] = [
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    placeholder: 'John Doe',
    required: true,
    description:
      "The signer's name, used to identify them (at least two words must be sent)",
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    placeholder: 'john@email.com',
    required: true,
    description: "The signer's email",
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'CPF',
    name: 'documentation',
    type: 'string',
    default: '',
    placeholder: '17498999064',
    description: "The signer's CPF (Brazilian ID)",
    required: true,
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Date Of Birth',
    name: 'birthday',
    type: 'string',
    default: '',
    placeholder: '10/10/1990',
    description: "Signer's date of birth (e.g.: DD/MM/YYYY, YYYY-MM-DD)",
    required: true,
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'API Email',
    name: 'apiEmail',
    type: 'string',
    default: '',
    placeholder: 'api@email.com',
    required: true,
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Admin Email',
    name: 'adminEmail',
    type: 'string',
    default: '',
    placeholder: 'admin@email.com',
    required: true,
    description: "The administrator's email",
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
];
