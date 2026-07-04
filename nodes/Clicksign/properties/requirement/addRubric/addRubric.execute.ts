import { IExecuteFunctions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { addRequirement } from '../shared/addRequirement/addRequirement.execute';

export async function addRubricRequirement(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');
  const pages = getNodeParameterTyped<string>(ef, 'pages');
  const kind = getNodeParameterTyped<string>(ef, 'kind');
  const rubricField = getNodeParameterTyped<string>(ef, 'rubricField');

  const undefinedIfFalsy = (value: any) => (value ? value : undefined);

  return await addRequirement(ef, {
    attributes: {
      action: 'rubricate',
      pages: undefinedIfFalsy(pages),
      kind,
      rubric_field: undefinedIfFalsy(rubricField),
    },
    documentId,
    envelopeId,
    signerId,
    errorMessage: 'Error adding rubric requirement',
  });
}
