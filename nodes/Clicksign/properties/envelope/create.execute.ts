import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../shared/clicksignRequest';
import { getNodeParameterTyped } from '../shared/getNodeParameterTyped';
import { formatLocalISODate } from './shared/formatLocalISODate';

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
  const folderId = getNodeParameterTyped<string>(ef, 'folderId');

  const relationshipObj = folderId
    ? {
        relationships: {
          folder: {
            data: {
              id: folderId,
              type: 'folders',
            },
          },
        },
      }
    : {};
  const deadlineAt = deadlineAtRaw
    ? formatLocalISODate(new Date(deadlineAtRaw))
    : undefined;

  const undefinedIfFalsy = (value: any) => (value ? value : undefined);

  const body = {
    data: {
      type: 'envelopes',
      attributes: {
        name,
        locale,
        auto_close: autoClose,
        remind_interval: remindInterval,
        block_after_refusal: blockAfterRefusal,
        deadline_at: undefinedIfFalsy(deadlineAt),
        default_subject: undefinedIfFalsy(defaultSubject),
        default_message: undefinedIfFalsy(defaultMessage),
      },
      ...relationshipObj,
    },
  };

  const options: IRequestOptions = {
    method: 'POST',
    body,
    uri: `/envelopes`,
  };

  return await clicksignRequest(ef, options, 'Erro ao criar envelope');
}
