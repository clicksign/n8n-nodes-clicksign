import { INodeProperties } from 'n8n-workflow';

type RequirementOperation = 'addAuth' | 'addQualification' | 'addRubric';

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
          operation: [operation],
          resource: ['requirement'],
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
          operation: [operation],
          resource: ['requirement'],
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
          operation: [operation],
          resource: ['requirement'],
        },
      },
    },
  ];
}
