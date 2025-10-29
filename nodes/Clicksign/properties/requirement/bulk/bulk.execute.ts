import { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

import { getNodeParameterTyped } from '../../shared/getNodeParameterTyped';
import { clicksignRequest } from '../../shared/clicksignRequest';
import { t } from '../../shared/translations';

type Requirements = 'agree' | 'provide_evidence' | 'rubricate';

type AddRequirement = {
  operation: 'add';
  requirement: {
    details: {
      requirementType: Requirements;
      auth?: string;
      role?: string;
      pages?: string;
      documentId: string;
      signerId: string;
    };
  };
};

type AddOperation = {
  op: 'add';
  data: {
    type: 'requirements';
    attributes: {
      action: Requirements;
      role?: string;
      auth?: string;
      pages?: string;
    };
    relationships: {
      document: {
        data: {
          type: 'documents';
          id: string;
        };
      };
      signer: {
        data: {
          type: 'signers';
          id: string;
        };
      };
    };
  };
};

type RemoveRequirement = {
  operation: 'remove';
  requirementId: string;
};

type RemoveOperation = {
  op: 'remove';
  ref: {
    type: 'requirements';
    id: string;
  };
};

type Operations = {
  fields?: Array<AddRequirement | RemoveRequirement>;
};

export function formatAddOperation(requirement: AddRequirement): AddOperation {
  const {
    requirement: { details },
  } = requirement;

  return {
    op: 'add',
    data: {
      type: 'requirements',
      attributes: {
        action: details.requirementType,
        role: details.role,
        auth: details.auth,
        pages: details.pages,
      },
      relationships: {
        document: {
          data: {
            type: 'documents',
            id: details.documentId,
          },
        },
        signer: {
          data: {
            type: 'signers',
            id: details.signerId,
          },
        },
      },
    },
  };
}

export function formatRemoveOperation(
  requirement: RemoveRequirement,
): RemoveOperation {
  return {
    op: 'remove',
    ref: {
      type: 'requirements',
      id: requirement.requirementId,
    },
  };
}

export async function bulkRequirements(ef: IExecuteFunctions) {
  const envelopeId = getNodeParameterTyped<string>(ef, 'envelopeId');
  const operations = getNodeParameterTyped<Operations>(ef, 'operations');
  const atomicOperations: Array<AddOperation | RemoveOperation> = [];

  operations.fields?.forEach((op) => {
    if (op.operation === 'add') {
      atomicOperations.push(formatAddOperation(op));
    } else {
      atomicOperations.push(formatRemoveOperation(op));
    }
  });

  const body = {
    'atomic:operations': atomicOperations,
  };
  const options: IHttpRequestOptions = {
    method: 'POST',
    body,
    url: `/envelopes/${envelopeId}/bulk_requirements`,
  };

  return await clicksignRequest(ef, options, t('requirement.errors.bulk'));
}
