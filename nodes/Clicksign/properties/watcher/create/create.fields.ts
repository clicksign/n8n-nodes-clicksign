import { INodeProperties } from 'n8n-workflow';

export const createWatcherFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que receberá o observador',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    placeholder: 'name@email.com',
    required: true,
    default: '',
    description: 'Email do observador e onde será notificado',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Etapa a Ser Notificado',
    name: 'kind',
    type: 'options',
    required: true,
    default: 'all_steps',
    description:
      'Define se o observador será notificado em todo o processo ou apenas na conclusão',
    options: [
      {
        name: 'Todas Etapas',
        value: 'all_steps',
      },
      {
        name: 'Ao Finalizar',
        value: 'on_finished',
      },
    ],
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
  {
    displayName: 'Enviar Documentos Anexados Ao Finalizar',
    name: 'attachDocuments',
    type: 'boolean',
    required: true,
    default: false,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Determina se o observador deve receber os documentos finalizados',
    displayOptions: {
      show: {
        operation: ['create'],
        resource: ['watcher'],
      },
    },
  },
];
