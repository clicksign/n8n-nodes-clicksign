import { IExecuteFunctions } from 'n8n-workflow';
// Envelope
import { createEnvelope } from './envelope/create/create.execute';
import { getAllEnvelopes } from './envelope/getAll/getAll.execute';
import { activateEnvelope } from './envelope/activate/activate.execute';
import { getEnvelopeDetails } from './envelope/getDetails/getDetails.execute';
import { updateEnvelope } from './envelope/update/update.execute';
import { deleteEnvelope } from './envelope/delete/delete.execute';
// Document
import { getAllDocuments } from './document/getAll/getAll.execute';
import { createDocumentByTemplate } from './document/createByTemplate/createByTemplate.execute';
import { createDocumentByBase64 } from './document/createByBase64/createByBase64.execute';
import { updateDocument } from './document/update/update.execute';
import { getDocumentDetails } from './document/getDetails/getDetails.execute';
import { deleteDocument } from './document/delete/delete.execute';
// Signer
import { createSigner } from './signer/create/create.execute';
import { getAllSigners } from './signer/getAll/getAll.execute';
import { getSignerDetails } from './signer/getDetails/getDetails.execute';
import { deleteSigner } from './signer/delete/delete.execute';
import { createAutoSignature } from './signer/createAutoSignature/createAutoSignature.execute';
// Requirement
import { addAuthRequirement } from './requirement/addAuth/addAuth.execute';
import { addQualificationRequirement } from './requirement/addQualification/addQualification.execute';
import { addRubricRequirement } from './requirement/addRubric/addRubric.execute';
import { getAllRequirements } from './requirement/getAll/getAll.execute';
import { getRequirementDetails } from './requirement/getDetails/getDetails.execute';
import { deleteRequirement } from './requirement/delete/delete.execute';
import { bulkRequirements } from './requirement/bulk/bulk.execute';
// Notification
import { notifyEnvelope } from './notification/notifyEnvelope/notifyEnvelope.execute';
import { notifySigner } from './notification/notifySigner/notifySigner.execute';
// Template
import { createTemplate } from './template/create/create.execute';
import { getAllTemplates } from './template/getAll/getAll.execute';
import { updateTemplate } from './template/update/update.execute';
import { getTemplateDetails } from './template/getDetails/getDetails.execute';
import { deleteTemplate } from './template/delete/delete.execute';
// Folder
import { createFolder } from './folder/create/create.execute';
import { getAllFolders } from './folder/getAll/getAll.execute';
import { getFolderDetails } from './folder/getDetails/getDetails.execute';
// Event
import { eventsFromEnvelope } from './event/fromEnvelope/fromEnvelope.execute';
import { eventsFromDocument } from './event/fromDocument/fromDocument.execute';
// Watcher
import { createWatcher } from './watcher/create/create.execute';
import { getAllWatchers } from './watcher/getAll/getAll.execute';
import { getWatcherDetails } from './watcher/getDetails/getDetails.execute';
import { deleteWatcher } from './watcher/delete/delete.execute';

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
    createAutoSignature: createAutoSignature,
  },
  requirement: {
    addAuth: addAuthRequirement,
    addQualification: addQualificationRequirement,
    addRubric: addRubricRequirement,
    getAll: getAllRequirements,
    getDetails: getRequirementDetails,
    delete: deleteRequirement,
    bulk: bulkRequirements,
  },
  notification: {
    notifyEnvelope,
    notifySigner,
  },
  template: {
    create: createTemplate,
    getAll: getAllTemplates,
    update: updateTemplate,
    getDetails: getTemplateDetails,
    delete: deleteTemplate,
  },
  folder: {
    create: createFolder,
    getAll: getAllFolders,
    getDetails: getFolderDetails,
  },
  event: {
    fromEnvelope: eventsFromEnvelope,
    fromDocument: eventsFromDocument,
  },
  watcher: {
    create: createWatcher,
    getAll: getAllWatchers,
    getDetails: getWatcherDetails,
    delete: deleteWatcher,
  },
};
