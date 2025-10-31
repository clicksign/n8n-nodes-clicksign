import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

import { t } from '../../shared/translations';

export async function getFolderDetails(ef: IExecuteFunctions) {
  const folderId = getNodeParameterTyped<string>(ef, 'folderId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/folders/${folderId}`,
  };

  return await clicksignRequest(ef, options, t('folder.errors.getDetails'));
}
