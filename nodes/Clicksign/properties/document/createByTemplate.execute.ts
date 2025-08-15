import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

export async function createDocumentByTemplate(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const filenameRaw = getNodeParameterTyped<string>(ef, 'filename');
  const templateId = getNodeParameterTyped<string>(ef, 'templateId');
  const templateData = getNodeParameterTyped<string>(ef, 'templateData');
  const metadata = getNodeParameterTyped<string>(ef, 'metadata');

  const filename = filenameRaw.endsWith('.docx')
    ? filenameRaw
    : `${filenameRaw}.docx`;

  const body = {
    data: {
      type: 'documents',
      attributes: {
        filename,
        template: {
          key: templateId,
          data: JSON.parse(templateData),
        },
        metadata: JSON.parse(metadata),
      },
    },
  };

  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes/${envelopeId}/documents`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao criar documento por modelo',
  );
}
