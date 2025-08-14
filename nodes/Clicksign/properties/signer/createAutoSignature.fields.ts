import { INodeProperties } from 'n8n-workflow';

export const createAutoSignatureFields: INodeProperties[] = [
  {
    displayName: 'Nome',
    name: 'name',
    type: 'string',
    default: '',
    placeholder: 'Silva Silveira',
    required: true,
    description:
      'O nome do signatário, usado para identificá-lo (é necessário enviar ao menos duas palavras)',
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
    placeholder: 'silva@email.com',
    required: true,
    description: 'O email do signatário',
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
    description: 'O CPF do signatário',
    required: true,
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Data De Nascimento',
    name: 'birthday',
    type: 'string',
    default: '',
    placeholder: '10/10/1990',
    description:
      'Data de nascimento do signatário (ex: 10/10/1990, 1990-10-10)',
    required: true,
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Email API',
    name: 'apiEmail',
    type: 'string',
    default: '',
    placeholder: 'api@email.com',
    required: true,
    description: 'O email da API',
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: 'Email Admin',
    name: 'adminEmail',
    type: 'string',
    default: '',
    placeholder: 'admin@email.com',
    required: true,
    description: 'O email admin',
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
];
