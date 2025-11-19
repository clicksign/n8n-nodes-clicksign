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
      description: 'ID of the Envelope that will receive the requirement',
      displayOptions: {
        show: {
          operation: [operation],
          resource: ['requirement'],
        },
      },
    },
    {
      displayName: 'Document ID',
      name: 'documentId',
      type: 'string',
      required: true,
      default: '',
      description: 'ID of the Document that will receive the requirement',
      displayOptions: {
        show: {
          operation: [operation],
          resource: ['requirement'],
        },
      },
    },
    {
      displayName: 'Signer ID',
      name: 'signerId',
      type: 'string',
      required: true,
      default: '',
      description: 'ID of the Signer that will receive the requirement',
      displayOptions: {
        show: {
          operation: [operation],
          resource: ['requirement'],
        },
      },
    },
  ];
}
