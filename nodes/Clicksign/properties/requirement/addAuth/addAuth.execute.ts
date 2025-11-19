import { IExecuteFunctions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { addRequirement } from '../shared/addRequirement/addRequirement.execute';

export async function addAuthRequirement(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const documentId = getNodeParameterTyped<string>(ef, 'documentId');
  const signerId = getNodeParameterTyped<string>(ef, 'signerId');
  const auth = getNodeParameterTyped<string>(ef, 'auth');

  return await addRequirement(ef, {
    attributes: {
      action: 'provide_evidence',
      auth,
    },
    documentId,
    envelopeId,
    signerId,
    errorMessage: 'Error adding authentication requirement',
  });
}
