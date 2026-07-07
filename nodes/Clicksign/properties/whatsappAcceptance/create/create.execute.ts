import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../../shared/clicksignRequest';
import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';

export async function createWhatsappAcceptance(ef: IExecuteFunctions) {
  const title = getNodeParameterTyped<string>(ef, 'title');
  const senderNameOption = getNodeParameterTyped<string>(
    ef,
    'senderNameOption',
  );
  const message = getNodeParameterTyped<string>(ef, 'message');
  const signerPhone = getNodeParameterTyped<string>(ef, 'signerPhone');
  const signerName = getNodeParameterTyped<string>(ef, 'signerName');

  const body = {
    data: {
      type: 'acceptance_term_whatsapps',
      attributes: {
        title,
        sender_name_option: senderNameOption,
        message,
        signer_phone: signerPhone,
        signer_name: signerName,
      },
    },
  };

  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/acceptance_term/whatsapps`,
  };

  return await clicksignRequest(
    ef,
    options,
    'Error creating whatsapp acceptance term',
  );
}
