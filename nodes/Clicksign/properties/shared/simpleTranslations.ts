// Simple translation system that works with n8n's built-in localization
// This approach uses n8n's existing locale system instead of i18next

interface TranslationKeys {
  [key: string]: string | TranslationKeys;
}

// Portuguese translations
const ptTranslations: TranslationKeys = {
  resources: {
    document: 'Documento',
    envelope: 'Envelope',
    event: 'Evento',
    template: 'Modelo',
    notification: 'Notificação',
    watcher: 'Observador',
    folder: 'Pasta',
    requirement: 'Requisito',
    signer: 'Signatário'
  },
  operations: {
    update: 'Atualizar',
    create: 'Criar',
    createByBase64: 'Criar Por Arquivo Base 64',
    createByTemplate: 'Criar Por Modelo',
    delete: 'Excluir',
    getAll: 'Listar',
    getDetails: 'Obter Detalhes',
    activate: 'Ativar',
    addAuth: 'Adicionar Autenticação',
    addQualification: 'Adicionar Qualificação',
    addRubric: 'Adicionar Rubrica',
    bulk: 'Operações Em Massa',
    notifyEnvelope: 'Notificar Envelope',
    notifySigner: 'Notificar Signatário',
    createAutoSignature: 'Criar Assinatura Automática'
  },
  actions: {
    updateDocument: 'Atualizar documento123',
    createDocumentByBase64: 'Criar documento por arquivo base 64',
    createDocumentByTemplate: 'Criar documento por modelo',
    deleteDocument: 'Excluir documento',
    listDocuments: 'Listar documentos',
    getDocumentDetails: 'Obter detalhes do documento',
    updateEnvelope: 'Atualizar envelope',
    createEnvelope: 'Criar envelope',
    deleteEnvelope: 'Excluir envelope',
    listEnvelopes: 'Listar envelopes',
    getEnvelopeDetails: 'Obter detalhes do envelope',
    activateEnvelope: 'Ativar envelope',
    updateTemplate: 'Atualizar modelo',
    createTemplate: 'Criar modelo',
    deleteTemplate: 'Excluir modelo',
    listTemplates: 'Listar modelos',
    getTemplateDetails: 'Obter detalhes do modelo',
    addAuthRequirement: 'Adicionar requisito de autenticação',
    addQualificationRequirement: 'Adicionar requisito de qualificação',
    addRubricRequirement: 'Adicionar requisito de rubrica',
    deleteRequirement: 'Excluir requisito',
    listRequirements: 'Listar requisitos',
    getRequirementDetails: 'Obter detalhes do requisito',
    bulkOperations: 'Operações em massa',
    notifyEnvelopeAction: 'Notificar envelope',
    notifySignerAction: 'Notificar signatário',
    createSigner: 'Criar signatário',
    deleteSigner: 'Excluir signatário',
    listSigners: 'Listar signatários',
    getSignerDetails: 'Obter detalhes do signatário',
    createAutoSignatureAction: 'Criar assinatura automática',
    createFolder: 'Criar pasta',
    listFolders: 'Listar pastas',
    getFolderDetails: 'Obter detalhes da pasta',
    createWatcher: 'Criar observador',
    deleteWatcher: 'Excluir observador',
    listWatchers: 'Listar observadores',
    getWatcherDetails: 'Obter detalhes do observador',
    getEventsFromDocument: 'Obter eventos do documento',
    getEventsFromEnvelope: 'Obter eventos do envelope'
  },
  descriptions: {
    updateDocument: 'Atualizar documento123',
    createDocumentByBase64: 'Criar documento por arquivo base 64',
    createDocumentByTemplate: 'Criar documento por modelo',
    deleteDocument: 'Excluir documento',
    listDocuments: 'Listar documentos',
    getDocumentDetails: 'Obter detalhes de um documento',
    updateEnvelope: 'Atualizar envelope',
    createEnvelope: 'Criar envelope',
    deleteEnvelope: 'Excluir envelope',
    listEnvelopes: 'Listar envelopes',
    getEnvelopeDetails: 'Obter detalhes de um envelope',
    activateEnvelope: 'Ativar envelope',
    updateTemplate: 'Atualizar modelo',
    createTemplate: 'Criar modelo',
    deleteTemplate: 'Excluir modelo',
    listTemplates: 'Listar modelos',
    getTemplateDetails: 'Obter detalhes de um modelo',
    addAuthRequirement: 'Adicionar requisito de autenticação',
    addQualificationRequirement: 'Adicionar requisito de qualificação',
    addRubricRequirement: 'Adicionar requisito de rubrica',
    deleteRequirement: 'Excluir requisito',
    listRequirements: 'Listar requisitos',
    getRequirementDetails: 'Obter detalhes de um requisito',
    bulkOperations: 'Operações em massa',
    notifyEnvelopeAction: 'Notifica os signatários do envelope',
    notifySignerAction: 'Notifica um signatário do envelope',
    createSigner: 'Criar signatário',
    deleteSigner: 'Excluir signatário',
    listSigners: 'Listar signatários',
    getSignerDetails: 'Obter detalhes de um signatário',
    createAutoSignatureAction: 'Criar assinatura automática',
    createFolder: 'Criar pasta',
    listFolders: 'Listar pastas',
    getFolderDetails: 'Obter detalhes de uma pasta',
    createWatcher: 'Criar observador',
    deleteWatcher: 'Excluir observador',
    listWatchers: 'Listar observadores',
    getWatcherDetails: 'Obter detalhes de um observador',
    getEventsFromDocument: 'Obter eventos do documento',
    getEventsFromEnvelope: 'Obter eventos do envelope'
  },
  fields: {
    envelopeId: 'Envelope ID',
    documentId: 'Documento ID',
    status: 'Status',
    metadata: 'Metadata',
    envelopeName: 'Nome',
    locale: 'Idioma',
    autoClose: 'Finalizar Automaticamente Após Todos Assinarem',
    remindInterval: 'Intervalo De Lembrete',
    blockAfterRefusal: 'Bloqueio De Assinatura Após Recusa Por Signatário',
    filename: 'Nome Do Arquivo (.docx)',
    templateId: 'Template ID',
    templateData: 'Variáveis Do Modelo',
    operation: 'Operação',
    resource: 'Recurso'
  },
  fieldDescriptions: {
    envelopeId: 'ID do Envelope que possui o documento',
    documentId: 'ID do documento que deseja atualizar',
    status: 'Só é possível alterar status de documentos running (em progresso/ativados)',
    metadata: 'JSON com metadados que são utilizados nos retornos de documentos via webhooks',
    envelopeName: 'Nome do envelope',
    locale: 'Idioma utilizado nos e-mails, página de assinatura e log do documento',
    autoClose: 'Se ativado, o envelope será fechado automaticamente após a assinatura do último signatários',
    remindInterval: 'Determina se o documento terá opção de lembretes automáticos ativada (1,2,3,7,14)',
    blockAfterRefusal: 'Bloqueio de assinatura após recusa por signatário',
    filename: 'Nome do arquivo com extensão .docx',
    templateId: 'ID do Modelo utilizado para a criação',
    templateData: 'JSON com chave e valor dos valores que alimentarão o modelo'
  },
  options: {
    canceled: 'Cancelado',
    closed: 'Finalizado',
    'pt-BR': 'Pt-BR',
    'en-US': 'En-US'
  },
  errors: {
    unsupportedOperation: 'Operação não suportada.',
    unsupportedOperationDescription: 'A função "{{operation}}" para o recurso "{{resource}}" não é suportada!'
  }
};

