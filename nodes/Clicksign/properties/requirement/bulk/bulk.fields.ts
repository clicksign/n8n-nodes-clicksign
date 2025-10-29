import { INodeProperties } from 'n8n-workflow';
import { qualificationsOptions } from '../shared/qualification.options';
import { authOptions } from '../shared/auth.options';
import { t } from '../../shared/translations';

export const bulkFields: INodeProperties[] = [
  {
    displayName: t('requirement.fields.bulk.envelopeId.displayName'),
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description: t('requirement.fields.bulk.envelopeId.description'),
    displayOptions: {
      show: {
        operation: ['bulk'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: t('requirement.fields.bulk.operations.displayName'),
    name: 'operations',
    type: 'fixedCollection',
    description: t('requirement.fields.bulk.operations.description'),
    placeholder: t('requirement.fields.bulk.operations.placeholder'),
    default: {},
    required: true,
    displayOptions: {
      show: {
        operation: ['bulk'],
        resource: ['requirement'],
      },
    },
    typeOptions: {
      multipleValues: true,
    },
    options: [
      {
        displayName: t('operations'),
        name: 'fields',
        values: [
          {
            displayName: t('operation'),
            name: 'operation',
            type: 'options',
            noDataExpression: true,
            options: [
              {
                name: t(
                  'requirement.fields.bulk.operations.options.operation.add',
                ),
                value: 'add',
              },
              {
                name: t(
                  'requirement.fields.bulk.operations.options.operation.remove',
                ),
                value: 'remove',
              },
            ],
            default: 'add',
          },
          {
            displayName: t(
              'requirement.fields.bulk.operations.options.requirementId.displayName',
            ),
            name: 'requirementId',
            type: 'string',
            default: '',
            required: true,
            displayOptions: {
              show: {
                operation: ['remove'],
              },
            },
          },
          {
            displayName: t(
              'requirement.fields.bulk.operations.options.requirement.displayName',
            ),
            name: 'requirement',
            type: 'fixedCollection',
            placeholder: t(
              'requirement.fields.bulk.operations.options.requirement.placeholder',
            ),
            required: true,
            default: {},
            displayOptions: {
              show: {
                operation: ['add'],
              },
            },
            options: [
              {
                displayName: t(
                  'requirement.fields.bulk.operations.options.requirement.options.displayName',
                ),
                name: 'details',
                values: [
                  {
                    displayName: t(
                      'requirement.fields.bulk.operations.options.requirement.options.requirementType.displayName',
                    ),
                    name: 'requirementType',
                    type: 'options',
                    required: true,
                    default: 'provide_evidence',
                    options: [
                      {
                        name: t(
                          'requirement.fields.bulk.operations.options.requirement.options.requirementType.provide_evidence',
                        ),
                        value: 'provide_evidence',
                      },
                      {
                        name: t(
                          'requirement.fields.bulk.operations.options.requirement.options.requirementType.agree',
                        ),
                        value: 'agree',
                      },
                      {
                        name: t(
                          'requirement.fields.bulk.operations.options.requirement.options.requirementType.rubricate',
                        ),
                        value: 'rubricate',
                      },
                    ],
                  },
                  {
                    displayName: t(
                      'requirement.fields.bulk.operations.options.requirement.options.role.displayName',
                    ),
                    name: 'role',
                    type: 'options',
                    default: 'sign',
                    options: qualificationsOptions,
                    displayOptions: {
                      show: {
                        requirementType: ['agree'],
                      },
                    },
                  },
                  {
                    displayName: t(
                      'requirement.fields.bulk.operations.options.requirement.options.auth.displayName',
                    ),
                    name: 'auth',
                    type: 'options',
                    default: 'email',
                    options: authOptions,
                    displayOptions: {
                      show: {
                        requirementType: ['provide_evidence'],
                      },
                    },
                  },
                  {
                    displayName: t(
                      'requirement.fields.bulk.operations.options.requirement.options.pages.displayName',
                    ),
                    name: 'pages',
                    type: 'string',
                    default: '',
                    displayOptions: {
                      show: {
                        requirementType: ['rubricate'],
                      },
                    },
                  },
                  {
                    displayName: t(
                      'requirement.fields.bulk.operations.options.requirement.options.documentId.displayName',
                    ),
                    name: 'documentId',
                    type: 'string',
                    required: true,
                    default: '',
                  },
                  {
                    displayName: t(
                      'requirement.fields.bulk.operations.options.requirement.options.signerId.displayName',
                    ),
                    name: 'signerId',
                    type: 'string',
                    required: true,
                    default: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
