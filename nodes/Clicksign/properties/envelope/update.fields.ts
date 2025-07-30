import { INodeProperties } from 'n8n-workflow';

export const updateEnvelopeFields: INodeProperties[] = [
  {
    displayName: 'Envelope ID',
    name: 'envelopeId',
    type: 'string',
    required: true,
    default: '',
    description: 'ID do Envelope que deseja atualizar',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'options',
    default: 'draft',
    description:
      'O status do envelope deve ser running para ativá-lo e não é possível retornar ao draft',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
    options: [
      {
        name: 'Rascunho',
        value: 'draft',
      },
      {
        name: 'Em Processo',
        value: 'running',
      },
      {
        name: 'Cancelado',
        value: 'canceled',
      },
      {
        name: 'Finalizado',
        value: 'closed',
      },
    ],
  },
  {
    displayName: 'Nome',
    name: 'envelopeName',
    type: 'string',
    required: true,
    default: 'Meu envelope',
    description: 'Nome do envelope',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Idioma',
    name: 'locale',
    type: 'options',
    required: true,
    default: 'pt-BR',
    description:
      'Idioma utilizado nos e-mails, página de assinatura e log do documento',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
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
    displayName: 'Finalizar Automaticamente Após Assinaturas Finalizadas',
    name: 'autoClose',
    type: 'boolean',
    default: true,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Se ativado, o envelope será fechado automaticamente após a assinatura do último signatários',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Intervalo De Lembrete',
    name: 'remindInterval',
    type: 'number',
    required: true,
    default: 3,
    description:
      'Determina se o documento terá opção de lembretes automáticos ativada (1,2,3,7,14)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
    typeOptions: {
      integerOnly: true,
    },
  },
  {
    displayName: 'Bloqueio De Assinatura Após Recusa Por Signatário',
    name: 'blockAfterRefusal',
    type: 'boolean',
    default: false,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Determina se o processo de assinatura tem que ser pausado ou não após um signatário ter recusado',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Prazo Final',
    name: 'deadlineAt',
    type: 'dateTime',
    default: null,
    description:
      'Data limite para o envelope e seus documentos (formato RFC 3339)',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Assunto Padrão',
    name: 'defaultSubject',
    type: 'string',
    default: '',
    description:
      'Define o assunto do e-mail que será enviado aos signatários na solicitação de assinatura',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Mensagem Padrão',
    name: 'defaultMessage',
    type: 'string',
    default: '',
    description: 'Define a mensagem padrão que será enviada aos signatários',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
  {
    displayName: 'Pasta ID',
    name: 'folderId',
    type: 'string',
    default: '',
    description: 'ID da pasta de origem',
    displayOptions: {
      show: {
        resource: ['envelope'],
        operation: ['update'],
      },
    },
  },
];
