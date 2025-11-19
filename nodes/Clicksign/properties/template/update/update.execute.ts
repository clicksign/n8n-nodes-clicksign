import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function updateTemplate(ef: IExecuteFunctions) {
  const templateId = getNodeParameterTyped<string>(ef, 'templateId');
  const name = getNodeParameterTyped<string>(ef, 'name');
  const color = getNodeParameterTyped<string>(ef, 'color');
  const undefinedIfEmpty = (value: unknown) => (value ? value : undefined);

  const body = {
    data: {
      type: 'templates',
      id: templateId,
      attributes: {
        name: undefinedIfEmpty(name),
        color: undefinedIfEmpty(color),
      },
    },
  };
  const options: IHttpRequestOptions = {
    method: 'PATCH',
    body,
    url: `/templates/${templateId}`,
  };

  return await clicksignRequest(ef, options, 'Error updating template');
}
