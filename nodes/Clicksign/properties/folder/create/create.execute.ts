import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

export async function createFolder(ef: IExecuteFunctions) {
  const name = getNodeParameterTyped<string>(ef, 'name');
  const folderId = getNodeParameterTyped<string>(ef, 'folderId');
  const relationshipObj = folderId
    ? {
        relationships: {
          folder: {
            data: {
              id: folderId,
              type: 'folders',
            },
          },
        },
      }
    : {};

  const body = {
    data: {
      type: 'folders',
      attributes: {
        name,
      },
      ...relationshipObj,
    },
  };
  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/folders`,
  };

  return await clicksignRequest(ef, options, t('folder.errors.create'));
}