// English translations
const enTranslations: TranslationKeys = {
  resources: {
    document: 'Document',
    envelope: 'Envelope',
    event: 'Event',
    template: 'Template',
    notification: 'Notification',
    watcher: 'Watcher',
    folder: 'Folder',
    requirement: 'Requirement',
    signer: 'Signer'
  },
  operations: {
    update: 'Update',
    create: 'Create',
    createByBase64: 'Create By Base64 File',
    createByTemplate: 'Create By Template',
    delete: 'Delete',
    getAll: 'List',
    getDetails: 'Get Details',
    activate: 'Activate',
    addAuth: 'Add Authentication',
    addQualification: 'Add Qualification',
    addRubric: 'Add Rubric',
    bulk: 'Bulk Operations',
    notifyEnvelope: 'Notify Envelope',
    notifySigner: 'Notify Signer',
    createAutoSignature: 'Create Auto Signature'
  },
  actions: {
    updateDocument: 'Update document',
    createDocumentByBase64: 'Create document by base64 file',
    createDocumentByTemplate: 'Create document by template',
    deleteDocument: 'Delete document',
    listDocuments: 'List documents',
    getDocumentDetails: 'Get document details',
    updateEnvelope: 'Update envelope',
    createEnvelope: 'Create envelope',
    deleteEnvelope: 'Delete envelope',
    listEnvelopes: 'List envelopes',
    getEnvelopeDetails: 'Get envelope details',
    activateEnvelope: 'Activate envelope',
    updateTemplate: 'Update template',
    createTemplate: 'Create template',
    deleteTemplate: 'Delete template',
    listTemplates: 'List templates',
    getTemplateDetails: 'Get template details',
    addAuthRequirement: 'Add authentication requirement',
    addQualificationRequirement: 'Add qualification requirement',
    addRubricRequirement: 'Add rubric requirement',
    deleteRequirement: 'Delete requirement',
    listRequirements: 'List requirements',
    getRequirementDetails: 'Get requirement details',
    bulkOperations: 'Bulk operations',
    notifyEnvelopeAction: 'Notify envelope',
    notifySignerAction: 'Notify signer',
    createSigner: 'Create signer',
    deleteSigner: 'Delete signer',
    listSigners: 'List signers',
    getSignerDetails: 'Get signer details',
    createAutoSignatureAction: 'Create auto signature',
    createFolder: 'Create folder',
    listFolders: 'List folders',
    getFolderDetails: 'Get folder details',
    createWatcher: 'Create watcher',
    deleteWatcher: 'Delete watcher',
    listWatchers: 'List watchers',
    getWatcherDetails: 'Get watcher details',
    getEventsFromDocument: 'Get events from document',
    getEventsFromEnvelope: 'Get events from envelope'
  },
  descriptions: {
    updateDocument: 'Update document',
    createDocumentByBase64: 'Create document by base64 file',
    createDocumentByTemplate: 'Create document by template',
    deleteDocument: 'Delete document',
    listDocuments: 'List documents',
    getDocumentDetails: 'Get details of a document',
    updateEnvelope: 'Update envelope',
    createEnvelope: 'Create envelope',
    deleteEnvelope: 'Delete envelope',
    listEnvelopes: 'List envelopes',
    getEnvelopeDetails: 'Get details of an envelope',
    activateEnvelope: 'Activate envelope',
    updateTemplate: 'Update template',
    createTemplate: 'Create template',
    deleteTemplate: 'Delete template',
    listTemplates: 'List templates',
    getTemplateDetails: 'Get details of a template',
    addAuthRequirement: 'Add authentication requirement',
    addQualificationRequirement: 'Add qualification requirement',
    addRubricRequirement: 'Add rubric requirement',
    deleteRequirement: 'Delete requirement',
    listRequirements: 'List requirements',
    getRequirementDetails: 'Get details of a requirement',
    bulkOperations: 'Bulk operations',
    notifyEnvelopeAction: 'Notifies envelope signers',
    notifySignerAction: 'Notifies an envelope signer',
    createSigner: 'Create signer',
    deleteSigner: 'Delete signer',
    listSigners: 'List signers',
    getSignerDetails: 'Get details of a signer',
    createAutoSignatureAction: 'Create auto signature',
    createFolder: 'Create folder',
    listFolders: 'List folders',
    getFolderDetails: 'Get details of a folder',
    createWatcher: 'Create watcher',
    deleteWatcher: 'Delete watcher',
    listWatchers: 'List watchers',
    getWatcherDetails: 'Get details of a watcher',
    getEventsFromDocument: 'Get events from document',
    getEventsFromEnvelope: 'Get events from envelope'
  },
  fields: {
    envelopeId: 'Envelope ID',
    documentId: 'Document ID',
    status: 'Status',
    metadata: 'Metadata',
    envelopeName: 'Name',
    locale: 'Language',
    autoClose: 'Auto Close After All Sign',
    remindInterval: 'Reminder Interval',
    blockAfterRefusal: 'Block Signature After Refusal By Signer',
    filename: 'File Name (.docx)',
    templateId: 'Template ID',
    templateData: 'Template Variables',
    operation: 'Operation',
    resource: 'Resource'
  },
  fieldDescriptions: {
    envelopeId: 'ID of the Envelope that contains the document',
    documentId: 'ID of the document you want to update',
    status: 'Only possible to change status of running documents (in progress/activated)',
    metadata: 'JSON with metadata used in document returns via webhooks',
    envelopeName: 'Envelope name',
    locale: 'Language used in emails, signature page and document log',
    autoClose: 'If enabled, the envelope will be automatically closed after the last signer signs',
    remindInterval: 'Determines if the document will have automatic reminder option enabled (1,2,3,7,14)',
    blockAfterRefusal: 'Block signature after refusal by signer',
    filename: 'File name with .docx extension',
    templateId: 'ID of the Template used for creation',
    templateData: 'JSON with key and value of values that will feed the template'
  },
  options: {
    canceled: 'Canceled',
    closed: 'Closed',
    'pt-BR': 'Pt-BR',
    'en-US': 'En-US'
  },
  errors: {
    unsupportedOperation: 'Unsupported operation.',
    unsupportedOperationDescription: 'The function "{{operation}}" for resource "{{resource}}" is not supported!'
  }
};

