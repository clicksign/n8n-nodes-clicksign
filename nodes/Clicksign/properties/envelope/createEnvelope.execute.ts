import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export async function createEnvelope(ef: IExecuteFunctions) {
  const name = getNodeParameterTyped<string>(ef, 'envelopeName');
  const locale = getNodeParameterTyped<string>(ef, 'locale');
  const autoClose = getNodeParameterTyped<boolean>(ef, 'autoClose');
  const remindInterval = getNodeParameterTyped<number>(ef, 'remindInterval');
  const blockAfterRefusal = getNodeParameterTyped<boolean>(
    ef,
    'blockAfterRefusal',
  );
  const deadlineAtRaw = getNodeParameterTyped<string>(ef, 'deadlineAt');
  const defaultSubject = getNodeParameterTyped<string>(ef, 'defaultSubject');
  const defaultMessage = getNodeParameterTyped<string>(ef, 'defaultMessage');

  const deadlineAt = deadlineAtRaw
    ? new Date(deadlineAtRaw).toISOString()
    : undefined;

  const body = {
    data: {
      type: 'envelopes',
      attributes: {
        name,
        locale,
        auto_close: autoClose,
        remind_interval: remindInterval,
        block_after_refusal: blockAfterRefusal,
        deadline_at: deadlineAt,
        default_subject: defaultSubject,
        default_message: defaultMessage,
      },
    },
  };

  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes`,
  };

  return await clicksignRequest(ef, options, 'Erro ao criar envelope');
}
