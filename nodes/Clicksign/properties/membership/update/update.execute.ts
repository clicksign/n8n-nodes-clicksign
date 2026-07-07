import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function updateMembership(ef: IExecuteFunctions) {
  const membershipId = getNodeParameterTyped<string>(ef, 'membershipId');
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
      id: membershipId,
      type: 'memberships',
      attributes: {
        role: role ? role : undefined,
        consumption_accessible: consumptionAccessible,
        tracking_accessible: trackingAccessible,
        folder_management_accessible: folderManagementAccessible,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'PUT',
    body,
    url: `/memberships/${membershipId}`,
  };

  return await clicksignRequest(ef, options, 'Error updating membership');
}
