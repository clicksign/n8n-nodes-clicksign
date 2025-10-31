import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

export async function deleteEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');

  const options: IHttpRequestOptions = {
    method: 'DELETE',
    url: `/envelopes/${envelopeId}`,
  };

  return await clicksignRequest(ef, options, t('envelope.errors.delete'));
}
