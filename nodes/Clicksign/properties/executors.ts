import { IExecuteFunctions } from 'n8n-workflow';

import { createEnvelope } from './envelope/create.execute';
import { getAllEnvelopes } from './envelope/getAll.execute';
import { activateEnvelope } from './envelope/activate.execute';

import { getAllDocuments } from './document/getAll.execute';
import { createDocumentByTemplate } from './document/createByTemplate.execute';
import { createDocumentByBase64 } from './document/createByBase64.execute';

import { createSigner } from './signer/create.execute';

import { addAuthRequirement } from './requirement/addAuth.execute';
import { addQualificationRequirement } from './requirement/addQualification.execute';

import { notifyEnvelope } from './notification/notifyEnvelope.execute';

import { createTemplate } from './template/create.execute';

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
};
