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
    description: 'ID do envelope ao qual deseja realizar as operações em massa',
    displayOptions: {
      show: {
        operation: ['bulk'],
        resource: ['requirement'],
      },
    },
  },
  {
    displayName: 'Operações Em Massa',
    name: 'operations',
    type: 'fixedCollection',
    description: 'Operações em massa de requisitos',
    placeholder: 'Adicionar operação',
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
        displayName: 'Operações',
        name: 'fields',
        values: [
          {
            displayName: 'Operação',
            name: 'operation',
            type: 'options',
            noDataExpression: true,
            options: [
              {
                name: 'Adicionar',
                value: 'add',
              },
              {
                name: 'Remover',
                value: 'remove',
              },
            ],
            default: 'add',
          },
          {
            displayName: 'Requisito ID',
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
            displayName: 'Requisito',
            name: 'requirement',
            type: 'fixedCollection',
            placeholder: 'Criar requisito',
            required: true,
            default: {},
            displayOptions: {
              show: {
                operation: ['add'],
              },
            },
            options: [
              {
                displayName: 'Detalhes Do Requisito',
                name: 'details',
                values: [
                  {
                    displayName: 'Tipo',
                    name: 'requirementType',
                    type: 'options',
                    required: true,
                    default: 'provide_evidence',
                    options: [
                      { name: 'Autenticação', value: 'provide_evidence' },
                      { name: 'Qualificação', value: 'agree' },
                      { name: 'Rubrica', value: 'rubricate' },
                    ],
                  },
                  {
                    displayName: 'Assinar Como',
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
                    displayName: 'Método De Autenticação',
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
                    displayName: 'Páginas',
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
                    displayName: 'Documento ID',
                    name: 'documentId',
                    type: 'string',
                    required: true,
                    default: '',
                  },
                  {
                    displayName: 'Signatário ID',
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
