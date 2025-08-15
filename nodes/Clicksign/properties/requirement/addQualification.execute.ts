import { IExecuteFunctions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';
import { addRequirement } from './shared/addRequirement.execute';

export async function addQualificationRequirement(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');
  const role = getNodeParameterTyped<string>(ef, 'role');

  return await addRequirement(ef, {
    attributes: {
      action: 'agree',
      role,
    },
    documentId,
    envelopeId,
    signerId,
    errorMessage: 'Erro ao adicionar requisito de qualificação',
  });
}
