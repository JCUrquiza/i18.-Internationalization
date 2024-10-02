import { TestBed } from '@angular/core/testing';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, SERVER_LANG_TOKEN } from './language.service';

describe(`LanguageService`, () => {

  let service: LanguageService;
  let ssrCookieService: jasmine.SpyObj<SsrCookieService>;
  let translateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    const ssrCookieSpy = jasmine.createSpyObj('SsrCookieService', ['set']);
    const translateSpy = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);

    TestBed.configureTestingModule({
      providers: [
        { provide: SsrCookieService, useValue: ssrCookieSpy },
        { provide: TranslateService, useValue: translateSpy },
        { provide: SERVER_LANG_TOKEN, useValue: 'en' },
      ]
    });

    service = TestBed.inject(LanguageService);
    ssrCookieService = TestBed.inject(SsrCookieService) as jasmine.SpyObj<SsrCookieService>;
    translateService = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the default language from SERVER_LANG_TOKEN', () => {
    expect(service.currentLang()).toBe('en');
  });

  it('should change the language and update cookie, translate service, and currentLang signal', () => {
    const newLang = 'es';
    service.changeLang(newLang);

    // Verificar que el servicio de cookies fue llamado
    expect(ssrCookieService.set).toHaveBeenCalledWith('lang', newLang);
    // Verigicar que el servicio de traducción fue llamado
    expect(translateService.setDefaultLang).toHaveBeenCalledWith(newLang);
    expect(translateService.use).toHaveBeenCalledWith(newLang);
    // Verificar que el signal se actualizó correctamente
    expect(service.currentLang()).toBe(newLang);
  });

});

