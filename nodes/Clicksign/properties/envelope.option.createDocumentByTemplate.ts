import {
  INodeProperties,
  INodePropertyCollection,
  INodePropertyOptions,
} from 'n8n-workflow';

export const createDocumentByTemplateOption:
  | INodePropertyCollection
  | INodeProperties
  | INodePropertyOptions = {
  name: 'Create a Document by Template',
  value: 'createDocumentByTemplate',
  action: 'Create a document by template',
  displayOptions: {
    show: {
      resource: ['envelopes'],
      operation: ['createDocumentByTemplate'],
    },
  },
  routing: {
    request: {
      method: 'POST',
      url: '=/envelopes/{{$parameter.envelopeId}}/documents',
      body: {
        data: {
          type: 'documents',
          attributes: {
            filename:
              "={{$parameter.fileName.endsWith('.docx') ? $parameter.fileName : $parameter.fileName + '.docx'}}",
            template: {
              key: '={{$parameter.templateId}}',
              data: '={{JSON.parse($parameter.templateData)}}',
            },
            metadata: '={{JSON.parse($parameter.metadata)}}',
          },
        },
      },
    },
  },
};
