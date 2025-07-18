import { IExecuteFunctions } from 'n8n-workflow';

import { createSigner } from './signer/createSigner.execute';
import { getDocuments } from './documents/getDocuments.execute';
import { createDocumentByTemplate } from './documents/createDocumentByTemplate.execute';
import { createEnvelope } from './envelope/createEnvelope.execute';
import { getAllEnvelopes } from './envelope/getAllEnvelopes.execute';

type ResourceOperationFunctions = {
  [resource: string]: {
    [operation: string]: (ef: IExecuteFunctions) => Promise<any>;
  };
};

export const resourceOperationsFunctions: ResourceOperationFunctions = {
  'api-documentos': {
    'get-documents': getDocuments,
    'create-document-by-template': createDocumentByTemplate,
  },
  'api-envelope': {
    'create-envelope': createEnvelope,
    'get-all-envelopes': getAllEnvelopes,
  },
  'api-signatarios': {
    'create-signer': createSigner,
  },
};
