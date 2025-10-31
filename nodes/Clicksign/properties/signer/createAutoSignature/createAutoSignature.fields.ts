import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const createAutoSignatureFields: INodeProperties[] = [
  {
    displayName: t('signer.fields.createAutoSignature.name.displayName'),
    name: 'name',
    type: 'string',
    default: '',
    placeholder: 'John Doe',
    required: true,
    description: t('signer.fields.createAutoSignature.name.description'),
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.createAutoSignature.email.displayName'),
    name: 'email',
    type: 'string',
    default: '',
    placeholder: 'john@email.com',
    required: true,
    description: t('signer.fields.createAutoSignature.email.description'),
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t(
      'signer.fields.createAutoSignature.documentation.displayName',
    ),
    name: 'documentation',
    type: 'string',
    default: '',
    placeholder: '17498999064',
    description: t(
      'signer.fields.createAutoSignature.documentation.description',
    ),
    required: true,
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.createAutoSignature.birthday.displayName'),
    name: 'birthday',
    type: 'string',
    default: '',
    placeholder: '10/10/1990',
    description: t('signer.fields.createAutoSignature.birthday.description'),
    required: true,
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.createAutoSignature.apiEmail.displayName'),
    name: 'apiEmail',
    type: 'string',
    default: '',
    placeholder: 'api@email.com',
    required: true,
    description: t('signer.fields.createAutoSignature.apiEmail.description'),
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
  {
    displayName: t('signer.fields.createAutoSignature.adminEmail.displayName'),
    name: 'adminEmail',
    type: 'string',
    default: '',
    placeholder: 'admin@email.com',
    required: true,
    description: t('signer.fields.createAutoSignature.adminEmail.description'),
    displayOptions: {
      show: {
        operation: ['createAutoSignature'],
        resource: ['signer'],
      },
    },
  },
];
