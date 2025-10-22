import { changeLanguage, getCurrentLanguage } from './translations';

/**
 * Language configuration for the Clicksign node
 */
export class LanguageConfig {
  private static instance: LanguageConfig;
  private currentLanguage: string = process.env.N8N_DEFAULT_LOCALE || 'en-US';

  private constructor() {
    this.currentLanguage = getCurrentLanguage();
  }

  public static getInstance(): LanguageConfig {
    if (!LanguageConfig.instance) {
      LanguageConfig.instance = new LanguageConfig();
    }
    return LanguageConfig.instance;
  }

  /**
   * Set the language for the node
   * @param language - Language code (e.g., 'pt-BR', 'en-US')
   */
  public setLanguage(language: string): void {
    this.currentLanguage = language;
    changeLanguage(language);
  }

  /**
   * Get the current language
   * @returns Current language code
   */
  public getLanguage(): string {
    return this.currentLanguage;
  }

  /**
   * Get available languages
   * @returns Array of available language codes
   */
  public getAvailableLanguages(): string[] {
    return ['pt-BR', 'en-US'];
  }

  /**
   * Check if a language is supported
   * @param language - Language code to check
   * @returns True if language is supported
   */
  public isLanguageSupported(language: string): boolean {
    return this.getAvailableLanguages().includes(language);
  }
}
