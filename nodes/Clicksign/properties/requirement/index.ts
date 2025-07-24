import { requirementOperations } from './operations';
import { addAuthFields } from './addAuth.fields';
import { addQualificationFields } from './addQualification.fields';

export const requirement = [
  requirementOperations,
  ...addAuthFields(),
  ...addQualificationFields(),
];
