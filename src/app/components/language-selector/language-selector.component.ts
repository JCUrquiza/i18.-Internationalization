import { Component, signal } from '@angular/core';

@Component({
  selector: 'language-selector',
  standalone: true,
  imports: [],
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

}
