import { INodeProperties } from 'n8n-workflow';
import { t } from '../../../shared/translations';

type RequirementOperation = 'addAuth' | 'addQualification' | 'addRubric';

export function addRequirementFields(
  operation: RequirementOperation,
): INodeProperties[] {
  return [
    {
      displayName: t('requirement.shared.envelopeId.displayName'),
      name: 'envelopeId',
      type: 'string',
      required: true,
      default: '',
      description: t('requirement.shared.envelopeId.description'),
      displayOptions: {
        show: {
          operation: [operation],
          resource: ['requirement'],
        },
      },
    },
    {
      displayName: t('requirement.shared.documentId.displayName'),
      name: 'documentId',
      type: 'string',
      required: true,
      default: '',
      description: t('requirement.shared.documentId.description'),
      displayOptions: {
        show: {
          operation: [operation],
          resource: ['requirement'],
        },
      },
    },
    {
      displayName: t('requirement.shared.signerId.displayName'),
      name: 'signerId',
      type: 'string',
      required: true,
      default: '',
      description: t('requirement.shared.signerId.description'),
      displayOptions: {
        show: {
          operation: [operation],
          resource: ['requirement'],
        },
      },
    },
  ];
}
