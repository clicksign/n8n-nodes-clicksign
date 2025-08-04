import { requirementOperations } from './operations';
import { addAuthFields } from './addAuth.fields';
import { addQualificationFields } from './addQualification.fields';
import { getAllRequirementFields } from './getAll.fields';
import { addRubricFields } from './addRubric.fields';
import { getRequirementDetailsFields } from './getDetails.fields';

export const requirement = [
  requirementOperations,
  ...addAuthFields,
  ...addQualificationFields,
  ...getAllRequirementFields,
  ...addRubricFields,
  ...getRequirementDetailsFields,
];
