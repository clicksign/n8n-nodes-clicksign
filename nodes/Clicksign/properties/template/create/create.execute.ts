import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

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
  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/templates`,
  };

  return await clicksignRequest(ef, options, 'Error creating template');
}
