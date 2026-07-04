import { membershipOperations } from './operations';

import { createMembershipFields } from './create/create.fields';
import { getAllMembershipsFields } from './getAll/getAll.fields';
import { updateMembershipFields } from './update/update.fields';
import { deleteMembershipFields } from './delete/delete.fields';

export const membership = [
  membershipOperations,
  ...createMembershipFields,
  ...getAllMembershipsFields,
  ...updateMembershipFields,
  ...deleteMembershipFields,
];
