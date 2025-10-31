import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

export async function getAllFolders(ef: IExecuteFunctions) {
  const inRoot = getNodeParameterTyped<boolean>(ef, 'inRoot');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/folders?filter[in_root]=${inRoot}`,
  };

  return await clicksignRequest(ef, options, t('folder.errors.getAll'));
}
