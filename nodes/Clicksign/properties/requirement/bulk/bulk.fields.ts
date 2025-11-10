import { INodeProperties } from 'n8n-workflow';
import { qualificationsOptions } from '../shared/qualification.options';
import { authOptions } from '../shared/auth.options';

export const bulkFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    default: '',
    required: true,
    description:
      'ID of the envelope for which you want to perform bulk operations',
    displayOptions: {
      show: {
        operation: ['bulk'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: 'Bulk Operations',
    name: 'operations',
    type: 'fixedCollection',
    description: 'Bulk requirement operations',
    placeholder: 'Add bulk requirement operations',
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
        displayName: 'Operations',
        name: 'fields',
        values: [
          {
            displayName: 'Operation',
            name: 'operation',
            type: 'options',
            noDataExpression: true,
            options: [
              {
                name: 'Add',
                value: 'add',
              },
              {
                name: 'Remove',
                value: 'remove',
              },
            ],
            default: 'add',
          },
          {
            displayName: 'Requirement ID',
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
            displayName: 'Requirement',
            name: 'requirement',
            type: 'fixedCollection',
            placeholder: 'Create requirement',
            required: true,
            default: {},
            displayOptions: {
              show: {
                operation: ['add'],
              },
            },
            options: [
              {
                displayName: 'Requirement Details',
                name: 'details',
                values: [
                  {
                    displayName: 'Type',
                    name: 'requirementType',
                    type: 'options',
                    required: true,
                    default: 'provide_evidence',
                    options: [
                      {
                        name: 'Authentication',
                        value: 'provide_evidence',
                      },
                      {
                        name: 'Qualification',
                        value: 'agree',
                      },
                      {
                        name: 'Rubric',
                        value: 'rubricate',
                      },
                    ],
                  },
                  {
                    displayName: 'Sign As',
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
                    displayName: 'Authentication Method',
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
                    displayName: 'Pages',
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
                    displayName: 'Document ID',
                    name: 'documentId',
                    type: 'string',
                    required: true,
                    default: '',
                  },
                  {
                    displayName: 'Signer ID',
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
