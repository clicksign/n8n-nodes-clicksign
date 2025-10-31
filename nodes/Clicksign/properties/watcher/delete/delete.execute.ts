import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

export async function deleteWatcher(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const watcherId = getNodeParameterTyped<string>(ef, 'watcherId');

  const options: IHttpRequestOptions = {
    method: 'DELETE',
    url: `/envelopes/${envelopeId}/signature_watchers/${watcherId}`,
  };

  return await clicksignRequest(ef, options, t('watcher.errors.delete'));
}
