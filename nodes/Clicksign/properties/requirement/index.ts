import { requirementOperations } from './operations';
import { addRequirementFields } from './shared/addRequirement.fields';

export const requirement = [
  requirementOperations,
  ...addRequirementFields('addAuth'),
  ...addRequirementFields('addQualification'),
];
