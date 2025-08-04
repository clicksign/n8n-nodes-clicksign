import { IExecuteFunctions } from 'n8n-workflow';
// Envelope
import { createEnvelope } from './envelope/create.execute';
import { getAllEnvelopes } from './envelope/getAll.execute';
import { activateEnvelope } from './envelope/activate.execute';
import { getEnvelopeDetails } from './envelope/getDetails.execute';
import { updateEnvelope } from './envelope/update.execute';
import { deleteEnvelope } from './envelope/delete.execute';
// Document
import { getAllDocuments } from './document/getAll.execute';
import { createDocumentByTemplate } from './document/createByTemplate.execute';
import { createDocumentByBase64 } from './document/createByBase64.execute';
import { updateDocument } from './document/update.execute';
import { getDocumentDetails } from './document/getDetails.execute';
import { deleteDocument } from './document/delete.execute';
// Signer
import { createSigner } from './signer/create.execute';
import { getAllSigners } from './signer/getAll.execute';
import { getSignerDetails } from './signer/getDetails.execute';
import { deleteSigner } from './signer/delete.execute';
// Requirement
import { addAuthRequirement } from './requirement/addAuth.execute';
import { addQualificationRequirement } from './requirement/addQualification.execute';
import { addRubricRequirement } from './requirement/addRubric.execute';
import { getAllRequirements } from './requirement/getAll.execute';
import { getRequirementDetails } from './requirement/getDetails.execute';
import { deleteRequirement } from './requirement/delete.execute';
// Notification
import { notifyEnvelope } from './notification/notifyEnvelope.execute';
import { notifySigner } from './notification/notifySigner.execute';
// Template
import { createTemplate } from './template/create.execute';
// Folder
import { createFolder } from './folder/create.execute';

type ResourceOperationFunctions = {
  [resource: string]: {
    [operation: string]: (ef: IExecuteFunctions) => Promise<any>;
  };
};

export const resourceOperationsFunctions: ResourceOperationFunctions = {
  envelope: {
    create: createEnvelope,
    getAll: getAllEnvelopes,
    activate: activateEnvelope,
    getDetails: getEnvelopeDetails,
    update: updateEnvelope,
    delete: deleteEnvelope,
  },
  document: {
    getAll: getAllDocuments,
    createByTemplate: createDocumentByTemplate,
    createByBase64: createDocumentByBase64,
    update: updateDocument,
    getDetails: getDocumentDetails,
    delete: deleteDocument,
  },
  signer: {
    create: createSigner,
    getAll: getAllSigners,
    getDetails: getSignerDetails,
    delete: deleteSigner,
  },
  requirement: {
    addAuth: addAuthRequirement,
    addQualification: addQualificationRequirement,
    addRubric: addRubricRequirement,
    getAll: getAllRequirements,
    getDetails: getRequirementDetails,
    delete: deleteRequirement,
  },
  notification: {
    notifyEnvelope,
    notifySigner,
  },
  template: {
    create: createTemplate,
  },
  folder: {
    create: createFolder,
  },
};
