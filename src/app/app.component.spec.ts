import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService } from './service/language.service';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let component: AppComponent;

  beforeEach(async () => {

    const ssrCookieServiceMock = jasmine.createSpyObj('SsrCookieService', ['check', 'get']);
    const languageServiceMock = jasmine.createSpyObj('LanguageService', ['changeLang']);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: SsrCookieService, useValue: ssrCookieServiceMock },
        { provide: LanguageService, useValue: languageServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    // fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});

