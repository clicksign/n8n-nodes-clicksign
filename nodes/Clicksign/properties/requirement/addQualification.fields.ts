import { INodeProperties } from 'n8n-workflow';

import { addRequirementFields } from './shared/addRequirement.fields';

export const addQualificationFields: INodeProperties[] = [
  ...addRequirementFields('addQualification'),
  {
    displayName: 'Assinar Como',
    name: 'role',
    type: 'options',
    default: 'sign',
    description:
      'Determina a Qualificação desejada para aceitar as assinaturas',
    displayOptions: {
      show: {
        resource: ['requirement'],
        operation: ['addQualification'],
      },
    },
    options: [
      {
        name: 'Acusar Recebimento',
        value: 'receipt',
      },
      {
        name: 'Administrador',
        value: 'administrator',
      },
      {
        name: 'Advogado(a)',
        value: 'lawyer',
      },
      {
        name: 'Afiançado',
        value: 'secured',
      },
      {
        name: 'Anuente',
        value: 'consenting',
      },
      {
        name: 'Anuído',
        value: 'consented',
      },
      {
        name: 'Aprovar',
        value: 'approve',
      },
      {
        name: 'Assinar',
        value: 'sign',
      },
      {
        name: 'Associado(a)',
        value: 'associate',
      },
      {
        name: 'Avalista',
        value: 'guarantor',
      },
      {
        name: 'Caucionante',
        value: 'collateral_provider',
      },
      {
        name: 'Cedente',
        value: 'transferor',
      },
      {
        name: 'Cessionário',
        value: 'transferee',
      },
      {
        name: 'Comodante',
        value: 'comforter',
      },
      {
        name: 'Comodatário',
        value: 'borrower',
      },
      {
        name: 'Cônjuge do fiador',
        value: 'guarantor_spouse',
      },
      {
        name: 'Consignado(a)',
        value: 'pledged',
      },
      {
        name: 'Consignatário(a)',
        value: 'consignee',
      },
      {
        name: 'Contratada',
        value: 'contractee',
      },
      {
        name: 'Contratante',
        value: 'contractor',
      },
      {
        name: 'Correntista',
        value: 'account_holder',
      },
      {
        name: 'Corretor De Imóveis',
        value: 'real_estate_broker',
      },
      {
        name: 'Corretor De Seguros',
        value: 'insurance_broker',
      },
      {
        name: 'Corretor(a)',
        value: 'broker',
      },
      {
        name: 'Credor(a)',
        value: 'creditor',
      },
      {
        name: 'Devedor Solidário',
        value: 'joint_debtor',
      },
      {
        name: 'Devedor(es)',
        value: 'debtor',
      },
      {
        name: 'Diretor(a)',
        value: 'director',
      },
      {
        name: 'Distratante',
        value: 'distracting',
      },
      {
        name: 'Emitente',
        value: 'issuer',
      },
      {
        name: 'Empregado(a)',
        value: 'employee',
      },
      {
        name: 'Empregador(a)',
        value: 'employer',
      },
      {
        name: 'Endossante',
        value: 'endorser',
      },
      {
        name: 'Endossatário',
        value: 'endorsee',
      },
      {
        name: 'Fiador',
        value: 'surety',
      },
      {
        name: 'Fiel Depositário(a)',
        value: 'bailee',
      },
      {
        name: 'Franqueado(a)',
        value: 'franchisee',
      },
      {
        name: 'Franqueador(a)',
        value: 'franchisor',
      },
      {
        name: 'Gestor',
        value: 'manager',
      },
      {
        name: 'Intermediário(a)',
        value: 'intermediary',
      },
      {
        name: 'Interveniente',
        value: 'intervening',
      },
      {
        name: 'Interveniente Anuente',
        value: 'consenting_intervenor',
      },
      {
        name: 'Interveniente Garantidor',
        value: 'intervening_guarantor',
      },
      {
        name: 'Licenciada',
        value: 'licensed',
      },
      {
        name: 'Licenciante',
        value: 'licensor',
      },
      {
        name: 'Locador',
        value: 'lessor',
      },
      {
        name: 'Locatário',
        value: 'lessee',
      },
      {
        name: 'Morador(a)',
        value: 'resident',
      },
      {
        name: 'Mutuante',
        value: 'lender',
      },
      {
        name: 'Outorgado(a)',
        value: 'grantee',
      },
      {
        name: 'Outorgante',
        value: 'grantor',
      },
      {
        name: 'Parte Compradora',
        value: 'buyer',
      },
      {
        name: 'Parte Vendedora',
        value: 'seller',
      },
      {
        name: 'Presidente',
        value: 'president',
      },
      {
        name: 'Prestador(a) De Serviços',
        value: 'service_provider',
      },
      {
        name: 'Procurador',
        value: 'attorney',
      },
      {
        name: 'Proprietário(a)',
        value: 'owner',
      },
      {
        name: 'Representante Legal',
        value: 'legal_representative',
      },
      {
        name: 'Responsável Legal',
        value: 'legal_guardian',
      },
      {
        name: 'Responsável Solidário',
        value: 'co_responsible',
      },
      {
        name: 'Secretário(a)',
        value: 'secretary',
      },
      {
        name: 'Segurado(a)',
        value: 'insured',
      },
      {
        name: 'Síndico(a)',
        value: 'building_manager',
      },
      {
        name: 'Sócio(a)',
        value: 'partner',
      },
      {
        name: 'Tesoureiro(a)',
        value: 'treasurer',
      },
      {
        name: 'Testemunha',
        value: 'witness',
      },
      {
        name: 'Vistoriador',
        value: 'surveyor',
      },
    ],
  },
];
