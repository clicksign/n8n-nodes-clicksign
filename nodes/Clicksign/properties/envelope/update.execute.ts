import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

import { clicksignRequest } from '../utils/clicksignRequest';
import { getNodeParameterTyped } from '../utils/getNodeParameterTyped';

export function formatLocalISO(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const mins = date.getMinutes().toString().padStart(2, '0');
  const secs = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${mins}:${secs}`;
}

export async function updateEnvelope(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
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
    ? formatLocalISO(new Date(deadlineAtRaw))
    : undefined;

  const body = {
    data: {
      type: 'envelopes',
      id: envelopeId,
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
      ...relationshipObj,
    },
  };

  const options: IRequestOptions = {
    method: 'PATCH',
    body,
    uri: `/envelopes/${envelopeId}`,
  };

  return await clicksignRequest(ef, options, 'Erro ao atualizar envelope');
}
