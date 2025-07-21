import { IExecuteFunctions } from 'n8n-workflow';

import { createSigner } from './signer/createSigner.execute';
import { getAllDocuments } from './document/getDocuments.execute';
import { createDocumentByTemplate } from './document/createDocumentByTemplate.execute';
import { createEnvelope } from './envelope/createEnvelope.execute';
import { getAllEnvelopes } from './envelope/getAllEnvelopes.execute';
import { addAuthRequirement } from './requirement/addAuthRequirement.execute';
import { addQualificationRequirement } from './requirement/addQualificationRequirement.execute';

type ResourceOperationFunctions = {
  [resource: string]: {
    [operation: string]: (ef: IExecuteFunctions) => Promise<any>;
  };
};

export const resourceOperationsFunctions: ResourceOperationFunctions = {
  document: {
    getAll: getAllDocuments,
    createByTemplate: createDocumentByTemplate,
  },
  envelope: {
    create: createEnvelope,
    getAll: getAllEnvelopes,
  },
  signer: {
    create: createSigner,
  },
  requirement: {
    addAuth: addAuthRequirement,
    addQualification: addQualificationRequirement,
  },
};
