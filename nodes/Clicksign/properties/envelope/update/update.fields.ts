import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const updateEnvelopeFields: INodeProperties[] = [
  {
    displayName: t('envelope.fields.update.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: t('envelope.fields.update.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.update.envelopeName.displayName'),
    name: 'envelopeName',
    type: 'string',
    default: '',
    description: t('envelope.fields.update.envelopeName.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.update.locale.displayName'),
    name: 'locale',
    type: 'options',
    default: 'pt-BR',
    description: t('envelope.fields.update.locale.description'),
    displayOptions: {
      show: {
        operation: ['update'],
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
    displayName: t('envelope.fields.update.autoClose.displayName'),
    name: 'autoClose',
    type: 'boolean',
    default: true,
    description: t('envelope.fields.update.autoClose.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.update.remindInterval.displayName'),
    name: 'remindInterval',
    type: 'number',
    default: null,
    description: t('envelope.fields.update.remindInterval.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
    typeOptions: {
      integerOnly: true,
    },
  },
  {
    displayName: t('envelope.fields.update.blockAfterRefusal.displayName'),
    name: 'blockAfterRefusal',
    type: 'boolean',
    default: false,
    description: t('envelope.fields.update.blockAfterRefusal.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.update.deadlineAt.displayName'),
    name: 'deadlineAt',
    type: 'dateTime',
    default: null,
    description: t('envelope.fields.update.deadlineAt.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.update.defaultSubject.displayName'),
    name: 'defaultSubject',
    type: 'string',
    default: '',
    description: t('envelope.fields.update.defaultSubject.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.update.defaultMessage.displayName'),
    name: 'defaultMessage',
    type: 'string',
    default: '',
    description: t('envelope.fields.update.defaultMessage.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.update.folderId.displayName'),
    name: 'folderId',
    type: 'string',
    default: '',
    description: t('envelope.fields.update.folderId.description'),
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
];
