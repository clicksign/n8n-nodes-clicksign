import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function updateMembership(ef: IExecuteFunctions) {
  const membershipId = getNodeParameterTyped<string>(ef, 'membershipId');
  const role = getNodeParameterTyped<string>(ef, 'role');
  const consumptionAccessible = getNodeParameterTyped<
    string | boolean
  >(ef, 'consumptionAccessible');
  const trackingAccessible = getNodeParameterTyped<
    string | boolean
  >(ef, 'trackingAccessible');
  const folderManagementAccessible = getNodeParameterTyped<
    string | boolean
  >(ef, 'folderManagementAccessible');

  const optionalBoolean = (value: string | boolean) =>
    value === '' ? undefined : value;

  const body = {
    data: {
      id: membershipId,
      type: 'memberships',
      attributes: {
        role: role ? role : undefined,
        consumption_accessible: optionalBoolean(consumptionAccessible),
        tracking_accessible: optionalBoolean(trackingAccessible),
        folder_management_accessible: optionalBoolean(folderManagementAccessible),
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
