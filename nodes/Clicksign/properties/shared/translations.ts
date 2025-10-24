import ptBR from '../../../../locales/pt-BR.json';
import enUS from '../../../../locales/en-US.json';

interface TranslationKeys {
  [key: string]: string | TranslationKeys;
}

let currentLanguage = process.env.N8N_DEFAULT_LOCALE || 'en-US';

function getNestedValue(obj: TranslationKeys, path: string): string {
  const keys = path.split('.');
  let current: string | TranslationKeys = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return '';
    }
  }

  return typeof current === 'string' ? current : '';
}

export function t(key: string, options?: any): string {
  const translations =
    currentLanguage === 'pt-BR' ? ptBR : enUS;
  let translation = getNestedValue(translations, key);

  if (options && translation.includes('{{')) {
    Object.keys(options).forEach((optionKey) => {
      translation = translation.replace(`{{${optionKey}}}`, options[optionKey]);
    });
  }

  return translation || key;
}
