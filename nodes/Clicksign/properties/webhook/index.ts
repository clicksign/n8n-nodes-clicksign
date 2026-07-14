import { webhookOperations } from './operations';

import { createWebhookFields } from './create/create.fields';
import { getAllWebhooksFields } from './getAll/getAll.fields';
import { getDetailsWebhookFields } from './getDetails/getDetails.fields';
import { updateWebhookFields } from './update/update.fields';
import { deleteWebhookFields } from './delete/delete.fields';

export const webhook = [
  webhookOperations,
  ...createWebhookFields,
  ...getAllWebhooksFields,
  ...getDetailsWebhookFields,
  ...updateWebhookFields,
  ...deleteWebhookFields,
];
