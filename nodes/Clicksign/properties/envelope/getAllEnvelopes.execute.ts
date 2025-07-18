import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/request';

export async function getAllEnvelopes(ef: IExecuteFunctions) {
  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes`,
  };

  return await clicksignRequest(ef, options, 'Erro ao obter envelopes');
}
