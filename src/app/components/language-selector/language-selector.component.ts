import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './language-selector.component.html',
  styles: ``
})
export class LanguageSelectorComponent {

  public languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  public languageService = inject(LanguageService);

  public currentLang = this.languageService.currentLang;

  public changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;

    this.languageService.changeLang(lang);
  }

}
