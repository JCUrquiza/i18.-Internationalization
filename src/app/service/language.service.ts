import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public currentLang = signal('');

  public cookie = inject(SsrCookieService);
  public translate = inject(TranslateService);

  public changeLang(lang: string) {
    this.cookie.set('lang', lang);

    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    this.currentLang.set(lang);
  }

}