// Current language (default to Portuguese, can be overridden by environment variable)
let currentLanguage = 'pt-BR';

// Get nested value from object using dot notation
function getNestedValue(obj: TranslationKeys, path: string): string {
  const keys = path.split('.');
  let current: any = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return '';
    }
  }

  return typeof current === 'string' ? current : '';
}

// Simple translation function
export function t(key: string, options?: any): string {
  const translations = currentLanguage === 'en-US' ? enTranslations : ptTranslations;
  let translation = getNestedValue(translations, key);

  // Handle interpolation
  if (options && translation.includes('{{')) {
    Object.keys(options).forEach(optionKey => {
      translation = translation.replace(`{{${optionKey}}}`, options[optionKey]);
    });
  }

  return translation || key; // Fallback to key if translation not found
}

// Translation helper functions
export function getResourceName(resource: string): string {
  return t(`resources.${resource}`);
}

export function getOperationName(operation: string): string {
  return t(`operations.${operation}`);
}

export function getActionText(resource: string, operation: string): string {
  const actionKey = `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
  return t(`actions.${actionKey}`);
}

export function getDescription(resource: string, operation: string): string {
  const descKey = `${operation}${resource.charAt(0).toUpperCase() + resource.slice(1)}`;
  return t(`descriptions.${descKey}`);
}

export function getFieldName(field: string): string {
  return t(`fields.${field}`);
}

export function getFieldDescription(field: string): string {
  return t(`fieldDescriptions.${field}`);
}

export function getOptionName(option: string): string {
  return t(`options.${option}`);
}

export function changeLanguage(lng: string): void {
  currentLanguage = lng;
}

export function getCurrentLanguage(): string {
  // Always check environment variable first, then fallback to current language
  return 'en-US';
}
