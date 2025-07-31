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
// Signer
import { createSigner } from './signer/create.execute';
// Requirement
import { addAuthRequirement } from './requirement/addAuth.execute';
import { addQualificationRequirement } from './requirement/addQualification.execute';
// Notification
import { notifyEnvelope } from './notification/notifyEnvelope.execute';
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
  },
  signer: {
    create: createSigner,
  },
  requirement: {
    addAuth: addAuthRequirement,
    addQualification: addQualificationRequirement,
  },
  notification: {
    notifyEnvelope,
  },
  template: {
    create: createTemplate,
  },
  folder: {
    create: createFolder,
  },
};
