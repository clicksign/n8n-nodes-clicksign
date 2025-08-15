import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';

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
  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/folders`,
  };

  return await clicksignRequest(ef, options, 'Erro ao criar pasta');
}
