import { INodeProperties } from 'n8n-workflow';
import { t } from '../../shared/translations';

export const getAllFields: INodeProperties[] = [
  {
    displayName: t('envelope.fields.getAll.status.displayName'),
    name: 'status',
    type: 'string',
    default: '',
    description: t('envelope.fields.getAll.status.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.getAll.name.displayName'),
    name: 'name',
    type: 'string',
    default: '',
    description: t('envelope.fields.getAll.name.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.getAll.created.displayName'),
    name: 'created',
    type: 'string',
    default: '',
    description: t('envelope.fields.getAll.created.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.getAll.modified.displayName'),
    name: 'modified',
    type: 'string',
    default: '',
    description: t('envelope.fields.getAll.modified.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.getAll.deadline.displayName'),
    name: 'deadline',
    type: 'string',
    default: '',
    description: t('envelope.fields.getAll.deadline.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: t('envelope.fields.getAll.sort.displayName'),
    name: 'sort',
    type: 'string',
    default: '',
    description: t('envelope.fields.getAll.sort.description'),
    displayOptions: {
      show: {
        operation: ['getAll'],
        resource: ['envelope'],
      },
    },
  },
];
