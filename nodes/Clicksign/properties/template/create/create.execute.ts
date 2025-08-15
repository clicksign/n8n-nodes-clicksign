import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function createTemplate(ef: IExecuteFunctions) {
  const name = getNodeParameterTyped<string>(ef, 'name');
  const base64 = getNodeParameterTyped<string>(ef, 'base64');
  const color = getNodeParameterTyped<string>(ef, 'color');

  const body = {
    data: {
      type: 'templates',
      attributes: {
        name,
        content_base64: base64,
        color,
      },
    },
  };
  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/templates`,
  };

  return await clicksignRequest(ef, options, 'Erro ao criar modelo');
}
