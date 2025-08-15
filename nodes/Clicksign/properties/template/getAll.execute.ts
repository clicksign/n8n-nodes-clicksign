import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../shared/clicksignRequest';

export async function getAllTemplates(ef: IExecuteFunctions) {
  const options: IRequestOptions = {
    method: 'GET',
    uri: `/templates`,
  };

  return await clicksignRequest(ef, options, 'Erro ao listar modelos');
}
