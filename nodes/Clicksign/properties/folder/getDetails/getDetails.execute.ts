import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function getFolderDetails(ef: IExecuteFunctions) {
  const folderId = getNodeParameterTyped<string>(ef, 'folderId');

  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/folders/${folderId}`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error getting details of a folder',
  );
}
