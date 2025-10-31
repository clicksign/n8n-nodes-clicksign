import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { formatBirthday, formatDocumentation } from '../shared/formatters';
import { t } from '../../shared/translations';

export async function createAutoSignature(ef: IExecuteFunctions) {
  const name = getNodeParameterTyped<string>(ef, 'name');
  const email = getNodeParameterTyped<string>(ef, 'email');
  const apiEmail = getNodeParameterTyped<string>(ef, 'apiEmail');
  const adminEmail = getNodeParameterTyped<string>(ef, 'adminEmail');
  const documentation = getNodeParameterTyped<string>(ef, 'documentation');
  const birthday = getNodeParameterTyped<string>(ef, 'birthday');

  const body = {
    data: {
      type: 'auto_signature_terms',
      attributes: {
        signer: {
          documentation: formatDocumentation(documentation),
          birthday: formatBirthday(birthday),
          name,
          email,
        },
        admin_email: adminEmail,
        api_email: apiEmail,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/auto_signature/terms`,
  };

  return await clicksignRequest(
    ef,
    options,
    t('signer.errors.createAutoSignature'),
  );
}
