import { IExecuteFunctions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';
import { addRequirement } from './shared/addRequirement.execute';

export async function addRubricRequirement(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');
  const pages = getNodeParameterTyped<string>(ef, 'pages');

  return await addRequirement(ef, {
    attributes: {
      action: 'rubricate',
      pages,
    },
    documentId,
    envelopeId,
    signerId,
    errorMessage: 'Erro ao adicionar requisito de rubrica',
  });
}
