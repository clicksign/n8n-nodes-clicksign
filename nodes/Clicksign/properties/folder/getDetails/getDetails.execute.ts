import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getFolderDetails(ef: IExecuteFunctions) {
  const folderId = getNodeParameterTyped<string>(ef, 'folderId');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/folders/${folderId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao obter detalhes da pasta');
}
