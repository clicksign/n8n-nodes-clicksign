import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function getTemplateDetails(ef: IExecuteFunctions) {
  const templateId = getNodeParameterTyped<string>(ef, 'templateId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/templates/${templateId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Erro ao obter detalhes do modelo',
  );
}
