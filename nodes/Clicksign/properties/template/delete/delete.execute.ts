import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function deleteTemplate(ef: IExecuteFunctions) {
  const templateId = getNodeParameterTyped<string>(ef, 'templateId');

  const options: IRequestOptions = {
    method: 'DELETE',
    uri: `/templates/${templateId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao excluir modelo');
}
