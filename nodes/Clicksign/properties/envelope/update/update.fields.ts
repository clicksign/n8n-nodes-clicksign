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
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Nome',
    name: 'envelopeName',
    type: 'string',
    default: '',
    description: 'Nome do envelope',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Idioma',
    name: 'locale',
    type: 'options',
    default: 'pt-BR',
    description:
      'Idioma utilizado nos e-mails, página de assinatura e log do documento',
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
    displayName: 'Finalizar Automaticamente Após Todos Assinarem',
    name: 'autoClose',
    type: 'boolean',
    default: true,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Se ativado, o envelope será fechado automaticamente após a assinatura do último signatários',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
  {
    displayName: 'Intervalo De Lembrete',
    name: 'remindInterval',
    type: 'number',
    default: null,
    description:
      'Determina se o documento terá opção de lembretes automáticos ativada (1,2,3,7,14)',
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
    displayName: 'Bloqueio De Assinatura Após Recusa Por Signatário',
    name: 'blockAfterRefusal',
    type: 'boolean',
    default: false,
    // eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
    description:
      'Determina se o processo de assinatura tem que ser pausado ou não após um signatário ter recusado',
    displayOptions: {
      show: {
        operation: ['update'],
        resource: ['envelope'],
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
        operation: ['update'],
        resource: ['envelope'],
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
        operation: ['update'],
        resource: ['envelope'],
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
        operation: ['update'],
        resource: ['envelope'],
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
        operation: ['update'],
        resource: ['envelope'],
      },
    },
  },
];
