import { requirementOperations } from './operations';
import { addAuthFields } from './addAuth/addAuth.fields';
import { addQualificationFields } from './addQualification/addQualification.fields';
import { getAllRequirementFields } from './getAll/getAll.fields';
import { addRubricFields } from './addRubric/addRubric.fields';
import { getRequirementDetailsFields } from './getDetails/getDetails.fields';
import { deleteRequirementFields } from './delete/delete.fields';
import { bulkFields } from './bulk/bulk.fields';

export const requirement = [
  requirementOperations,
  ...addAuthFields,
  ...addQualificationFields,
  ...getAllRequirementFields,
  ...addRubricFields,
  ...getRequirementDetailsFields,
  ...deleteRequirementFields,
  ...bulkFields,
];
