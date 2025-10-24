import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const createEnvelopeFields: INodeProperties[] = [
  {
    displayName: t('envelope.fields.create.envelopeName.displayName'),
    name: 'envelopeName',
    type: 'string',
    required: true,
    default: 'Meu envelope',
    description: t('envelope.fields.create.envelopeName.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.create.locale.displayName'),
    name: 'locale',
    type: 'options',
    required: true,
    default: 'pt-BR',
    description: t('envelope.fields.create.locale.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
    options: [
      {
        name: 'Pt-BR',
        value: 'pt-BR',
      },
      {
        name: 'En-US',
        value: 'en-US',
      },
    ],
  },
  {
    displayName: t('envelope.fields.create.autoClose.displayName'),
    name: 'autoClose',
    type: 'boolean',
    default: true,
    description: t('envelope.fields.create.autoClose.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.create.remindInterval.displayName'),
    name: 'remindInterval',
    type: 'number',
    required: true,
    default: 3,
    description: t('envelope.fields.create.remindInterval.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
    typeOptions: {
      integerOnly: true,
    },
  },
  {
    displayName: t('envelope.fields.create.blockAfterRefusal.displayName'),
    name: 'blockAfterRefusal',
    type: 'boolean',
    default: false,
    description: t('envelope.fields.create.blockAfterRefusal.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.create.deadlineAt.displayName'),
    name: 'deadlineAt',
    type: 'dateTime',
    default: null,
    description: t('envelope.fields.create.deadlineAt.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.create.defaultSubject.displayName'),
    name: 'defaultSubject',
    type: 'string',
    default: '',
    description: t('envelope.fields.create.defaultSubject.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.create.defaultMessage.displayName'),
    name: 'defaultMessage',
    type: 'string',
    default: '',
    description: t('envelope.fields.create.defaultMessage.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.create.folderId.displayName'),
    name: 'folderId',
    type: 'string',
    default: '',
    description: t('envelope.fields.create.folderId.description'),
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['envelope'],
      },
    },
  },
];
