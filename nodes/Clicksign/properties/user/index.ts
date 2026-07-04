import { userOperations } from './operations';

import { createUserFields } from './create/create.fields';
import { getAllUsersFields } from './getAll/getAll.fields';
import { getDetailsUserFields } from './getDetails/getDetails.fields';

export const user = [
  userOperations,
  ...createUserFields,
  ...getAllUsersFields,
  ...getDetailsUserFields,
];
