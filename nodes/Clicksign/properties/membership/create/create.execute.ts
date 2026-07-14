import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function createMembership(ef: IExecuteFunctions) {
  const userId = getNodeParameterTyped<string>(ef, 'userId');
  const role = getNodeParameterTyped<string>(ef, 'role');
  const consumptionAccessible = getNodeParameterTyped<boolean>(
    ef,
    'consumptionAccessible',
  );
  const trackingAccessible = getNodeParameterTyped<boolean>(
    ef,
    'trackingAccessible',
  );
  const folderManagementAccessible = getNodeParameterTyped<boolean>(
    ef,
    'folderManagementAccessible',
  );

  const body = {
    data: {
      type: 'memberships',
      attributes: {
        role,
        consumption_accessible: consumptionAccessible,
        tracking_accessible: trackingAccessible,
        folder_management_accessible: folderManagementAccessible,
      },
      relationships: {
        user: {
          data: {
            id: userId,
            type: 'users',
          },
        },
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/memberships`,
  };

  return await clicksignRequest(ef, options, 'Error creating membership');
}
