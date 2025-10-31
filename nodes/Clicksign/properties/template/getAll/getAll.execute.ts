import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

export async function getAllTemplates(ef: IExecuteFunctions) {
  const options: IHttpRequestOptions = {
    method: 'GET',
    url: `/templates`,
  };

  return await clicksignRequest(ef, options, t('template.errors.getAll'));
}
