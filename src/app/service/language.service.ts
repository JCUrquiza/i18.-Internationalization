import { inject, Injectable } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public cookie = inject(SsrCookieService);

  public changeLang(lang: string) {
    this.cookie.set('lang', lang);
    console.log(lang);


    // TODO: Cambio de idioma
  }

}
