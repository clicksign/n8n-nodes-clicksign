import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function getAllFolders(ef: IExecuteFunctions) {
  const inRoot = getNodeParameterTyped<boolean>(ef, 'inRoot');

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/folders?filter[in_root]=${inRoot}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao listar pastas');
}
