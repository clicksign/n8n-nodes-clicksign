import { INodeProperties } from 'n8n-workflow';

type RequirementOperation = 'addAuth' | 'addQualification';

export function addRequirementFields(
  operation: RequirementOperation,
): INodeProperties[] {
  return [
    {
      displayName: 'Envelope ID',
      name: 'envelopeId',
      type: 'string',
      required: true,
      default: '',
      description: 'ID do Envelope que receberá o requisito',
      displayOptions: {
        show: {
          resource: ['requirement'],
          operation: [operation],
        },
      },
    },
    {
      displayName: 'Documento ID',
      name: 'documentId',
      type: 'string',
      required: true,
      default: '',
      description: 'ID do documento que receberá o requisito',
      displayOptions: {
        show: {
          resource: ['requirement'],
          operation: [operation],
        },
      },
    },
    {
      displayName: 'Signatário ID',
      name: 'signerId',
      type: 'string',
      required: true,
      default: '',
      description: 'ID do signatário que receberá o requisito',
      displayOptions: {
        show: {
          resource: ['requirement'],
          operation: [operation],
        },
      },
    },
  ];
}
