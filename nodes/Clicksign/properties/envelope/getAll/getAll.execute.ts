import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

type Filter = 'status' | 'name' | 'created' | 'modified' | 'deadline_at';

function formatUrlParameters(
  value: string,
  filter: Filter,
  params: string,
): string {
  const paramValue = value ? `filter[${filter}]=${value}` : '';

  if (paramValue) {
    return !params ? paramValue : `${params}&${paramValue}`;
  }

  return params;
}

export async function getAllEnvelopes(ef: IExecuteFunctions) {
  const status = getNodeParameterTyped<string>(ef, 'status');
  const name = getNodeParameterTyped<string>(ef, 'name');
  const created = getNodeParameterTyped<string>(ef, 'created');
  const modified = getNodeParameterTyped<string>(ef, 'modified');
  const deadline = getNodeParameterTyped<string>(ef, 'deadline');
  const sort = getNodeParameterTyped<string>(ef, 'sort');
  let parameters = '';

  parameters = formatUrlParameters(status, 'status', parameters);
  parameters = formatUrlParameters(name, 'name', parameters);
  parameters = formatUrlParameters(created, 'created', parameters);
  parameters = formatUrlParameters(modified, 'modified', parameters);
  parameters = formatUrlParameters(deadline, 'deadline_at', parameters);
  parameters = sort
    ? parameters
      ? `${parameters}&sort=${sort}`
      : `sort=${sort}`
    : parameters;
  parameters = parameters ? `?${parameters}` : parameters;

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/envelopes${parameters}`,
  };

  return await clicksignRequest(ef, options, 'Error getting envelopes');
}
