import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function deleteTemplate(ef: IExecuteFunctions) {
  const templateId = getNodeParameterTyped<string>(ef, 'templateId');

  const options: IRequestOptions = {
    method: 'DELETE',
    uri: `/templates/${templateId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao excluir modelo');
}
