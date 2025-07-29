import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

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

  const options: IRequestOptions = {
    method: 'GET',
    uri: `/envelopes${parameters}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao obter envelopes');
}
