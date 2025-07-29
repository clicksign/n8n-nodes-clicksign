import { templateOperations } from './operations';
import { createTemplateFields } from './create.fields';

export const template = [templateOperations, ...createTemplateFields];
