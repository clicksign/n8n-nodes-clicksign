import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { t } from '../../shared/translations';

export async function deleteTemplate(ef: IExecuteFunctions) {
  const templateId = getNodeParameterTyped<string>(ef, 'templateId');

  const options: IHttpRequestOptions = {
    method: 'DELETE',
    url: `/templates/${templateId}`,
  };

  return await clicksignRequest(ef, options, t('template.errors.delete'));
}
