import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from './shared/addRequirement.fields';

export function addAuthFields(): INodeProperties[] {
  return [
    ...addRequirementFields('addAuth'),
    {
      displayName: 'Método De Autenticação',
      name: 'auth',
      type: 'options',
      default: 'email',
      description: 'Determina a Autenticação desejada para assinar',
      displayOptions: {
        show: {
          resource: ['requirement'],
          operation: ['addAuth'],
        },
      },
      options: [
        {
          name: 'Assinatura Manuscrita',
          value: 'handwritten',
        },
        {
          name: 'Biometria',
          value: 'biometric',
        },
        {
          name: 'Biometria Facial',
          value: 'facial_biometrics',
        },
        {
          name: 'Certificado Digital',
          value: 'icp_brasil',
        },
        {
          name: 'Comprovante De Endereço',
          value: 'address_proof',
        },
        {
          name: 'Documento Oficial',
          value: 'official_document',
        },
        {
          name: 'Documentoscopia',
          value: 'documentscopy',
        },
        {
          name: 'Email',
          value: 'email',
        },
        {
          name: 'Pix',
          value: 'pix',
        },
        {
          name: 'Selfie Com Documento',
          value: 'selfie',
        },
        {
          name: 'Selfie Dinâmica',
          value: 'liveness',
        },
        {
          name: 'SMS',
          value: 'sms',
        },
        {
          name: 'Whatsapp',
          value: 'whatsapp',
        },
      ],
    },
  ];
}
